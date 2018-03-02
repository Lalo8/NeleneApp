<template> 
  <div class="container">
    <div class="maintitle">
      <h1>What about joining an african innovative organization ?</h1>
       <div class="trait"></div>
    </div>
    <div class="searchbar">
       <filter-bar :jobs="jobs" @filter="filteredJobs= $event"></filter-bar>
    </div>
    <div class="noresult" v-if="filteredJobs.length===0">
            No result : do another research
    <br><img src="https://res.cloudinary.com/hiwkem5s6/image/upload/c_scale,h_167,w_257/v1510244774/erroremoji.jpg">
    </div>

    <jobs-list :jobs="filteredJobs">
      <job-card></job-card>
    </jobs-list>
    <footer>
      <!-- <router-link to="/login" class="button is-primary is-outlined is-large is-focused" v-if="!$root.user">Want to add a job offer ?</router-link> -->
       <button class="button is-primary is-medium" position:="is-centered"@click="isCardModalActive = true"> Want to add a job offer ?
                    </button>
      <b-modal :active.sync="isCardModalActive" :width="640">
                        <header class="modal-card-head">
                        <p class="modal-card-title">This is the way to proceed</p>
                        <button class="delete" aria-label="close" @click="isCardModalActive = false"></button>
                        </header>
                        <div class="card">
                            <div class="card-content">
                                <div class="content centered">
                                    <p class="subtitle" style="margin-top:3px">For that, you just need to send us a message with all the details of the job offer -> <a href="mailto:">hello@nelene.com</a></p>
                                </div>
                            </div>
                        </div>
                    </b-modal>
      <router-link to="/jobs/add" class="button is-primary is-outlined is-large is-focused" v-if="$root.user"> Add a job offer !</router-link>
    </footer>
  </div>
</template>


<script>
import { getJobs } from "@/api/jobs";
import JobsList from "@/components/JobsList.vue";
import FilterBar from "@/components/FilterBar";
export default {
  components: {
    JobsList,
    FilterBar
  },
  props: {
    searched: ""
  },
  data() {
    return {
      jobs: [],
      filteredJobs: [],
      errors: [],
      selected: null,
      isAdmin: true,
      isCardModalActive: false,
      isjobOfferModalActive: false
    };
  },
  methods: {
    filter() {
      this.$emit("filter", this.filterBy(this.jobs, this.searched));
    }
  },
  created() {
    getJobs().then(jobs => {
      this.jobs = jobs;
      this.filteredJobs = jobs;
    });
  }
};
</script>

 <style scoped>
.centered {
  margin: auto;
}
.container {
  margin-top: 50px;
}
footer {
  text-align: center;
  margin-bottom: 120px;
}
.searchbar {
  margin: 30px auto;
  max-width: 700px;
}
*/ ul {
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

h1 {
  font-size: 30px;
  margin: auto;
  margin-bottom: 1rem;
  font-weight: bold;
}

.maintitle {
  text-align: center;
  padding-top: 4rem;
}
.trait {
  background-color: rgb(121, 92, 210);
  height: 4pt;
  width: 13%;
  margin-left: 60rem;
  margin-top: -23px;
}

.noresult {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
</style>
