<template>
  <div class="layout">
    <div class="sidebar">
      <a href="https://hyperloot.net/" target="_blank" class="logo"><img src="~/assets/logo.svg" width="36"></a>

      <nav>
        <a href="~/assets/linkedin.svg" class="site-link active"><img src="~/assets/logo.svg" width="32">Feed</a>
        <a href="~/assets/linkedin.svg" class="site-link"><img src="~/assets/logo.svg" width="32">About</a>
        <a href="~/assets/linkedin.svg" class="site-link"><img src="~/assets/logo.svg" width="32">Token</a>
      </nav>

      <div class="social">
        <a href="https://www.facebook.com/pg/401874386882912" target="_blank"><img src="~/assets/facebook.svg" width="22"></a>
        <a href="https://github.com/HyperLootProtocol" target="_blank"><img src="~/assets/github.svg" width="22"></a>
        <a href="https://twitter.com/Hyperloot" target="_blank"><img src="~/assets/twitter.svg" width="22"></a>
        <a href="https://www.linkedin.com/company/hyperloot/" target="_blank"><img src="~/assets/linkedin.svg" width="22"></a>
        <a href="https://medium.com/hyperloot-protocol" target="_blank"><img src="~/assets/medium.svg" width="22"></a>
        <a href="https://t.me/hyperloot" target="_blank"><img src="~/assets/telegram.svg" width="22" class="image-2"></a>
        <a href="https://discord.gg/My3PfqK" target="_blank"><img src="~/assets/discord.svg" width="22"></a>
        <a href="https://www.reddit.com/r/hyperloot/" target="_blank"><img src="~/assets/reddit.svg" width="22"></a>
        <a href="https://www.youtube.com/channel/UCCHUAJwu5KWBy3P4tzTVWfQ" target="_blank"><img src="~/assets/youtube.svg" width="22"></a>
      </div>

    </div>

    <nuxt />
  </div>
</template>

<style scoped>
  .layout {
    padding-left: 12rem;
  }

  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    border-right: 0.1rem solid #e5e5e5;
    align-items: center;
  }

  .sidebar .logo {
    position: relative;
    margin-bottom: 3rem;
    padding: 3rem;
    opacity: 1;
    border-bottom: 0.1rem solid #e5e5e5;
  }

  .sidebar nav {
    display: flex;
    flex-direction: column;
    margin-bottom: auto;
  }

  .sidebar nav a {
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    color: #121212;
    font-size: 1.2rem;
  }


  .sidebar nav a.active {
    color: #f53743;
  }

  .sidebar nav a img {
    margin: 0 auto 1.2rem auto;
  }

  .sidebar .social {
    display: flex;
    flex-direction: column;
  }

  .sidebar .social a {
    opacity: .7;
    margin-bottom: 2rem;
  }

</style>

<script>
export default {
  name: 'Layout'
}
</script>
