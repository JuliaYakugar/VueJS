<template>
  <div id="app">
    <HeaderComponent @change-component="changeComponent"></HeaderComponent>
    
    <MainComponent v-if="currentComponent === 'main'"></MainComponent>
    <BlogComponent v-if="currentComponent === 'blog'"></BlogComponent>
    <ArticlePageComponent v-if="currentComponent === 'article'"></ArticlePageComponent>
    
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import MainComponent from './components/MainComponent.vue';
import BlogComponent from './components/BlogComponent.vue';
import ArticlePageComponent from './components/ArticlePageComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BlogComponent,
    ArticlePageComponent
  },

  data() {
    return {
      currentComponent: 'main',
    };
  },

  methods: {
    changeComponent(component) {
      this.currentComponent = component;
    },
  },
}
</script>

<style lang="css">

.container {
  width: 1200px;
  display: flex;
  margin: 0 auto;
}

h1 {
  font-family: "DM Serif Display", serif;
  font-size: 65px;
  font-weight: 400;
  line-height: 81.25px;
}

h2 {
  font-family: "DM Serif Display", serif;
  font-size: 50px;
  font-weight: 400;
  line-height: 62.5px;
}

h3 {
  font-family: "DM Serif Display", serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 31.25px;
}

p {
  font-family: "Jost", sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
}

</style>
