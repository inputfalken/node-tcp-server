/* @flow */
const port = 8124
const hostname = '127.0.0.1'
const backlog = 100
const net = require('net')
const server = net.createServer(client => {
  client.setEncoding('utf8')
  console.log('client connected')
  client.on('end', () => {
    console.log('client disconnected')
  })
  client.on('data', data => {
    console.log(data)
  })
})

server.on('error', err => {
  throw err
})
server.listen(port, hostname, backlog, () => {
  const address = server.address()
  console.log(`Server is listening on ${address.address}: ${address.port}`)
})
