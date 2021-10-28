/* eslint-disable no-await-in-loop */
const exec = require('exec-sh');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

async function release() {
  const options = await inquirer.prompt([
    {
      type: 'input',
      name: 'version',
      message: 'Version:',
      default: pkg.version,
    },
    {
      type: 'list',
      name: 'beta',
      message: 'Beta?',
      when: (opts) => opts.version.indexOf('beta') >= 0,
      choices: [
        {
          name: 'YES',
          value: true,
        },
        {
          name: 'NO',
          value: false,
        },
      ],
    },
  ]);
  pkg.version = options.version;

  fs.writeFileSync(
    path.resolve(__dirname, '../package.json'),
    JSON.stringify(pkg, null, 2),
  );

  // eslint-disable-next-line
  const subPkg = require(`../package/package.json`);
  subPkg.version = options.version;
  fs.writeFileSync(
    path.resolve(__dirname, `../package/package.json`),
    JSON.stringify(subPkg, null, 2),
  );

  const releaseNotes = fs
    .readFileSync('./CHANGELOG.md', 'utf-8')
    .split('\n# [')[1]
    .split('\n')
    .filter((_, index) => index > 0)
    .join('\n')
    .trim();

  await exec.promise('git pull');
  await exec.promise('npm i');
  await exec.promise('git add .');
  await exec.promise(`git commit -m "${pkg.version} release"`);
  await exec.promise('git push');
  await exec.promise(`git tag v${pkg.version}`);
  await exec.promise('git push origin --tags');

  // eslint-disable-next-line
  if (options.beta) {
    await exec.promise(`cd package && npm publish --tag beta --access public`);
  } else {
    await exec.promise(`cd package && npm publish --access public`);
  }

  await exec.promise(
    `gh release create v${pkg.version} --title "v${
      pkg.version
    }" --notes "${JSON.stringify(releaseNotes)}"`,
  );
}

release();
