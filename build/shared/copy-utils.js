const fs = require('fs');
const path = require('path');

module.exports = () => {
  const srcDir = path.resolve(__dirname, '../../src/utils');
  const destDir = path.resolve(__dirname, `../../package/utils`);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const files = fs.readdirSync(srcDir);
  files.forEach((fileName) => {
    fs.copyFileSync(path.join(srcDir, fileName), path.join(destDir, fileName));
  });
};
