const net = require('net')
const port = 8124
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const client = net.createConnection({port: port}, () => {
  const address = client.address()
  console.log(`Connected to server on ${address.address}: ${address.port}`)
  recursiveAsyncReadLine()
})

const recursiveAsyncReadLine = () => {
  rl.question('', answer => {
    client.write(answer)
    recursiveAsyncReadLine()
  })
}
