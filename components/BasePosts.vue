<template>
  <div class="posts">
    <div v-for="post in posts" class="posts__post">
      <a
        :href="'/'+ postType() + '/' + post.id"
        class="link post__link"
        @click="loader"
      >
        <h2 class="posts__title" v-html="post.title.rendered"/>
      </a>

      <div class="posts__excerpt" v-html="post.excerpt.rendered"/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    postType() {
      return this.$store.state.postType;
    },
    loader() {
      this.$store.state.loading = true;
    }
  },
  computed: {
    posts() {
      if (this.$store.state.postsArray) {
        return this.$store.state.postsArray;
      }
      else {
        return this.$store.state.laoderError = true;
      }
    }
  }
}
</script>
