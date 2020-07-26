<template>
  <main id='About'>
    <h1 class="section-heading aos">About Us</h1>
    <p class="section-p aos">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
    <section>
      <div class="field aos" data-aos-delay='100'>
        <img src="../assets/images/hero_1.jpg">
        <figure data-aos='fade-in' data-aos-delay='300' data-aos-once='true'></figure>
      </div>
      <div class="field aos" data-aos-delay='200'>
        <h4>We Solve Your Financial Problem</h4>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss">
@import '../assets/sass/config';

main#About {
  margin-top: 100px;
  padding: 50px;
  padding-top: 100px;

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    margin-top: 50px;

    .field:nth-child(1) {
      position: relative;

      figure {
        position: relative;
        z-index: -1;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: #f8f9fa;
        position: absolute;
        top: 163px;
        left: 372px;
      }
    }

    .field:nth-child(2) {
      margin-left: 50px;

      h4 {
        font-size: 2.0rem;
        font-weight: 400;
        margin-bottom: 30px;
      }

      p {
        color: #666;
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 20px;
        font-weight: 300;
        max-width: 90%;
      }
    }
  }
}

</style>