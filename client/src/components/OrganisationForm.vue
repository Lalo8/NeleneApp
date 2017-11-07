<template>
  <form @submit.prevent="$emit('submit', organisation)">
        <b-field>
        <b-upload v-model="files" drag-drop>
            <a class="button is-primary">
                <b-icon icon="upload"></b-icon>
                <span>Click to upload</span>
            </a>
        </b-upload>
        <div v-if="files && files.length">
            <span class="file-name">
                {{ files[0].name }}
            </span>
        </div>
    </b-field>
        <div class="field">
            <div class="file is-warning is-boxed is-centered">
                <br>
            </div>
        </div>
        <b-field label="Name">
            <b-input v-model="name"></b-input> 
        </b-field>
        <b-field label="Description">
            <b-input v-model="description" type="textarea"></b-input>
        </b-field>
        <b-field label="Contact">
            <b-input v-model="contact" type="Email" value="Email"></b-input>
        </b-field>
        <b-field grouped>
            <b-field label=" Address">
                <b-input v-model="address" placeholder="Address"></b-input>
            </b-field>
            <b-field label=" Country" expanded>
                <b-input v-model="country" placeholder="Sénégal, Cameroun..."></b-input>
            </b-field>
            <b-field label=" City" expanded>
                <b-input v-model="city" placeholder="Dakar, Yaoundé..."></b-input>
            </b-field>
        </b-field>

        <b-field label=" Category">
            <b-select placeholder="Select a category" icon="person" v-model="category">
                <option value="startup">Start-Up</option>
                <option value="incubator">Incubator</option>
                <option value="investment">Investment Fund</option>
            </b-select>
        </b-field>
        <b-field label="Type of needs" >
            <!-- v-if="category===startup" -->
            <b-select multiple native-size="3" v-model="needs">
                <option value="recruitment">recruitment</option>
                <option value="location">location</option>
                <option value="seed funding">seed funding</option>
            </b-select>
        </b-field>
        <b-field label="Type of activity">
            <b-select placeholder="Select the type of activity your are focused on"  v-model="type">
                <option value="tech">tech</option>
                <option value="social business">social business</option>
            </b-select>
        </b-field>
        <b-field>
        <button class="button is-primary" >Submit information</button>
        </b-field>
    </form>
</template>

<script>

export default {
  props: {
      displayInputLocation: {
          type:Boolean,
          default:false
      }
  },
  data() {
      return {
          picture: '',
          imgUrl: '',
          files: [],
            name: "",
            description: "",
            contact: "",
            type: "",
            address: "",
            country: "",
            city: "",
            category: "",
            needs: [],
          
      } 
  },
  computed: {
      organisation () {
          return {
              name: this.name,
              description: this.description,
              contact: this.contact,
              address: this.address,
              country: this.country,
              city: this.city,
              category: this.category,
              needs: this.needs,
              type: this.type,
              img: this.files[0],
          }
      }
  }
}
</script>
<style>
.form {
    max-width: 600px;
    margin: auto;
}


</style>
