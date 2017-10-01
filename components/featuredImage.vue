<template>
  <div :class="itemclass" class="post__placeholder">
    <img :src="image" 
         :class="imageclass"
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
  props: {
    imageclass: {
      type: String
    },
    itemclass: {
      type: String
    },
    imageid: {
      type: Number
    }
  },
  asyncComputed: {
    async image() {
      const dataToSend = ['media', this.imageid],
            image      = await this.$store.dispatch('actionGetInfo', dataToSend),
            imageLink  = image.media_details.sizes.large.source_url;

      document.querySelector('.block.block--inside').classList.remove('show');
      return imageLink;
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
