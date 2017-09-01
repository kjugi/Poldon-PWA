<template>
  <div class="page container">
    <div class="page__handler">
      <h1 class="heading">
        Posty
      </h1>
    </div>

    <settings/>

    <div class="posts">
      <div v-for="post in posts" class="posts__post">
        <a :href="'/post/' + post.id" class="link post__link">
          <h2 class="posts__title" v-html="post.title.rendered"/>
        </a>

        <div class="posts__excerpt" v-html="post.excerpt.rendered"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import settings from '~/components/settings.vue'

export default {
  components: {
    settings,
  },
  computed: {
    posts() {
      if(this.$store.state.postsArray) {
        return this.$store.state.postsArray;
      }
      else {
        return this.$store.state.laoderError = true;
      }
    }
  },
  fetch({ store, params }) {
    return axios.get(`http://poldon.pl/wp-json/wp/v2/posts?page=${store.state.page}&per_page=${store.state.postsPerPage}`)
      .then((response) => {
        const numberOfPages = Math.ceil(response.headers['x-wp-total'] / store.state.postsPerPage);

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
