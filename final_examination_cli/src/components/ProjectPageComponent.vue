<template>
    <main>
          <section class="banner_project">
              <div class="container">
                  <div class="banner__text">
                      <h2>Our Project</h2>
                      <p>Home / Project</p>
                  </div>
              </div> 
          </section>

          <section class="categories_project container">
            <ul>
                <li v-for="cat in categories" :key="cat" @click="setCategorySelected(cat)">{{cat}}</li>
                
            </ul>
          </section>
  
          <section class="projects">
              <div class="container">
                  <div v-for="project in projectsFiltered" :key="project.id" class="project_card">
                      <img :src="project.picture" alt="picture" />
                      <div>
                            <div>
                                <h3>{{ project.title }}</h3>
                                <p>{{ project.category }}</p>
                            </div>
                            <button>
                                <img src="@/assets/arrow-right.svg" alt="arrow right" />
                            </button>
                      </div>
                  </div>
              </div>
  
          </section> 

          <section class="container">
                <div class="pagination">
                    <button class="pagination__active">01</button>
                    <button>02</button>
                    <button>03</button>
                    <button>></button>
                </div>
          </section>
  
      </main>
  </template>
  
  <script>
  
  export default {
    name: 'ProjectPageComponent',
  
    components: {

    },
  
    data() {
      return {
        categorySelected: null,
        projects: [
            {
                id: 1,
                title: 'Minimal Bathroom',
                category: 'bathroom',
                picture: require('@/assets/project/project_pict_01.jpg')
            },
            {
                id: 2,
                title: 'Classic Minimal Bathroom',
                category: 'bathroom',
                picture: require('@/assets/project/project_pict_02.jpg')
            },
            {
                id: 3,
                title: 'Minimal Bedroom table',
                category: 'bed room',
                picture: require('@/assets/project/project_pict_03.jpg')
            },
            {
                id: 4,
                title: 'Modern Bedroom',
                category: 'bed room',
                picture: require('@/assets/project/project_pict_04.jpg')
            },
            {
                id: 5,
                title: 'Minimal Kitchan',
                category: 'kitchan',
                picture: require('@/assets/project/project_pict_05.jpg')
            },
            {
                id: 6,
                title: 'Modern Kitchan',
                category: 'kitchan',
                picture: require('@/assets/project/project_pict_06.jpg')
            },
            {
                id: 7,
                title: 'System Table Living Area',
                category: 'living area',
                picture: require('@/assets/project/project_pict_07.jpg')
            },
            {
                id: 8,
                title: 'Modern Living Area',
                category: 'living area',
                picture: require('@/assets/project/project_pict_08.jpg')
            },
        ],
        projectsFiltered: [],
        categories: [
            'Bathroom',
            'Bed Room',
            'Kitchan',
            'Living Area'
        ]
        
      };
    },
  
    computed: {
        
    },

    created() {
       this.projectsFiltered = this.projects.slice();
    },
  
    methods: {
        setCategorySelected(cat) {
            this.categorySelected = cat;
            this.projectsFiltered = this.filteredCategories();
        },

        filteredCategories() {
          if (!this.categorySelected) {
              return this.projects;
          }
          return this.projects.filter((project) => project.category.toLowerCase() === this.categorySelected.toLowerCase());
      },
    }
  };
  
  </script>
  
  <style lang="css" scoped>
  
  .banner_project {
      background-image: url(../assets/banner-project.jpg);
      height: 356px;
      align-items: center;
      margin-bottom: 200px;
  }
  
  .banner_project .container {
      justify-content: center;
      align-items: flex-end;
      height: 100%;
  }
  
  .banner_project .container .banner__text {
      padding: 41px 78px;
      background-color: #fff;
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: 37px 37px 0 0;
  }
  
  .banner_project .container .banner__text h2 {
      margin: 0;
  }
  
  .banner_project .container .banner__text p{
      margin: 0;
  }

  .categories_project {
    display: flex;
    justify-content: center;
  }

  .categories_project ul {
    display: flex;
    border: 1px solid #CDA274;
    border-radius: 18px;
    padding: 0;
  }

  .categories_project ul li {
    list-style-type: none;
    padding: 26px 66px;
    font-family: "Jost", sans-serif;
    font-weight: 600;
    font-size: 18px;
    border-radius: 18px;
  }

  .categories_project ul li:hover {
    background-color: #CDA274;
    color: #fff;
    cursor: pointer;
  }

  .projects {
    display: flex;
    justify-content: center;
  }
  
  .projects .container {
    display: block;
    columns: 2;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  
  .projects .project_card {
    break-inside: avoid;
  }
  
  .projects .project_card > div {
    display: flex;
    justify-content: space-between;
    margin: 27px 0;
  }
  
  .projects .project_card h3 {
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-size: 25px;
    line-height: 31.25px;
    margin: 0;
  }
  
  .projects .project_card p {
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
    margin: 0;
  }
  
  .projects .project_card button {
      background-color: #F4F0EC;
      width: 52px;
      height: 52px;
      border-radius: 100px;
      border: none;
      cursor: pointer;
  }
  
.pagination {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 51px;
      margin-bottom: 104px;
      gap: 20px;
  }
  
.pagination button {
      border: 1px solid #CDA274;
      background-color: #fff;
      width: 52px;
      height: 52px;
      border-radius: 100px;
      cursor: pointer;
  }
  
.pagination button:hover,
.pagination .pagination__active {
      background-color: #F4F0EC;
      border: none;
  }
  
  </style>