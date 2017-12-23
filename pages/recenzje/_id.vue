<template>
  <div class="post container page">
    <BaseFeaturedImage
      :image-id="post.featured_media"
      image-class="post__image"
      item-id="featured1"
      item-class="
        post__featured-image
        image
        image--placeholder
      "
    ></BaseFeaturedImage>

    <div class="post__handler">
      <h1 class="heading post__title" v-html="post.title.rendered"/>
    </div>

    <div class="post__content" v-html="post.content.rendered"/>

    <BaseGallery
      :image-id="post.id"
      item-id="gallery1"
      item-class="
        gallery
        image
        image--placeholder
      "
      image-class="gallery__image"
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
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>
