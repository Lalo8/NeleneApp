<template>
  <div class="containeredit">
    <section>
      <div class="cardedit" v-if="job">
        <form @submit.prevent="editJob">
         <p v-if="job.img !== undefined" style="font-weight: bold">The current company picture</p>
         <br>
          <img :src="job.img" style="width:700px !important; height: 150px !important; object-fit: cover !important">
                <br><br>
          <b-field label="Add a new picture">
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
            <b-field label="Company" required>
                <b-select placeholder="job.company" icon="person" v-model="job.company">
                    <option :v-for="organisation in organisations" :value="organisation._id">{{organisation.name}}</option>
                </b-select>
             </b-field>
          <b-field label="Title">
              <b-input v-model="job.title"></b-input>  
          </b-field>
          <b-field label="Job Description">
              <b-input v-model="job.description" type="textarea">
                {{job.description}}
              </b-input>
          </b-field>
          <b-field label="Candidate profile" required>
            <b-input v-model="job.profile" type="textarea">
               {{job.description}}
            </b-input>
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
                <b-field label=" Country">
                    <b-input v-model="job.country">
                    {{job.country}}
                    </b-input>
                </b-field>
                <b-field label=" City">
                    <b-input v-model="job.city" >
                    {{job.city}}
                    </b-input>
                </b-field>
          </b-field>
          <b-field label="Contact">
              <b-input v-model="job.contact" type="Email" >
                {{job.contact}}
              </b-input>
          </b-field>
          <b-field label=" Job Contract">
            <b-select placeholder="job.contract" icon="person" v-model="job.contract">
                <option value="permament contract">Permanent contract</option>
                <option value="fixed-term contract">Fixed-term contract</option>
                <option value="internship">Internship </option>
                <option value="voluntareeing">Voluntareeing</option>
                <option value="to define">To define</option>
            </b-select>
        </b-field>
        <b-field label=" Work Conditions">
            <b-select placeholder="job.conditions" icon="person" v-model="job.conditions">
                <option value="remotely">Remotely</option>
                <option value="in residence">in residence</option>
                <option value="To define">To define </option>
            </b-select>
        </b-field>
          <b-field label=" Category">
            <b-select placeholder="job.category" icon="person" v-model="job.category">
              <option value="marketing">marketing</option>
                <option value="communication">communication</option>
                <option value="finance">finance</option>
                <option value="science">science</option>
                <option value="research">research</option>
                <option value="business development">business development</option>
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
import { editJob, getJob } from "@/api/jobs";
import { getOrganisations } from "@/api/organisations";

export default {
  data() {
    const today = new Date();
    return {
      job: null,
      errors: [],
      selectedOptions: [],
      startdate: new Date(),
      minDate: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
      organisations: []
    };
  },
  methods: {
    editJob() {
      editJob(this.$route.params.id, this.job).then(job => {
        this.$router.push("/admin");
      });
    }
  },
  created() {
    getJob(this.$route.params.id).then(job => {
      this.job = job;
    });
    getOrganisations().then(organisations => {
      this.organisations = organisations;
      this.organisations.sort();
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