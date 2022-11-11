const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function bulkDelete(ids) {
  const promises = ids.map((id) => {
      const url = `${BASE_URL}/constellations/${id}`;
      axios.delete(url);
      return {id};
  });

  return Promise.all(promises);
  
}

function getConstellations(ids) {
  const promises = ids.map((id) => {
    const url = `${BASE_URL}/constellations/${id}`;
    return axios.get(url);
  });

  return Promise.all(promises);
}

const ids = ["KGQIwSq", "32TN5F8"];
getConstellations(ids).then(console.log);

module.exports = {
  bulkDelete,
};

