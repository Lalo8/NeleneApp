<template>
  <form @submit.prevent="$emit('submit', job)">
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
    <b-field label="Company" required>
        <b-select placeholder="Select a category" icon="person" v-model="company">
            <option v-for="organisation in organisations" :value="organisation._id">{{organisation.name}}</option>
        </b-select>
    </b-field>

        <div class="field">
            <div class="file is-warning is-boxed is-centered">
                <br>
            </div>
        </div>
        <b-field label="Title">
            <b-input v-model="title" required></b-input> 
        </b-field>
        <b-field label="Job Description" required>
            <b-input v-model="description" type="textarea"></b-input>
        </b-field>
        <b-field label="Select a starting date">
          <b-datepicker v-model="startdate"
              :first-day-of-week="1"
              placeholder="Click to select..."
              :min-date="minDate">

              <button class="button is-primary"
                  @click="startdate = new Date()">
                  <b-icon icon="calendar-today"></b-icon>
                  <span>Today</span>
              </button>

              <button class="button is-danger"
                  @click="startdate = null">
                  <b-icon icon="close"></b-icon>
                  <span>Clear</span>
              </button>
          </b-datepicker>
         </b-field>
         <b-field grouped>
            <b-field label=" Country" expanded required>
                <b-input v-model="country" placeholder="Sénégal, Cameroun..."></b-input>
            </b-field>
            <b-field label=" City" expanded>
                <b-input v-model="city" placeholder="Dakar, Yaoundé..."></b-input>
            </b-field>
        </b-field>
        <b-field label="Contact" required>
            <b-input v-model="contact" type="Email" value="Email"></b-input>
        </b-field>
        <b-field label=" Job Contract" required>
            <b-select placeholder="Select a category" icon="person" v-model="contract">
                <option value="permament contract">Permanent contract</option>
                <option value="fixed-term contract">Fixed-term contract</option>
                <option value="internship">Internship </option>
                <option value="voluntareeing">Voluntareeing</option>
                <option value="to define">To define</option>
            </b-select>
        </b-field>
        <b-field label=" Work Conditions">
            <b-select placeholder="Select a category" icon="person" v-model="conditions">
                <option value="remotely">Remotely</option>
                <option value="in residence">in residence</option>
                <option value="To define">To define </option>
            </b-select>
        </b-field>
        <b-field label="Category" required >
            <!-- v-if="category===startup" -->
            <b-select multiple native-size="3" v-model="category">
                <option value="marketing">marketing</option>
                <option value="communication">communication</option>
                <option value="finance">finance</option>
                <option value="science">science</option>
                <option value="research">research</option>
                <option value="business development">business development</option>

            </b-select>
        </b-field>
        <!-- <b-field label="Type of activity">
            <b-select placeholder="Select the type of activity your are focused on" v-model="type">
                <option value="tech">tech</option>
                <option value="social business">social business</option>
            </b-select>
        </b-field> -->
        <b-field>
        <button class="button is-primary" >Submit information</button>
        </b-field>
    </form>
</template>

<script>
import { getOrganisations } from "@/api/organisations";

export default {
  props: {
    displayInputLocation: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const today = new Date();
    return {
      picture: "",
      imgUrl: "",
      files: [],
      company: "",
      title: "",
      description: "",
      startdate: "",
      contact: "",
      country: "",
      city: "",
      conditions: [],
      contract: "",
      category: [],
      startdate: new Date(),
      minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      organisations: []
    };
  },
  created() {
    getOrganisations().then(organisations => {
      this.organisations = organisations;
      this.organisations.sort();
    });
  },
  computed: {
    job() {
      return {
        company: this.company,
        title: this.title,
        description: this.description,
        startdate: this.startdate,
        contact: this.contact,
        contract: this.contract,
        category: this.category,
        country: this.country,
        city: this.city,
        conditions: this.conditions,
        img: this.files[0]
      };
    }
  }
};
</script>
<style>
.form {
  max-width: 600px;
  margin: auto;
}
</style>
