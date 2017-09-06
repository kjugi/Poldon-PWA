<template>
  <footer class="footer">
    <div class="container footer__wrapper">
      <span>
        Created by FK
      </span>
    </div>
  </footer>
</template>

<script>
import settings from '~/components/settings.vue'

export default {
  components: {
    settings,
  },
  methods: {
    loader: function() {
      this.$store.state.loading = true;
    }
  }
}
</script>