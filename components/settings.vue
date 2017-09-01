<template>
    <div class="settings">
      <div class="settings__row">
        <a href="#" class="link settings__navigation" @click="setPrevPage()">
          Poprzednia strona
        </a>

        <span class="settings__text">
          Strona: {{ $store.state.page }}
          z
          {{ actualTotalPages }}
        </span>

        <a href="#" class="link settings__navigation" @click="setNextPage()">
          Nastepna strona
        </a>
      </div>

      <div class="settings__row">
        <span>
          Postów na stronie: {{ $store.state.postsPerPage }}
        </span>
      </div>

      <div class="settings__row">
        <span class="settings__text">
          Ma być:
        </span>
        <ul class="list">
          <li v-for="variant in variantsPostsPerPage" class="list__item">
            <a href="#" class="link list__link" @click="changeVariantPerPage">
              {{ variant }}
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  computed: {
    variantsPostsPerPage() {
      return this.$store.state.variantsPostsPerPage;
    },
    actualTotalPages() {
      return this.$store.state.totalPages;
    }
  },
  methods: {
    changeVariantPerPage(event) {
      const allLinks = document.querySelectorAll('.list__link'),
            content  = event.target.textContent.trim();

      allLinks.forEach(link => {
        if (link.classList.contains('list__link--active')) {
          link.classList.remove('list__link--active');
        }
      });

      event.target.classList.add('list__link--active');

      this.$store.commit('setPostsPerPage', content);
      this.$store.dispatch('actionGetPost');
    },
    setNextPage() {
      this.$store.commit('nextPage');
      this.$store.dispatch('actionGetPost');
    },
    setPrevPage() {
      this.$store.commit('prevPage');
      this.$store.dispatch('actionGetPost');
    },
  }
}
</script>
