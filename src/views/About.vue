<template>
  <section class="px-4 mx-1 py-3">

    <h1 class="font-weight-light pb-3 display-1">About</h1>

    <section id="description" class="">
      <p>I am a self taugt developer who started to learn and write code about 2 years ago</p>
      <p>I initially started by picking up a book: Python for Bash and Shell scripting</p>
      <p>(if you don't know what that is, don't worry I didn't either)</p>
      <p>I started in the wrong place but found my way to web development and Linux</p>
      <p>Since, I have developed a few projects and made websites for local businesses. Most of the work involved front-end development</p>
      <p>Currently I build applications using various frameworks and libraries related to JavaScript</p>
    </section>

    <v-divider class="ma-5"></v-divider>

    <section id="front-end">

      <h3 class="font-weight-medium title pb-3 blue--text text--darken-2"> <span><v-icon class="blue--text">web</v-icon></span> Front End Development</h3>
      
      <ul class="grey--text text-darken-5">
        <li>I currently use Vue and React to make applications</li>
        <li>Using Redux I gained an insight into state management</li>
        <li>Mostly use UI frameworks such as Bootstrap and MaterializeCSS</li>
        <li>Focus on responsive design</li>
        <li>Can use AJAX and JSON</li>
      </ul>
    </section>

    <v-divider class="ma-5"></v-divider>

    <section id="back-end" class="pb-5">

      <h3 class="font-weight-medium title pb-3 blue--text text--darken-2"> <span><i class="fas fa-code blue--text"></i></span> Back End Development</h3>
      
      <ul class="grey--text text-darken-5">
        <li>I've had little need to have a complex back-end however do enjoy the challenge</li>
        <li>Primarily use Node as the transition from JavaScript is easy</li>
        <li>A personal project presented the opportunity to construct a API which has CRUD functionality</li>
        <li>Creating an API also allowed me to use MongoDB and automated testing</li>
        <li>Worked with Firebase which eliminated the need to create a API and was easily able to authenticate users and use the cloud Firestore database</li>
        <li>After my initial mishap trying to tackle Python, I took on the challenge and was able to create a couple terminal based games. Write a few scripts too</li>
      </ul>
    </section>

  </section>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style scoped>
  #description{
    font-family: 'Courier New', Courier, monospace
  }

  ul li{
    padding: 0.25rem 0;
    list-style-type: circle;
    }
</style>