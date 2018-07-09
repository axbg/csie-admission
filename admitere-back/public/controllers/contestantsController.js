let Contestants = require('../models').Contestants;
let Service = require('../services/seriesService');

module.exports.addContestants = (req, res) => {
  Contestants.findOne({
    where: {
      id: 1
    }, raw: true,
  }).then((result) => {

    let increment = parseInt(req.body.increase) + parseInt(result.number);

    Contestants.update(
        {number: increment},
        {
          where: {
            id: 1
          }
        }).then(() => {
      Service.saveSeries(parseInt(req.body.increase), Date.now());
      res.status(200).send('Number increased with ' + req.body.increase);
    }).catch((err) => {
      console.log(err.message);
      res.status(400).send(err.message)
    })

  });

};