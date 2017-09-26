<template>
  <div class="page container">
    <div class="page__handler">
      <h1 class="heading">
        Recenzje
      </h1>
    </div>

    <settings/>

    <posts/>

    <pager pagerclass="pager--bottom"/>
  </div>
</template>

<script>
import axios from 'axios'
import pager from '~/components/pager.vue'
import posts from '~/components/posts.vue'
import settings from '~/components/settings.vue'

export default {
  components: {
    pager,
    posts,
    settings
  },
  fetch({ store, params }) {
    return axios.get(`http://poldon.pl/wp-json/wp/v2/jetpack-portfolio?page=${store.state.page}&per_page=${store.state.postsPerPage}`)
      .then((response) => {
        const numberOfPages = Math.ceil(response.headers['x-wp-total'] / store.state.postsPerPage);

        store.state.postType = 'recenzje';
        store.commit('addPosts', response.data);
        store.commit('setTotalPages', numberOfPages);
      })
      .catch((error) => {
        const response = false;
        store.commit('addPosts', response);
      });
  }  
}
</script>