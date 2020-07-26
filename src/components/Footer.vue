<template>
  <footer>
    <section class="section-1">
      <div class="field">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
      </div>
      <div class="field">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#About">Terms</a></li>
          <li><a href="#About">Policy</a></li>
          <li><a href="#About">About Us</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Testimonials">Testimonials</a></li>
          <li><a href="#Contact">Contact Us</a></li>
        </ul>
      </div>
      <div class="field">
        <h2>Follow Us</h2>
        <div>
          <i class="fa fa-facebook"></i>
          <i class="fa fa-twitter"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-linkedin"></i>
        </div>
      </div>
      <div class="field">
        <h2>Subscribe Newsletter</h2>
        <form>
          <input type="email" placeholder="Enter Email">
          <button>Send</button>
        </form>
      </div>
    </section>
    <p>Copyright ©2020 All rights reserved | This template is made with <i class="fa fa-heart"></i> by El Zayat</p>
  </footer>
</template>

<style lang="scss">
@import '../assets/sass/config';

footer {
  background: #343a40;
  padding: 100px 50px;
  color: #FFF;

  > p {
    text-align: center;
    margin-top: 50px;
    color: $footer-text;

    i {
      color: lighten($color: crimson, $amount: 10);
      margin: 0 5px;
    }
  }

  .section-1 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 100px;

    .field {
      h2 {
        font-size: 1.1rem;
        margin-bottom: 20px;
      }

      p {
        color: $footer-text;
        line-height: 1.7;
        font-weight: 400;
      }

      li {
        margin: 10px 0;

        a {
          color: $footer-text
        }
      }

      i {
        margin-right: 30px;
        color: $footer-text;
      }

      form {
        display: flex;
        align-items: center;
        
        input {
          height: 45px;
          width: 200px;
          padding: 0 10px;
          border-top-left-radius: 25px;
          border-bottom-left-radius: 25px;
          border: 1px solid #FFF;
          background: transparent;
          color: $footer-text;
          font-size: 1.2rem;

          &::placeholder {
            font-style: italic;
          }
        }

        button {
          height: 47px;
          background: #FFF;
          color: #000;
          border: none;
          padding: 0 20px;
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px;
          cursor: pointer;
          font-size: 1.0rem;
        }        
      }
    }
  }
}
</style>