

module.exports = conn = (io) => {
  io.on('connection', (client) =>{
    console.log('connected');

    client.on('receive', (data) => {
      console.log(data);
      io.emit('receive', data);
    })
  });



};

