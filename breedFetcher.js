const request = require("request");
const args = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${args}`,
  function(err, res, body) {
    const data = JSON.parse(body);
  
    if (data.length === 0) {
      console.log("Breed not found");
    } else {
      console.log(data[0].description);
      console.log(typeof data);
    }
    if (err) {
      console.log(err);
    }
  }
);
