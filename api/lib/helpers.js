const dotenv = require('dotenv')

dotenv.config()
 const getEnvironment = (environment = "production") => {
  return process.env.BABEL_ENV || process.env.NODE_ENV || environment;
}; 

module.exports = {getEnvironment}