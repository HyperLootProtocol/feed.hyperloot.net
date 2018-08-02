<template>
  <div>
    Hello world
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'Normal',
  async created() {
    const response = await this.$axios.get('https://www.reddit.com/r/hyperloot.json');
    console.log('response', response.data)
  },
}
</script>
