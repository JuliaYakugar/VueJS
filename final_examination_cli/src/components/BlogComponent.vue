<template>
  <main>
        <section class="banner_blog">
            <div class="container">
                <div class="banner__text">
                    <h2>Articles & News</h2>
                    <p>Home / Blog</p>
                </div>
            </div>

        </section>

        <section class="latest_post">
            <div class="container">
                <h2>Latest Post</h2>
                <div class="latest_post_card">
                    <img src="../assets/latest_img.jpg" alt="card" />
                    <div>
                        <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
                        <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
                        <p>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                        <div>
                            <p>26 December,2022 </p>
                            <button>
                                <img src="../assets/arrow-right.svg" alt="arrow right" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <ArticleComponent quantity=6></ArticleComponent>


    </main>
</template>

<script>
import ArticleComponent from './ArticleComponent.vue';

export default {
  name: 'BlogComponent',

  components: {
    ArticleComponent,
  },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="css" scoped>

.banner_blog {
    background-image: url(../assets/banner-blog.jpg);
    height: 356px;
    align-items: center;
    margin-bottom: 200px;
}

.banner_blog .container {
    justify-content: center;
    align-items: flex-end;
    height: 100%;
}

.banner_blog .container .banner__text {
    padding: 41px 78px;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 37px 37px 0 0;
}

.banner_blog .container .banner__text h2 {
    margin: 0;
}

.banner_blog .container .banner__text p{
    margin: 0;
}

.latest_post .container {
    flex-direction: column;
    margin-bottom: 150px;
}

.latest_post .container > h2 {
    margin: 0;
    margin-bottom: 27px;
}

.latest_post .latest_post_card {
    display: flex;
    gap: 35px;
    padding: 22px;
    border: 1px solid #E7E7E7;
    border-radius: 62px;
}

.latest_post .latest_post_card > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto 40px;
}

.latest_post .latest_post_card div > h3 {
    margin: 0;
    margin-bottom: 22px;
}

.latest_post .latest_post_card > div > p {
    margin: 0;
    margin-bottom: 41px;
}

.latest_post .latest_post_card div div {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.latest_post .latest_post_card button {
    background-color: #F4F0EC;
    width: 52px;
    height: 52px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
}

.latest_post .latest_post_card div div p {
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}

.latest_post + .articles .container {
    align-items: baseline;
}

.latest_post + .articles .container h2 {
    margin-bottom: 30px;
}

.articles .pagination {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 51px;
    margin-bottom: 104px;
    gap: 20px;
}

.articles .pagination button {
    border: 1px solid #CDA274;
    background-color: #fff;
    width: 52px;
    height: 52px;
    border-radius: 100px;
    cursor: pointer;
}

.articles .pagination button:hover,
.articles .pagination .pagination__active {
    background-color: #F4F0EC;
    border: none;
}

</style>