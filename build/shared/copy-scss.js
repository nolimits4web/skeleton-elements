const fs = require('fs');
const path = require('path');

module.exports = () => {
  // copy sub modules
  const srcDir = path.resolve(__dirname, '../../src/scss');
  const destDir = path.resolve(__dirname, `../../package/scss`);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const files = fs.readdirSync(srcDir);
  files.forEach((fileName) => {
    fs.copyFileSync(path.join(srcDir, fileName), path.join(destDir, fileName));
  });

  // copy root modules
  const srcDirRoot = path.resolve(__dirname, '../../src');
  const destDirRoot = path.resolve(__dirname, `../../package/`);
  const filesRoot = fs
    .readdirSync(srcDirRoot)
    .filter((fileName) => fileName.includes('.scss'));

  filesRoot.forEach((fileName) => {
    fs.copyFileSync(
      path.join(srcDirRoot, fileName),
      path.join(destDirRoot, fileName),
    );
  });
};
