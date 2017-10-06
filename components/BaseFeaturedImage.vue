<template>
  <div :id="itemid" :class="itemclass">
    <img :src="image" 
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

      document.getElementById(this.itemid).querySelector('.block.block--inside').classList.remove('show');
      return imageLink;
    }
  },
  methods: {
    deletePlacholder() {
      const placeholder = document.getElementById(this.itemid);

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
