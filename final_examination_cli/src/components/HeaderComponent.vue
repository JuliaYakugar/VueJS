<template>
  <header class="header">
        <div class="container">
            <a href="index.html" class="logo">
                <img src="../assets/Logo.svg" alt="logo"/>
                <h1>Interno</h1>
            </a>
            <ul class="menu">
                <li><button @click="changeComponent('main')">Home</button></li>
                <li><button @click="changeComponent('article')">Project</button></li>
                <li><button @click="changeComponent('blog')">Blog</button></li>
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
    changeComponent(component) {
      this.$emit('change-component', component);
    },
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
    list-style-type: none;
}

.menu button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

</style>