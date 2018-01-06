<template>
<div class="containeredit">
    <section>
      <div class="cardedit" v-if="user">
            <form @submit.prevent="editUser">
                <p v-if="user.img !== undefined" style="font-weight: bold">Your current photo</p>
                <div class="profileimage"><img :src="user.img" style="width:250px !important; height: 250px !important; object-fit: cover !important">
                </div>       
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
                <!-- TODO Il faut utiliser user.attr partout et enlever l'interpolation -->
                <b-field label="Name">
                    <b-input v-model="user.name"></b-input> 
                </b-field>
                <b-field label="Short Description">
                    <b-input v-model="user.shortdescription" type="textarea"></b-input>
                </b-field> 
                <!-- <b-field label="Contact">
                    <b-input v-model="user.email" type="Email" value="Email">
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

                <b-field label="Expertise">
                    <b-select placeholder="Select your expertise" icon="person" v-model="expertise">
                        <option value="web development">Web Development</option>
                        <option value="marketing">Marketing</option>
                        <option value="finance">Finance</option>
                        <option value="data analyst">Data Analyst</option>
                    </b-select>
                </b-field> -->
                <button class="button is-primary">Save changes</button>
            </form>
        </div>
    </section>
</div>
</template>

<script>
import { editUser, getUser } from "@/api/users";
export default {
  data() {
    return {
      user: null,
      errors: [],
      selectedOptions: [],
      files: []
    };
  },
  methods: {
    editUser() {
      let { user } = this;
      if (this.files.length > 0) {
        user = Object.assign({}, user);
        user.img = this.files[0];
      }
      editUser(this.$root.user._id, user).then(user => {
        this.$router.push("/");
      });
    }
  },
  created() {
    getUser(this.$root.user._id).then(user => {
      this.user = user;
    });
  }
};
</script>
<style scoped>
.profileimage {
  display: flex;
  justify-content: center;
}
img {
  border-radius: 200px;
}
.form {
  max-width: 600px;
  margin: auto;
}
.containeredit {
  padding: 20px;
  padding-top: 15px;
  margin-bottom: 7rem;
  margin-top: 60px;
}

.cardedit {
  padding: 50px;
  margin-top: 30px;
  margin-bottom: 50px;
  max-width: 60rem;
  background-color: white;
  border-radius: 0.25rem;
  -webkit-box-shadow: 0 20px 40px -14px rgba(121, 92, 210, 0.9);
  box-shadow: 0 20px 40px -14px rgba(121, 92, 210, 1);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: auto;
  overflow: hidden;
}
</style>
