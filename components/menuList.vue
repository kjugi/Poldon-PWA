<template>
  <ul class="header__menu list">
    <li class="list__item">
      <a href="/" class="link header__link" v-on:click="loader">
        Posty
      </a>
    </li>

    <li class="list__item">
      <a href="/recenzje" class="link header__link" v-on:click="loader">
        Recenzje
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    loader: function(event) {
      console.log(event);
      console.log(this.$store.state.loading);
      this.$store.state.loading = true;
    }
  }
}
</script>
