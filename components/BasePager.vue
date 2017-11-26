<template>
  <div class="pager" :class="pagerclass">
    <a v-if="actualTotalPages > 1" href="#" class="link" @click="setPrevPage()">
      Poprzednia strona
    </a>

    <span class="settings__text">
      Strona: {{ $store.state.page }}
      z
      {{ actualTotalPages }}
    </span>

    <a v-if="actualTotalPages > 1" href="#" class="link" @click="setNextPage()">
      Nastepna strona
    </a>
  </div>
</template>

<script>
export default {
  props: {
    pagerclass: {
      type: String
    }
  },
  computed: {
    actualTotalPages() {
      return this.$store.state.totalPages;
    }
  },
  methods: {
    setNextPage() {
      this.$store.commit('nextPage');
      this.$store.dispatch('actionGetPosts');
    },
    setPrevPage() {
      this.$store.commit('prevPage');
      this.$store.dispatch('actionGetPosts');
    },
  }
}
</script>
