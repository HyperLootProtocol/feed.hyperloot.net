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
              0.1 DAILY<br> from remaining unmined tokens
          </div>
        </div>
      </div>
    </section>

    <section class="tokenomics">

      <div class="container">

        <h2>How does one receive tokens?</h2>
        <p>There are a few basic options:</p>

        <div class="token-receive-options">
          <div class="col">

            <div class="item">
              <h3>Hyperloot dao participants</h3>
              <p>DAO pays for completed tasks using tokens with a follow-up vesting of 2 months. Vesting is a basic condition for the developers to continue working with us instead of completing singular tasks. </p>
            </div>

            <div class="item">
              <h3>Mining node owners</h3>
              <p>you can purchase the right to a certain amount of mining tokens (mining tokens are unique ERC721 standard). Every mining token will provide your wallet with 40% of erc20 tokens it mined daily. Overall daily mined reward is distributed evenly between all mining nodes. </p>
            </div>

          </div>
          <div class="col">

            <div class="item">
              <h3>Participate in Hyperloot marketing and bounties</h3>
              <p>Completing activities is rewarded with tokens.</p>
            </div>

            <div class="item">
              <h3>Hyperloot fund grants</h3>
              <p>The fund will provide financing for selected developers. You can send us a request and we will make sure to review it.</p>
            </div>

            <div class="item">
              <h3>Purchasing at a DAX</h3>
              <p>We are currently listing tokens, they will soon become available at selected exchanges.</p>
            </div>

          </div>
        </div>

        <img src="~/assets/token_page/tokenomics_diagram.png" alt="Tokenomics diagram" class="mobile-hidden">
        <img src="~/assets/token_page/tokenomics_diagram_mobile.png" alt="Tokenomics diagram mobile" class="desktop-hidden">

      </div>

    </section>

    <section class="faq-section">

      <div class="container">

        <h2>FAQ<span>.</span></h2>

        <div class="faq-block">

          <div class="faq-item">
            <div class="question">
              <h3>The fund, DAO, mining nodes, what are those and why do we need them?</h3><div class="status opened"></div>
            </div>
            <div class="answer">
              <p>DAO is essentially the team of Hyperloot. DAO uses its tokens to daily improve the product. DAO is the entity that pays for the protocol improvement. However, it does not spend money or tokens on anything else. If you consider yourself up to the task – come join us!</p>
              <p>The fund works as a usual investment fund. It is tasked with finding great games and supporting their development. You can send us a request here. </p>
              <p>Hyperloot fund is also interested in partnerships and integrations. If you are interested in adopting our protocol but require help to do so, make sure to hit us up!</p>
              <p>Mining nodes are an ERC721 tokens that provide an equal part of mined tokens to the owner’s wallet on a daily basis. It is a way to comfortably invest in protocol development and an equal opportunity to participate for everyone. They are sold for HLT tokens. To purchase a mining token you’ll need to send a required amount of HLT tokens to the smart contract. </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="question">
              <h3>How can the tokens be used?</h3><div class="status opened"></div>
            </div>
            <div class="answer">
              <p>You can use them to pay within the Hyperloot marketplace. They are not the only ones accepted but any HLT transaction within the marketplace bears no transaction fee.</p>

              <p>HLT is used as a deposit. When a developer creates new crypto-assets he is required to freeze a compatible amount of HLT. These tokens are not used as a payment, we have no interest in charging developers. It is a way for us to protect the assets and increase the marketplace quality. Во время выпуска предметов внутри системы вам потрубется заморозить кратное количество HLT у себя на счету.</p>

              <p>
                Mining tokens can only be purchased using HLT.<br>
                DAO uses tokens to pay for the development tasks.<br>
                Hyperloot also pays bounties and rewards using HLT.<br>
                Hyperloot invests using HLT.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="question">
              <h3>How can I partake in development?</h3><div class="status opened"></div>
            </div>
            <div class="answer">
              <p>You can just purchase some HLT tokens and hodl them. They will gain value as more developers join and produce more assets.</p>
              <p>You can also purchase a node and participate in mining. More details can be seen within the smart contract, but you’ll require about 10 000 HLT + per node. Every 30 days the price is raised by 1000 HLT.</p>
            </div>
          </div>

        </div>

        <a href="#" class="button-link button-link-red">
          Apply whitelist
        </a>

      </div>

    </section>

  </div>

</template>

<style scoped>

  section p {
    font-size: 1.4rem;
  }

  section h2, h3, h4 {
    font-family: 'Gilroy-Bold';
  }

  section .container {
    max-width: 70.5%;
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
    line-height: 1.5;
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

  .tokenomics {
    padding: 10rem  0 12rem 0;
    background-color: #f5f6f8;
    background-position: left bottom;
    background-repeat: no-repeat;
    background-image: url(~/assets/token_page/tokenomic_bg.png);
  }

  .tokenomics h2 {
    font-size: 3rem;
    margin-top: 0;
  }

  .tokenomics h3 {
    font-size: 2.4rem;
    margin-bottom: 4rem;
  }

  .tokenomics >>> p {
    margin-bottom: 2.4rem;
    color: #5c646e;
  }

  .tokenomics img {
    width: 100%;
    height: auto;
  }

  .desktop-hidden {
    display: none;
  }

  .token-receive-options {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7rem;
  }

  .token-receive-options .col {
    width: 47.5%;
  }

  .token-receive-options .item:not(:last-of-type){
    margin-bottom: 3rem;
  }

  .token-receive-options .item h3 {
    margin-top: 0;
    font-size: 14px;
    margin-bottom: 1.6rem;
    font-family: 'Gilroy-Bold';
    text-transform: uppercase;
    color: #55606c;
  }

  .token-receive-options .item p {
    line-height: 1.5;
  }

  .faq-section {
    padding: 6rem 0rem 12rem 0;
  }

  .faq-section h2 {
    font-family: 'BebasNeueBold';
    font-size: 6rem;
    text-transform: uppercase;
    margin-top: 0rem;
  }

  .faq-section h2 span{
    color: #f53743;
  }

  .faq-item .question {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .faq-item .question h3  {
    margin: 0;
    font-size: 2rem;
  }

  .faq-item .question .status {
    height: 3.6rem;
    width: 3.6rem;
    background-color: #fff;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .faq-item .question .status.opened {
    background-image: url(~/assets/token_page/arrow.png);
  }

  .faq-item .question .status.close {
    background-image: url(~/assets/token_page/arrow.png);
    transform: rotate(180deg);
  }

  .faq-item {
    box-sizing: border-box;
    padding: 3.2rem;
    margin-bottom: 0.5rem;
    border-radius: 1.6rem;
    background-color: #f0f2f5;
  }

  .faq-item .answer p {
    line-height: 1.5;
    padding-right: 20%;
  }

  .button-link {
    display: block;
    margin: 6rem auto 0 auto;
    font-family: 'Gilroy-Bold';
    padding: 1.6rem 10rem;
    border-radius: 2.3rem;
    font-size: 1.4rem;
    text-align: center;
    width: 12.5%;
  }

  .button-link.button-link-red {
    color: #fff;
    background-color: #f53743;
    box-shadow: 0px 6px 14.22px 3.78px rgba(245, 55, 67, 0.22);
  }

  @media (max-width: 1440px) {

    section .container {
      max-width: 72.5%;
    }

    .token-section {
      background-size: 47.5%;
    }

    .token-section-content {
      min-width: 44.5%;
      margin: 20% 20% 20% 14.25%;
    }

    .faq-item .answer p {
      padding-right: 10%;
    }

  }

  @media (max-width: 1368px) {

    .token-section {
      background-size: 42.5%;
    }

    .token-section-content {
      min-width: 50%;
      margin: 15% 20% 20% 14.25%;
    }

  }

  @media (max-width: 1024px) {

    .token-section-content {
      min-width: 70%;
      margin: 25% 20% 20% 14.25%;
      background-size: 36.5%;
    }

    .button-link {
      width: 17.5%;
    }

  }

  @media (max-width: 768px) {

    section .container {
      max-width: 84.5%;
    }

    .faq-section {
      padding-bottom: 14rem;
    }

    .token-section-content {
      min-width: 85%;
      margin: auto auto auto auto;
      background-size: 52.5%;
    }

  }

  @media (max-width: 700px) {

    .token-section h1 {
      font-size: 3.6rem;
    }

    .token-section-content {
      margin-top: 45%;
      min-width: 84.375%;
      max-width: 84.375%;
    }

    .token-section {
      background-size: 45%;
    }

    .token-section p {
      padding-right: 20%;
    }

    .token-section .info {
      flex-wrap: wrap;
    }

    .token-section .info .info-item {
      width: 33%;
    }

    .token-section .info .info-item:last-of-type {
      width: 50%;
    }

    .token-section .info .info-item span {
      margin-bottom: 0.5rem;
    }

    .token-section .info .info-item.type {
      margin-left: 0;
    }

    .token-section .info .info-item:first-of-type {
      margin-bottom: 3rem;
    }

    .tokenomics {
      padding: 3.6rem 0;
      background-image: url(~/assets/token_page/tokenomic_mobile_bg.png);
      background-position: left bottom;
      background-size: cover;
    }

    .tokenomics h2 {
      font-size: 2.4rem;
    }

    .token-receive-options {
      flex-wrap: wrap;
    }

    .token-receive-options .col {
      width: 100%;
    }

    .token-receive-options {
      margin-bottom: 2rem;
    }

    .mobile-hidden  {
      display: none;
    }

    .desktop-hidden {
      display: block;
    }

    .faq-section {
      padding-bottom: 2.4rem;
    }

    .faq-section h2 {
      margin-bottom: 4rem;
    }

    .faq-item {
      padding: 1.6rem;
    }

    .faq-item .question .status {
      min-width: 3.6rem;
      align-self: flex-start;
    }

    .button-link {
      margin-top: 2.4rem;
      padding: 1.6rem 0;
      box-sizing: border-box;
      width: 100%;
    }

  }

</style>

