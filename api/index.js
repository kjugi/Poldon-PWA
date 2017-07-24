'use strict'

import axios from 'axios'

export async function getPosts(page, perpage) {
  const { data } = await axios.get(`http://poldon.pl/wp-json/wp/v2/posts?page=${page}&per_page=${perpage}`)
    return data;
}

// export function getPost({ params }) {
//   axios.get(`http://poldon.pl/wp-json/wp/v2/posts?id=${params.id}`)
//     .then((response) => {
//       return response.data;
//     })
// }
