const cron = require('node-cron');
const axios = require('axios')

var begining = 3;
cron.schedule('5 * * * * *', function() {
  console.log('running a task every minute');

 begining = begining + Math.floor(Math.random() * 10);

axios
  .post('http://52.164.121.193:8080/api/v1/Ci5C4o9SIefLterZE9UO/telemetry', {
    temperature: Math.floor(Math.random() * 55)
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })


  axios
  .post('http://52.164.121.193:8080/api/v1/GCTSSq5w6u61dz9j2Sad/telemetry', {
    consumption: begining
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })

});




