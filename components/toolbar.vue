<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="header__link">
        <img src="logo.png" class="header__logo" />
      </router-link>

      <menuList/>
    </div>
  </header>
</template>

<script>
import menuList from '~/components/menu.vue'

export default {
  components: {
    menuList
  }
}
</script>
