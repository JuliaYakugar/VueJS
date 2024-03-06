<template>
  <section class="articles" id="articles">
      <div class="container">
          <h2>Articles & News</h2>
          <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
          <div class="articles__cards">
              <div class="card" v-for="(article, index) in articles.slice(0, quantity)" :key="index">
                  <div class="tag">{{ article.tag }}</div>
                  <img :src="article.pict" alt="pict-article" />
                  <h3>{{ article.title }}</h3>
                  <div class="card_info">
                      <p>{{ article.date }}</p>
                      <button @click="changeComponent('article')">
                          <img src="../assets/arrow-right.svg" alt="arrow right" />
                      </button>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
name: 'ArticleComponent',
props: {
    quantity: {
      required: 0,
    },
},

  data() {
    return {
      selectedTag: null,
      articles: [
          {
              title: 'Let’s Get Solution For Building Construction Work', 
              date: '26 December,2022', 
              pict: require('@/assets/article_01.png'),
              tag: 'Kitchan'
          },
          {
              title: 'Low Cost Latest Invented Interior Designing Ideas.', 
              date: '22 December,2022', 
              pict: require('@/assets/article_02.png'),
              tag: 'Living'
          },
          {
              title: 'Best For Any Office & Business Interior Solution', 
              date: '25 December,2022', 
              pict: require('@/assets/article_03.png'),
              tag: 'Interior'
          },
          {
              title: 'Let’s Get Solution For Building Construction Work', 
              date: '26 December,2022', 
              pict: require('@/assets/article_04.png'),
              tag: 'Kitchan'
          },
          {
              title: 'Low Cost Latest Invented Interior Designing Ideas.', 
              date: '22 December,2022', 
              pict: require('@/assets/article_05.png'),
              tag: 'Living'
          },
          {
              title: 'Best For Any Office & Business Interior Solution', 
              date: '25 December,2022', 
              pict: require('@/assets/article_06.png'),
              tag: 'Interior'
          }
      ]
    };
  },

  mounted() {
    
  },

  computed: {
      uniqueTags() {
          const tags = new Set();
          this.articles.forEach((article) => {
              tags.add(article.tag);
          });
          return Array.from(tags);
      },
      filteredArticles() {
          if (!this.selectedTag) {
              return this.articles;
          }
          return this.articles.filter((article) => article.tag === this.selectedTag);
      },
  },
  
  methods: {
    changeComponent(component) {
      this.$emit('change-component', component);
    },
  },
};
</script>

<style lang="css" scoped>

.articles .container {
    align-items: center;
    flex-direction: column;
    margin-bottom: 96px;
}

.articles .container > h2 {
    margin: 0;
}

.articles .container > p {
    width: 811px;
    text-align: center;
    margin-bottom: 52px;
}

.articles .articles__cards {
    display: flex;
    gap: 27px;
    flex-wrap: wrap;
}

.articles .card {
    display: flex;
    flex-direction: column;
    border: 1px solid #E7E7E7;
    border-radius: 62px;
    width: 28%;
    padding: 21px;
    position: relative;
}

.articles .card h3 {
    margin: 21px 0 0 0;
}

.articles .card .card_info{
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.articles .card p {
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
}

.articles .articles__cards a,
.articles .articles__cards button {
    background-color: #F4F0EC;
    width: 52px;
    height: 52px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.articles .card:hover {
    background-color: #F4F0EC;
}

.articles .card:hover button {
    background-color: #fff;
}

.articles .card .tag {
    position: absolute;
    width: 125px;
    height: 40px;
    background-color: #fff;
    border-radius: 8px 8px 8px 0;
    top: 250px;
    left: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}

</style>