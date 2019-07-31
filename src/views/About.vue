<template>
  <section class="px-4 mx-1 py-3">

    <h1 class="font-weight-light pb-3 display-1">A little about me</h1>

    <!--  https://drive.google.com/open?id=1DZR10zrGSurABQ9C1C8tkugLYuklKzQcLL7zVvT4X6s -->

    <section id="description">
      <p>Self taught Developer. Who started in the wrong place...</p>
      <p>Walking through Waterstones (yes, I still read)</p>
      <p>A book caught my eye</p>
      <p><strong>Python for Bash and Shell scripting</strong></p>
      <p><em>Who knows what that is, right?</em></p>
      <p>I picked it up, flicked through it and bought it</p>
      <p>What's the worst that can happen?</p>
      <p>I went through the book. I didn't understand much</p>
      <p>Shell, Bash, environments... None of it made sense</p>
      <p>I was heading up the creek without a paddle</p>
      <p>So I started reading around the topics and discovered Linux</p>
      <p>Let me tell you this. Throwing yourself into the world of Linux is like jumping into an abyss</p>
      <p><em>Like the first time you open a terminal!</em></p>
      <p>After a few attempts going over the same parts</p>
      <p>Again and again. And again</p>
      <p>The frustration grew</p>
      <p><strong>I was making no progress</strong></p>
      <p>Trail and error. It didn't work for me here</p>
      <p>It was the end of the line</p>
      <p>I guess you can say I saw the bottom of an abyss</p>
      <p><em>Hopelessness.</em></p>
      <p>I hadn’t written my first Hello World app</p>
      <p>I didn’t know the basics (or what they were)</p>
      <p><em>I even gave away the book.</em></p>
      <p>A few months passed...</p>
      <p>Still persistent. Learning (as always)</p>
      <p><strong>I discovered Web Development - online</strong></p>
      <p>Who knew so much (free) info was out there!?!</p>
      <p><em>Another can of worms, waiting to be opened</em></p>
      <p>Picking the basics is easy enough, given a little time</p>
      <p>JavaScript allows you to see what real programming is capable of</p>
      <p>It's what intrigued me to pursue web development further</p>
      <p><em>I hope that book helps someone as much as it helped me. <strong>Silver Lining</strong></em></p>
    </section>

    <v-divider class="ma-5"></v-divider>

    <section id="front-end">

      <h3 class="font-weight-medium title pb-3 blue--text text--darken-2"> <span><v-icon class="blue--text">web</v-icon></span> Front End Development</h3>
      
      <ul class="grey--text text-darken-5">
        <li>Front-End frameworks: React, Vue and Angular</li>
        <li>State management with Vuex and Redux</li>
        <li>UI frameworks - with Material Design. Some Bootstrap</li>
        <li>AJAX / JSON</li>
      </ul>
    </section>

    <v-divider class="ma-5"></v-divider>

    <section id="back-end" class="pb-5">

      <h3 class="font-weight-medium title pb-3 blue--text text--darken-2"> <span><i class="fas fa-code blue--text"></i></span> Back End Development</h3>
      
      <ul class="grey--text text-darken-5">
        <li>Node.js (easy move from JavaScript)</li>
        <li>REST API with CRUD operations</li>
        <li>API designed with integration testing</li>
        <li>Worked with Firebase, a BaaS</li>
        <li>Some python - Django and Flask</li>
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