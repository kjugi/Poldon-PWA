<template>
<transition name="fade" mode="out-in">
    <div class="post container page">
      <div class="page__handler">
        <h1 class="heading" v-html="post.title.rendered"/>
      </div>

      <div class="post__content" v-html="post.content.rendered"/>
    </div>
    </transition>
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
