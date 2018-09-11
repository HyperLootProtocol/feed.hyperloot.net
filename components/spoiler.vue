<template>
  <div :class="['spoiler', {'is-active': isActive}]">
    <div class="header" @click="toggle()">
      <h3>{{ title }}</h3><div class="status"></div>
    </div>

    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .spoiler .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .spoiler .header h3  {
    margin: 0;
    font-size: 2rem;
  }

  .spoiler .header .status {
    height: 3.6rem;
    width: 3.6rem;
    background-color: #fff;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .spoiler .header .status {
    background-image: url(~/assets/token_page/arrow.png);
    transform: rotate(180deg);
  }

  .spoiler.is-active .header .status {
    background-image: url(~/assets/token_page/arrow.png);
    transform: rotate(0deg);
  }

  .spoiler {
    box-sizing: border-box;
    padding: 3.2rem;
    margin-bottom: 0.5rem;
    border-radius: 1.6rem;
    background-color: #f0f2f5;
  }

  .spoiler .content {
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    max-height: 0;
    transform: translateY(-20px);
    transition: max-height 0.25s, opacity 0.25s, transform 0.5s;
  }

  .spoiler.is-active .content {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
    max-height: 1200px;
  }

  .spoiler .content p {
    line-height: 1.5;
    padding-right: 20%;
  }

  @media (max-width: 1440px) {
    .spoiler .content p {
      padding-right: 10%;
    }

  }

  @media (max-width: 740px) {
    .spoiler {
      padding: 1.6rem;
    }

    .spoiler .header .status {
      min-width: 3.6rem;
      align-self: flex-start;
    }
  }
</style>

<script>

export default {
  name: 'spoiler',
  props: {
    title: '',
  },

  data: () => ({
    isActive: false
  }),

  methods: {
    toggle(){
      this.isActive = !this.isActive;
    }

  },
}
</script>
