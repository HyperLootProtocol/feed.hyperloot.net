<template>

  <div class="airdrop-banner">
    <div class="content">
      Hyperloot AirDrop is started <a target="_blank" href="https://t.me/HyperlootAirdropBot">Claim your HLT Now</a>
    </div>
  </div>

</template>

<style>

.airdrop-banner {
  position: relative;
  overflow: hidden;
  padding: 1.2rem 0;
  color: #fff;
  background-color: #f53442;
}

.airdrop-banner:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 8%;
  display: block;
  width: 23rem;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(~/assets/tyan_2.png);
  z-index: 10;
}

.airdrop-banner:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10%;
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(~/assets/etiHLT.png);
  pointer-events: none;
}

.airdrop-banner .content {
  position: relative;
  align-items: center;
  display: flex;
  font-size: 3.6rem;
  margin-left: 27.5%;
}

.airdrop-banner .content a {
  margin-left: 3.2rem;
  padding: 1.6rem 2rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: #fff;
  border: 3px solid #fff;
  cursor: pointer;
  transition: 0.3s ease;
}

.airdrop-banner .content a:hover {
  color: #f53442;
  background-color: #fff;
}

@media (max-width: 1440px) {

  .airdrop-banner:after {
    left: 3.5%;
  }

}

@media (max-width: 1368px) {

  .airdrop-banner:after {
    left: 2.5%;
  }

}

@media (max-width: 1024px) {

  .airdrop-banner .content {
    font-size: 2.4rem;
    z-index: 10;
  }

  .airdrop-banner:after {
    background-size: cover;
  }

}

@media (max-width: 768px) {

  .airdrop-banner .content {
    font-size: 1.8rem;
  }

  .airdrop-banner:before {
    left: 4%;
  }

  .airdrop-banner:after {
    display: none;
  }

  .airdrop-banner {
    margin-top: 5rem;
  }
}

@media (max-width: 740px) {

  .airdrop-banner:before {
    left: 4%;
    display: none;
  }

  .airdrop-banner:after {
    left: 0;
    display: block;
    background-size: cover;
  }

  .airdrop-banner .content {
    justify-content: space-between;
    font-size: 1.4rem;
    margin-left: 0;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }

  .airdrop-banner .content a {
    font-size: 1.4rem;
    margin-left: 1.6rem;
    background-color: #f53442;
    padding: 1rem 0.8rem;
  }

}

@media (max-width: 340px) {

  .airdrop-banner:before {
    left: 0;
    display: block;
  }

  .airdrop-banner:after {
    display: none;
  }

  .airdrop-banner .content {
    max-width: 60%;
    flex-wrap: wrap;
    margin-left: auto;
    padding: 0;
  }

  .airdrop-banner .content a {
    margin-top: 0.6rem;
    margin-left: 0;
    border-width: 0.2rem;
    padding: 0.4rem 1rem;
  }

}

</style>

<script>

export default {
  name: 'AirDropBanner'
}

</script>
