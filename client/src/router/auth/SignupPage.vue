<template>
  <div>
    <b-notification class="errormsg"type="is-danger" has-icon v-if='error'>
        {{error}}
    </b-notification>

    <form @submit.prevent="signup">
      <div class="modal-card" style="width:500px">
      <section class="modal-card-body">
          <b-field label="Email">
              <b-input v-model="email" 
                  type="email"
                  placeholder="Your email"
                  required>
              </b-input>
          </b-field> 
          <b-field label="Name">
              <b-input v-model="name" 
                  type="name"
                  placeholder="Your name"
                  required>
              </b-input>
          </b-field>

          <b-field label="Password">
              <b-input
              v-model="password"
                  type="password"
                  password-reveal
                  placeholder="Your password"
                  required>
              </b-input>
          </b-field>

          <b-checkbox>Remember me</b-checkbox>
      </section>
      <footer class="modal-card-foot">
          <button class="button is-primary">Sign up</button>
      </footer>
      </div>
    </form>
  <!-- <div>
    <b-notification v-if="error" type="is-danger" has-icon>
      {{ error.message }}
    </b-notification>
    <form @submit.prevent="signup">
      <b-field label="Email">
        <b-input v-model="email" required maxlength="30"></b-input>
      </b-field>

       <b-field label="Name">
        <b-input v-model="name" required maxlength="30"></b-input>
      </b-field>

        <b-field label="Password">
            <b-input
              type="password"
              required
              v-model="password"
              password-reveal>
            </b-input>
        </b-field>

        <button class="button is-primary">Signup</button>
      </form>
  </div> -->
  </div>
</template>

<script>
import { signup } from '@/api/auth'

export default {
  data () {
    return {
      email: '',
      password: '',
      name: '',
      error: null
    }
  },
  methods: {
    signup () {
      this.error = null
      signup({
        email: this.email,
        name: this.name,
        password: this.password
      }).then(() => {
        this.$router.push('/login')
      }).catch(err => {
        this.error = 'Error happened during sign-up'
        console.error('Signup err', err)
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
  form {
    margin: auto;
  }
.modal-card{
  max-width: 30rem;
  margin: auto;
  margin-top: 8rem;
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
