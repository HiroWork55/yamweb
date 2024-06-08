console.log('test')

const socket = io()

socket.on('update', () => {
    console.log('updated')
})