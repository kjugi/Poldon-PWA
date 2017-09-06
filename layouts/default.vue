<template>
  <transition>
    <div>
      <toolbar/>
      <nuxt/>
      <bottombar/>
      <loader/>     
    </div>
  </transition>
</template>

<script>
import bottombar from '~/components/bottombar.vue'
import loader from '~/components/loader.vue'
import toolbar from '~/components/toolbar.vue'

export default {
  components: {
    loader,
    bottombar,
    toolbar
  },
  mounted() {
    return this.$store.state.loading = false;
  }
}
</script>