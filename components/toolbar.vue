<template>
  <header class="header">
    <div class="container header__wrapper">
    <a href="/" class="header__link--logo">
      <img src="/logo.png" class="header__logo" />
    </a>

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
