const copyFonts = require('./shared/copy-fonts');
const copySCSS = require('./shared/copy-scss');
const scss = require('./shared/scss');

function build() {
  // Copy fonts
  copyFonts('core');
  copySCSS('core');
  scss('core');
}

build();
