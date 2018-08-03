<template>
  <div>
    <span v-if="$store.state.loading">Loading...</span>

    <div class="filter">
      <span v-for="tag in $store.state.tags" :key="tag" @click="removeTag(tag)">{{tag}}</span>
      <input v-on:keyup.enter="addTag()" v-model="name" />
    </div>

    <div class="list">
      <div v-for="post in posts" :key="post.id" class="post">
        <a :href="post.url">{{post.title}}</a>
        <span>{{post.time}}</span>
        &nbsp;
        <span>[{{post.tag}}]</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .post {
    margin-bottom: 1rem;
    padding: 1rem;
    background: #f0f0f0;
  }

  .post a {
    display: block;
  }

  .filter {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
  }

  .filter span {
    padding: 1rem;
    margin-right: 1rem;
    background: #f0f0f0;
    cursor: pointer;
  }
</style>

<script>
import moment from 'moment';

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
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.slice().sort((a, b) => {
        return moment.unix(b.created).diff(moment.unix(a.created))
      })

    },
  },
  async fetch({ store }) {
    await store.dispatch('getPosts');
  },
  async created() {
    await this.$store.dispatch('getPosts');
  },
}
</script>
