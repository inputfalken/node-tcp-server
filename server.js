const port = 8124
const ip = '127.0.0.1'
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
server.listen(port, ip, () => {
  const address = server.address()
  console.log(`Server is listening on ${address.address}: ${address.port}`)
})
