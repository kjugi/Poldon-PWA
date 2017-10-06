<template>
  <div class="post container page">
    <BaseFeaturedImage 
      :imageid="post.featured_media"
      imageclass="post__image"
      itemid="featured1"
      itemclass="
        post__featured-image 
        image 
        image--placeholder
      "
    ></BaseFeaturedImage>

    <div class="page__handler">
      <h1 class="heading" v-html="post.title.rendered"/>
    </div>

    <div class="post__content" v-html="post.content.rendered"/>

    <BaseGallery 
      :imageid="post.id"
      itemid="gallery1" 
      itemclass="
        gallery 
        image 
        image--placeholder
      " 
      imageclass="gallery__image"
    ></BaseGallery>
  </div>
</template>

<script>
import axios from 'axios'
import BaseFeaturedImage from '~/components/BaseFeaturedImage.vue'
import BaseGallery from '~/components/BaseGallery.vue'

export default {
  components: {
    BaseFeaturedImage,
    BaseGallery
  },
  async asyncData ({ params }) {
    const { data } = await axios.get(`http://poldon.pl/wp-json/wp/v2/jetpack-portfolio/${params.id}`)
    return {
      post: data
    }
  }
}
</script>