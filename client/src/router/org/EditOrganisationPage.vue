<template>
  <div class="containeredit">
    <section>
      <div class="cardedit" v-if="organisation">
        <form @submit.prevent="editOrganisation">
         <p v-if="organisation.img !== undefined" style="font-weight: bold">Your current profile picture</p>
         <br>
          <img :src="organisation.img" style="width:700px !important; height: 150px !important; object-fit: cover !important">
                <br><br>
          <b-field label="Add a new profile picture">
          </b-field>
            <div class="field">
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
            </div>
          <b-field label="Name">
              <b-input v-model="organisation.name"></b-input>  
          </b-field>
          <b-field label="Description">
              <b-input v-model="organisation.description" type="textarea">
                {{organisation.description}}
              </b-input>
          </b-field>
          <b-field label="Contact">
              <b-input v-model="organisation.contact" type="Email" >
                {{organisation.contact}}
              </b-input>
          </b-field>
          <b-field grouped>
            <b-field label=" Address">
              <b-input v-model="organisation.address" >
              </b-input>
            </b-field>
            <b-field label=" Country" expanded>
              <b-input v-model="organisation.country">
                {{organisation.country}}
              </b-input>
            </b-field>
            <b-field label=" City" expanded>
              <b-input v-model="organisation.city" >
                {{organisation.city}}
              </b-input>
            </b-field>
          </b-field>
          <b-field grouped v-if="$root.user.isAdmin">
              <b-field label=" Location // Lat">
                <b-input v-model="organisation.location.coordinates[1]">
                  {{organisation.location.coordinates[1]}}
                </b-input>
              </b-field>
              <b-field label="Location // Lng">
                <b-input v-model="organisation.location.coordinates[0]" >
                  {{organisation.location.coordinates[0]}}
                </b-input>
              </b-field>
            </b-field>
          </b-field>
          <b-field label=" Category">
            <b-select placeholder="organisation.category" icon="person" v-model="organisation.category">
              <option value="startup">Start-Up</option>
              <option value="incubator">Incubator</option>
              <option value="investment">Investment Fund</option>
            </b-select>
          </b-field>
          <b-field label="Type of needs">
            <b-select multiple native-size="3" v-model="organisation.needs" placeholder="organisation.category">
              <option value="recruitment">recruitment</option>
              <option value="location">location</option>
              <option value="seed funding">seed funding</option>     
            </b-select>
          </b-field>
            <b-field label="Type of activity" >
              <b-select placeholder="organisation.type" v-model="organisation.type">
                  <option value="tech">tech</option>
                  <option value="social business">social business</option>
              </b-select>
            </b-field>
            <!-- <b-field  label="Les offres d'emplois" v-if="$root.user.isAdmin" >
            </b-field> 
            <b-field grouped class="file has-name is-fullwidth">
              <b-field label="Intitulé de l'offre">
                <b-input v-model="organisation.joboffer.label"></b-input>
              </b-field>
              <b-field label="">
                <b-upload v-model="organisation.joboffer.content" drag-drop>
                  <a class="button is-primary">
                    <b-icon icon="upload"></b-icon>
                    <span class="file-label">Ajouter une offre</span>
                  </a>
                </b-upload>
                <div v-if="organisation.joboffer && organisation.joboffer.length">
                  <span class="file-name">
                    {{ organisation.joboffer[0].name }}
                  </span>
                </div>
              </b-field>
            </b-field> -->
              <br>
          <button class="button is-primary">Submit information</button>
        </form>
      </div>
    </section>
  </div> 
</template>

<script>
import { editOrganisation, getOrganisation } from "@/api/organisations";

export default {
  data() {
    return {
      organisation: null,
      errors: [],
      selectedOptions: []
    };
  },
  methods: {
    editOrganisation() {
      editOrganisation(
        this.$route.params.id,
        this.organisation
      ).then(organisation => {
        this.$router.push("/");
      });
    }
  },
  created() {
    getOrganisation(this.$route.params.id).then(organisation => {
      this.organisation = organisation;
    });
  }
};
</script>

<style>
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