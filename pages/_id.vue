<template>
  <div class="wrapper">
    <div class="action-panel">
      <div class="filter">
        <span v-for="tag in $store.state.tags" :key="tag" @click="removeTag(tag)" class="button">{{tag}}</span>
        <input v-on:keyup.enter="addTag()" v-model="name" placeholder="add tag..." />
      </div>
      <div class="search">
        <img src="~/assets/github.svg" width="22">
        <input type="text" placeholder="Search">
      </div>
    </div>
    <section class="list" :class="{ active: !$store.state.loading && $store.state.post.id }">

      <nuxt-link :to="post.innerId" v-for="post in posts" :key="post.id" class="post">
        <span class="title">{{post.title}}</span>
        <span class="post-data">
          <span class="tag">[{{post.tag}}]</span>
          &nbsp;
          <span class="time">{{post.time}}</span>
        </span>
      </nuxt-link>

      <button class="button more" @click="loadMore()">Load more</button>
    </section>

    <section class="content" :class="{ active: !$store.state.loading && $store.state.post.id }">
      <nuxt-link to="/" class="button close" v-if="$store.state.post.id">Close</nuxt-link>

      <span v-if="$store.state.loading" class="loading">Loading...</span>
      <span v-if="!$store.state.loading && !$store.state.post.id" class="loading placeholder">Please select one</span>

      <div class="inner" v-if="$store.state.post.id">
        <h1><a :href="$store.state.post.url" target="_blank">{{$store.state.post.title}}</a></h1>

        <img v-if="$store.state.post.thumbnail && !$store.state.post.media_embed.content && $store.state.post.thumbnail !== 'self'" :src="$store.state.post.thumbnail">

        <div v-if="$store.state.post.media" v-html="decode($store.state.post.media_embed.content)"></div>
        <div v-html="decode($store.state.post.selftext_html)"></div>

        <social-sharing :url="currentUrl" :title="$store.state.post.title" inline-template>
          <div class="share">
            <div>Share</div>
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
    transition: .3s;
  }

  .post.nuxt-link-active {
    background-image: -webkit-linear-gradient( 0deg, rgb(255,255,255) 0%, rgb(245,245,245) 100%);
  }

  .post .post-data {
    width: 100%;
    display: flex;
  }

  .post .post-data .tag {
    margin-right: auto;
  }

  .post .time {
    color: #666;
  }

  .post .tag {
    color: #333;
  }

  .post .title {
    display: block;
    font-size: 1.7rem;
    color: #333;
    margin-bottom: .5rem;
    display: flex;
    align-items: center;
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
    margin-right: 1rem;
    color: #fff;
    color: #0e1213;
    cursor: pointer;
    height: 2rem;
    line-height: 1.5;
    font-size: 1.4rem;
  }

  .action-panel .filter input {
    padding: 0 1rem;
    border: 0;
    font-size: 1.4rem;
    line-height: 1.5;
    height: 2rem;
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

  .list::-webkit-scrollbar {
    display: none;
  }

  .content {
    position: relative;
    background: #f5f5f5;
    flex: 50%;
    overflow: auto;
    padding: 10rem 2rem 2rem 2rem;
  }

  .inner {
    font-size: 1.4rem;
  }

  .inner h1 {
    margin: 0 0 2rem;
    font-size: 5rem;
  }

  .share {
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  .share :global(div) {
    margin-right: 1rem;
  }

  .share :global(span) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    cursor: pointer;
    filter: invert(100%);
    background: #fff;
    padding: .5rem;
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
