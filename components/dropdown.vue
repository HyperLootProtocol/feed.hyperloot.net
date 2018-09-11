<template>
  <div :class="['faq-item', classes]">
    <div class="question" @click="toggle($event)">
      <h3>{{ title }}</h3><div :class="['status', classes]"></div>
    </div>
    <answer></answer>
  </div>
</template>

<script>

import answer from './answer.vue';

export default {
  name: 'dropdown',
  props: {
    title: '',
    answer: ''
  },
  data: () => {
    return {
      isActive: false
    }
  },

  computed: {
    classes () {
      return {
        'is-active': this.isActive
      }
    }
  },

  methods: {

    open(e){
      this.isActive = true;
    },

    close(e){
      this.isActive = false;
    },

    toggle(e){
      return (this.isActive ? this.close(e) : this.open(e));
    }

  },

}
</script>
