import Vuex from 'vuex'
import * as api from '../api/index'

const store = () => new Vuex.Store({
  state: {
    page: 1,
    postsPerPage: 10,
    totalPages: 1,
    postsArray: [],
    variantsPostsPerPage: [
      '10', 
      '20', 
      '30', 
      '40', 
      '50', 
      '60', 
      '70', 
      '80', 
      '90', 
      '100'
    ]
  },
  mutations: {
    nextPage(state) {
      if (state.page < state.totalPages) {
        state.page++;
      }
    },
    prevPage(state) {
      if (state.page > 1) {
        state.page--;
      }
    },
    setPostsPerPage(state, text) {
      state.postsPerPage = text;
    },
    setTotalPages(state, text) {
      state.totalPages = text;
    },
    addPosts(state, posts) {
      //empty array to keep new posts
      state.postsArray = [];

      //add posts to array
      state.postsArray = posts;
    }
  },
  actions: {
    async nuxtServerInit({ state, commit }) {
      const postsPerPage = state.postsPerPage,
            page = state.page,
            data = await api.getPosts(page, postsPerPage);

      commit('addPosts', data);
    }
  },
})

export default store
