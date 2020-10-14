let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetchData = (url_api) => {
  return new Promise((resolve, rejected) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : rejected(new Error("error", url_api));
      }
    };
    xhttp.send();
  });
};
module.exports = fetchData;
