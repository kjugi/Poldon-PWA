<template>
  <div :id="itemId" :class="itemClass">
    <img
      v-for="image in images"
      v-bind:src="image.media_details.sizes.medium_large.source_url"
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
    imageId: {
      type: Number
    },
    itemClass: {
      type: String
    },
    imageClass: {
      type: String
    }
  },
  asyncComputed: {
    async images() {
      const dataToSend = ['media', '?parent='+this.imageId],
            images     = await this.$store.dispatch('actionGetInfo', dataToSend);

      this.$el.querySelector('.block.block--inside').classList.remove('show');
      return images;
    }
  },
  methods: {
    deletePlacholder() {
      this.$el.classList.remove('image');
      this.$el.classList.remove('image--placeholder');
    }
  },
  updated() {
    this.deletePlacholder();
  }
}
</script>
