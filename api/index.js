'use strict'

import axios from 'axios'

export async function getPosts(page, perpage, postType) {
  return axios.get(`http://poldon.pl/wp-json/wp/v2/${postType}?page=${page}&per_page=${perpage}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const response = false;
      return response;
    });
}

export async function getInfo(type, query) {
  return axios.get(`http://poldon.pl/wp-json/wp/v2/${type}/${query}`)
    .then((response) => {
      return response.data;
    })
}
