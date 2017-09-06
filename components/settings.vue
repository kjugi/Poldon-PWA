<template>
    <div class="settings">
      <div class="settings__row">
        <pager/>
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
import pager from '~/components/pager.vue'

export default {
  components: {
    pager
  },
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
      this.$store.dispatch('actionGetPost');
    }
  }
}
</script>