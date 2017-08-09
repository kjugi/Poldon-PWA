<template>
  <header class="header">
    <router-link to="/" class="header__link">
      <img src="/logo.png" class="header__logo" />
    </router-link>

    <menuList/>
  </header>
</template>

<script>
import menuList from '~/components/menuList.vue'

export default {
  components: {
    menuList
  }
}
</script>
