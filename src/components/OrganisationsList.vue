<template>
        <ul class="list" :class="{
                 small:$route.path === '/overview'
             }">
            <organisation-card
                v-for="(organisation, index) in organisations"
                :key="organisation._id"
                :organisation="organisation"
                :editable="editable"
                @delete="deleteOrganisation(organisation, index)"
            >
            </organisation-card>
        </ul>
        
</template>

<script>
import OrganisationCard from "@/components/OrganisationCard";
import { removeOrganisation } from "@/api/organisations";

export default {
  data() {
    return {
      pageNumber: 0
    };
  },

  components: {
    OrganisationCard
  },
  props: {
    organisations: Array,
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
    deleteOrganisation(organisation, index) {
      removeOrganisation(organisation._id).then(() => {
        this.organisations.splice(index, 1);
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
