<template>
  <main id='Services'>
    <h1 class="section-heading">Our Services</h1>
    <div class="wrapper">
      
      <div class="service aos">
        <div class="svg">
          <img src="../assets/images/flaticon-svg/svg/001-wallet.svg">
        </div>
        <h4>Business Consulting</h4>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <a class="prim-text">Learn More</a>
      </div>

      <div class="service aos" data-aos-delay='100'>
        <div class="svg">
          <img src="../assets/images/flaticon-svg/svg/006-credit-card.svg">
        </div>
        <h4>Credit Card</h4>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <a class="prim-text">Learn More</a>
      </div>

      <div class="service aos" data-aos-delay='200'>
        <div class="svg">
          <img src="../assets/images/flaticon-svg/svg/002-rich.svg">
        </div>
        <h4>Income Monitoring</h4>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <a class="prim-text">Learn More</a>
      </div>

      <div class="service aos">
        <div class="svg">
          <img src="../assets/images/flaticon-svg/svg/003-notes.svg">
        </div>
        <h4>Insurance Consulting</h4>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <a class="prim-text">Learn More</a>
      </div>

      <div class="service aos" data-aos-delay='100'>
        <div class="svg">
          <img src="../assets/images/flaticon-svg/svg/004-cart.svg">
        </div>
        <h4>Financial Investment</h4>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <a class="prim-text">Learn More</a>
      </div>

      <div class="service aos" data-aos-delay='200'>
        <div class="svg">
          <img src="../assets/images/flaticon-svg/svg/005-megaphone.svg">
        </div>
        <h4>Financial Management</h4>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <a class="prim-text">Learn More</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style lang="scss">
@import '../assets/sass/config';

main#Services {
  background: #F8F9FA;
  margin-top: 50px;
  padding: 50px;
  padding-top: 100px;

  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 100px;
    padding: 20px;
    margin-top: 20px;

    .service {
      margin-bottom: 50px;

      .svg {
        width: 25%
      }

      h4 {
        font-size: 1.4rem;
        margin: 10px 0;
      }

      p {
        line-height: 1.7;
        color: gray;
        font-weight: 400;
        font-size: 1rem;
        margin-bottom: 30px;
      }

      a {
        cursor: pointer;
        transition: .3s;

        &:hover {
          color: darken($color: $primary, $amount: 15)
        }
      }
    }
  }
}
</style>