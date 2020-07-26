<template>
  <main id="Team">
    <h1 class="section-heading aos">Meet Team</h1>
    <p class="section-p aos">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    <section class="crew">

      <div class="member aos">
        <div class="img">
          <img src="../assets/images/person_5.jpg">
          <div class="sidebar">
            <i class="fa fa-facebook-f"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-linkedin"></i>
          </div>
        </div>
        <div class="info">
          <h4>Kaiara Spencer</h4>
          <h6>Finance Manager</h6>
        </div>
      </div>
      

      <div class="member aos" data-aos-delay='100'>
        <div class="img">
          <img src="../assets/images/person_6.jpg">
          <div class="sidebar">
            <i class="fa fa-facebook-f"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-linkedin"></i>
          </div>
        </div>
        <div class="info">
          <h4>Dave Simpson</h4>
          <h6>Marketing Manager</h6>
        </div>
      </div>

      <div class="member aos" data-aos-delay='200'>
        <div class="img">
          <img src="../assets/images/person_7.jpg">
          <div class="sidebar">
            <i class="fa fa-facebook-f"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-linkedin"></i>
          </div>
        </div>
        <div class="info">
          <h4>Karlie Madison</h4>
          <h6>Accountant</h6>
        </div>
      </div>

      <div class="member aos" data-aos-delay='300'>
        <div class="img">
          <img src="../assets/images/person_8.jpg">
          <div class="sidebar">
            <i class="fa fa-facebook-f"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-linkedin"></i>
          </div>
        </div>
        <div class="info">
          <h4>Kyla Stewart</h4>
          <h6>Accountant</h6>
        </div>
      </div>

      <div class="member aos" data-aos-delay='400'>
        <div class="img">
          <img src="../assets/images/person_1.jpg">
          <div class="sidebar">
            <i class="fa fa-facebook-f"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-linkedin"></i>
          </div>
        </div>
        <div class="info">
          <h4>Crystal Anderson</h4>
          <h6>Finance Manger</h6>
        </div>
      </div>

      <div class="member aos" data-aos-delay='500'>
        <div class="img">
          <img src="../assets/images/person_2.jpg">
          <div class="sidebar">
            <i class="fa fa-facebook-f"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-linkedin"></i>
          </div>
        </div>
        <div class="info">
          <h4>Jon Doe</h4>
          <h6>Bank Teller</h6>
        </div>
      </div>

      <div class="member aos" data-aos-delay='600'>
        <div class="img">
          <img src="../assets/images/person_3.jpg">
          <div class="sidebar">
            <i class="fa fa-facebook-f"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-linkedin"></i>
          </div>
        </div>
        <div class="info">
          <h4>Ben Thomas</h4>
          <h6>Bank Teller</h6>
        </div>
      </div>

      <div class="member aos" data-aos-delay='700'>
        <div class="img">
          <img src="../assets/images/person_4.jpg">
          <div class="sidebar">
            <i class="fa fa-facebook-f"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-linkedin"></i>
          </div>
        </div>
        <div class="info">
          <h4>Lionel Fathy</h4>
          <h6>Bank Teller</h6>
        </div>
      </div>

    </section>
  </main>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Team',
  data() {
    return {
      
    }
  },

  mounted() {
    $('.crew .img').css('height', ($('.crew .img').css('width')))

    onresize = () => {
      $('.crew .img').css('height', ($('.crew .img').css('width')))
    }
  }
}
</script>

<style lang="scss">
@import '../assets/sass/config';

main#Team {
  margin-top: 200px;
  padding: 50px;
  border-bottom: 1px solid #CCC8;
  padding-bottom: 150px;

  .crew {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 40px;
    margin-top: 80px;


    .member {
      margin-bottom: 20px;
      
      .img {
        position: relative;
        overflow: hidden;

        &:hover {
          .sidebar{
            transform: translateX(0%);
          }
        }

        .sidebar {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          margin: 0;
          background: $primary;
          color: #FFF;
          // padding: 5px;
          transform: translateX(-101%);
          transition: .5s;

          i {
            padding: 15px;
            display: block;
            cursor: pointer;
            transition: .3s;

            &:hover {
              background: darken($primary, 10);
            }
          }
        }
      }

      .info {
        margin-left: 10px;

        h4 {
          margin: 15px 0 5px;
          font-size: 1.2rem;
        }

        h6 {
          font-size: .8rem;
          text-transform: uppercase;
          color: #CCC;

        }
      }
    }
  }
}

</style>