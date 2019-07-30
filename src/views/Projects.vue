<template>
  <main class="px-4 mx-1 py-3">
    <h1 class="font-weight-light pb-3 display-1">Projects</h1>

    <p class="pb-1">
      Here's some of the stuff I've hacked together
      <br />
      There's a mix of things. From tutorials with twists to my own ideas
    </p>

    <v-container v-for="(project) in projects" :key="project.id">

    <v-divider class="pt-5"></v-divider>

    <v-layout row wrap  class="content pa-2">

      <v-flex xs12 md6>

        <!-- <h3 class="headline blue--text text--darken-1" v-html="project.title"></h3> -->
        <a :href="project.url"> <h3 class="headline blue--text text--darken-1" v-html="project.title"></h3> </a>
        <p class="mt-2 px-2" v-html="project.desc"></p>

        <ul class="mb-3 px-4" v-for="(item,index) in project.list" :key="index">
          <li class="grey--text text--darken-1" v-html="item"></li>
        </ul>

        <small>Techonolgies</small>
        <br>
        <div v-for="(item, index) in project.tech" :key="index+10" class="tech text-xs-center">
        <v-chip color="blue-grey lighten-2 white--text" small label v-html="item" class="pa-1 chip"></v-chip>
        </div>

        <br>
        <div v-if="project.code" class="mt-4 codeContainer">
          <a :href="project.code" target="_blank" class="blue--text code">View Code</a>
        </div>
      </v-flex>

      <v-flex xs12 md6>
        <a :href="project.url" target="_blank"><v-img class="img my-4" :src="project.src"></v-img></a>
      </v-flex>

      </v-layout>
    </v-container>

  </main>
</template>

<script>

export default {
  data(){
    return{
      projects: [
        {
            title: 'Gohil Report',
            desc: 'Links to news articles',
            list: [
                'Designed with longevity and minimalism in mind - personal project',
                'Links will be managed using web app - G.R Manager'
            ],
            tech: ['Vue', 'Vuetify (Material Design)', 'AJAX'],
            link: '/',
            src: './img/gohilReport.jpg',
            url: 'http://www.gohilreport.com',
            code: 'https://github.com/hitesh-92/archReport',
            id: 'greport'
        },
        {
          title: 'G.R Manager',
          desc: 'Manage Content for Gohil Report',
          list: [
            `Prototyped project - hack through as fast as possible`,
            `Developed Back End REST API`
          ],
          src: `/`,
          tech: ['Angular', 'Node', 'Express', 'MongoDB'],
          url: `https://dazzling-curie-930cbb.netlify.com`,
          code: `https://github.com/hitesh-92/gohilReportManager`,
          id: 'grm'
        },
        {
            title: 'Project Management',
            desc: 'Simple project management tool',
            list: [
                'Messages board system',
                `Uses FireStore as BaaS`,
                'Started this project to kick start an idea a friend had - though nothing materialised'
            ],
            tech: ['React', 'Redux', 'Firebase'],
            link: '/',
            src: './img/proMngr.jpg',
            url: 'https://project-manager-53365.firebaseapp.com/',
            code: 'https://github.com/hitesh-92/project-manager',
            id: 'promngt'
        },
        {
            title: 'TV Series Listings',
            desc: 'Find all tv series',
            list: [
                'Dynamically load search results',
                'Consuming TvMaze API for data',
                'Not my greatest work but my first taste of React'
            ],
            tech: ['React', 'AJAX', 'Express'],
            link: '/',
            src: './img/tv.jpg',
            url: 'https://hg-react-tv-series.herokuapp.com',
            code: 'https://github.com/hitesh-92/react-tv_series',
            id: 'tvser'
        },
        {
            title: 'Calculator',
            desc: 'calculate stuff',
            list: [
                'Chain calcualtions',
                'Learning project - making sure I can use jQuery'
            ],
            tech: ['JavaScript', 'jQuery'],
            link: '/',
            src: './img/calc.png',
            url: 'https://hg-js-calc.herokuapp.com',
            code: 'https://github.com/hitesh-92/js-calculator',
            id: 'calc'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .tech{
    display: inline-flex
  }
  .img{
    transition: ease-in-out 0.5s;
  }
  .img:hover{
    box-shadow: 0 0 4px 1px rgb(97, 179, 233);
  }
  .code{
    text-decoration: none;
    padding: 0.4rem;
    border-radius: 5px;
    transition: ease-in-out 0.3s;
    border: 1px solid rgb(122, 168, 199)
  }
  .codeContainer a:hover{
    color: rgb(151, 60, 60)
  }

  .code:hover{
    color: rgb(20, 103, 141) !important;
    box-shadow: 0 0 5px 0 rgb(97, 179, 233);
    border: 1px solid white
  }

  .content{
    transition: ease-in-out 0.4s;
    border-radius: 10px;
  }

  .chip:hover{
    box-shadow:  0 0 4px 0 rgb(82, 82, 82);
    cursor: default
  }
</style>
