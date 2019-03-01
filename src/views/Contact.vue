<template>
  <section class="px-4 mx-1 py-3">
    <h1 class="font-weight-light pb-3 display-1">Contact</h1>

    <div class="pb-4">
      <p>Get in touch through your email client <a class="transaprent" href="mailto:hiteshgohil@gmx.co.uk"> <i class="fas fa-envelope pl-2 mail"></i>  </a></p>
      <p>Or drop me a message using the contact form</p>
    </div>

    <div v-if="responseError" class="red--text ma-3">
        <p>Oops! Something went wrong! Help me improve your experience by reporting this error</p>
        <p>You can message me <a href="mailto:hiteshgohil@hotmail.co.uk">here</a>, look forward to hearing from you!</p>
    </div>

    <v-form ref="form" v-model="valid" id="form" class="elevation-2 grey lighten-4 mb-4">
      <v-container class="pa-4">
          <v-layout wrap>

            <v-flex xs12 md6>
                <v-text-field prepend-icon="perm_identity" v-model="firstname" :rules="nameRules" :counter="10" label="First name" required></v-text-field>
            </v-flex>

            <v-flex xs12 md6>
                <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name" required></v-text-field>
            </v-flex>

            <v-flex xs12>
                <v-text-field prepend-inner-icon="alternate_email" v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-flex>

            <v-flex x12>
                <v-textarea prepend-inner-icon="message" v-model="message" :rules="messageRules" box label="Your Message">
                </v-textarea>
            </v-flex>

            <v-flex xs12 offset-md5 offset-xs7>
                <v-btn @click="validate" :disabled="!valid" class="green white--text">submit</v-btn>
            </v-flex>

          </v-layout>
      </v-container>
    </v-form>
        
  </section>    
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      message: '',
      messageRules: [
        v => !!v || 'Message is required',
        v => (v && v.length > 10) || 'Message must contain more than 10 characters'
      ],
      messageSent: false,
      messageError: false,
      response: null,
      responseError: false

    }),
    methods: {
        validate (){
            const isValid = this.$refs.form.validate();
            if(isValid) this.submit()
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
        submit (){

            const data = {
                name: `${this.firstname} ${this.lastname}`,
                email: this.email,
                message: this.message
            }

            fetch('https://hg-portfolio-2019.herokuapp.com/message', {
                method: 'POST',
                cors: 'cors',
                headers: {
                    "Content-Type": "application/json"
                    },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                // reset form
                this.reset()
                this.resetValidation()

                // change data variables
                this.messageSent = true;
                this.response = res
                console.log('success')
            })
            .catch(err => {
                this.messageError = true
                this.responseError = err
                console.log('DID NOT SEND!')
            })

        }
    }
  }
</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css?family=Material+Icons');

    .mail{
        font-size: 2rem;
    }
    #form{
        border-radius: 10px
    }
</style>
