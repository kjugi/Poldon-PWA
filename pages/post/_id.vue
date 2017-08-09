<template>
    <div class="post container">
      <h1 class="post__title" v-html="post.title.rendered"></h1>
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
  }
}
</script>
