<template>
    <div class="container">
      <h1>Poldon Posts</h1>

      <ul class="posts">
        <li v-for="post in posts">
          <nuxt-link :to="{ name: 'post-id', params: { id: post.id } }" 
           v-html="post.title.rendered">
          </nuxt-link>

          <p class="posts__excerpt" v-html="post.excerpt.rendered"></p>
        </li>
      </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    const { data } = await axios.get('http://poldon.pl/wp-json/wp/v2/posts')
      return { posts: data }
  }
}
</script>
