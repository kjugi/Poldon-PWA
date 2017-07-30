<template>
  <div id="app">
    <toolbar/>
    <nuxt/>
  </div>
</template>

<script>
import bottombar from '~/components/bottombar.vue'
import toolbar from '~/components/toolbar.vue'

export default {
  components: {
    bottombar,
    toolbar
  }
}
</script>
