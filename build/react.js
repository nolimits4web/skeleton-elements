const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

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

function build() {
  babel.transformFile(
    path.resolve(__dirname, '../src/react.js'),
    babelOptions,
    (err, result) => {
      if (err) {
        throw err;
      }
      fs.writeFileSync(
        path.resolve(__dirname, '../packages/react/index.js'),
        result.code,
      );
    },
  );
}

build();
