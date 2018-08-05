<template>
  <div class="wrapper">

    <nav class="social">
      <a href="https://hyperloot.net/" target="_blank" class="logo"><img src="~/assets/logo.svg" width="36"></a>
      <a href="https://www.facebook.com/pg/401874386882912" target="_blank"><img src="~/assets/facebook.svg" width="22"></a>
      <a href="https://github.com/HyperLootProtocol" target="_blank"><img src="~/assets/github.svg" width="22"></a>
      <a href="https://twitter.com/Hyperloot" target="_blank"><img src="~/assets/twitter.svg" width="22"></a>
      <a href="https://www.linkedin.com/company/hyperloot/" target="_blank"><img src="~/assets/linkedin.svg" width="22"></a>
      <a href="https://medium.com/hyperloot-protocol" target="_blank"><img src="~/assets/medium.svg" width="22"></a>
      <a href="https://t.me/hyperloot" target="_blank"><img src="~/assets/telegram.svg" width="22" class="image-2"></a>
      <a href="https://discord.gg/My3PfqK" target="_blank"><img src="~/assets/discord.svg" width="22"></a>
      <a href="https://www.reddit.com/r/hyperloot/" target="_blank"><img src="~/assets/reddit.svg" width="22"></a>
      <a href="https://www.youtube.com/channel/UCCHUAJwu5KWBy3P4tzTVWfQ" target="_blank"><img src="~/assets/youtube.svg" width="22"></a>
    </nav>

    <nuxt />
  </div>
</template>

<style scoped>
  .wrapper {
    padding: 0 2rem 2rem 7rem;
  }

  .social {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: #fcfcfc;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
  }

  .social a {
    opacity: .7;
    margin-bottom: .5rem;
  }

  .social .logo {
    opacity: 1;
    margin-bottom: 2rem;
  }
</style>

<script>
export default {
  name: 'Layout'
}
</script>
