<template>
  <header class="header">
    <div class="container header__wrapper">
      <a href="/" class="header__link--logo" @click="loader">
        <img src="/logo.png" class="header__logo" />
      </a>

      <BaseMenuList></BaseMenuList>
    </div>
  </header>
</template>

<script>
import BaseMenuList from '~/components/BaseMenuList.vue'

export default {
  components: {
    BaseMenuList
  },
  methods: {
    loader() {
      this.$store.state.loading = true;
    }
  }
}
</script>