<template>
  <section class="px-4 mx-1 py-3">
    <h1 class="font-weight-light pb-3 display-1">Get In Touch</h1>

    <div class="my-1">
      <p>Get in touch through your email client <a class="transaprent" href="mailto:hiteshgohil@gmx.co.uk"> <i class="fas fa-envelope pl-2 mail"></i>  </a></p>
      <p>Or send me a message me at:</p>
      <p><strong>Hiteshgohil@gmx.co.uk</strong></p>
    </div>

    <div class="mt-5">
      Also here's a link to my CV:
      <a class="transparent" href="https://drive.google.com/open?id=1DZR10zrGSurABQ9C1C8tkugLYuklKzQcLL7zVvT4X6s" target="_blank">
        <i class="far fa-file-alt pl-2 mail"></i>
      </a>
    </div>



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
                // console.log('success')
            })
            .catch(err => {
                this.messageError = true
                this.responseError = err
                // console.log('DID NOT SEND!')
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
