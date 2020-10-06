import axios from 'axios';

function fetchCategoryList (params) {
  return new Promise((resolve, reject) => {
    axios.get('/api/category')
      .then(response => resolve(response.data.categories))
      .catch(error => reject(error));
  });
}

function fetchPostsByCategory (params) {
  if (process.env.NODE_ENV === 'development') {
    if (!params.category) {
      return Promise.reject('Category is required.');
    }
  }
  return new Promise((resolve, reject) => {
    axios.get(`/api/category/${encodeURIComponent(params.category)}/posts?page=${params.page || 1}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
  });
}

export default {
  fetchCategoryList,
  fetchPostsByCategory
};
