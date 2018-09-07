import Vuex from 'vuex';
import moment from 'moment';

const delimiter = '*';

const tikkersId = [
  1380, //LoMoCoin
  2130, //Enjin
  2300, //WAX
];

let postsRequestToken = '';

function filterPosts({ data }) {
  return data.children.map(({ data: { url, title, id, subreddit, created_utc, created, author }}) => ({
    url,
    title,
    id,
    innerId: `reddit${delimiter}${subreddit}${delimiter}${id}`,
    tag: subreddit,
    created,
    author,
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
      disabled_tags: [],
      after: {},
      tikers: [],
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
      DISABLE_TAG(state, tag) {
        state.disabled_tags = [...state.disabled_tags, tag];
      },
      ENABLE_TAG(state, tag) {
        state.disabled_tags = state.disabled_tags.filter(item => item !== tag);
      },
      SET_LOADING(state, loading) {
        state.loading = loading;
      },
      SET_POST(state, post) {
        state.post = post;
      },
      SET_TIKER_DATA(state, data) {
        state.tikers = data;
      },
      ADD_TIKER_DATA(state, data) {
        state.tikers = [...state.tikers, data];
      }
    },
    actions: {
      async getPost({ commit, state }, id) {
        commit('SET_LOADING', true);
        const [from, ...parsedId] = id.split(delimiter);
        const uId = parsedId.join('/comments/');
        const params = {
            headers: { 'X-Requested-With': true }
        };

        const response = await this.$axios.get(`/api/proxy/r/${uId}.json`, params).catch(err => {
          return this.$axios.get(`https://www.reddit.com/r/${uId}.json`, params)
        });
        const post = response.data[0].data.children[0].data;
        commit('SET_POST', post);
        commit('SET_LOADING', false);
      },
      async getPosts({ commit, state }, { more = false } = {}) {
        commit('SET_LOADING', true);

        const currentRequestToken = new Date().getTime();
        postsRequestToken = currentRequestToken;

        const activeTags = state.tags.filter(tag => !state.disabled_tags.includes(tag));

        let requests = activeTags.map(tag => {
          let params = {
            tag,
            hot: true,
            params: {},
            headers: { 'X-Requested-With': true }
          };

          if (more) {
            params.params.after = state.after[tag];
          }

          if (more && !params.params.after) {
            return Promise.resolve();
          }

          return this.$axios.get(`/api/proxy/r/${tag}.json`, params);
        });

        Promise.all(requests).then(([...responses]) => {
          if (postsRequestToken !== currentRequestToken) {
            return;
          }

          if (!more) {
            commit('SET_POSTS', []);
          }

          responses.forEach(response => {
            if (!response) {
              return;
            }

            commit('UPDATE_AFTER', { key: response.config.tag, value: response.data.data.after });
            commit('ADD_POSTS', filterPosts(response.data));
          })
        });

        commit('SET_LOADING', false);
      },
      async getTikerData({ commit, state }) {

        let requests = tikkersId.map(id => {

          return this.$axios.get(`https://api.coinmarketcap.com/v2/ticker/${id}/`);
        });

        commit('SET_TIKER_DATA', []);

        Promise.all(requests).then(([...responses]) => {
          responses.forEach(response => {
            if (!response) {
              return;
            }

            commit('ADD_TIKER_DATA', response.data.data);
          })
        });
      }
    }
  })
}

export default createStore
