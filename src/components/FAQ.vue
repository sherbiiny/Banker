<template>
  <main id='FAQ'>
    <section class="section-1">
      <h1 class="section-heading aos" data-aos-delay='200'>Frequently Ask Questions</h1>
      <div class="wrapper">
        
        <div class="field aos">
          <div class="question">Can I accept both Paypal and Stripe?</div>
          <div class="answer">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
        </div>

        <div class="field aos" data-aos-delay='200'>
          <div class="question">Where are you from?</div>
          <div class="answer">Voluptatum nobis obcaecati perferendis dolor totam unde dolores quod maxime corporis officia et. Distinctio assumenda minima maiores.</div>
        </div>

        <div class="field aos">
          <div class="question">What available is refund period?</div>
          <div class="answer">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
        </div>

        <div class="field aos" data-aos-delay='200'>
          <div class="question">What is your opening time?</div>
          <div class="answer">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
        </div>

        <div class="field aos">
          <div class="question">Can I accept both Paypal and Stripe?</div>
          <div class="answer">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
        </div>

        <div class="field aos" data-aos-delay='200'>
          <div class="question">What available is refund period?</div>
          <div class="answer">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</div>
        </div>
      </div>
    </section>

    <section class="section-2">
      <div class="img-cont aos">
        <img src="../assets/images/hero_1.jpg">
        <figure></figure>
      </div>
      <div class="info">
        <div class="aos">
          <span class="prim-text flaticon-head"></span>
          <div>
            <h4>Bank Loan</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <a class="prim-text">Learn More</a>
          </div>
        </div>
        <div class="aos">
          <span class="prim-text flaticon-smartphone"></span>
          <div>
            <h4>Bank Loan</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <a class="prim-text">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'FAQ'
}
</script>

<style lang="scss">
@import '../assets/sass/flaticon';
@import '../assets/sass/config';

main#FAQ {

  .section-1 {
    padding: 50px;
    padding-top: 100px;
    background: #F8F9FA;

    .wrapper {
      margin-top: 90px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 50px;
      grid-row-gap: 50px;
      padding: 20px;
      padding-bottom: 50px;

      .field {
        .question {
          font-size: 1.4rem;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .answer {
          line-height: 1.7;
          color: grey;
        }
      }
    }
  }

  .section-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 50px;
    margin-top: 50px;
    grid-column-gap: 50px;

    .img-cont {
      position: relative;

      figure {
        z-index: -1;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: #f8f9fa;
        position: absolute;
        top: 163px;
        left: 372px;
      }
    }

    .info {
      > div {
        margin-bottom: 30px;
        display: grid;
        grid-template-columns: auto 1fr;
        margin-left: 50px;

        span {
          font-size: 3rem;
          margin-right: 20px;
        }

        h4 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.1rem;
          color: grey;
          line-height: 1.5;
          margin-bottom: 30px;
          max-width: 80%;
        }

        a {
          cursor: pointer;
        }
      }
    }
  }
}

</style>