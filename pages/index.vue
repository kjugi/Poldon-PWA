<template>
  <div class="container">
    <h1>Poldon Posts</h1>
    <loader :show="loading"/>

    <settings/>

    <item-list/>
  </div>
</template>

<script>
import axios from 'axios'
import loader from '~/components/loader.vue'
import itemList from '~/components/itemList.vue'
import settings from '~/components/settings.vue'

export default {
  components: {
    itemList,
    loader,
    settings
  },
  fetch({store, params}) {
    return axios.get('http://poldon.pl/wp-json/wp/v2/posts')
      .then((response) => {
        const numberOfPages = Math.ceil(response.headers['x-wp-total'] / store.state.postsPerPage);
        store.commit('setTotalPages', numberOfPages);
      });
  },
  data() {
    return {
      loading: true
    }
  },
  beforeCreate() {
    console.log('bad')
    return this.loading = true;
  },
  // beforeUpdate() {
  //   console.log('bad2')
  //   return this.loading = true;
  // },
  mounted() {
    console.log('ok')
    return this.loading = false;
  },
  // updated() {
  //   console.log('ok2');
  //   return this.loading = false;
  // }
}
</script>
