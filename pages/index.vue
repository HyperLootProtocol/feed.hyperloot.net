<template>
  <div>
    <span v-if="!this.loaded">Loading...</span>

    <div class="list">
      <a :href="post.data.url" v-for="post in posts" :key="post.data.permalink">{{post.data.title}}</a>
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
  async created() {
    const response = await this.$axios.get('https://www.reddit.com/r/hyperloot.json');
    this.posts = response.data.data.children;
    this.loaded = true;
  },
}
</script>
