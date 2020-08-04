
const os = require('os');
module.exports = require(`./dist/${os.platform()}/fbxsdk`);
