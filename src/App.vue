<template>
  <main id="app">
    <Header/>
    <Shopping/>
    <About/>
    <Team/>
    <Gallery/>
    <Works/>
    <Services/>
    <Testimonials/>
    <Pricing/>
    <FAQ/>
    <Blog/>
    <Contact/>
    <Footer/>
  </main>
</template>

<script>

// Components
import Header from './components/Header'
import Shopping from './components/Shopping'
import About from './components/About'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Works from './components/Works'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Libraries
import $ from 'jquery'
import AOS from 'aos'
import niceScroll from 'nicescroll'

export default {
  components: {
    Header,
    Shopping,
    About,
    Team,
    Gallery,
    Works,
    Services,
    Testimonials,
    Pricing,
    FAQ,
    Blog,
    Contact,
    Footer,
  },
  data() {
    return {
      $,
      niceScroll
    }
  },

  mounted() {

    // AOS
    $('.aos').attr('data-aos', 'fade-up')

    // Nice Scroll
    $('body').niceScroll({
      cursorcolor: '#fd7e14',
      cursorborder: 'none',
    })

    // Smooth Scroll
    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          });
        }
      }
    });

  },

  created() {
    AOS.init({
      duration: 1000
    })
  }
}
</script>

<style lang="scss">
@import '../node_modules/aos/dist/aos.css';
@import './assets/sass/config';
</style>
