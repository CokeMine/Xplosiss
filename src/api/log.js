import axios from 'axios';
import config from '../config.json';

function fetchLogs (params = {}) {
  if (process.env.NODE_ENV === 'development') {
    if (!params.token) {
      return Promise.reject('Access token is required.');
    }
  }
  return new Promise((resolve, reject) => {
    axios.get(`${config.api.url}/logs?token=${params.token}`)
      .then(response => resolve(response.data.logs))
      .catch(error => reject(error));
  });
}

export default {
  fetchLogs
};
