<template>
  <main id='Shopping'>
    <section>

      <div class="field aos">
        <div class="img">
          <img src="../assets/images/flaticon-svg/svg/001-wallet.svg">
        </div>
        <h3>Money Saving</h3>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
      </div>

      <div class="field aos" data-aos-delay='200'>
        <div class="img">
          <img src="../assets/images/flaticon-svg/svg/004-cart.svg">
        </div>
        <h3>Money Saving</h3>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
      </div>

      <div class="field aos" data-aos-delay='300'>
        <div class="img">
          <img src="../assets/images/flaticon-svg/svg/006-credit-card.svg">
        </div>
        <h3>Money Saving</h3>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
      </div>

    </section>

    <section>

      <div class="field aos">
        <img src="../assets/images/about_2.jpg">
        <figure data-aos='fade-in' data-aos-delay='500' data-aos-once='true'></figure>
      </div>

      <div class="field aos" data-aos-delay='200'>
        <h2>Amortization Computation</h2>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <ul>
          <li><i class="fa fa-check"></i> Officia quaerat eaque neque</li>
          <li><i class="fa fa-check"></i> Lorem ipsum dolor sit amet</li>
          <li><i class="fa fa-check"></i> Consectetur adipisicing elit</li>
        </ul>
        <form>
          <input type="email" placeholder="Enter Your Email">
          <button>Submit Email</button>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Shopping',
  data() {
    return {
      $,  
    }
  },
}
</script>

<style lang="scss">
@import '../assets/sass/config';

main#Shopping {
  margin-top: 70px;

  section:nth-child(1) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 50px;
    padding: 50px;

    .field {
      text-align: center;

      .img {
        width: 25%;
        margin: auto
      }

      h3 {
        font-size: 1.4rem;
        font-weight: 400;
        margin-top: 20px;
      }

      p {
        color: #555;
        max-width: 300px;
        margin: auto;
        margin-top: 10px;
      }
    }
  }

  section:nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    padding: 50px;

    .field {
      padding: 20px;

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

      &:nth-child(2) {
        margin-left: 50px;

        h2 {
          font-size: 1.8rem;
          font-weight: 400;
          margin-bottom: 30px;
        }
  
        p {
          color: #666;
          margin-bottom: 20px;
        }

        li {
          margin: 20px 0;

          i {
            font-weight: 100;
            color: limegreen;
            margin-right: 10px;
          }
        }

        form {
          margin-top: 50px;

          input {
            padding: 10px 20px;
            border-radius: 25px;
            border: 1px solid #9995;
            width: 250px;
            font-size: 1.2rem;
            outline: none;

            &::placeholder {
              font-weight: 100;
              font-size: 1rem
            }
          }

          button {
            background: $primary;
            padding: 12px 20px;
            border-radius: 24px;
            color: #FFF;
            font-size: 1rem;
            border: none;
            cursor: pointer;
            margin-left: 10px;
          }
        }
      }

    }
  }
}

</style>