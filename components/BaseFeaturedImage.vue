<template>
  <div :id="itemId" :class="itemClass">
    <img
      :src="image"
      :class="imageClass"
    />

    <BaseImageLoader
      loader-class="block--inside show animation"
      spinner-class="spinner--inside"
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
    itemId: {
      type: String
    },
    imageClass: {
      type: String
    },
    itemClass: {
      type: String
    },
    imageId: {
      type: Number
    }
  },
  asyncComputed: {
    async image() {
      const dataToSend = ['media', this.imageId],
            image      = await this.$store.dispatch('actionGetInfo', dataToSend),
            imageLink  = image.media_details.sizes.large.source_url;

      document.getElementById(this.itemId).querySelector('.block.block--inside').classList.remove('show');
      return imageLink;
    }
  },
  methods: {
    deletePlacholder() {
      const placeholder = document.getElementById(this.itemId);

      if (placeholder.classList.contains('image--placeholder')) {
        placeholder.classList.remove('image--placeholder');
      }
    }
  },
  updated() {
    this.deletePlacholder();
  }
}
</script>
