<template>
  <div class="gallery">
    <img v-for="image in images"
          v-bind:src="image.media_details.sizes.medium_large.source_url"
    />
  </div>
</template>

<script>
export default {
  asyncComputed: {
    async images() {
      const dataToSend = ['media', '?parent='+this.$route.params.id],
            images     = await this.$store.dispatch('actionGetInfo', dataToSend);
      return images;
    }
  }
}
</script>
