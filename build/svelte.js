const fs = require('fs');
const path = require('path');
const svelte = require('svelte/compiler');
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

// eslint-disable-next-line
function transformFile(fileName) {
  const input = path.resolve(__dirname, `../src/svelte/${fileName}`);
  const output = path.resolve(__dirname, `../package/svelte/${fileName}`);
  if (fileName.indexOf('.svelte') >= 0) {
    const fileContent = fs.readFileSync(input, 'utf8');
    const svelteResult = svelte.compile(fileContent, {
      format: 'esm',
      filename: fileName,
    });
    fs.writeFileSync(path.resolve(output), svelteResult.js.code);
    return;
  }
  babel.transformFile(input, babelOptions(), (err, result) => {
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
    .readdirSync(path.resolve(__dirname, '../src/svelte'))
    .filter((fileName) => fileName[0] !== '.' && fileName.indexOf('.d.ts') < 0);

  const types = fs
    .readdirSync(path.resolve(__dirname, '../src/svelte'))
    .filter((fileName) => fileName[0] !== '.' && fileName.indexOf('.d.ts') > 0);

  // Copy types
  [...filesToTransform, ...types].forEach((typeFile) => {
    fs.copyFileSync(
      path.resolve(__dirname, '../src/svelte', typeFile),
      path.resolve(__dirname, '../package/svelte', typeFile),
    );
  });
}

build();
