<template>
    <nav>
        
        <v-navigation-drawer app left v-model="drawer" id="drawer" class="hidden-sm-and-down" mobile-break-point="767">

            <div class="text-xs-center mt-3 contain">

                <v-container fluid>
                    <v-flex xs12 offsett-xs5>
                        <v-layout row>
                        <v-img src="./img/hitesh.jpg" contain id="drawer-img" aspect-ratio="1.5"></v-img>
                        </v-layout>
                    </v-flex>
                </v-container>

                <p class="headline font-weight-medium">Hitesh Gohil</p>
                <p class="title font-weight-light">Web Developer</p>

            </div>

            
            <v-list v-for="link in links" :key="link.text" class="links text-xs-center transparent blue--text">
                <v-btn router :to="link.route" v-html="link.text" class="blue--text link" flat></v-btn>
            </v-list>

            <div class="mt-3">
                <p class="pl-3 grey--text text-darken-2">Get in touch</p>
                <ul id="contact-main" >
                    <li><a href="mailto:hiteshgohil@gmx.co.uk" class="contact-link px-2"><i class="far fa-envelope"></i></a></li>
                    <li><a href="https://github.com/hitesh-92" class="contact-link px-2"><i class="fab fa-github"></i></a></li>
                </ul>
            </div>

        </v-navigation-drawer>

        <!-- Mobile -->
        <div id="mobile" class="hidden-md-and-up">
            <v-toolbar app flat left>

                <v-toolbar-title>Hitesh</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn flat :ripple="true" class="blue--text" @click.stop="mobileNavClick" id="mobile-btn">
                    <v-icon>menu</v-icon>
                </v-btn>

            </v-toolbar>

            <v-navigation-drawer app v-model="mobileNav" right temporary >

                <!-- put pic and name in row -->
                <div class="white pa-4 text-xs-center">
            
                    <p>Hitesh</p>


                    <v-list v-for="link in links" :key="link.text" class="links text-xs-center transparent blue--text">
                        <v-btn router :to="link.route" v-html="link.text" class="blue--text link" flat></v-btn>
                    </v-list>

                    <div class="mt-3">
                        <p class="grey--text text-darken-2">Get in touch</p>
                        <ul id="contact-main" >
                            <li><a href="mailto:hiteshgohil@gmx.co.uk" class="contact-link ma-2 mr-4"><i class="far fa-envelope"></i></a></li>
                            <li><a href="https://github.com/hitesh-92" target="_blank" class="contact-link ma-2"><i class="fab fa-github"></i></a></li>
                        </ul>
                    </div>



                </div>
            </v-navigation-drawer>
        </div>

    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return{
            drawer: null,
            mobileNav: null,
            links:[
                {text:'Projects', route:'/'},
                {text:'About', route:'/about'},
                {text:'Contact Me', route:'/contact'}
            ],
            contact:[
                {icon: 'far fa-envelope', link: ''},
                {icon: 'fab fa-github'}
                
            ]
        }
    },
    methods:{
        mobileNavClick: function(){
            this.mobileNav == true ? this.mobileNav = null : this.mobileNav = true
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Material+Icons');

    @media only screen and (min-width : 767px){
        #mobile{
            display:none;
        }
    }

    #drawer{
        background-image: url('../assets/triangles.jpg');
        background-size: cover;
        height: 100%;
    }
    #drawer-img{
        border-radius: 50%;
        background-position:50% 50%;
        background-repeat:no-repeat; 
    }
    .link{
        width: 10rem;
        margin: 0;
    }
    .links{
        background: rgba(255, 255, 255, 0);
    }
    #contact-main{
        display: inline-flex;
    }
    #contact-main li{
        list-style-type: none;
        font-size: 2rem;
    }
    .contact-link{
        transition: ease-in-out 0.4s;
    }
    .contact-link:hover{
        color: rgb(134, 197, 248);
    }
    #mobile-btn{
        padding-left: 10rem;
        margin:0;
    }
</style>