<template>
  <main id='Works'>
    <h1 class="section-heading" data-aos='fade-up' data-aos-anchor-placement="bottom">How it Works?</h1>
    <p class="section-p aos">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>    
    <div class="carousels-wrapper">
      <div class="carousel-1">
        <div class="owl-carousel img-carousel" data-aos='fade-up'>
          <img src="../assets/images/slide_1.jpg">
          <img src="../assets/images/slide_2.jpg">
          <img src="../assets/images/slide_3.jpg">
        </div>

        <div class="triggers">
          <a href="" class="prev"><i class="fa fa-arrow-left"></i></a>
          <a href="" class="next"><i class="fa fa-arrow-right"></i></a>
        </div>
      </div>
      <div class="owl-carousel content-carousel" data-aos='fade-up' data-aos-delay='100'>
        <div class="content">
          <h2>01. Online Applications</h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          <button>Learn More</button>
        </div>
        <div class="content">
          <h2>02. Get an approval</h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          <button>Learn More</button>
        </div>
        <div class="content">
          <h2>03. Card delivery</h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import 'owl.carousel'
import AOS from 'aos'

export default {
  name: 'Works',
  data() {
    return {

    }
  },

  created() {
    AOS.init({
      duration: 1000
    })
  },

  mounted() {
    $(document).ready(() => {
      $('.img-carousel').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        smartSpeed: 1000,
        autoplay: true,
        pauseOnHover: true,
        mouseDrag: false,
        touchDrag: false,
      })
  
      $('.content-carousel').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        smartSpeed: 1000,
        autoplay: true,
        pauseOnHover: true,
        mouseDrag: false,
        touchDrag: false,
      });

      $('.next').click(e => {
        e.preventDefault();
        $('.owl-carousel').trigger('next.owl.carousel');
      });

      $('.prev').click(e => {
        e.preventDefault();
        $('.owl-carousel').trigger('prev.owl.carousel');
      });

    })
  },
}
</script>

<style lang="scss">
@import '../assets/sass/config';
@import '../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css';

main#Works{
  padding: 50px; 

  .carousels-wrapper {
    position: relative;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    max-width: 100vh;

    .carousel-1 {
      position: relative;
    }

    .triggers {
      position: absolute;
      top: 50%;
      left: 100%;
      transform: translate(-50%, -50%);
      background: $primary;
      z-index: 10;
      padding: 18px 0;
      border-radius: 15px;
      min-width: 140px;

      a {
        color: #FFF;
        padding: 25px;
        font-size: 18px;
      }
    }

    .owl-stage-outer {
      width: 540px;
    }

    .content-carousel {
      margin-left: 50px;

      h2 {
        color: $primary;
        font-size: 2.5rem;
        margin: 20px 0;
        font-weight: 800;
      }

      p {
        color: gray;
        font-size: 1.1rem;
        line-height: 1.7;
        max-width: 90%;
        font-weight: 400;
      }

      button {
        padding: 15px 30px;
        color: #FFF;
        background: $primary;
        border: none;
        font-size: 1.0rem;
        font-weight: 500;
        border-radius: 25px;
        margin-top: 60px;
        cursor: pointer;
      }
    }
  }
}
</style>