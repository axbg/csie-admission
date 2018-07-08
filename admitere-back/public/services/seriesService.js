let Series = require('../models').Series;

let millisToMinutesAndSeconds = function (millis) {
  let minutes = Math.floor(millis / 60000);
  let seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
};

let millisToCurrentDate = function (millis) {

  let d = new Date(millis);

  return d.getHours() + ":" + d.getMinutes();

};

module.exports.prepareResponse = function (result, number) {

  let diff = [];

  for (let i = 0; i < result.length - 1; i++) {
    diff.push(parseInt(result[i + 1].data) - parseInt(result[i].data));
  }

  let sum = diff.reduce(function (a, b) {
    return a + b;
  }, 0);

  let avg = sum / result.length;

  let avgToMinutes = millisToMinutesAndSeconds(avg);

  let realTime = millisToCurrentDate(parseInt(result[result.length - 1].data));

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