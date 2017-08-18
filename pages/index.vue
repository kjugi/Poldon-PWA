<template>
  <div class="page container">
    <div class="page__handler">
      <h1 class="heading">
        Posty
      </h1>
    </div>

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

    <div class="posts">
      <div v-if="!loading" v-for="post in posts" class="posts__post">
        <a :href="'/post/' + post.id" class="link post__link">
          <h2 class="posts__title" v-html="post.title.rendered"/>
        </a>

        <div class="posts__excerpt" v-html="post.excerpt.rendered"/>
      </div>
    </div>

    <loader :show="loading" :showError="error" />  
  </div>
</template>

<script>
import axios from 'axios'
import loader from '~/components/loader.vue'

export default {
  components: {
    loader,
  },
  computed: {
    variantsPostsPerPage() {
      return this.$store.state.variantsPostsPerPage;
    },
    actualTotalPages() {
      return this.$store.state.totalPages;
    },
    posts() {
      if(this.$store.state.postsArray) {
        this.loading = false;        
        clearTimeout(this.showTimeoutError);        
        return this.$store.state.postsArray;
      }
      else {
        return this.error = true;
      }
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

      this.loading = true;
      this.$store.commit('setPostsPerPage', content);
      this.$store.dispatch('actionGetPost');
    },
    setNextPage() {
      this.loading = true;
      this.$store.commit('nextPage');
      this.$store.dispatch('actionGetPost');
    },
    setPrevPage() {
      this.loading = true;
      this.$store.commit('prevPage');
      this.$store.dispatch('actionGetPost');
    },
  },
  fetch({ store, params }) {
    return axios.get(`http://poldon.pl/wp-json/wp/v2/posts?page=${store.state.page}&per_page=${store.state.postsPerPage}`)
      .then((response) => {
        const numberOfPages = Math.ceil(response.headers['x-wp-total'] / store.state.postsPerPage);

        store.commit('addPosts', response.data);
        store.commit('setTotalPages', numberOfPages);
      })
      .catch((error) => {
        const response = false;
        store.commit('addPosts', response);        
      });
  },
  data() {
    return {
      loading: true,
      error: false,
    }
  },
  beforeMount() {
    return this.loading = true;
  },
  mounted() {
    if(this.error) {
      return this.loading = true;
    }
    else {
      return this.loading = false;
    }
  },
}
</script>
