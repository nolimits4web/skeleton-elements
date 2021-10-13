const copyUtils = require('./shared/copy-utils.js');
const copyFonts = require('./shared/copy-fonts.js');
const copySCSS = require('./shared/copy-scss.js');
const scss = require('./shared/scss.js');

function build() {
  copyUtils();
  copyFonts();
  copySCSS();
  scss();
}

build();
