<template>
  <main id="Gallery" data-aos='fade-in'>
    <h1 class="section-heading">Gallery</h1>
    <div class="btns">
      <button class="active" @click='btnClicked' data-filter='all'>All</button>
      <button @click='btnClicked' data-filter='event'>Events</button>
      <button @click='btnClicked' data-filter='party'>Party</button>
      <button @click='btnClicked' data-filter='holiday'>Holidays</button>
    </div>
    <div class="gallery">

      <div class="item event">
        <img src="../assets/images/Gallery/events1.jpg">
        <div class="overlay">
          <i class="fa fa-search"></i>
        </div>
      </div>

      <div class="item event">
        <img src="../assets/images/Gallery/events2.jpg">
        <div class="overlay">
          <i class="fa fa-search"></i>
        </div>
      </div>

      <div class="item holiday">
        <img src="../assets/images/Gallery/holiday1.jpg">
        <div class="overlay">
          <i class="fa fa-search"></i>
        </div>
      </div>

      <div class="item party">
        <img src="../assets/images/Gallery/party1.jpg">
        <div class="overlay">
          <i class="fa fa-search"></i>
        </div>
      </div>

      <div class="item event">
        <img src="../assets/images/Gallery/events3.jpg">
        <div class="overlay">
          <i class="fa fa-search"></i>
        </div>
      </div>

      <div class="item party">
        <img src="../assets/images/Gallery/party2.jpg">
        <div class="overlay">
          <i class="fa fa-search"></i>
        </div>
      </div>

      <div class="item holiday">
        <img src="../assets/images/Gallery/holiday2.jpg">
        <div class="overlay">
          <i class="fa fa-search"></i>
        </div>
      </div>

      <div class="item holiday">
        <img src="../assets/images/Gallery/holiday3.jpg">
        <div class="overlay">
          <i class="fa fa-search"></i>
        </div>
      </div>

      <div class="item event">
        <img src="../assets/images/Gallery/events4.jpg">
        <div class="overlay">
          <i class="fa fa-search"></i>
        </div>
      </div>

      <div class="item holiday">
        <img src="../assets/images/Gallery/holiday4.jpg">
        <div class="overlay">
          <i class="fa fa-search"></i>
        </div>
      </div>

      <div class="item party">
        <img src="../assets/images/Gallery/party3.jpg">
        <div class="overlay">
          <i class="fa fa-search"></i>
        </div>
      </div>

      <div class="item event">
        <img src="../assets/images/Gallery/events5.jpg">
        <div class="overlay">
          <i class="fa fa-search"></i>
        </div>
      </div>

    </div>

  </main>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Gallery',

  data() {
    return {

    }
  },

  methods: {
    btnClicked(e) {
      let btnClass = $(e.target).attr('data-filter');

      // Change active button
      $(e.target).siblings().removeClass('active')
      $(e.target).addClass('active')

      // Switch between genres 
      $.each($('.gallery .item'), (i, item) => {
        if(item.classList.contains(btnClass)) $(item).fadeIn(0) 
        else if(btnClass == 'all') $(item).fadeIn(0) 
        else $(item).fadeOut(0)
      })
    }
  },
}
</script>

<style lang="scss">
@import '../../node_modules/aos/dist/aos.css';
@import '../../node_modules/fancybox/dist/css/jquery.fancybox.css';
@import '../assets/sass/config';

main#Gallery {
  margin-top: 50px;
  padding: 50px;
  padding-top: 150px;
  min-height: 1069px;

  .btns {
    text-align: center;
    margin: 50px 0;

    button {
      border: none;
      background: rgba(52, 58, 64, 0.05);
      padding: 10px 25px;
      margin: 0 20px;
      border-radius: 25px;
      font: 500 1rem Roboto;
      color: #444;
      transition: .3s;
      cursor: pointer;

      &.active, &:hover {
        background: $primary;
        color: #EEE;
      }
    }
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;

    .item {
      position: relative;
      margin-bottom: 30px;
      cursor: pointer;
      transition: .5s;

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 5px;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .4s;

        i {
          color: #EEE;
          font-size: 1.5rem;
          transform: scale(0);
          transition: .4s;
        }
      }

      &:hover {
        .overlay {
          background: #0005;
        }

        i {
          transform: scale(1);
        }
      }
    }
  }
}
</style>