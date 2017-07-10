<template>
    <div class="post">
        <h1 v-html="post.title.rendered"></h1>
        <p v-html="post.content.rendered"></p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ params }) {
    const { data } = await axios.get(`http://poldon.pl/wp-json/wp/v2/posts/${params.id}`)
    return { post: data }
  }
}
</script>
