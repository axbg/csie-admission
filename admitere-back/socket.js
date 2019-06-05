const Contestants = require('./models').Contestants;
const Services = require('./services/seriesService');
const Series = require('./models').Series;

module.exports = conn = (io) => {
  io.on('connection', (client) => {

    //--at first connection
    let data = null;

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

        let values = Services.prepareResponse(result, resp['number']);

        io.emit('update', values);

      }).catch((ex) => {
        console.log(ex.message);
      });

    }).catch((err) => {
      io.emit('update', data);
    });



    //-------after updating the database;
    client.on('receive', () => {
      let data = null;

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

          let values = Services.prepareResponse(result, resp['number']);

          io.emit('update', values);

        }).catch((ex) => {
          console.log(ex.message);
        });

      }).catch((err) => {
        io.emit('update', data);
      })

    });
  })
};