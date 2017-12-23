<template>
  <div class="posts">
    <div v-for="post in posts" class="posts__post">
      <a
        :href="'/'+ postType() + '/' + post.id"
        class="link post__link"
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
    }
  },
  computed: {
    posts() {
      return this.$store.state.postsArray;
    }
  }
}
</script>
