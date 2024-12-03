const { getEnvironment } = require("../../lib/helpers");

("use strict");

const env = getEnvironment();
console.log('ENVVVVVV',env)

const config = require(`./${env}`);

Object.assign(config, { env });

module.exports = config