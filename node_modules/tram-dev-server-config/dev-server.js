const history = require('connect-history-api-fallback')
const convert = require('koa-connect')

module.exports = {
  content: './public',
  add: (app, middleware, options) => {
    app.use(convert(history()))
  }
}
