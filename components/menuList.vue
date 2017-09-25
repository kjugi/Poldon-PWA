<template>
  <ul class="header__menu list">
    <li class="list__item">
      <a href="/" class="link header__link" @click="loader">
        Posty
      </a>
    </li>

    <li class="list__item">
      <a href="/recenzje" class="link header__link" @click="loader">
        Recenzje
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    loader() {
      this.$store.state.loading = true;
    }
  }
}
</script>