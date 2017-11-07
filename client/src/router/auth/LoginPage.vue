<template>
  <div>
    <b-notification class="errormsg"type="is-danger" has-icon v-if='error'>
      {{error}}
    </b-notification>
    <form @submit.prevent="login">
      <div class="modal-card">
        <section class="modal-card-body">
          <b-field label="Email">
            <b-input v-model="email" 
                type="email"
                placeholder="Your email"
                required>
            </b-input>
          </b-field>
          <b-field label="Password">
            <b-input v-model="password"
                type="password"
                password-reveal
                placeholder="Your password"
                required>
            </b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot is-centered">
            <button class="button is-primary">Login</button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>

import { login } from '@/api/auth'
export default {
  data () {
    return {
      email:'',
      password:'',
      name: '',
      error: null
    }
  },
 methods: {
    login () {
      this.error = null
      login(this.email, this.password, this.$root).then(data => {
        if (data)this.$router.push('/')
        else {
          this.error = 'Seems like you entered a wrong username/password. Try again.'
        }
      }).catch( err => {
        this.error = 'Error happened during Log-in'
        console.error('Login error ', err)
      })
  }
}
}
</script>

<style scoped>
.errormsg {
  width: 400px;
  margin: auto;
  margin-top: 40px;
}

.modal-card{
  max-width: 30rem;
  margin: auto;
  margin-top: 10rem;
   background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    .card__image {
      filter: contrast(100%);
    }
  }
}

button{
    margin: auto;
}
</style>