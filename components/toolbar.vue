<template>
  <header class="header">
    <div class="container header__wrapper">
    <router-link to="/" class="header__link--logo">
      <img src="/logo.png" class="header__logo" />
    </router-link>

    <menuList/>
    </div>
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
