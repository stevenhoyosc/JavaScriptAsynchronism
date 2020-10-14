const fetchData = require("../util/FetchData.js");

const getDataofApi = async () => {
  const API = "https://api.spacexdata.com/v3/";
  const API_CAPSULE = API + "capsules/";
  const API_DR = API + "dragons/";

  try {
    let data = await fetchData(API_CAPSULE);
    let data1 = await fetchData(API_CAPSULE + data[0].capsule_serial);
    let data2 = await fetchData(API_DR + data1.capsule_id);
    console.log(data2);
  } catch (error) {
    console.error(console.error());
  }
};

getDataofApi();
