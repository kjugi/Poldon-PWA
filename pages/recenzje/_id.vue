<template>
  <div class="post container page">
    <div class="page__handler">
      <h1 class="heading" v-html="post.title.rendered"/>
    </div>

    <div class="post__content" v-html="post.content.rendered"/>

    <gallery/>
  </div>
</template>

<script>
import axios from 'axios'
import gallery from '~/components/gallery.vue'

export default {
  components: {
    gallery
  },
  async asyncData ({ params }) {
    const { data } = await axios.get(`http://poldon.pl/wp-json/wp/v2/jetpack-portfolio/${params.id}`)
    return {
      post: data
    }
  }
}
</script>