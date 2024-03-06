<template>
    <main>
        <section class="banner">
            <div class="container">
                <div class="banner__text">
                    <h1>Let Your Home Be Unique</h1>
                    <p>There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
                    <button><span>Get Started</span></button>
                </div>
            </div>

        </section>

        <section class="projects">
            <div class="container">
                <h2>Follow Our Projects</h2>
                <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
                <div class="projects__cards">
                    <div class="card">
                        <img src="../assets/img_01.jpg" alt="card" />
                        <div>
                            <div>
                                <h3>Modern Kitchan</h3>
                                <p>Decor / Artchitecture</p>
                            </div>
                            <button>
                                <img src="../assets/arrow-right.svg" alt="arrow right" />
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/img_02.jpg" alt="card" />
                        <div>
                            <div>
                                <h3>Modern Kitchan</h3>
                                <p>Decor / Artchitecture</p>
                            </div>
                            <button>
                                <img src="../assets/arrow-right.svg" alt="arrow right" />
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/img_03.jpg" alt="card" />
                        <div>
                            <div>
                                <h3>Modern Kitchan</h3>
                                <p>Decor / Artchitecture</p>
                            </div>
                            <button>
                                <img src="../assets/arrow-right.svg" alt="arrow right" />
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/img_04.jpg" alt="card" />
                        <div>
                            <div>
                                <h3>Modern Kitchan</h3>
                                <p>Decor / Artchitecture</p>
                            </div>
                            <button>
                                <img src="../assets/arrow-right.svg" alt="arrow right" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section class="advantages">
            <div class="container">
                <div>
                    <h3>12</h3>
                    <p>Years Of Experiance</p>
                </div>
                <div>
                    <h3>85</h3>
                    <p>Success Project</p>
                </div>
                <div>
                    <h3>15</h3>
                    <p>Active Project</p>
                </div>
                <div>
                    <h3>95</h3>
                    <p>Happy CUstomers</p>
                </div>
            </div>
        </section>

        <ArticleComponent quantity=3></ArticleComponent>

    </main>
</template>

<script>
import ArticleComponent from './ArticleComponent.vue';

export default {
  name: 'MainComponet',
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

.banner .container {
    background-image: url(../assets/banner.jpg);
    height: 758px;
    align-items: center;
    margin-bottom: 96px;
}

.banner .container .banner__text {
    width: 434px;
    margin-left: 52px;
}

.banner .container .banner__text h1 {
    margin: 0;
}

.banner .container .banner__text button {
    padding: 26px 48px;
    border-radius: 18px;
    background-color: #292F36;
    border-color: #292F36;
    cursor: pointer;
}

.banner .container .banner__text button span {
    color: #fff;
    font-family: "Jost", sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 22.5px;
}

.banner .container .banner__text button span::after {
    content: url(../assets/arrow-right-orange.svg);
    margin-left: 10px;
    color: #CDA274;
}

.projects .container {
    align-items: center;
    flex-direction: column;
    margin-bottom: 40px;
}

.projects .container > h2 {
    margin: 0;
}

.projects .container > p {
    width: 737px;
    text-align: center;
    margin-bottom: 93px;
}

.projects .projects__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.projects .card {
    display: flex;
    flex-direction: column;
    margin-bottom: 56px;
}

.projects .card > div {
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.projects .card h3 {
    margin: 0;
}

.projects .card p {
    margin: 0;
}

.projects button {
    background-color: #F4F0EC;
    width: 70px;
    height: 70px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
}

.advantages {
    background-color: #F4F0EC;
    padding: 151px 0;
    margin-bottom: 96px;
}

.advantages .container > div {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.advantages .container > div:not(:last-child) {
    border-right: 1px solid #CDA274;
}

.advantages .container h3 {
    font-family: "DM Serif Display", serif;
    font-size: 85px;
    font-weight: 400;
    line-height: 106.25px;
    color: #CDA274;
    margin: 0;
}

.advantages .container p {
    margin: 0;
}

</style>