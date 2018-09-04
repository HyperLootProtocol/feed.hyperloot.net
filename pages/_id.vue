<template>
  <div class="wrapper">
    <div class="action-panel">
      <div class="filter">
        <span v-for="tag in $store.state.tags" :key="tag" @click="toggleTag(tag)" :class="{active: !tagIsDisabled(tag), 'button': true}">{{tag}}</span>
        <!-- <button>add tag<span>+</span></button> -->
      </div>
      <!-- <div class="search">
        <img src="~/assets/magnifier.png" width="22">
        <input type="text" placeholder="Search">
      </div> -->
    </div>
    <section class="list" :class="{ active: !$store.state.loading && $store.state.post.id }">

      <nuxt-link :to="post.innerId" v-for="post in posts" :key="post.id" class="post">
        <span class="title">{{post.title}}</span>
        <span class="post-data">
          <span class="tag">{{post.tag}}</span>
          &nbsp;
          <span class="time">{{post.time}}</span>
        </span>
      </nuxt-link>

      <!-- <button class="button more" @click="loadMore()">Load more</button> -->
    </section>

    <section class="content" :class="{ active: !$store.state.loading && $store.state.post.id }">

      <span v-if="$store.state.loading" class="loading">Loading...</span>
      <span v-if="!$store.state.loading && !$store.state.post.id" class="loading placeholder">Please select one</span>

      <div class="inner" v-if="$store.state.post.id">
        <nuxt-link to="/" class="button close" v-if="$store.state.post.id"><svg x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve"><polygon points="16,0.9 15.1,0 8,7.1 0.9,0 0,0.9 7.1,8 0,15.1 0.9,16 8,8.9 15.1,16 16,15.1 8.9,8 "/></svg></nuxt-link>
        <div class="inner-content">
          <h1><a :href="$store.state.post.url" target="_blank">{{$store.state.post.title}}</a></h1>

          <img v-if="$store.state.post.thumbnail && !$store.state.post.media_embed.content && $store.state.post.thumbnail !== 'self'" :src="$store.state.post.thumbnail">

          <div v-if="$store.state.post.media" v-html="decode($store.state.post.media_embed.content)"></div>
          <div v-html="decode($store.state.post.selftext_html)"></div>
        </div>
        <social-sharing :url="currentUrl" :title="$store.state.post.title" inline-template>
          <div class="share">
            <div class="thread-author">This thread was created by the<br/> {{$store.state.post.author}}</div>
            <div class="share-block">
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

  .button.more {
    font-family: 'Gilroy-Bold';
    padding: 1.6rem 4rem;
    border-radius: 2.3rem;
    font-size: 1.4rem;
    color: #fff;
    background-color: #f53743;
    box-shadow: 0px 6px 14.22px 3.78px rgba(245, 55, 67, 0.22);
    border: none;
  }

  .post {
    display: block;
    padding: 2.5rem;
    font-size: 1.4rem;
    cursor: pointer;
    border-bottom: 0.1rem solid #f5f5f5;
    border-right: 0.1rem solid #f5f5f5;
    transition: .3s;
  }

  .post.nuxt-link-active {
    border-right: none;
  }

  .post.nuxt-link-active .title {
    color: #f53743;
  }

  .post.nuxt-link-active .post-data .tag img {
    opacity: 1;
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
    opacity: 0.5;
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
    height: 8rem;
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
    opacity: .3;
    cursor: pointer;
  }

  .action-panel .filter span.active {
    opacity: 1;

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

  .action-panel .filter button span {
    display: none;
  }

  .action-panel .filter button:before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -1rem;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-right:1rem solid #F53743;
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
    top: calc(50% - 1.1rem);
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

  .action-panel .search input::-webkit-input-placeholder {
    color: #c0c3c7;
  }

  .action-panel .search input:focus {
    outline: none;
  }

  .close {
    position: absolute;
    right: 0;
    top: -1.6rem;
    width: 1.6rem;
    height: 1.6rem;
    padding: 0.6rem;
    line-height: 0;
    text-align: right;
  }

  .close svg {
    opacity: 0.5;
    transition: 0.3s ease;
  }

  .close svg:hover {
    opacity: 1;
    fill: #f53743;
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
    left: 1.6rem;
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
    padding: 12rem 4rem 2rem 3rem;
    /*background-image: url(../assets/lol_background.png);*/
    background-repeat: no-repeat;
    background-position: right 92.5%;
  }

  .inner {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 1.4rem;
    line-height: 1.5;
  }

  .inner h1 {
    margin: 0 0 2rem;
    font-family: 'BebasNeueBold';
    font-size: 3.8rem;
    line-height: 1.35;
    text-transform: uppercase;
    max-width: 90%;
  }

  .inner h1 a {
    color: #0e1213;
  }

  .share {
    display: flex;
    flex: 0 0;
    align-items: center;
    font-weight: bold;
    margin-top: auto;
    margin-bottom: 7rem;
    padding: 3.5rem 2rem;
    background-color: #f5f6f8;
    border-radius: 2rem;
  }

  .share :global(.thread-author) {
    flex: 50%;
    margin-right: auto;
    margin-left: 0;
    color: #535f6d;
  }

  .share :global(.share-title) {
    font-weight: 400;
    color: #c4c8cb;
  }

  .share :global(.share-block) {
    display: flex;
    align-items: center;
  }

  .share :global(span) {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    cursor: pointer;
    /*filter: invert(100%);*/
    opacity: 0.5;
    padding: .5rem;
    transition: 0.3s ease;
  }

  .share :global(span:hover) {
    opacity: 1;
  }

  @media (max-width: 1024px) {

    .share {
      display: block;
      padding: 1rem 1rem;
    }

    .share :global(.thread-author br) {
      display: none;
    }

  }

  @media (max-width: 960px) {

    .list.active {
      display: none;
    }

    .content:not(.active) {
      display: none;
    }

    .list:after {
      width: 100%;
    }

  }

  @media (max-width: 700px) {

    .wrapper {
      flex-wrap: wrap;
    }

    .action-panel .search {
      display: none;
    }

    .action-panel {
      height: 5rem;
      padding-left: 0;
      top: 5.6rem;
    }

    .action-panel .filter {
      padding-left: 1.4rem;
      flex-wrap: nowrap;
      overflow-y: scroll;
      align-items: center;
    }

    .action-panel .filter:after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 6rem;
      height: 4.9rem;
      z-index: 5;
      background: -moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.32) 12%, rgba(255,255,255,1) 37%);
      background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0.32) 12%,rgba(255,255,255,1) 37%);
      background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.32) 12%,rgba(255,255,255,1) 37%);
    }

    .action-panel .filter button {
      position: absolute;
      right: 1.4rem;
      font-size: 0;
      padding: 0 0.5rem 0 0.5rem;
      z-index: 10;
    }

    .action-panel .filter button:before {
      left: -1rem;
    }

    .action-panel .filter button span {
      display: block;
      font-size: 1.4rem;
      margin-right: 0;
      color: #fff;
    }

    .list {
      padding-top: 10.6rem;
    }

    .list:after {
      display: none;
    }

    .bottom-panel.fixed {
      position: static;
    }

    .content {
      z-index: 50;
      background-color: #fff;
      padding: 8rem 2.5rem 4rem 2.5rem;
    }

    .inner .close {
      display: none;
    }

    .inner h1 {
      font-size: 3rem;
      max-width: 100%;
    }

    .share {
      margin-top: 2.4rem;
      margin-bottom: 0px;
    }

    .share :global(.thread-author) {
      width: 90%;
      margin-bottom: 1.2rem;
    }

    .share :global(.share-title) {
      width: 100%;
      margin-bottom: 1.2rem;
    }

    .share :global(.share-block) {
      flex-wrap: wrap;
    }

    .share :global(span) {
      padding: 0;
      margin-left: 0rem;
      margin-right: 1.4rem;
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
    toggleTag(tag) {
      if (this.tagIsDisabled(tag)) {
        this.$store.commit('ENABLE_TAG', tag);
      } else {
        this.$store.commit('DISABLE_TAG', tag);
      }

      this.$store.dispatch('getPosts');
    },
    loadMore() {
      this.$store.dispatch('getPosts', { more: true });
    },
    decode(val) {
      return decode(val);
    },
    tagIsDisabled(tag) {
      return this.$store.state.disabled_tags.includes(tag);
    },
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
