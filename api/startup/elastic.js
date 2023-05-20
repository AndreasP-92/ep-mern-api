const { Client } = require('@elastic/elasticsearch')

const client = new Client({
  cloud: {
    id: "EP:ZnJhbmNlY2VudHJhbC5henVyZS5lbGFzdGljLWNsb3VkLmNvbSQzMzNmYjI4M2Y3ZGU0MGRjODhlNjQxM2I0YjM0YWZkZSRhMDBjODIwOTk5ZWI0MzdhOGFiOWM4MTAzNWQ4ODU4Mg=="
  },
  auth: {
    username: "elastic",
    password: "X6e5YCuQ5HHUfSvFtOVdvOlm"
  }
})
// client.info()
//   .then(response => console.log(response))
//   .catch(error => console.error(error))

  module.exports = client;