<template>
  <div class="page container">
    <div class="page__handler">
      <h1 class="heading">
        Recenzje
      </h1>
    </div>

    <BaseSettings></BaseSettings>

    <BasePosts></BasePosts>

    <BasePager pagerclass="pager--bottom"></BasePager>
  </div>
</template>

<script>
import axios from 'axios'
import BasePager from '~/components/BasePager.vue'
import BasePosts from '~/components/BasePosts.vue'
import BaseSettings from '~/components/BaseSettings.vue'

export default {
  components: {
    BasePager,
    BasePosts,
    BaseSettings
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