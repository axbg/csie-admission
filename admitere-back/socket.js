const Contestants = require('./models').Contestants;
const Services = require('./services/seriesService');
const Series = require('./models').Series;

module.exports = conn = (io) => {
  io.on('connection', (client) => {
    //--at first connection
    Contestants.findOne({
      where: {
        id: 1
      },
      attributes: ['number'],
      raw: true,
    }).then((resp) => {
      Series.findAll({
        attributes: ['data'],
        raw: true
      }).then((result) => {
        const values = Services.prepareResponse(result, resp['number']);
        io.emit('update', values);
      }).catch((ex) => {
        console.log(ex.message);
      });
    }).catch((err) => {
      io.emit('update', null);
    });

    //-------after updating the database;
    client.on('receive', () => {
      Contestants.findOne({
        where: {
          id: 1
        },
        attributes: ['number'],
        raw: true,
      }).then((resp) => {
        Series.findAll({
          attributes: ['data'],
          raw: true
        }).then((result) => {
          const values = Services.prepareResponse(result, resp['number']);
          io.emit('update', values);
        }).catch((ex) => {
          console.log(ex.message);
        });
      }).catch((err) => {
        io.emit('update', null);
      })
    });
  })
};