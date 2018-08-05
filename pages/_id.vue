<template>
  <div>
    <span v-if="$store.state.loading">Loading...</span>

    <div class="filter">
      <span v-for="tag in $store.state.tags" :key="tag" @click="removeTag(tag)">{{tag}}</span>
      <input v-on:keyup.enter="addTag()" v-model="name" placeholder="add tag..." />
    </div>

    <div class="list">
      <div v-for="post in posts" :key="post.id" class="post">
        <a :href="post.url">{{post.title}}</a>
        <span>{{post.time}}</span>
        &nbsp;
        <span>[{{post.tag}}]</span>
      </div>
    </div>

    <button class="more" @click="loadMore()">Load more</button>
  </div>
</template>

<style scoped>
  .post {
    margin-bottom: 1rem;
    padding: 1rem;
    background: #FFFCFC;
    font-size: 1.4rem;
  }

  .post a {
    display: block;
    font-size: 1.7rem;
  }

  .filter {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
  }

  .filter span {
    padding: .5rem 1rem;
    margin-right: 1rem;
    background: #f53743;
    color: #fff;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  .filter input {
    padding: 0 1rem;
    margin-bottom: 1rem;
    border: 0;
    background: #FFFCFC;
  }

  .more {
    background: #f53743;
    color: #fff;
    border: 0;
    font-size: 2rem;
    padding: 1rem 2rem;
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
    },
    loadMore() {
      this.$store.dispatch('getPosts', { more: true });
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
