<template>
  <transition name="fade" mode="out-in">
    <div>
      <toolbar/>
      <nuxt/>
      <bottombar/>
    </div>
  </transition>
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
