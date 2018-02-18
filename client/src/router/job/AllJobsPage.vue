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
      <router-link to="/login" class="button is-primary is-outlined is-large is-focused" v-if="!$root.user">Want to add a job offer ? Just email us !</router-link>
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
      isAdmin: true
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
* .card {
  max-width: 23rem;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    .card__image {
      filter: contrast(100%);
    }
  }
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
