const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const babelOptions = () => ({
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true,
      },
    ],
  ],
});

function transformFile(fileName) {
  const input = path.resolve(__dirname, `../src/vue/${fileName}`);
  const output = path.resolve(__dirname, `../package/vue/${fileName}`);
  return babel.transformFile(input, babelOptions(), (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.writeFileSync(path.resolve(output), result.code);
  });
}

function build() {
  // Transform scripts
  const filesToTransform = fs
    .readdirSync(path.resolve(__dirname, '../src/vue'))
    .filter((fileName) => fileName[0] !== '.')
    .filter((fileName) => fileName[0] !== '.' && fileName.indexOf('.d.ts') < 0);

  const types = fs
    .readdirSync(path.resolve(__dirname, '../src/vue'))
    .filter((fileName) => fileName[0] !== '.' && fileName.indexOf('.d.ts') > 0);

  filesToTransform.forEach((file) => transformFile(file));

  // Copy types
  types.forEach((typeFile) => {
    fs.copyFileSync(
      path.resolve(__dirname, '../src/vue', typeFile),
      path.resolve(__dirname, '../package/vue', typeFile),
    );
  });
}

build();
