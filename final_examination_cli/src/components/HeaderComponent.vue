<template>
  <header class="header">
        <div class="container">
            <a href="index.html" class="logo">
                <img src="../assets/Logo.svg" alt="logo"/>
                <h1>Interno</h1>
            </a>
            <ul class="menu">
                <router-link to="/">Home</router-link>
                <router-link to="/project">Project</router-link>
                <router-link to="/blog">Blog</router-link>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
  name: 'HeaderComponent',

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

.header .container {
    justify-content: space-between;
    margin-top: 44px;
    margin-bottom: 57px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: #000;
}

.logo * {
    margin: 0;
}

.menu {
    display: flex;
    gap: 30px;
}

.menu a {
    cursor: pointer;
    text-decoration: none;
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
}

</style>