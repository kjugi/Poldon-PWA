<template>
  <div class="gallery post__placeholder">
    <img v-for="image in images"
         v-bind:src="image.media_details.sizes.medium_large.source_url"
    />

    <imageLoader loaderclass="block--inside show" spinnerclass="spinner--inside"/>
  </div>
</template>

<script>
import imageLoader from '~/components/imageLoader.vue'

export default {
  components: {
    imageLoader
  },
  asyncComputed: {
    async images() {
      const dataToSend = ['media', '?parent='+this.$route.params.id],
            images     = await this.$store.dispatch('actionGetInfo', dataToSend);
      return images;
    }
  },
  methods: {
    deletePlacholder() {
      const placeholder = document.querySelector('.post__placeholder');

      if (placeholder) {
        placeholder.classList.remove('post__placeholder');
      }
    }
  },
  updated() {
    this.deletePlacholder();
  }
}
</script>
