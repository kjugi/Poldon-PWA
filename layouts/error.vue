<template>
  <transition>
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
  </transition>
</template>

<script>
import BaseToolbar from '~/components/BaseToolbar.vue'
import BaseBottomBar from '~/components/BaseBottomBar.vue'

export default {
  props: {
    error: {
      type: Object
    }
  },
  components: {
    BaseBottomBar,
    BaseToolbar
  }
}
</script>
