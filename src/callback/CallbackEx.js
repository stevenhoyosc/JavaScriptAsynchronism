//Do it with XMLHttp Request for callback exercise and spacex api
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.spacexdata.com/v3/";
const API_CAPSULE = API + "capsules/";
const API_DR = API + "dragons/";

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url_api, true);
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("error", url_api);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

fetchData(API_CAPSULE, (error, data1) => {
  if (error) return console.log(error);
  fetchData(API_CAPSULE + data1[0].capsule_serial, (error1, data2) => {
    if (error1) return console.log(error1);
    fetchData(API_DR + data2.capsule_id, (error2, data3) => {
      if (error2) return console.log(error2);
      console.log(data3);
    });
  });
});
