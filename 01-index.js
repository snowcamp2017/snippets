//--- 1st update -------------------------------------
const Sensor = require('./Sensor').Sensor;

let sensor = new Sensor({
  id:`babs-sensor`,
  minValue:-10,
  maxValue:10,
  delay:1500
});
sensor.start("generateData");

app.get('/sensors/babs-sensor', (req, res) => {
  res.send(sensor.getData());
});
//----------------------------------------------------
