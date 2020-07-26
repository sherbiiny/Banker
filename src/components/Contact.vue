<template>
  <main id='Contact' data-aos='fade-in'>
    <h1 class="section-heading">Contact Us</h1>
    <section class="section-1">
      <div class="field">
        <i class="fa fa-map-marker fa-2x prim-text"></i>
        <p class="grey">203 Fake St. Mountain View, San Francisco, California, USA</p>
      </div>
      <div class="field">
        <i class="fa fa-phone fa-2x prim-text"></i>
        <p class="prim-text">+1 232 3235 324</p>
      </div>
      <div class="field">
        <i class="fa fa-envelope fa-2x prim-text"></i>
        <p class="prim-text">youremail@domain.com</p>
      </div>
    </section>

    <section class="section-2">
      <h2>Contact Form</h2>
      <form>
        <div class="name">
          <div class="field">
            <label>First Name</label>
            <input type="text">
          </div>

          <div class="field">
            <label>Last Name</label>
            <input type="text">
          </div>
        </div>

        <div class="field">
          <label>Email</label>
          <input type="email">
        </div>

        <div class="field">
          <label>Subject</label>
          <input type="text">
        </div>

        <div class="field">
          <label>Message</label>
          <textarea placeholder='Write your notes or questions here...'></textarea>
        </div>
        <button>Send Message</button>
      </form>
    </section>
  </main>
</template>

<style lang="scss">
@import '../assets/sass/config';

main#Contact {
  background: #F8F9FA;
  padding: 100px 50px 150px;

  .section-1 {
    display: grid;
    margin-top: 50px;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 50px;

    .field {
      text-align: center;
      max-width: 90%;
      margin: auto;

      i {
        margin-bottom: 10px;
      }

      .grey {
        color: grey;
        font-weight: 400;
      }
    }
  }

  .section-2 {
    background: #FFF;
    padding: 50px;
    margin-top: 30px;

    form {
      margin-top: 50px;

      .name {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
      }
      
      .field {
        width: 100%;
        display: grid;
        margin: 20px 0;
        
        input {
          margin: 10px 0;
          height: 45px;
          border-radius: 30px;
          border: 1px solid #CCC;
          padding: 0 15px;
          font-size: 1.2rem;
          transition: .2s;
          color: #444;

          &:focus {
            border: 1px solid $primary;
          }
        }

        textarea {
          margin: 10px 0;
          resize: vertical;
          border: 1px solid #CCC;
          border-radius: 20px;
          min-height: 100px;
          padding: 8px;
          font-size: 1.1rem;
          transition: border .2s;

          &:focus {
            border: 1px solid $primary;
          }
        }
      }

      button {
        background: $primary;
        color: #FFF;
        padding: 10px 25px;
        font-size: 1.05rem;
        border-radius: 25px;
        border: none;
        cursor: pointer;
        transition: .3s;
        
        &:hover {
          background: darken($primary, 5)
        }
      }
    }
  }
}
</style>