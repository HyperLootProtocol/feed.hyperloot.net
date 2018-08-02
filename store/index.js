import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
    },
    mutations: {
      posts(state, posts) {
        // изменяем состояние
        state.posts = posts;
        state.loaded = true;
      }
    }
  })
}

export default createStore
