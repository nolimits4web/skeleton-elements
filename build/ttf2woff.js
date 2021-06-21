const fs = require('fs');
const path = require('path');
const exec = require('exec-sh');

const ttf2woff = async () => {
  const ttf = fs
    .readdirSync(path.resolve(__dirname, '../src/fonts'))
    .filter((f) => f.includes('.ttf'));
  // eslint-disable-next-line
  for (let file of ttf) {
    const src = path.resolve(__dirname, `../src/fonts/${file}`);
    const dest = path.resolve(
      __dirname,
      `../src/fonts/${file.replace('.ttf', '.woff')}`,
    );
    // eslint-disable-next-line
    await exec.promise(`ttf2woff ${src} ${dest}`);
  }
};

ttf2woff();
