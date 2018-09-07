<template>
  <div class="layout">
    <div class="sidebar">
      <div class="sidebar-header">
        <a href="https://hyperloot.net/" target="_blank" class="logo">
          <img src="~/assets/logo.svg" width="36" class="small-logo">
          <img src="~/assets/hyperloot_logo.png" class="full-logo">
        </a>

        <a class="toggle-mnu" href="#" @click="toggleMenu()"><span></span></a>
      </div>

      <!-- <div class="search">
        <img src="~/assets/magnifier.png" width="22">
        <input type="text" placeholder="Search">
      </div> -->

      <nav>
        <nuxt-link to="/" class="site-link">

          <svg width="32" x="0px" y="0px" viewBox="0 0 22.9 22.9" style="enable-background:new 0 0 22.9 22.9;" xml:space="preserve"> <path d="M13,19.2H0.5C0.2,19.2,0,19,0,18.7c0-0.3,0.2-0.5,0.5-0.5H13c0.3,0,0.5,0.2,0.5,0.5C13.5,19,13.3,19.2,13,19.2z"/> <path d="M22.4,12H0.5C0.2,12,0,11.7,0,11.5S0.2,11,0.5,11h21.9c0.3,0,0.5,0.2,0.5,0.5S22.7,12,22.4,12z"/> <path d="M13,4.7H0.5C0.2,4.7,0,4.5,0,4.2s0.2-0.5,0.5-0.5H13c0.3,0,0.5,0.2,0.5,0.5S13.3,4.7,13,4.7z"/></svg>

          Feed
        </nuxt-link>

        <nuxt-link to="/about" class="site-link">

          <svg width="32" x="0px" y="0px" viewBox="0 0 22.8 22.8" style="enable-background:new 0 0 22.8 22.8;" xml:space="preserve"><g><g><path d="M11.4,0C5.1,0,0,5.1,0,11.4s5.1,11.4,11.4,11.4s11.4-5.1,11.4-11.4S17.6,0,11.4,0z M11.4,21.4c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S16.9,21.4,11.4,21.4z"/><circle cx="11.6" cy="6.8" r="1.2"/><path d="M11.2,9.9c-0.4,0-0.7,0.3-0.7,0.7v6c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7v-6C11.9,10.2,11.6,9.9,11.2,9.9z"/></g></g></svg>

          About
        </nuxt-link>

        <nuxt-link to="/token" class="site-link">

          <svg width="32" x="0px" y="0px" viewBox="0 0 23.8 23.3" style="enable-background:new 0 0 23.8 23.3;" xml:space="preserve"><path d="M20.3,4.1c-0.5-0.5-1-1-1.6-1.4c-0.2-0.2-0.6-0.1-0.7,0.1l-0.1,0.1c-0.1,0.2-0.1,0.5,0.1,0.7c0.2,0.2,0.4,0.3,0.6,0.5c0.2,0.2,0.2,0.5,0,0.7l-0.6,0.6c-0.2,0.2-0.5,0.2-0.7,0c-1.2-1.1-2.8-1.7-4.4-1.9c-0.3,0-0.4-0.2-0.4-0.5V2.2c0-0.3,0.3-0.5,0.6-0.5h0c1,0.1,2,0.4,2.9,0.8c0.2,0.1,0.5,0,0.7-0.2l0-0.1c0.1-0.3,0-0.6-0.3-0.7c-1-0.5-2.1-0.7-3.3-0.9c-0.4,0-0.8-0.1-1.2-0.1c-2.3,0-4.5,0.7-6.4,2C5,2.9,4.4,3.5,3.8,4.1c-1,1.1-1.8,2.3-2.3,3.7c-0.5,1.2-0.7,2.6-0.7,3.9c0,3,1.2,5.8,3.3,7.9c2.1,2.1,4.9,3.3,7.9,3.3s5.8-1.2,7.9-3.3c2.1-2.1,3.3-4.9,3.3-7.9C23.2,8.9,22.2,6.2,20.3,4.1z M3.8,12.3c0.1,1.7,0.7,3.2,1.7,4.5c0.2,0.2,0.1,0.5,0,0.7L4.9,18c-0.2,0.2-0.6,0.2-0.8,0C3,16.5,2.2,14.7,2,12.8c0-0.3,0.2-0.6,0.5-0.6H3.8L3.8,12.3z M7,18.2c1.2,0.9,2.6,1.5,4.1,1.7c0.3,0,0.4,0.2,0.4,0.5v0.8c0,0.3-0.3,0.5-0.6,0.5c-1.9-0.2-3.7-0.9-5.2-2.1c-0.2-0.2-0.3-0.5,0-0.8l0.6-0.6C6.5,18,6.8,18,7,18.2z M13,19.9c1.5-0.2,2.9-0.8,4.1-1.7c0.2-0.2,0.5-0.1,0.7,0l0.6,0.6c0.2,0.2,0.2,0.6,0,0.8c-1.5,1.2-3.3,1.9-5.2,2.1c-0.3,0-0.6-0.2-0.6-0.5v-0.8C12.6,20.1,12.8,19.9,13,19.9z M18.5,16.8c0.9-1.2,1.5-2.6,1.7-4.1c0-0.3,0.2-0.4,0.5-0.4h0.8c0.3,0,0.5,0.3,0.5,0.6c-0.2,1.9-0.9,3.7-2.1,5.2c-0.2,0.2-0.5,0.3-0.8,0l-0.6-0.6C18.4,17.3,18.4,17,18.5,16.8z M21.6,11.1h-0.8c-0.3,0-0.5-0.2-0.5-0.4c-0.2-1.4-0.7-2.6-1.5-3.8c-0.1-0.2-0.1-0.5,0.1-0.6l0.6-0.6c0.2-0.2,0.6-0.2,0.8,0.1c1,1.4,1.7,3.1,1.9,4.8C22.1,10.9,21.9,11.1,21.6,11.1z M17.4,7C17.5,7.1,17.5,7.1,17.4,7c1.1,1.3,1.7,3,1.7,4.7c0,1.9-0.7,3.7-2.1,5c-1.3,1.3-3.1,2.1-5,2.1s-3.7-0.7-5-2.1c-1.3-1.3-2.1-3.1-2.1-5c0-1.7,0.6-3.3,1.7-4.6c0,0,0,0,0,0l0.5-0.5l0,0c1.3-1.3,3.1-2,4.9-2s3.6,0.7,4.9,2l0,0L17.4,7z M6.3,3.4c1.4-1,3-1.5,4.6-1.7c0.3,0,0.6,0.2,0.6,0.5V3c0,0.3-0.2,0.5-0.4,0.5C9.4,3.7,7.9,4.4,6.7,5.5C6.5,5.6,6.2,5.6,6,5.4L5.4,4.8c-0.2-0.2-0.2-0.5,0-0.7C5.7,3.8,6,3.6,6.3,3.4z M4.7,5.7l0.6,0.6c0.2,0.2,0.2,0.4,0.1,0.6C4.5,8.1,4,9.3,3.9,10.7c0,0.3-0.2,0.4-0.5,0.4H2.5c-0.3,0-0.5-0.3-0.5-0.6C2.1,9.8,2.3,9,2.6,8.2c0.3-0.9,0.8-1.7,1.3-2.4C4.1,5.5,4.4,5.5,4.7,5.7z"/><path d="M7.9,11.7L7.9,11.7C7.9,9.4,9.8,7.6,12,7.6V7.5C12,7.2,11.8,7,11.5,7c-2.1,0.3-3.8,2-4.1,4.1C7.3,11.4,7.6,11.7,7.9,11.7z"/></svg>

          Token
        </nuxt-link>
      </nav>

      <div class="social">
        <a href="https://www.facebook.com/pg/401874386882912" target="_blank" class="facebook"><img src="~/assets/facebook.svg" width="22"></a>
        <a href="https://github.com/HyperLootProtocol" target="_blank" class="github"><img src="~/assets/github.svg" width="22"></a>
        <a href="https://twitter.com/Hyperloot" target="_blank" class="twitter"><img src="~/assets/twitter.svg" width="22"></a>
        <a href="https://www.linkedin.com/company/hyperloot/" target="_blank" class="linkedin"><img src="~/assets/linkedin.svg" width="22"></a>
        <a href="https://medium.com/hyperloot-protocol" target="_blank" class="medium"><img src="~/assets/medium.svg" width="22"></a>
        <a href="https://t.me/hyperloot" target="_blank" class="telegram"><img src="~/assets/telegram.svg" width="22" class="image-2"></a>
        <a href="https://discord.gg/My3PfqK" target="_blank" class="discord"><img src="~/assets/discord.svg" width="22"></a>
        <a href="https://www.reddit.com/r/hyperloot/" target="_blank" class="reddit"><img src="~/assets/reddit.svg" width="22"></a>
        <a href="https://www.youtube.com/channel/UCCHUAJwu5KWBy3P4tzTVWfQ" target="_blank" class="youtube"><img src="~/assets/youtube.svg" width="22"></a>
      </div>

    </div>

    <nuxt />

    <div class="bottom-panel fixed">
      <div class="course-widget">

        <div class="course-item" v-for="tiker in $store.state.tikers" :key="tiker.id" >
          <span class="token">{{tiker.symbol}}</span><span class="value">${{tiker.quotes.USD.price}}</span>
          <span class="currency">USD</span><span :class="['difference', tikerStatus(tiker)]">{{tiker.quotes.USD.percent_change_24h}}%</span>

        </div>

      </div>

      <div class="copyright">
        Copyright &copy; Hyperloot.net
      </div>
    </div>
  </div>
</template>

<style scoped>
  .layout {
    padding-left: 10rem;
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
    background-color: #fff;
    z-index: 99;
  }

  .sidebar .logo {
    box-sizing: border-box;
    min-height: 8rem;
    min-width: 10rem;
    position: relative;
    width: 100%;
    display: flex;
    margin-bottom: 3rem;
    align-items: center;
    opacity: 1;
    text-decoration: none;
    border-bottom: 0.1rem solid #dadada;
  }

  .sidebar .logo img {
    margin: auto;
  }

  .sidebar .logo .full-logo {
    display: none;
  }

  .sidebar .search {
    display: none;
  }

  .sidebar .toggle-mnu {
    cursor: pointer;
    display: none;
  }

  .sidebar .toggle-mnu span {
    position: relative;
    display: block;
    width: 2.4rem;
    height: 3px;
    background: #696969;
    transition: all .2s ease-in-out;
  }

  .sidebar .toggle-mnu span:before {
    content: '';
    position: absolute;
    top: -8px;
    width: 2.4rem;
    height: 3px;
    background: #696969;
    transition: all .2s ease-in-out;
  }

  .sidebar .toggle-mnu span:after {
    content: '';
    position: absolute;
    top: 8px;
    background: #696969;
    width: 2.4rem;
    height: 3px;
    transition: all .2s ease-in-out;
  }

  .sidebar.active .small-logo {
    display: none;
  }

  .sidebar.active .toggle-mnu span {
    background-color: transparent;
  }

  .sidebar.active .toggle-mnu span:before {
    transform: rotate(45deg) translate(5px, 6px);
  }

  .sidebar.active .toggle-mnu span:after {
    transform: rotate(-45deg) translate(5px, -6px);
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
    font-family: Gilroy-Extrabold;
    text-transform: uppercase;
    text-align: center;
    color: #55606c;
    font-size: 1.2rem;
  }

  .sidebar nav a.nuxt-link-exact-active {
    color: #f53743;
  }

  .sidebar nav a svg {
    fill: #55606c;
    margin: 0 auto 1.2rem auto;
  }

  .sidebar nav a.nuxt-link-exact-active svg {
    fill: #f53743;
  }

  .sidebar .social {
    display: flex;
    flex-direction: column;
  }

  .sidebar .social a {
    opacity: 0.7;
    margin-bottom: 2rem;
    transition: 0.3s ease;
  }

  .sidebar .social a:hover {
    opacity: 1;
  }

  @media (max-width: 1368px) {

    .sidebar nav a {
      margin-bottom: 2rem;
    }

    .sidebar nav a {
      margin-bottom: 2rem;
    }

    .sidebar .social a {
      margin-bottom: 1rem;
    }

  }

  @media (max-width: 768px) {

    .layout {
      padding-left: 0rem;
    }

    .sidebar {
      display: block;
      width: 100%;
      max-height: 5.5rem;
      border-bottom: 1px solid #dddddd;
    }

    .sidebar .sidebar-header {
      display: flex;
      justify-content: space-between;
    }

    .sidebar .logo {
      box-sizing: border-box;
      min-width: 3.2rem;
      min-height: 2.4rem;
      width: auto;
      padding: 1.2rem 1.6rem;
      margin-bottom: 0;
      border-bottom: 0;
    }

    .sidebar .toggle-mnu {
      display: block;
      padding: 1.2rem 1.6rem;
      align-self: center;
    }

    .sidebar nav,
    .sidebar .social {
      display: none;
    }

    .sidebar.active .logo .small-logo {
      display: none;
    }

    .sidebar.active .logo .full-logo {
      margin-top: 0.4rem;
      display: block;
    }

    .sidebar.active {
      display: block;
      background-color: #fff;
      max-height: none;
    }

    .sidebar.active .search {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      border-top: 0.1rem solid #dddddd;
      border-bottom: 0.1rem solid #dddddd;
    }

    .sidebar.active .search img {
      position: absolute;
      top: calc(50% - 1.1rem);
      right: 1.4rem;
      pointer-events: none;
      opacity: 0.4;
    }

    .sidebar.active .search input {
      box-sizing: border-box;
      padding: 2rem 0;
      width: 100%;
      height: 100%;
      border: none;
      font-size: 1.4rem;
      margin: 0 2rem;
    }

    .sidebar.active .search input::-webkit-input-placeholder {
      color: #c0c3c7;
    }

    .sidebar.active .search input:focus {
      outline: none;
    }

    .sidebar.active nav {
      display: flex;
      flex-direction: row;
      padding: 5rem 2.4rem;
      justify-content: space-between;
      border-bottom: 0.1rem solid #dddddd;
    }

    .sidebar.active nav a {
      margin-bottom: 0;
    }

    .sidebar.active .social {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      padding: 4rem 2.8rem 4rem 2.8rem;
    }

    .sidebar.active .social a {
      width: 33%;
      margin-bottom: 3rem;
    }

    .sidebar.active .social a.discord,
    .sidebar.active .social a.reddit,
    .sidebar.active .social a.youtube {
      margin-bottom: 0;
    }

    .sidebar.active .social a.github,
    .sidebar.active .social a.medium,
    .sidebar.active .social a.reddit {
      text-align: center;
    }

    .sidebar.active .social a.twitter,
    .sidebar.active .social a.telegram,
    .sidebar.active .social a.youtube {
      text-align: right;
    }

  }

</style>

<script>
export default {
  name: 'Layout',
  methods: {
    toggleMenu() {
      let sidebar = document.querySelector('.sidebar');
          sidebar.classList.toggle('active');
    },
    tikerStatus(tiker) {
      return tiker.quotes.USD.percent_change_24h < 0 ? 'negative' : 'positive';
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('getTikerData');
  },
  async created() {
    await this.$store.dispatch('getTikerData');
  },
}
</script>
