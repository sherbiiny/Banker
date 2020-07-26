<template>
  <header id="Header">
    <div class="overlay"></div>

    <!-- Navbar -->
    <nav>
      <div class="brand"><a href='#Header'>Banker<span>.</span></a></div>
      <ul class="nav-links">
        <li><a class='nav-link' href="#Header" data-id='Shopping'>Home</a></li>
        <li>
          <a class='nav-link' href="#About" data-id='About'>About Us</a><i class="fa fa-chevron-down"></i>
          <ul class="about-links">
            <li><a class='nav-link' href="#Team" data-id='Team'>Team</a></li>
            <li><a class='nav-link' href="#Pricing" data-id='Pricing'>Pricing</a></li>
            <li><a class='nav-link' href="#FAQ" data-id='FAQ'>FAQ</a></li>
            <li><a class='nav-link' href="#Gallery" data-id='Gallery'>Gallery</a></li>
            <li><a class='nav-link' href="#Services" data-id='Services'>Services</a></li>
            <li><a class='nav-link' href="#Testimonials" data-id='Testimonials'>Testimonials</a></li>
          </ul>
        </li>
        <li><a class='nav-link' href="#Blog" data-id='Blog'>Blog</a></li>
        <li><a class='nav-link' href="#Contact" data-id='Contact'>Contact</a></li>
        <div class="icons">
          <i class="fa fa-facebook-f"/>
          <i class="fa fa-twitter"/>
          <i class="fa fa-linkedin"/>
        </div>
      </ul>
    </nav>
    <div class="middle-content">
      <div class="slide">
        <h1>Banking Solutions</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!</p>
      </div>
      <div class="slide">
        <h1>Financing Solutions</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!</p>
      </div>
      <div class="slide">
        <h1>Saving Solutions</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate suscipit, magnam libero velit esse sapiente officia inventore!</p>
      </div>
    </div>
  </header>
</template>

<script>
import $ from 'jquery'
import slick from 'slick-carousel'

export default {
  name: 'Header',
  data() {
    return {
      slick,
      page: null
    }
  },

  mounted() {

    // Navbar transformation
    let mains = $('main').splice(1)

    onscroll = () => {
      if(pageYOffset > 0) {
        $('nav').addClass('active')
      } else {
        $('nav').removeClass('active')
      }

      let bScroll = $(document).scrollTop()

      for (var i = 0; i < mains.length; i++) {


        var sHeight = $(mains[i]).height();
        var offsets = $(mains[i]).position().top;

        if (bScroll > offsets && bScroll < offsets + sHeight) {
          this.page = $(mains[i]).attr('id')
        }
      }

      $.each($('nav a.nav-link'), (i, a) => {
        if($(a).attr('data-id') == this.page) $(a).addClass('active')
        else $(a).removeClass('active')
      })
    }

    // Slick
    $('.middle-content').slick({
      autoplay: true,
      arrows: false,
    })
  }
}
</script>

<style lang="scss">
@import '../../node_modules/slick-carousel/slick/slick.css';
@import '../../node_modules/slick-carousel/slick/slick-theme.css';
@import '../assets/sass/config';

header#Header {
  position: relative;
  height: 100vh;
  background-image: url('../assets/images/hero_2.jpg');
  background-size: cover;
  background-position: center;
  user-select: none;

  .overlay {
    @include overlay();
    background: rgba(184, 178, 166, 0.7)
  }

  nav {
    position: fixed;
    z-index: 5000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid #EEE6;
    transition: .3s;

    .brand {
      font-size: 2rem;
      margin: 10px 80px;
      cursor: pointer;
      a {
        color: #FFF;

        span {
          color: $primary
        }
      }

    }

    ul {

      &.nav-links {
        display: flex;
        height: 100%;
        align-items: center;
        margin-left: 50px;

        li {
          margin-right: 50px;
          color: #EEE;
          height: 100%;
          display: flex;
          align-items: center;
          
          a {
            color: #EEE;
            transition: .3s;

            &.active {
              color: #FFF
            }

            &:hover {
              color: #FFF;
            }
          }

          .fa-chevron-down {
            font-size: .6rem;
            top: 0;
            margin-left: 8px;
            position: relative;
            transition: .2s;
          }

          &:nth-child(2) {
            position: relative;

            ul {
              position: absolute;
              background: #FFF;
              border-top: 2px solid $primary;
              padding: 0;
              top: 80px;
              left: -28x;
              opacity: 0;
              display: block;
              visibility: hidden;
              transition: .3s;

              &:hover {
                visibility: visible;
                opacity: 1;
                top: 62px;
              }

              li {
                margin: 0;
                margin-bottom: 10px;
                padding: 12px;
                padding-right: 100px;
                cursor: pointer;

                &:last-child {
                  margin-bottom: 0;
                }

                &:hover {
                  background: #EEE;
                }

                a {
                  color: #000;
                }
              }
            }
            
            &:hover {
              ul {
                visibility: visible;
                opacity: 1;
                top: 62px;
              }
            }
          }
        }
      }

      &.about-links {
        display: none;

        .active {
          color: $primary !important;
        }
      }

      .icons {
        i {
          color: #EEE;
          margin-right: 20px;
          cursor: pointer;
          transition: .3s;

          &:hover {
            color: #FFF
          }
        }
      }
    }

    &.active {
      background: #FFF;
      box-shadow: 0 5px 20px 0 #0001;

      .brand a {
        color: $primary
      }

      ul {
        li {
          a, .fa-chevron-down {
            color: #000;

            &.active {
              color: $primary
            }
          }

          &:hover {
            a, i {
              color: $primary;
            }
          }
        }

        .icons {
          i {
            color: #000;

            &:hover {
              color: $primary;
            }
          }
        }
      }
    }
  }

  .middle-content {
    z-index: 4999;
    position: absolute;
    top: 45%;
    left: 50%;
    width: 70%;
    transform: translate(-50%, -50%);
    color: #FFF;

    .slide {
      text-align: center;
      outline: none;

      h1 {
        font-size: 4rem;
        margin-bottom: 10px;
        text-transform: uppercase;
        font-weight: 900;
      }

      p {
        font: 300 1.4rem Roboto;
      }

      &:active {
        cursor: grab;
      }
    }
  }
}
</style>