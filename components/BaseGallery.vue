<template>
  <div :id="itemid" :class="itemclass">
    <img v-for="image in images"
         v-bind:src="image.media_details.sizes.medium_large.source_url"
         :class="imageclass"
    />

    <BaseImageLoader 
      loaderclass="block--inside show animation" 
      spinnerclass="spinner--inside"
    ></BaseImageLoader>
  </div>
</template>

<script>
import BaseImageLoader from '~/components/BaseImageLoader.vue'

export default {
  components: {
    BaseImageLoader
  },
  props: {
    itemid: {
      type: String
    },
    imageid: {
      type: Number
    },
    itemclass: {
      type: String
    },
    imageclass: {
      type: String
    }
  },
  asyncComputed: {
    async images() {
      const dataToSend = ['media', '?parent='+this.imageid],
            images     = await this.$store.dispatch('actionGetInfo', dataToSend);

      document.getElementById(this.itemid).querySelector('.block.block--inside').classList.remove('show');
      return images;
    }
  },
  methods: {
    deletePlacholder() {
      const placeholder = document.getElementById(this.itemid);

      if (placeholder) {
        placeholder.classList.remove('image');
        placeholder.classList.remove('image--placeholder');
      }
    }
  },
  updated() {
    this.deletePlacholder();
  }
}
</script>
