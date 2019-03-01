<template>
  <main class="px-4 mx-1 py-3">
    <h1 class="font-weight-light pb-3 display-1">Projects</h1>

    <p class="pb-1">View my work below. My projects consist of work I've done for my self to learn and showcase my ability. Also couple freelance projects I picked up along the way</p>

    <v-container v-for="(project) in projects" :key="project.id">

    <v-divider class="pt-5"></v-divider>

    <v-layout row wrap  class="content pa-2">

      <v-flex xs12 md6>

        <h3 class="headline blue--text text--darken-1" v-html="project.title"></h3>
        <p class="mt-2 px-2" v-html="project.desc"></p>

        <ul class="mb-3" v-for="(item,index) in project.list" :key="index">
          <li class="grey--text text--darken-1" v-html="item"></li>
        </ul>

        <small>Techonolgies</small>
        <br>
        <div v-for="(item, index) in project.tech" :key="index+10" class="tech text-xs-center">
        <v-chip color="blue-grey lighten-2 white--text" small label v-html="item" class="pa-1 chip"></v-chip>
        </div>

        <br>
        <div v-if="project.code" class="mt-2 codeContainer">
          <a :href="project.code" class="blue--text code">View Code</a>
        </div>
      </v-flex>

      <v-flex xs12 md6>
        <a :href="project.url"><v-img class="img my-4" :src="project.src"></v-img></a>
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
        // gohilReport
        {
            title: 'Gohil Report',
            desc: 'A personal project which displays news article links',
            list: [
                'Made to keep articles for frame of reference in future',
                'Building complementary site which allows users to send articles to share',
                'Made API, with integration testing, which handles basic operations'
            ],
            tech: ['Handlebars', 'Node', 'Express', 'MongoDB'],
            link: '/',
            src: './img/gohilReport.jpg',
            url: 'http://www.gohilreport.com',
            code: 'https://github.com/hitesh-92/archReport',
            id: 'greport'
        },
        // Project Management
        {
            title: 'Project Management',
            desc: 'A way to keep track of projects and set tasks for each project',
            list: [
                'Messages board to leave important messages for team',
                'Add in tasks for individual project (developing)',
                'Responsive Web Application'
            ],
            tech: ['React', 'Redux', 'Firebase'],
            link: '/',
            src: './img/proMngr.jpg',
            url: 'https://project-manager-53365.firebaseapp.com/',
            code: 'https://github.com/hitesh-92/project-manager',
            id: 'promngt'
        },
        // TV Series Listings
        {
            title: 'TV Series Listings',
            desc: 'Find all tv series',
            list: [
                'Dynamically load search results',
                'Consuming 3rd party API for data'
            ],
            tech: ['React', 'AJAX', 'Express'],
            link: '/',
            src: './img/tv.jpg',
            url: 'https://hg-react-tv-series.herokuapp.com',
            code: 'https://github.com/hitesh-92/react-tv_series',
            id: 'tvser'
        },
        // Ikalon
        {
            'title': 'Ikalon Consulting',
            desc: 'pdf to website',
            list: [
                'Freelance project',
                'Responsive website'
            ],
            tech: ['Vue', 'Express'],
            link: '/',
            src: './img/ikalon.jpg',
            url: 'https://ikalon-consulting.herokuapp.com/',
            code: null,
            id: 'ikalon'
        },
        // Calculator
        {
            title: 'Calculator',
            desc: 'calculate stuff',
            list: [
                'Chain calcualtions'
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
  .content:hover{
    background-color: rgba(236, 245, 247, 0.39);
  }

  .chip:hover{
    box-shadow:  0 0 4px 0 rgb(82, 82, 82);
    cursor: default
  }
</style>
