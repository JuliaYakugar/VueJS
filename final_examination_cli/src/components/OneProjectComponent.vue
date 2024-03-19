<template>
    <main>
        <section class="banner_one-project"></section>

        <section class="one-project container">
            <h2>Minimal Look Bedrooms</h2>
            <p v-for="(text, index) in getDesc" :key="index">{{ text }}</p>
        </section>

        <section class="slider container">
            <div class="carousel-container">
                <div class="carousel">
                    <div class="slide" v-for="(slide, index) in slides" :key="index" :style="{ transform: `translateX(-${currentIndex * 1200}px)` }">
                        <img :src="slide" style="max-width: 100%; height: auto;">
                    </div>
                </div>
                <div class="dots">
                    <span class="dot" v-for="(dot, index) in slides" :key="index" :class="{ 'active': index === currentIndex }" @click="setCurrentIndex(index)"></span>
                </div>
            </div>
        </section>

    </main>
</template>


<script>

    export default {
        name: 'OneProjectComponent',

        components: {

        },

        data() {
            return {
                slides: [
                    require('@/assets/project_slide_01.png'),
                    require('@/assets/project_slide_02.png'),
                    require('@/assets/project_slide_03.png')
                ],
                currentIndex: 0
            };
        },

        computed: {
            getDesc() {
                return this.$store.getters.getDescription;
            }
        },


        methods: {
            setCurrentIndex(index) {
                this.currentIndex = index;
            },

            nextSlide() {
                this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            },

            prevSlide() {
                this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
            }
        },

        mounted() {
            setInterval(this.nextSlide, 3000);
        }

    };

</script>

<style lang="css" scoped>

.banner_one-project {
    background-image: url(../assets/banner-project.jpg);
    height: 356px;
    align-items: center;
    margin-bottom: 200px;
}

.one-project {
    width: 658px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
}

.carousel-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    margin-bottom: 120px;
}

.carousel {
    display: flex;
    transition: transform 0.5s ease;
}
.slide {
    flex: 0 0 100%;
    max-width: 100%;
}
.dots {
    text-align: center;
    margin-top: 10px;
}
.dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: gray;
    margin: 0 5px;
    cursor: pointer;
}
.dot.active {
    background-color: black;
}

</style>