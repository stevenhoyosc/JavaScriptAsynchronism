const fetchData = require("../util/FetchData.js");

const API = "https://api.spacexdata.com/v3/";
const API_CAPSULE = API + "capsules/";
const API_DR = API + "dragons/";

fetchData(API_CAPSULE)
  .then((data) => {
    return fetchData(API_CAPSULE + data[0].capsule_serial);
  })
  .then((data1) => {
    return fetchData(API_DR + data1.capsule_id);
  })
  .then((data3) => {
    return console.log(data3);
  })
  .catch((err) => console.error(err));
