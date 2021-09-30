const copyUtils = require('./shared/copy-utils');
const copyFonts = require('./shared/copy-fonts');
const copySCSS = require('./shared/copy-scss');
const scss = require('./shared/scss');

function build() {
  copyUtils();
  copyFonts();
  copySCSS();
  scss();
}

build();
