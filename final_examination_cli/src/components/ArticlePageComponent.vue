<template>
  <main id="articles">
        <section class="banner_article">
            <img src="../assets/banner-article.jpg" alt="banner article" />
        </section>

        <section class='article'>
            <div class="container">
                <div class="article_info">
                    <h2>Let’s Get Solution for Building Construction Work</h2>
                    <img src="../assets/article-img.png" alt="image article" />
                    <div class="date">
                        <p>26 December,2022 </p>
                        <p>Interior / Home / Decore</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>
                    <p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                    <div class="quote">
                        <p>“</p>
                        <p>The details are not the details. They make the design.</p>
                    </div>
                    <h2>Design sprints are great</h2>
                    <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    <ol>
                        <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                        <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                        <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                    </ol>
                    <img src="../assets/article-img-2.png" alt="image article" />
                    <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                </div>
                
                <div class="tags">
                    <h3>Tags</h3>
                    <div>
                        <button v-for="tag in uniqueTags" :key="tag" @click="selectTag(tag)">{{tag}}</button>
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
  name: 'ArticlePageComponent',
  components: {
    ArticleComponent
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

.banner_article img{
    width: 100%;
    margin-bottom: 200px;
}

.article .container {
    gap: 52px;
    margin-bottom: 96px;
}

.article h2 {
    margin: 0;
    margin-bottom: 22px;
}

.article h3 {
    margin: 0;
    margin-bottom: 24px;
}

.article .article_info {
    flex: 2;
}

.article .article_info .date{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 46px 0;
}

.article .article_info ol { 
    counter-reset: item;
    padding-left: 0;
    margin-bottom: 44px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.article .article_info li {
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
    display: inline-flex;
}

.article .article_info ol li:before {
    content: counter(item) "";
    counter-increment: item;
    color: #CDA274;
    font-family: "DM Serif Display", serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    margin-right: 11px;
}

.article .article_info .quote {
    background-color: #F4F0EC;
    display: flex;
    flex-direction: column;
    padding: 53px 0;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    margin-bottom: 27px;
}

.article .article_info .quote p:first-child {
    font-family: "DM Serif Display", serif;
    font-size: 200px;
    font-style: italic;
    font-weight: 400;
    height: 90px;
    line-height: 1;
    color: #CDA274;
    margin: 0;
}

.article .article_info .quote p:last-child {
    font-family: "DM Serif Display", serif;
    font-size: 25px;
    font-style: italic;
    font-weight: 400;
    line-height: 31.25px;
    color: #CDA274;
    width: 345px;
    text-align: center;
}

.article .tags {
    flex: 1;
}

.article .tags div{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.article .tags button {
    background-color: #F4F0EC;
    color: #292F36;
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22.5px;
    padding: 9px 30px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}

.article .tags button:hover {
    background-color: #292F36;
    color: #fff;
}

</style>