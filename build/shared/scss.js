const path = require('path');
const fs = require('fs');
const sass = require('sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

function compileFile(fileName) {
  return new Promise((resolve, reject) => {
    const src = path.resolve(__dirname, `../../src/scss/${fileName}`);
    const output = path.resolve(
      __dirname,
      `../../package/css/${fileName.replace('.scss', '.css')}`,
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

module.exports = () => {
  const output = path.resolve(__dirname, `../../package/css/`);
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }
  const files = fs
    .readdirSync(path.resolve(__dirname, '../../src/scss'))
    .filter((fileName) => fileName.includes('.scss'));

  return Promise.all(files.map((fileName) => compileFile(fileName)));
};
