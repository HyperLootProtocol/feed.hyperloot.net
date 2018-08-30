<template>

  <div class="wrapper">

    <section class="promo-section">
      <div class="promo-section-content">
        <div class="about">About <img src="~/assets/about_page/hyperloot_logo.png"></div>
        <h1>
          Decentralized P2P marketplace<br/> and ownership solution<br/> for <span>in-game items</span>
        </h1>
        <div class="promo-links">
          <a href="#" class="button-link button-link-red">Get whitelisted</a>
          <a href="#" class="button-link">Whitepaper</a>
        </div>
      </div>
    </section>

    <section class="features-section">

      <div class="container">
        <h2>HyperLoot Open Protocol Solution</h2>
        <div class="features-block">
          <div class="features-item">
            <img src="" alt="">
            <h3>Ethereum</h3>
            <p>Hyperloot utilizes Ethereum blockchain as a proven and reliable infrastructure</p>
          </div>
          <div class="features-item">
            <h3>Marketplace &amp; Wallet</h3>
            <p>Marketplace and wallets – a place where assets are stored and can be exchanged.</p>
          </div>
          <div class="features-item">
            <h3>Alchemy protocol &amp; Client API</h3>
            <p>Protocol – a set of smart contracts that defines token and asset emission rules</p>
          </div>
          <div class="features-item">
            <h3>Games &amp; apps</h3>
            <p>Hyperloot SDK is an interface that connects any game with an inventory to the platform!</p>
          </div>
        </div>
      </div>

    </section>

  </div>

</template>

<style scoped>

  section .container {
    max-width: 77.5%;
    margin: 0 auto;
  }

  section h2 {
    margin: 0;
    font-family: 'Gilroy-Bold';
    font-size: 3rem;
    color: #000;
  }

  .promo-section {
    display: flex;
    min-height: 100vh;
    background-image: url(~/assets/about_page/promo_section_bg.jpg);
    background-position: top right;
    background-repeat: no-repeat;
  }

  .promo-section-content {
    margin: 14.95% auto auto 11.25%;
  }

  .promo-section-content .about {
    display: flex;
    align-items: flex-end;
    margin-bottom: 6rem;
    font-family: 'Gilroy-Bold';
    font-size: 1.4rem;
    text-transform: uppercase;
    color: #55606c;
  }

  .promo-section-content .about img {
    margin-left: 1rem;
  }

  .promo-section-content h1 {
    margin: 0 0 5rem 0;
    font-family: 'BebasNeueBold';
    font-size: 6rem;
    text-transform: uppercase;
  }

  .promo-section-content h1 span {
    color: #f53743;
  }

  .promo-section-content .promo-links {
    display: flex;
  }

  .promo-section-content .promo-links a:first-of-type {
    margin-right: 1.6rem;
  }

  .promo-section-content .promo-links .button-link {
    font-family: 'Gilroy-Bold';
    padding: 1.6rem 4rem;
    border-radius: 2.3rem;
    font-size: 1.4rem;
    background-color: #fff;
    border: 1px solid #f53743;
  }

  .promo-section-content .promo-links .button-link.button-link-red {
    color: #fff;
    background-color: #f53743;
    box-shadow: 0px 6px 14.22px 3.78px rgba(245, 55, 67, 0.22);
  }

  .about-section {
    padding: 7rem 0 24rem 0;
    background-image: url(~/assets/about_page/about_section_bg.png);
    background-size: cover;
    background-repeat: no-repeat;
  }

  section.about-section h2 {
    padding-bottom: 12rem;
  }



  @media (max-width: 1024px) {

  }

</style>

<script>
import moment from 'moment';
import decode from 'unescape';

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
    },
    decode(val) {
      return decode(val);
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.slice().sort((a, b) => {
        return moment.unix(b.created).diff(moment.unix(a.created))
      })
    },
    currentUrl() {
      return `http://feed.hyperloot.net${this.$nuxt.$route.path}`;
    }
  },
  async fetch({ store, params }) {
    store.commit('SET_POST', {});

    if (params.id) {
      await store.dispatch('getPost', params.id);
    }
  },
  async created() {
    if(!this.$store.state.posts.length) {
      await this.$store.dispatch('getPosts');
    }
  },
}
</script>
