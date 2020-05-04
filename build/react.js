const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const copyFonts = require('./shared/copy-fonts');
const copySCSS = require('./shared/copy-scss');
const scss = require('./shared/scss');

const babelOptions = (modules) => ({
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules,
        loose: true,
      },
    ],
  ],
});

function transformFile(fileName, modules, isUtils) {
  const moduleType = modules ? 'cjs' : 'esm';
  const input = path.resolve(
    __dirname,
    isUtils ? `../src/utils/${fileName}` : `../src/react/${fileName}`,
  );
  const output = path.resolve(
    __dirname,
    fileName === 'index.js'
      ? `../packages/react/${fileName.replace('.js', `.${moduleType}.js`)}`
      : `../packages/react/${moduleType}/${fileName}`,
  );
  return babel.transformFile(input, babelOptions(modules), (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    let fileContent = result.code.replace(/\.\.\/utils\//g, './');
    if (fileName.indexOf('index') >= 0) {
      fileContent = fileContent.replace(
        /\.\/Skeleton/g,
        `./${moduleType}/Skeleton`,
      );
    }
    fs.writeFileSync(path.resolve(output), fileContent);
  });
}

function build() {
  // Transform scripts
  const filesToTransform = fs
    .readdirSync(path.resolve(__dirname, '../src/react'))
    .filter((fileName) => fileName[0] !== '.');

  const utils = fs
    .readdirSync(path.resolve(__dirname, '../src/utils'))
    .filter((fileName) => fileName[0] !== '.');

  filesToTransform.forEach((file) => transformFile(file, 'commonjs'));
  filesToTransform.forEach((file) => transformFile(file, false));

  utils.forEach((file) => transformFile(file, 'commonjs', true));
  utils.forEach((file) => transformFile(file, false, true));

  // Copy fonts
  copyFonts('react');
  copySCSS('react');
  scss('react');
}

build();
