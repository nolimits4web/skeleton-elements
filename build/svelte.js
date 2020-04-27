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
  const file = path.resolve(__dirname, `../src/svelte/${fileName}`);
  const dest = path.resolve(__dirname, `../packages/svelte/${fileName}`);
  if (!fileName.includes('.svelte')) {
    babel.transformFile(file, babelOptions, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      fs.writeFileSync(dest, result.code.replace(/\.\.\/utils\//g, './utils/'));
    });
  } else {
    fs.copyFileSync(file, dest);
  }
}

function build() {
  const filesToTransform = fs
    .readdirSync(path.resolve(__dirname, '../src/svelte'))
    .filter((fileName) => fileName[0] !== '.');
  filesToTransform.forEach(transformFile);
}

build();
