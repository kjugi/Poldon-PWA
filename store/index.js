import Vuex from 'vuex'
import * as api from '../api/index'

const store = () => new Vuex.Store({
  state: {
    page: 1,
    postsPerPage: 10,
    totalPages: 1,
    postType: 'post',
    postsArray: [],
    variantsPostsPerPage: [
      '10',
      '20',
      '30',
      '40',
      '50'
    ]
  },
  mutations: {
    nextPage(state) {
      if (state.page < state.totalPages) {
        state.page++;
        state.loading = true;
      }
    },
    prevPage(state) {
      if (state.page > 1) {
        state.page--;
        state.loading = true;
      }
    },
    setPostsPerPage(state, text) {
      state.loading = false;
      state.postsPerPage = text;
    },
    setTotalPages(state, text) {
      state.loading = false;
      state.totalPages = text;
    },
    addPosts(state, posts) {
      if (posts) {
        // empty array to keep new posts
        state.postsArray = [];

        // add posts to array
        return state.postsArray = posts;
      }
      else {
        return redirect('/404');
      }
    }
  },
  actions: {
    async actionGetPosts({ state, commit }) {
      const postsPerPage = state.postsPerPage,
            page         = state.page,
            postType     = (state.postType === 'recenzje') ? 'jetpack-portfolio' : 'posts',
            data         = await api.getPosts(page, postsPerPage, postType);

      if (data) {
        commit('addPosts', data);
      }
      else {
        commit('addPosts', false);
      }
    },
    async actionGetInfo({ state }, data) {
      return await api.getInfo(data[0], data[1]);
    }
  }
})

export default store
