<template>
    <div class="posts">
      <div v-for="post in posts" class="post">
        <a :href="'/post/' + post.id" class="post__link">
          <h2 class="post__title" v-html="post.title.rendered"></h2>
        </a>

        <p class="post__excerpt" v-html="post.excerpt.rendered"></p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'itemList',
  computed: {
    posts: function (){
      return this.$store.state.postsArray;
    },
  },
}
</script>
