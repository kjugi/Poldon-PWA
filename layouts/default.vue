<template>
  <transition>
    <div>
      <BaseToolbar></BaseToolbar>
      <nuxt/>
      <BaseBottomBar></BaseBottomBar>
      <BaseLoader></BaseLoader>
    </div>
  </transition>
</template>

<script>
import BaseBottomBar from '~/components/BaseBottomBar.vue'
import BaseLoader from '~/components/BaseLoader.vue'
import BaseToolbar from '~/components/BaseToolbar.vue'

export default {
  components: {
    BaseLoader,
    BaseBottomBar,
    BaseToolbar
  },
  mounted() {
    return this.$store.state.loading = false;
  }
}
</script>