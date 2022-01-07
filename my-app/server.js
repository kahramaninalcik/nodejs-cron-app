const cron = require('node-cron');
const axios = require('axios')


cron.schedule('* * * * * *', function() {
  console.log('running a task every minute');

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

});
