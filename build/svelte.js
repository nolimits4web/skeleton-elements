const fs = require('fs');
const path = require('path');
const svelte = require('svelte/compiler');
const babel = require('@babel/core');

const babelOptions = (modules) => ({
  presets: [
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
    isUtils ? `../src/utils/${fileName}` : `../src/svelte/${fileName}`,
  );
  const output = path.resolve(
    __dirname,
    fileName === 'index.js'
      ? `../package/svelte/${fileName.replace('.js', `.${moduleType}.js`)}`
      : `../package/svelte/${moduleType}/${fileName}`.replace('.svelte', '.js'),
  );
  if (fileName.indexOf('.svelte') >= 0) {
    let fileContent = fs.readFileSync(input, 'utf8');
    const svelteResult = svelte.compile(fileContent, {
      format: modules || 'esm',
      filename: fileName,
    });
    fileContent = svelteResult.js.code.replace(/\.\.\/utils\//g, './');
    fs.writeFileSync(path.resolve(output), fileContent);
    return;
  }
  babel.transformFile(input, babelOptions(modules), (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    let fileContent = result.code.replace(/\.\.\/utils\//g, './');
    if (fileName.indexOf('index') >= 0) {
      fileContent = fileContent
        .replace(/\.\/Skeleton/g, `./${moduleType}/Skeleton`)
        .replace(/.svelte/g, '');
    }
    fs.writeFileSync(path.resolve(output), fileContent);
  });
}

function build() {
  // Transform scripts
  const filesToTransform = fs
    .readdirSync(path.resolve(__dirname, '../src/svelte'))
    .filter((fileName) => fileName[0] !== '.');

  const utils = fs
    .readdirSync(path.resolve(__dirname, '../src/utils'))
    .filter((fileName) => fileName[0] !== '.');

  filesToTransform.forEach((file) => transformFile(file, 'cjs'));
  filesToTransform.forEach((file) => transformFile(file, false));

  utils.forEach((file) => transformFile(file, 'cjs', true));
  utils.forEach((file) => transformFile(file, false, true));
}

build();
