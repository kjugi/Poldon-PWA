<template>
  <div class="settings">
    <div class="settings__row">
      <a href="#" class="settings__navigation" @click="setPrevPage()">
        << Prev
      </a>

      <span class="settings__text">
        Page: {{ $store.state.page }}
        of
        {{ $store.state.totalPages }}
      </span>

      <a href="#" class="settings__navigation" @click="setNextPage()">
        Next >>
      </a>

      <span class="settings__text">
        Per page: {{ $store.state.postsPerPage }}
      </span>
    </div>

    <ul class="list settings__row">
      <li v-for="variant in variantsPostsPerPage" class="list__item">
        <a href="#" class="list__link" @click="changeVariantPerPage">
          {{ variant }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    variantsPostsPerPage() {
      return this.$store.state.variantsPostsPerPage;
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
      this.$store.dispatch('nuxtServerInit');
    },
    setNextPage() {
      this.$store.commit('nextPage');
      this.$store.dispatch('nuxtServerInit');
    },
    setPrevPage() {
      this.$store.commit('prevPage');
      this.$store.dispatch('nuxtServerInit');
    }
  }
}  
</script>
