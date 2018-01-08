<template>
  <transition>
    <div>
      <TheHeader></TheHeader>
      <nuxt/>
      <TheFooter></TheFooter>
    </div>
  </transition>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheFooter,
    TheHeader
  }
}
</script>
