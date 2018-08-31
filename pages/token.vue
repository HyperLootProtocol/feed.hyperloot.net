<template>

  <div class="wrapper">

    <section class="token-section">
      <div class="token-section-content">
        <h1>
          What exactly is<br>
          <span>the hyperloot token?</span>
        </h1>
        <p>The system utilizes Ethereum ERC20-based tokens with following conditions</p>
        <div class="info">
          <div class="info-item">
              <span>Name</span><br>
              HYPERLOOT
          </div>
          <div class="info-item">
              <span>Symbol</span><br>
              HLT
          </div>
          <div class="info-item">
              <span>Max supply</span><br>
              1,000,000,000
          </div>
          <div class="info-item type">
              <span>Type</span><br>
              ERC20
          </div>
          <div class="info-item">
              <span>Mining</span><br>
              0.1 DAILY from remaining unmined tokens
          </div>
        </div>
      </div>
    </section>

    <div class="bottom-panel">
      <div class="course-widget">
        <div class="course-item">
          <img src="~/assets/WAX_token.png" width="20"><span class="token">WAX</span><span class="value">$0,071850</span><span class="currency">USD</span><span class="difference negative">-2,63%</span>
        </div>
        <div class="course-item">
          <img src="~/assets/enjin_token.png" width="20"><span class="token">Enjin</span><span class="value">$0,038034</span><span class="currency">USD</span><span class="difference negative">-2,03%</span>
        </div>
        <div class="course-item">
          <img src="~/assets/flip_token.png" width="20"><span class="token">Flip</span><span class="value">$0,071850</span><span class="currency">USD</span><span class="difference positive">4,03%</span>
        </div>
      </div>
      <div class="copyright">
        Copyright &copy; Hyperloot.net
      </div>
    </div>

  </div>

</template>

<style scoped>

  section p {
    font-size: 1.4rem;
  }

  section .container {
    max-width: 77.5%;
    margin: 0 auto;
  }

  .token-section {
    min-height: 100vh;
    display: flex;
    background-image: url(~/assets/token_page/token_section_bg.png);
    background-position: top right;
    background-repeat: no-repeat;
  }

  .token-section-content {
    min-width: 37.5%;
    margin: 20% 20% 20% 20%;
  }

  .token-section h1 {
    margin-top: 0rem;
    font-family: 'BebasNeueBold';
    font-size: 6rem;
    text-transform: uppercase;
    color: #000;
  }

  .token-section h1 span {
    color: #f53743;
  }

  .token-section p {
    margin: 3.2rem 0;
    color: #5c646e;
  }

  .token-section .info {
    display: flex;
    jutify-content: space-between;
    font-family: 'Gilroy-Bold';
    font-size: 1.4rem;
    color: #55606c;
  }

  .token-section .info-item {
    width: 17.5%;
  }

  .token-section .info .info-item span {
    display: inline-block;
    margin-bottom: 1rem;
    color: #d3d5d9;
    text-transform: uppercase;
  }

  .token-section .info-item.type {
    margin-left: 5%;
  }


  @media (max-width: 1440px) {

  }

  @media (max-width: 1368px) {

  }

  @media (max-width: 1024px) {

  }

  @media (max-width: 768px) {

  }

  @media (max-width: 700px) {


  }

</style>

