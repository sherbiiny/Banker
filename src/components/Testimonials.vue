<template>
  <main id='Testimonials' data-aos='fade-in' data-aos-delay='400'>
    <h1 class="section-heading">Happy Customers</h1>
    <div class="owl-carousel">
      
      <div class="item">
        <blockquote>“The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.”</blockquote>
        <div class="person">
          <img src="../assets/images/person_1.jpg">
          <span>Natalie Jesus</span>
        </div>
      </div>

      <div class="item">
        <blockquote>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</blockquote>
        <div class="person">
          <img src="../assets/images/person_2.jpg">
          <span>Tammy Abraham</span>
        </div>
      </div>

      <div class="item">
        <blockquote>“A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”</blockquote>
        <div class="person">
          <img src="../assets/images/person_3.jpg">
          <span>Kevin De Bruyne</span>
        </div>
      </div>

      <div class="item">
        <blockquote>“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”</blockquote>
        <div class="person">
          <img src="../assets/images/person_4.jpg">
          <span>Eden Hazard</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import 'owl.carousel'
import AOS from 'aos'

export default {
  name: 'Testimonials',

  mounted() {
    $('.owl-carousel').owlCarousel({
      items: 1,
      dots: true,
      smartSpeed: 1000
    })
  },

  created() {
    AOS.init({
      once: true,
      duration: 1000,
      delay: 300
    })
  },
}
</script>

<style lang="scss">
@import '../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css';
@import '../assets/sass/config';

main#Testimonials {
  padding: 50px;
  padding-top: 100px;
  margin-top: 50px;

  .owl-carousel {
    text-align: center;
    margin-top: 50px;

    .item {
      blockquote {
        font-size: 1.5rem;
        color: grey;
        max-width: 75%;
        margin: auto;
        line-height: 1.7;
        font-style: italic;
      }

      .person {
        max-width: 30%;
        margin: 50px auto;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          margin-right: 20px;
        }

        span {
          color: #777;
        }
      }
    }

    .owl-dots {
      .owl-dot {
        background: #EEE;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 10px;

        &.active {
          background: $primary
        }
      }
    }
  }
}
</style>

