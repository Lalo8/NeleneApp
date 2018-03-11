<template>
    <section v-if="job">
        <div class="banner">
            {{job.title}}
            <div class="companyHeader">
              {{job.company}}
            </div>

        </div>
        <div class="cardprofile">

             <div class= "header">
                 <ul class="jobrecap">
                     <li><i class="fa fa-globe"></i> {{job.country}} - {{job.city}}</li>
                     <li><i class="fa fa-briefcase"></i> {{job.contract}}</li>
                     <li><i class="fa fa-calendar"></i> {{job.startdate}}</li>
                     <li><i class="fa fa-map-marker"></i> {{job.conditions}}</li>

                 </ul>

             </div>
                <p class="title">Job Description</p> 
                <div class="trait"></div>
                <br>
                {{job.description}}
                <p class="title">Candidate Profile</p> 
                <div class="trait"></div>
                <br>
                <!-- <p class="title">Needs</p> 
                <div class="trait"></div>
                <div class="card-content centered">
                    <div class="need" v-for="need in organisation.needs" :key="need">
                        <figure class="image is-150x150" v-if="need === 'recruitment'" >
                            <img src="../../assets/rn.png">
                        </figure>
                        <figure class="image is-150x150" v-if="need === 'location'">
                            <img src="../../assets/ln.png">
                        </figure>
                        <figure class="image is-150x150" v-if="need === 'seed funding'">
                            <img src="../../assets/sn.png">
                        </figure>
                        <b-tag class="subtitle" rounded type="is-warning is-medium">
                            {{need}}
                        </b-tag>
                    </div>
                </div> -->
                <!-- <p class="title">Current job offers</p>
                <div class="trait2"></div>
                <button @click="isjobOfferModalActive =true">{{organisation.joboffer.label}}</button>
                <b-modal :active.sync="isjobOfferModalActive"> 
                    <iframe class="joboffertemp" :src="organisation.joboffer.content" width="800" height="900" frameborder="0"></iframe>
                </b-modal> -->
                    <br>
                    <div class="buttonAction">
                        <router-link to="/jobs" class="button is-info is-medium" position:="is-centered" @click="isCardModalActive = true"> <i class="fa fa-arrow-left"></i>  Go back to the list 
                        </router-link> </br>
                        <button class="button is-primary is-medium" position:="is-centered" @click="isCardModalActive = true"> I want to apply ! 
                        </button>
                    </div>
                    <b-modal v-if="!$root.user" :active.sync="isCardModalActive" :width="640">
                        <header class="modal-card-head">
                        <p class="modal-card-title">GOOD NEWS!</p>
                        <button class="delete" aria-label="close" @click="isCardModalActive = false"></button>
                        </header>
                        <div class="card">
                            <div class="card-content">
                                <div class="content centered">
                                    <p class="title"></p>
                                    <p class="subtitle" style="margin-top:3px">First, you have to <a href="/login">login </a> to access the job contact</p>
                                </div>
                            </div>
                        </div>
                    </b-modal>
        </div>
                    <b-modal v-if="$root.user" :active.sync="isCardModalActive" :width="640">
                        <header class="modal-card-head">
                        <p class="modal-card-title">GOOD NEWS!</p>
                        <button class="delete" aria-label="close" @click="isCardModalActive = false"></button>
                        </header>
                        <div class="card">
                            <div class="card-content">
                                <div class="content centered">
                                    <p class="title"></p>
                                    <p class="subtitle" style="margin-top:3px">For that, you just need to send a message to <a :href="`mailto:${job.contact}`">{{job.contact}}</a></p>
                                </div>
                            </div>
                        </div>
                    </b-modal>
        </div>
    </section>
</template>

<script>
import { getJob } from "@/api/jobs";
export default {
  data() {
    return {
      activeTab: 0,
      isCardModalActive: false,
      isjobOfferModalActive: false,
      job: null
    };
  },
  created() {
    getJob(this.$route.params.id).then(job => {
      this.job = job;
    });
  }
};
</script>

<style scoped>
.buttonAction {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 437px;
  margin: auto;
}
button {
  padding: 2px;
}

i {
  margin-right: 7px;
}
.companyHeader {
  font-size: 20px;
  font-style: italic;
}
.header {
  margin: auto;
}
.jobrecap {
  flex-direction: row;
  display: flex;
  color: #38382e;
  margin-bottom: 30px;
}
.jobrecap,
li {
  margin-right: 20px;
}
.trait {
  background-color: rgb(121, 92, 210);
  height: 4pt;
  width: 54px;
  margin-top: -27px;
  margin-left: 3rem;
}
.trait2 {
  background-color: rgb(121, 92, 210);
  height: 4pt;
  width: 54px;
  margin-top: -27px;
  margin-left: 11rem;
}
.banner {
  width: 100%;
  height: 300px;
  margin-top: 0px;
  background-color: #cccccc;
  background-image: url("../../assets/dakar2.jpg");
  text-align: center;
  padding-top: 10%;
  color: white;
  font-size: 40px;
  font-weight: bold;
}
.button {
  width: 200px;
  margin: auto;
}
.subtitle {
  font-size: 18px;
}
.cardprofile {
  padding: 50px;
  margin-top: 40px;
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
.card-content {
  display: flex;
  padding: 50px 30px;
}
p {
  margin-left: 10px;
  margin-bottom: 0px;
}
.title {
  margin-top: 5px;
  font-size: 25px;
}
.subtitle {
  margin-top: 20px;
}

.joboffertemp {
  margin-top: 80px;
}

.cardprofile,
article {
  width: 80%;
  margin: 30px auto;
  margin-bottom: 8rem;
  border: none;
}
.centered {
  margin: auto;
}
.need {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 150px;
}

span.tag.subtitle.is-warning.is-medium.is-rounded {
  margin: 10px;
}
</style>
