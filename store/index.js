import Vuex from 'vuex';
import moment from 'moment';

const delimiter = '*';

function filterPosts({ data }) {
  return data.children.map(({ data: { url, title, id, subreddit, created_utc, created }}) => ({
    url,
    title,
    id,
    innerId: `reddit${delimiter}${subreddit}${delimiter}${id}`,
    tag: subreddit,
    created,
    time: moment.unix(created_utc).fromNow()
  }));
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      post: {},
      loading: false,
      tags: ['hyperloot', 'destiny2', 'PUBG', 'FORTnITE', 'DotA2', 'leagueoflegends', 'GlobalOffensive', 'Overwatch', 'wow', 'hearthstone'],
      after: {},
    },
    mutations: {
      UPDATE_AFTER(state, { key, value }) {
        state.after[key] = value;
      },
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
      },
      SET_POST(state, post) {
        state.post = post;
      }
    },
    actions: {
      async getPost({ commit, state }, id) {
        commit('SET_LOADING', true);
        const [from, ...parsedId] = id.split(delimiter);
        const uId = parsedId.join('/');
        const params = {
            headers: { 'X-Requested-With': true }
        };

        const response = await this.$axios.get(`https://cors-anywhere.herokuapp.com/https://www.reddit.com/r/${uId}.json`, params);
        const post = response.data[0].data.children[0].data;
        commit('SET_POST', post);
        commit('SET_LOADING', false);
      },
      async getPosts({ commit, state }, { more = false } = {}) {
        commit('SET_LOADING', true);

        let requests = state.tags.map(tag => {
          let params = {
            tag,
            hot: true,
            params: {},
            headers: { 'X-Requested-With': true }
          };

          if (!more) {
            commit('SET_POSTS', []);
          }

          if (more) {
            params.params.after = state.after[tag];
          }

          if (more && !params.params.after) {
            return Promise.resolve();
          }

          return this.$axios.get(`https://cors-anywhere.herokuapp.com/https://www.reddit.com/r/${tag}.json`, params);
        });

        Promise.all(requests).then(([...responses]) => {
          responses.forEach(response => {
            if (!response) {
              return;
            }

            commit('UPDATE_AFTER', { key: response.config.tag, value: response.data.data.after });
            commit('ADD_POSTS', filterPosts(response.data));
          })
        });

        commit('SET_LOADING', false);
      }
    }
  })
}

export default createStore
