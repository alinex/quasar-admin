import feathers, { authentication, socketio } from '@feathersjs/client'
import io from 'socket.io-client'

const socket = io('http://localhost:3030', {transports: ['websocket']})
// on reconnection, reset the transports option, as the Websocket
// connection may have failed (caused by proxy, firewall, browser, ...)
socket.on('reconnect_attempt', () => {
  socket.io.opts.transports = ['polling', 'websocket']
})

const feathersClient = feathers()
  .configure(socketio(socket))
  .configure(authentication({ storage: window.localStorage }))

export default feathersClient
