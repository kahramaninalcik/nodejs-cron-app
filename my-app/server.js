const cron = require('node-cron');
const axios = require('axios')

var begining = 3;
var counter = 0;
cron.schedule('*/5 * * * * *', function() {
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
    consumption: begining,
    gas:Math.floor(Math.random() * 15),

  })
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })

});


cron.schedule('*/2 * * * *', function() {
  console.log('running a task every 2 minute');

  counter = counter + 1;


  axios
      .post('http://52.164.121.193:8080/api/v1/GCTSSq5w6u61dz9j2Sad/telemetry', {
        productCounter:counter
      })
      .then(res => {
        console.log(`statusCode: ${res.status}`)
        console.log(res)
      })
      .catch(error => {
        console.error(error)
      })

});




