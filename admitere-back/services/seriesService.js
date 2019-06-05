const Series = require('../models').Series;

const millisToMinutesAndSeconds = function (millis) {
  let minutes = Math.floor(millis / 60000);
  let seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
};

const millisToCurrentDate = function (millis) {
  let d = new Date(millis);
  let minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
  return d.getHours() + ":" + minutes;
};

module.exports.prepareResponse = function (result, number) {
  let diff = [];
  let avgToMinutes = '0:00';
  let realTime = '00:00:00';

  if (result.length > 1) {
    for (let i = 0; i < result.length - 1; i++) {
      diff.push(parseInt(result[i + 1].data) - parseInt(result[i].data));
    }

    let sum = diff.reduce(function (a, b) {
      return a + b;
    }, 0);

    //TO-DO
    //get results from database
    //sum of students for all the results
    //avg = sum / studentSum

    let avg = sum / (result.length - 1);

    avgToMinutes = millisToMinutesAndSeconds(avg);
  }

  if (result.length > 0) {
    realTime = millisToCurrentDate(parseInt(result[result.length - 1].data));
  }

  let values = [];
  values.push(avgToMinutes);
  values.push(realTime);
  values.push(number);

  return values;
};

module.exports.saveSeries = (cNumber, cDate) => {
  console.log(cNumber, cDate);

  Series.create({
    data: cDate,
    contestants: cNumber,
  });
};