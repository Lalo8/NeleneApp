<template>
        <ul class="list">
            <job-card
                v-for="(job, index) in jobs"
                :key="job._id"
                :job="job"
                :editable="editable"
                @delete="deleteJob(job, index)"
            >
            </job-card>
        </ul>
</template>

<script>
import JobCard from "@/components/JobCard";
import { removeJob } from "@/api/jobs";

export default {
  components: {
    JobCard
  },
  props: {
    jobs: Array,
    editable: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    deleteJob(job, index) {
      removeJob(job._id).then(() => {
        this.jobs.splice(index, 1);
      });
    }
  }
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  /* position: absolute; */
  margin-bottom: 2px;
  padding-bottom: 31px;
}
.small {
  padding: 1rem 4px 5px 45px;
  overflow: auto;
  /* position: absolute; */
  top: 0;
  background-color: #fbf4ff;
  max-height: 750px;
  padding-bottom: 60px;
}
</style>
