<template>
  <header class="header">
    <div class="container header__wrapper">
      <a href="/" class="header__link--logo">
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
  }
}
</script>
