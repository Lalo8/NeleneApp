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
    <b-field label="Company">
            <b-input v-model="company"></b-input> 
        </b-field>

        <div class="field">
            <div class="file is-warning is-boxed is-centered">
                <br>
            </div>
        </div>
        <b-field label="Title">
            <b-input v-model="title"></b-input> 
        </b-field>
        <b-field label="Job Description">
            <b-input v-model="description" type="textarea"></b-input>
        </b-field>
        <b-field label="Contact">
            <b-input v-model="contact" type="Email" value="Email"></b-input>
        </b-field>
        <b-field label=" Job Contract">
            <b-select placeholder="Select a category" icon="person" v-model="contract">
                <option value="permament contract">Permanent contract</option>
                <option value="fixed-term contract">Fixed-term contract</option>
                <option value="internship">Internship </option>
                <option value="voluntareeing">Voluntareeing</option>
                <option value="to define">To define</option>
            </b-select>
        </b-field>
        <b-field label="Category" >
            <!-- v-if="category===startup" -->
            <b-select multiple native-size="3" v-model="category">
                <option value="marketing & communication">marketing & communication</option>
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
export default {
  props: {
    displayInputLocation: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      picture: "",
      imgUrl: "",
      files: [],
      company: "",
      title: "",
      description: "",
      contact: "",
      contract: "",
      category: []
    };
  },
  computed: {
    job() {
      return {
        company: this.company,
        title: this.title,
        description: this.description,
        contact: this.contact,
        contract: this.contract,
        category: this.category,
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
