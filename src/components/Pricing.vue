<template>
  <main id='Pricing'>
    <h1 class="section-heading aos">Pricing</h1>
    <div class="wrapper">
      
      <div class="card" data-aos='fade-up'>
        <div class="kind">Basic</div>
        <div class="price">$47 <span> / year</span></div>
        <p><i class="fa fa-check"></i> Officia quaerat eaque neque</p>
        <p><i class="fa fa-check"></i> Possimus aut consequuntur incidunt</p>
        <p class="disabled"><i class="fa fa-check"></i> Lorem ipsum dolor sit amet</p>
        <p class="disabled"><i class="fa fa-check"></i> Consectetur adipisicing elit</p>
        <p class="disabled"><i class="fa fa-check"></i> Dolorum esse odio quas architecto sint</p>
        <button>Buy Now</button>
      </div>

      <div class="card" data-aos='fade-up' data-aos-delay='200'>
        <div class="kind">Premium</div>
        <div class="price">$200 <span> / year</span></div>
        <p><i class="fa fa-check"></i> Officia quaerat eaque neque</p>
        <p><i class="fa fa-check"></i> Possimus aut consequuntur incidunt</p>
        <p><i class="fa fa-check"></i> Lorem ipsum dolor sit amet</p>
        <p><i class="fa fa-check"></i> Consectetur adipisicing elit</p>
        <p class="disabled"><i class="fa fa-check"></i> Dolorum esse odio quas architecto sint</p>
        <button>Buy Now</button>
      </div>

      <div class="card" data-aos='fade-up' data-aos-delay='400'>
        <div class="kind">Professional</div>
        <div class="price">$750 <span> / year</span></div>
        <p><i class="fa fa-check"></i> Officia quaerat eaque neque</p>
        <p><i class="fa fa-check"></i> Possimus aut consequuntur incidunt</p>
        <p><i class="fa fa-check"></i> Lorem ipsum dolor sit amet</p>
        <p><i class="fa fa-check"></i> Consectetur adipisicing elit</p>
        <p><i class="fa fa-check"></i> Dolorum esse odio quas architecto sint</p>
        <button>Buy Now</button>
      </div>
    </div>
  </main>
</template>

<script>
import AOS from 'aos'

export default {
  name: 'Pricing',

  created() {
    AOS.init({
      duration: 1000,
      delay: 400
    })
  },
}
</script>

<style lang="scss">
@import '../assets/sass/config'; 

main#Pricing {
  padding: 50px;
  padding-top: 100px;
  margin-top: 50px;
  background: #F8F9FA;

  .wrapper {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    padding: 20px;  

    .card {
      padding: 20px 40px;
      background: #FFF;

      .kind {
        text-align: center;
        font-size: 1.75rem;
        margin: 20px auto;
      }

      .price {
        text-align: center;
        color: $primary;
        font-size: 3rem;

        span {
          font-size: 1.0rem;
          color: #999;
        }
      }

      p {
        margin: 30px 0;
        color: grey;
        font-weight: 400;
        display: flex;

        i {
          margin-right: 10px;
          color: limegreen;
        }

        &.disabled {
          text-decoration: line-through;
          color: #dee2e6;

          i{
            color: #dee2e6;
          }
        }
      }

      button {
        background: #6c757d;
        color: #FFF;
        border: none;
        padding: 10px 25px;
        border-radius: 20px;
        font-size: 1rem;
        display: block;
        margin: 40px auto;
        transition: .3s;
        cursor: pointer;

        &:hover {
          background-color: darken(#6c757d, 10)
        }
      }

      &:nth-child(2) {
        margin: 0 50px;
        box-shadow: 0 0 20px 5px #0002;

        button {
          background: $primary
        }
      }
    }
  }
}
</style>