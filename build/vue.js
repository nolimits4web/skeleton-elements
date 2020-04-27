const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const babelOptions = {
  presets: [
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
    path.resolve(__dirname, `../src/vue/${fileName}`),
    babelOptions,
    (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      fs.writeFileSync(
        path.resolve(__dirname, `../packages/vue/${fileName}`),
        result.code.replace(/\.\.\/utils\//g, './utils/'),
      );
    },
  );
}

function build() {
  const filesToTransform = fs
    .readdirSync(path.resolve(__dirname, '../src/vue'))
    .filter((fileName) => fileName[0] !== '.');
  filesToTransform.forEach(transformFile);
}

build();
