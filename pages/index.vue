<template>
  <div>
    <span v-if="!this.$store.state.loaded">Loading...</span>

    <div class="list">
      <a :href="post.data.url" v-for="post in $store.state.posts" :key="post.data.permalink">{{post.data.title}}</a>
    </div>
  </div>
</template>

<style scoped>
  .list a {
    display: block;
  }
</style>

<script>
export default {
  name: 'Normal',
  data: () => ({
    posts: [],
    loaded: false,
  }),
  async fetch({ $axios, store }) {
    const response = await $axios.get('https://www.reddit.com/r/hyperloot.json');
    store.commit('posts', response.data.data.children);
  },
}
</script>
