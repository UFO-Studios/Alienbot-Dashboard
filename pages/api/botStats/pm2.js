const io = require('@pm2/io')

io.init({
  transactions: true, // will enable the transaction tracing
  http: true // will enable metrics about the http server (optional)
})