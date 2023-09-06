const webpack = require("webpack")
const dotenv = require("dotenv")

module.exports = () => {
  // call dotenv
  const env = dotenv.config().parsed

  // reduce it to object
  const envkeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})

  return {
    plugins: [new webpack.DefinePlugin(envkeys)],
  }
}
