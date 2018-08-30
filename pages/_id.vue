<template>
  <div class="wrapper">
    <div class="action-panel">
      <div class="filter">
        <span v-for="tag in $store.state.tags" :key="tag" @click="removeTag(tag)" class="button">{{tag}}</span>
        <button>add tag</button>
      </div>
      <div class="search">
        <img src="~/assets/magnifier.png" width="22">
        <input type="text" placeholder="Search">
      </div>
    </div>
    <section class="list" :class="{ active: !$store.state.loading && $store.state.post.id }">

      <nuxt-link :to="post.innerId" v-for="post in posts" :key="post.id" class="post">
        <span class="title">{{post.title}}</span>
        <span class="post-data">
          <span class="tag"><img src="~/assets/github.svg" width="20">{{post.tag}}</span>
          &nbsp;
          <span class="time">{{post.time}}</span>
        </span>
      </nuxt-link>

      <button class="button more" @click="loadMore()">Load more</button>
    </section>

      <nuxt-link to="/" class="button close" v-if="$store.state.post.id">Close</nuxt-link>
    <section class="content" :class="{ active: !$store.state.loading && $store.state.post.id }">

      <span v-if="$store.state.loading" class="loading">Loading...</span>
      <span v-if="!$store.state.loading && !$store.state.post.id" class="loading placeholder">Please select one</span>

      <div class="inner" v-if="$store.state.post.id">
        <h1><a :href="$store.state.post.url" target="_blank">{{$store.state.post.title}}</a></h1>

        <img v-if="$store.state.post.thumbnail && !$store.state.post.media_embed.content && $store.state.post.thumbnail !== 'self'" :src="$store.state.post.thumbnail">

        <div v-if="$store.state.post.media" v-html="decode($store.state.post.media_embed.content)"></div>
        <div v-html="decode($store.state.post.selftext_html)"></div>

        <social-sharing :url="currentUrl" :title="$store.state.post.title" inline-template>
          <div class="share">
            <div class="thread-author">This thread was created by the Post-Match Team.</div>
            <div class="share-title">Share</div>
            <network network="facebook">
              <img src="~/assets/facebook.svg" width="22">
            </network>
            <network network="twitter">
              <img src="~/assets/twitter.svg" width="22">
            </network>
            <network network="reddit">
              <img src="~/assets/reddit.svg" width="22">
            </network>
            <network network="telegram">
              <img src="~/assets/telegram.svg" width="22">
            </network>
            <network network="linkedin">
              <img src="~/assets/linkedin.svg" width="22">
            </network>
            <network network="email">
              <img src="~/assets/email.svg" width="22">
            </network>
          </div>
        </social-sharing>
      </div>
    </section>

    <div class="bottom-panel">
      <div class="course-widget">
        <div class="course-item">
          <img src="~/assets/WAX_token.png" width="20"><span class="token">WAX</span><span class="value">$0,071850</span><span class="currency">USD</span><span class="difference negative">-2,63%</span>
        </div>
        <div class="course-item">
          <img src="~/assets/enjin_token.png" width="20"><span class="token">Enjin</span><span class="value">$0,038034</span><span class="currency">USD</span><span class="difference negative">-2,03%</span>
        </div>
        <div class="course-item">
          <img src="~/assets/flip_token.png" width="20"><span class="token">Flip</span><span class="value">$0,071850</span><span class="currency">USD</span><span class="difference positive">4,03%</span>
        </div>
      </div>
      <div class="copyright">
        Copyright &copy; Hyperloot.net
      </div>
    </div>

  </div>
</template>

<style scoped>
  .loading {
    color: #dbe1ec;
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 5rem;
    height: 5rem;
    margin-top: -5rem;
    top: 50%;
  }

  .post {
    display: block;
    padding: 2.5rem;
    background: #fcfcfc;
    font-size: 1.4rem;
    cursor: pointer;
    border-bottom: 1px solid #f5f5f5;
    border-right: 1px solid #f5f5f5;
    transition: .3s;
  }

  .post.nuxt-link-active {
    border-right: none;
  }

  .post.nuxt-link-active .title {
    color: #f53743;
  }

  .post .post-data {
    width: 100%;
    display: flex;
  }

  .post .post-data .tag {
    display: flex;
    margin-right: auto;
    align-items: center;
  }

  .post .post-data .tag img {
    margin-right: 0.75rem;
  }

  .post .post-data span {
    font-weight: 400;
  }

  .post .time {
    color: #a5a6a6;
  }

  .post .tag {
    color: #55606c;
  }

  .post .title {
    display: block;
    margin-bottom: 1.6rem;
    font-family: 'Gilroy-Semibold';
    font-size: 1.6rem;
    color: #333;
  }

  .post .title a {
    margin-left: 1rem;
  }

  .action-panel {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100vw;
    height: 80px;
    padding-left: 12rem;
    background-color: #fff;
    z-index: 9;
    border-bottom: 0.1rem solid #dadada;
  }

  .action-panel .filter {
    display: flex;
    flex: 80%;
    align-items: center;
    flex-wrap: wrap;
  }

  .action-panel .filter span {
    box-sizing: border-box;
    height: 2rem;
    margin-right: 2rem;
    font-family: 'Gilroy-Semibold';
    line-height: 1.5;
    font-size: 1.4rem;
    color: #55606c;
    cursor: pointer;
  }

  .action-panel .filter button {
    position: relative;
    padding: 0 1rem 0 0.5rem;
    margin-left: 2rem;
    border: 0;
    font-size: 1.4rem;
    line-height: 1.5;
    height: 2rem;
    text-transform: uppercase;
    background-color: #F53743;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }

  .action-panel .filter button:before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -10px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right:10px solid #F53743;
  }

  .action-panel .search {
    position: relative;
    display: flex;
    align-items: center;
    flex: 20%;
    border-left: 0.1rem solid #dadada;
  }

  .action-panel .search img {
    position: absolute;
    top: calc(50% - 11px);
    right: 2rem;
    pointer-events: none;
  }

  .action-panel .search input {
    box-sizing: border-box;
    height: 100%;
    width: calc(100% - 2rem);
    border: none;
    font-size: 1.4rem;
    margin: 0 2rem;
  }

  .action-panel .search input:focus {
    outline: none;
  }

  .close {
    display: inline-block;
    text-align: right;
    margin-bottom: 2rem;
    float: right;
  }

  .more {
    margin-top: 2rem;
  }

  .wrapper {
    display: flex;
    height: 100vh;
  }

  .list {
    flex: 50%;
    overflow-y: scroll;
    padding-bottom: 2rem;
    scroll-behavior: smooth;
    padding: 8rem 0 0 0;
  }

  .list:after {
    content: '';
    display: block;
    width: 50%;
    height: 8rem;
    position: fixed;
    left: 0;
    bottom: 5.6rem;
    background-image: -moz-linear-gradient( 90deg, rgb(239,240,242) 0%, rgba(239,240,242,0) 100%);
    background-image: -webkit-linear-gradient( 90deg, rgb(239,240,242) 0%, rgba(239,240,242,0) 100%);
  }

  .list::-webkit-scrollbar {
    display: none;
  }

  .content {
    position: relative;
    flex: 50%;
    overflow: auto;
    padding: 10rem 4rem 2rem 3rem;
    background-image: url(../assets/lol_background.png);
    background-repeat: no-repeat;
    background-position: right 92.5%;
  }

  .inner {
    font-size: 1.4rem;
  }

  .inner h1 {
    margin: 0 0 2rem;
    font-size: 3rem;
    text-transform: uppercase;
  }

  .inner p {
    line-height: 1.5;
  }

  .share {
    display: flex;
    align-items: center;
    font-weight: bold;
    padding: 2.5rem 2rem;
    background-color: #f5f6f8;
    border-radius: 2rem;
  }

  .share :global(.thread-author) {
    flex: 75%;
    margin-right: auto;
    margin-left: 0;
    color: #535f6d;
  }

  .share :global(.share-title) {
    font-weight: 400;
    color: #c4c8cb;
  }

/*  .share :global(div) {
    margin-left: auto;
  }*/

  .share :global(span) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    cursor: pointer;
    filter: invert(100%);
    padding: .5rem;
  }

  .bottom-panel {
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 10rem;
    background-color: #fff;
    border-top: 0.1rem solid #f5f5f5;
  }

  .bottom-panel .course-widget {
    display: flex;
    font-size: 1.4rem;
  }

  .bottom-panel .course-widget .course-item {
    display: flex;
    align-items: center;
    padding: 1.75rem 2.5rem;
    border-right: 0.1rem solid #e3e3e3;
  }

  .bottom-panel .course-widget .course-item img {
    margin-right: 0.8rem;
  }

  .bottom-panel .course-widget .course-item .token {
    margin-right: 0.4rem;
  }

  .bottom-panel .course-widget .course-item .value {
    font-weight: 700;
    margin-right: 0.4rem;
  }

  .bottom-panel .course-widget .course-item .currency {
    font-weight: 700;
    margin-right: 0.4rem;
  }

  .bottom-panel .course-widget .course-item .difference.positive {
    color: #50bc00;
  }

  .bottom-panel .course-widget .course-item .difference.negative {
    color: #fe0000;
  }

  .bottom-panel .copyright {
    margin-left: auto;
    margin-right: 2rem;
    font-size:  1.4rem;
  }

  @media (max-width: 1368px) {

  }

  @media (max-width: 960px) {
    .list.active {
      display: none;
    }

    .content:not(.active) {
      display: none;
    }
  }
</style>

<script>
import moment from 'moment';
import decode from 'unescape';

export default {
  name: 'Normal',
  data: () => ({
    name: ''
  }),
  methods: {
    addTag() {
      this.$store.commit('ADD_TAG', this.name);
      this.name = '';
      this.$store.dispatch('getPosts');
    },
    removeTag(tag) {
      this.$store.commit('REMOVE_TAG', tag);
      this.$store.dispatch('getPosts');
    },
    loadMore() {
      this.$store.dispatch('getPosts', { more: true });
    },
    decode(val) {
      return decode(val);
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.slice().sort((a, b) => {
        return moment.unix(b.created).diff(moment.unix(a.created))
      })
    },
    currentUrl() {
      return `http://feed.hyperloot.net${this.$nuxt.$route.path}`;
    }
  },
  async fetch({ store, params }) {
    store.commit('SET_POST', {});

    if (params.id) {
      await store.dispatch('getPost', params.id);
    }
  },
  async created() {
    if(!this.$store.state.posts.length) {
      await this.$store.dispatch('getPosts');
    }
  },
}
</script>
