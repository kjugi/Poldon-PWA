<template>
  <transition>
    <div>
      <BaseToolbar></BaseToolbar>
      <nuxt/>
      <BaseBottomBar></BaseBottomBar>
    </div>
  </transition>
</template>

<script>
import BaseBottomBar from '~/components/BaseBottomBar.vue'
import BaseToolbar from '~/components/BaseToolbar.vue'

export default {
  components: {
    BaseBottomBar,
    BaseToolbar
  }
}
</script>
