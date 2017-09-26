<template>
  <transition>
    <div>
      <toolbar/>

      <div class="container page">
        <div class="page__handler">
          <h1 class="heading" v-if="error.statusCode === 404">
              Page not found - 404
          </h1>

          <h1 class="heading" v-else>
              Wystąpił błąd
          </h1>
        </div>

          <nuxt-link v-if="error.statusCode === 404" class="page__error" to="/">
            Jedyna droga do wyboru teraz, to powrót do strony głównej.
          </nuxt-link>

          <p v-else class="page__error">
            To juz jest koniec.
          </p>
      </div>

      <bottombar/>
      <loader/>
    </div>
  </transition>
</template>

<script>
import toolbar from '~/components/toolbar.vue'
import bottombar from '~/components/bottombar.vue'
import loader from '~/components/loader.vue'

export default {
  props: [
    'error'
  ],
  components: {
    bottombar,
    toolbar,
    loader
  },
  mounted() {
    return this.$store.state.loading = false;
  }
}
</script>
