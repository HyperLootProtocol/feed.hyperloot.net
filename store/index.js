import Vuex from 'vuex';
import moment from 'moment';

function filterPosts({ data }) {
  return data.children.map(({ data: { url, title, id, subreddit, created_utc, created }}) => ({
    url,
    title,
    id,
    tag: subreddit,
    created,
    time: moment.unix(created_utc).fromNow()
  }));
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      loading: false,
      tags: ['hyperloot', 'destiny2', 'PUBG', 'FORTnITE', 'DotA2', 'leagueoflegends', 'GlobalOffensive', 'Overwatch', 'wow', 'hearthstone'],
    },
    mutations: {
      SET_POSTS(state, posts) {
        state.posts = posts;
      },
      ADD_POSTS(state, posts) {
        state.posts = [...state.posts, ...posts];
      },
      ADD_TAG(state, tag) {
        state.tags = [...state.tags, tag];
      },
      REMOVE_TAG(state, tag) {
        state.tags = state.tags.filter(item => item !== tag);
      },
      SET_LOADING(state, loading) {
        state.loading = loading;
      }
    },
    actions: {
      async getPosts({ commit, state }) {
        commit('SET_POSTS', []);
        commit('SET_LOADING', true);

        const params = {
          hot: true,
        };

        let requests = state.tags.map(tag => this.$axios.get(`https://www.reddit.com/r/${tag}.json`));
        Promise.all(requests).then(([...responses]) => {
          responses.forEach(response => commit('ADD_POSTS', filterPosts(response.data)))
        });

        commit('SET_LOADING', false);
      }
    }
  })
}

export default createStore
