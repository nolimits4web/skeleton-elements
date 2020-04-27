const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const copyFonts = require('./shared/copy-fonts');
const copyUtils = require('./shared/copy-utils');
const copySCSS = require('./shared/copy-scss');
const scss = require('./shared/scss');

const babelOptions = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
      },
    ],
  ],
};

function transformFile(fileName) {
  return babel.transformFile(
    path.resolve(__dirname, `../src/react/${fileName}`),
    babelOptions,
    (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      fs.writeFileSync(
        path.resolve(__dirname, `../packages/react/${fileName}`),
        result.code.replace(/\.\.\/utils\//g, './utils/'),
      );
    },
  );
}

function build() {
  // Transform scripts
  const filesToTransform = fs
    .readdirSync(path.resolve(__dirname, '../src/react'))
    .filter((fileName) => fileName[0] !== '.');
  filesToTransform.forEach(transformFile);

  // Copy fonts
  copyFonts('react');
  copyUtils('react');
  copySCSS('react');
  scss('react');
}

build();
