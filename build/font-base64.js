const fs = require('fs');
const path = require('path');

function base64Encode() {
  // read binary data
  const bitmap = fs.readFileSync(
    path.resolve(__dirname, '../src/fonts/skeleton.woff'),
  );
  // convert binary data to base64 encoded string
  const string = Buffer.from(bitmap).toString('base64');
  // fs.writeFileSync(path.resolve(__dirname, '../src/fonts/base64'), string);
  const scss = fs
    .readFileSync(path.resolve(__dirname, '../src/scss/text.scss'), 'utf-8')
    .replace(
      /url\([a-zA-Z:/\-=;,0-9+'"]*\)/g,
      `url('data:application/font-woff;charset=utf-8;base64,${string}')`,
    );
  fs.writeFileSync(path.resolve(__dirname, '../src/scss/text.scss'), scss);
}

base64Encode();
