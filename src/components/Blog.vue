<template>
  <main id='Blog'>
    <h1 class="section-heading">Our Blog</h1>
    <div class="wrapper">
      
      <div class="card aos" data-aos-delay='200'>
        <div class="img-cont">
          <img src="../assets/images/img_1.jpg">
        </div>
        <h2>A Basic Guide to Starting a Franchise in the Philippines</h2>
        <div class="info">
          <span>Ham Brook • Jan 18, 2019 • </span>
          <a class="prim-text">News</a>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
        <a class="prim-text">Read More</a>
      </div>

      <div class="card aos" data-aos-delay='400'>
        <div class="img-cont">
          <img src="../assets/images/hero_2.jpg">
        </div>
        <h2>A Basic Guide to Starting a Franchise in the Philippines</h2>
        <div class="info">
          <span>James Phelps • Jan 18, 2019 • </span>
          <a class="prim-text">News</a>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
        <a class="prim-text">Read More</a>
      </div>

      <div class="card aos" data-aos-delay='600'>
        <div class="img-cont">
          <img src="../assets/images/Gallery/events2.jpg">
        </div>
        <h2>A Basic Guide to Starting a Franchise in the Philippines</h2>
        <div class="info">
          <span>Ham Brook • Jan 18, 2019 • </span>
          <a class="prim-text">News</a>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
        <a class="prim-text">Read More</a>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@import '../assets/sass/config';

main#Blog {
  padding: 50px;
  padding-top: 100px;
  margin-top: 50px;

  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    margin-top: 70px;
    padding: 20px;
    
    .card {

      .img-cont {
        height: 233px;
        overflow: hidden;
        margin-bottom: 20px;
      }

      h2 {
        margin-bottom: 20px;
        font-size: 1.3rem;
        cursor: pointer;
        transition: .3s;

        &:hover {
          color: $primary
        }
      }

      .info {
        color: #b3b3b3;
      }

      p {
        color: grey;
        margin: 20px 0;
        line-height: 1.7;
        font-size: 1.2rem;
      }

      a {
        cursor: pointer;
        transition: .3s;

        &:hover {
          color: darken($color: $primary, $amount: 10);
        }
      }
    }
  }
}
</style>