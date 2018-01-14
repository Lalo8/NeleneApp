<template>
    <div class="containeredit">
        <section>
            <b-tabs v-model="activeTab" position="is-centered" class="block">
                <b-tab-item label="My infos">
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
                                <b-field label="First Name">
                                    <b-input v-model="user.firstname"></b-input> 
                                </b-field>
                                <b-field label="Last Name">
                                    <b-input v-model="user.lastname"></b-input> 
                                </b-field>
                                <b-field label="Short Description">
                                    <b-input v-model="user.shortdescription" type="textarea"></b-input>
                                </b-field> 
                                <b-field label="Contact">
                                    <b-input v-model="user.email" type="Email" value="Email">
                                    </b-input>
                                </b-field>
                                <b-field grouped>
                                    <b-field label=" Country" expanded>
                                        <b-input v-model="user.country" placeholder="Sénégal, Cameroun...">
                                        </b-input>
                                    </b-field>
                                    <b-field label=" City" expanded>
                                        <b-input v-model="user.city" placeholder="Dakar, Yaoundé...">
                                        </b-input>
                                    </b-field>
                                </b-field>
                                <b-field label="Expertise">
                                    <b-select placeholder="Select your expertise" icon="person" v-model="user.expertise">
                                        <option value="web development">Web Development</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="finance">Finance</option>
                                        <option value="data analyst">Data Analyst</option>
                                    </b-select>
                                </b-field>
                                <b-field label= "Are you looking for a job ?" >
                                    <b-select v-model="user.isJobSeeker">
                                        <option value="True">Yes</option>
                                        <option value="False">No</option>
                                    </b-select>     
                                    <!-- <section>
                                        <div class="field">
                                            <b-checkbox>Yes</b-checkbox>
                                            <b-checkbox>No</b-checkbox>
                                        </div>
                                    </section> -->
                                </b-field>
                                <b-field label= "Are you looking for a team to create a startup ?" >
                                        <b-select v-model="user.isStartupSeeker">
                                            <option value="True">Yes</option>
                                            <option value="False">No</option>s
                                        </b-select>     
                                        <!-- <section>
                                            <div class="field">
                                                <b-checkbox value="True">Yes</b-checkbox>
                                                <b-checkbox value="False">No</b-checkbox>
                                            </div>
                                        </section> -->
                                </b-field>
                            <button class="button is-primary">Save changes</button>
                        </form>
                    </div>
                </b-tab-item>
                <b-tab-item v-if="$root.user.isAdmin" to="/admin" label="My Organisations">
            
                <div>
                    
                    <div class="container3">
                    <organisations-list :organisations="organisations" editable>
                    <organisation-card></organisation-card>
                    </organisations-list>
                    </div>
                </div>
                </b-tab-item>
            </b-tabs>
        </section>
    </div>
</template>

<script>
import { editUser, getUser } from "@/api/users";
import { getOrganisations, getOrganisationsByOwner } from "@/api/organisations";
import OrganisationsList from "@/components/OrganisationsList";
export default {
  components: {
    OrganisationsList
  },
  data() {
    return {
      user: null,
      errors: [],
      selectedOptions: [],
      files: [],
      organisations: []
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
    }),
      getOrganisationsByOwner(this.$root.user._id).then(organisations => {
        this.organisations = organisations;
      });
  }
};
</script>

<style scoped>
/* My organisations */
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  display: flex;
  padding: 1rem;
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.3333%;
  }
}
.container3 {
  margin: auto;
  max-width: 1242px;
  padding-top: 8rem;
}
/* My infos */
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
