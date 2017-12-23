<template>
  <div class="post container page">
    <div class="post__handler">
      <h1 class="heading post__title" v-html="post.title.rendered"/>
    </div>

    <div class="post__content" v-html="post.content.rendered"/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ params }) {
    const { data } = await axios.get(`http://poldon.pl/wp-json/wp/v2/posts/${params.id}`)
    return {
      post: data
    }
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>
