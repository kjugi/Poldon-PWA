<template>
  <div class="post container page">
    <featuredImage :imageid="post.featured_media"
                   imageclass="post__image"
                   itemid="featured1"
                   itemclass="
                      post__featured-image 
                      image 
                      image--placeholder
                   "
    />

    <div class="page__handler">
      <h1 class="heading" v-html="post.title.rendered"/>
    </div>

    <div class="post__content" v-html="post.content.rendered"/>

    <gallery :imageid="post.id"
             itemid="gallery1" 
             itemclass="
                gallery 
                image 
                image--placeholder
             " 
             imageclass="gallery__image"
    />
  </div>
</template>

<script>
import axios from 'axios'
import featuredImage from '~/components/featuredImage.vue'
import gallery from '~/components/gallery.vue'

export default {
  components: {
    featuredImage,
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