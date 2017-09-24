<template>
  <div :class="itemclass" class="post__placeholder">
    <img :src="image" 
         :class="imageclass"
    />
  </div>
</template>

<script>

export default {
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
