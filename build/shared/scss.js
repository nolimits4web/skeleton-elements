const path = require('path');
const fs = require('fs');
const sass = require('node-sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

function compileFile(packageName, fileName) {
  return new Promise((resolve, reject) => {
    const src = path.resolve(__dirname, `../../src/${fileName}`);
    const output = path.resolve(
      __dirname,
      `../../packages/${packageName}/${fileName.replace('.scss', '.css')}`,
    );
    sass.render({ file: src }, (sassErr, sassResult) => {
      if (sassErr) {
        reject(sassErr);
        return;
      }
      postcss([autoprefixer])
        .process(sassResult.css.toString(), { from: src, map: false })
        .then((result) => {
          result.warnings().forEach((warn) => {
            console.warn(warn.toString());
          });
          const content = result.css;
          fs.writeFileSync(output, content);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

module.exports = (packageName) => {
  const files = fs
    .readdirSync(path.resolve(__dirname, '../../src'))
    .filter((fileName) => fileName.includes('.scss'));
  return Promise.all(
    files.map((fileName) => compileFile(packageName, fileName)),
  );
};
