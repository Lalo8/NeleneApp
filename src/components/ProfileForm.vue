<template>
  <form @submit.prevent="$emit('submit', user)">

        <p v-if="user.image !== undefined">Your current photo</p>
         <p v-if="user.image !== undefined" style="font-weight: bold">Your current photo</p><img :src="user.image" v-if="user.image && getURL === '/account'" style="width:100px !important; height: 100px !important; object-fit: cover !important">
                <br><br>
        <b-field label="Add a photo">
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
            <b-input v-model="name">
                 {{user.name}}
            </b-input> 
        </b-field>
        <b-field label="Short Description">
            <b-input v-model="description" type="textarea">
               {{user.description}} 
            </b-input>
        </b-field>
        <b-field label="Contact">
            <b-input v-model="contact" type="Email" value="Email">
                {{user.contact}} 
            </b-input>
        </b-field>
        <b-field grouped>
            <b-field label=" Country" expanded>
                <b-input v-model="country" placeholder="Sénégal, Cameroun...">
                    {{user.country}} 
                </b-input>
            </b-field>
            <b-field label=" City" expanded>
                <b-input v-model="city" placeholder="Dakar, Yaoundé...">
                     {{user.city}} 
                </b-input>
            </b-field>
        </b-field>

        <b-field label=" Category">
            <b-select placeholder="Select your expertise" icon="person" v-model="expertise">
                <option value="web development">Web Development</option>
                <option value="marketing">Marketing</option>
                <option value="finance">Finance</option>
                 <option value="data analyst">Data Analyst</option>
            </b-select>
        </b-field>
        <button class="button is-primary">Save changes</button>
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
      name: "",
      description: "",
      contact: "",
      type: "",
      address: "",
      country: "",
      city: "",
      category: "",
      needs: [],
      expertise: []
    };
  },
  computed: {
    organisation() {
      return {
        name: this.name,
        contact: this.contact,
        address: this.address,
        country: this.country,
        city: this.city,
        category: this.category,
        needs: this.needs,
        type: this.type,
        img: this.files[0]
      };
    },
    user() {
      return {
        name: this.name,
        description: this.shortdescription,
        contact: this.email,
        city: this.city,
        country: this.country,
        expertise: this.expertise,
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
