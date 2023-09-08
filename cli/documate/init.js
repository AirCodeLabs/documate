const fs = require('fs');
const { execSync } = require('child_process');
const getPkgManager = require('./../utils');

const installWith = (command) => {
  try {
    const output = execSync(command);
    console.log(`Installed with: ${output}`);
  } catch (e) {
    console.error(`Error during installation: ${e.message}`);
  }
}

const installWithUserPackageManager = (framework)=> {
  const pkg = `@documate/${framework}@latest`

  const pkgManager = getPkgManager();

  try {
    switch (pkgManager) {
      case 'yarn':
        execSync('yarn --version');
        installWith(`yarn add ${pkg}`);
        break
      case 'pnpm':
        execSync('pnpm --version');
        installWith(`pnpm add ${pkg}`);
        break
      default:
        execSync('npm --version');
        installWith(`npm install ${pkg}`);
        break
    }
  } catch (error) {
    console.error(`install ${pkg} failed: ${error.message}`);
  }
}

const injectScript = () => {
  const packageJsonPath = `${process.cwd()}/package.json`;

  if (fs.existsSync(packageJsonPath)) {
    const packageJsonData = require(packageJsonPath);
    
    if (!packageJsonData.scripts) {
      packageJsonData.scripts = {};
    }

    packageJsonData.scripts['documate:upload'] = 'documate upload';

    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJsonData, null, 2),
      'utf8'
    );    
  } else {
    console.error('package.json not found.');
  }
}

const generateDocumateJson = () => {
  if (!fs.existsSync('./documate.json')) {
    fs.writeFileSync('./documate.json', JSON.stringify({
      "root": ".",
      "include": [ "**/*.md" ],
      "backend": ""
    }, null, 2));
  }
};

const init = async (options) => {
  const { framework = 'vue' } = options;

  try {
    installWithUserPackageManager(framework);
  } catch (error) {
    console.error("Error during package manager installation: ", error);
    return;
  }

  try {
    generateDocumateJson();
  } catch (error) {
    console.error("Error during Documate JSON generation: ", error);
    return;
  }

  try {
    injectScript();
  } catch (error) {
    console.error("Error during script injection: ", error);
    return;
  }
};

module.exports = init;
