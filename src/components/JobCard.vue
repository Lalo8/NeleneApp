<template>
    <li class="sublist">
        <div class="newCard">
            <div class="card">
                <div class="card-image image is-3by2" >
                  {{job.contract}}
                </div>
                <div class="card-content">
                <ul>
                  <li>
                      <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                            <img :src="job.company.img" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <router-link :to="'/jobs/view/'+ job._id"><p class="title is-7">{{job.title}}</p></router-link>
                            <router-link class="subtitle is-7" :to="'/organisations/view/'+ job.company._id">{{job.company.name}}</router-link>
                            <p class="titleCountry is-7">{{job.country}} - {{job.city}} </p>
                        </div>
                      </div>
                      <div class="content">
                          <router-link class="button is-primary is-outlined is-small buttondetails" :to="'/jobs/view/'+ job._id">
                              {{ $t("more.infos") }}
                          </router-link>
                          <div class="tags">
                              <b-tag rounded type="is-danger is-small">{{job.category}}</b-tag>
                              <b-tag rounded type="is-warning is-small">{{job.country}}</b-tag>    
                              <!-- <b-tag v-for="need in organisation.needs" :key="need" rounded type="is-warning is-medium">{{need}}</b-tag> -->
                              <b-tag rounded type="is-info is-small">{{job.conditions}}</b-tag>
                          </div>
                      </div>
                      </li>
                    </ul>
                </div>
                <div v-if="editable" class="card-footer">
                </div>
            </div>
            <div class="optionAdmin" v-if="editable">
                <router-link :to="'/jobs/edit/'+ job._id" class="button commandA is-warning is-small">Edit</router-link>
                <button v-if="$root.user.isAdmin" @click="remove" class="button commandA is-danger is-small" >Delete</button>
            </div>
        </div>
    </li>
</template>

<script>
import { getOrganisations } from "@/api/organisations";
export default {
  props: {
    organisation: Object,
    job: Object,
    editable: Boolean
    // smallcard: {
    //   type: Boolean,
    //   default: true,
    // },
    // smallimg: {
    //   type: Boolean,
    //   default: true,
    // },
    // smallcontent: {
    //   type: Boolean,
    //   default: true,
    // }
  },
  created() {
    getOrganisations().then(organisations => {
      this.organisations = organisations;
      this.organisations.sort();
    });
  },
  methods: {
    remove() {
      this.$emit("delete");
    }
  }
};
</script>

<style scoped>
.buttondetails {
  margin-left: 20%;
  position: absolute;
  bottom: 65px;
}
.newCard {
  display: flex;
}
.optionAdmin {
  display: flex;
  flex-direction: column;
}
.titleCountry {
  color: #785bd2;
}

.card {
  max-width: 20rem;
  max-height: 25rem;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* &:hover {
    .card__image {
      filter: contrast(100%);
    }
  } */
}
.card-footer {
  margin-top: 10px;
  border: none;
}

.card-image {
  width: 310px;
  height: 170px;
  color: white;
  background-image: url("../assets/Job_Card_V7.jpg");
  background-size: cover;
  text-align: center;
  color: white;
  font-size: 25px;
  font-weight: bold;
  z-index: px;
  padding-top: 5rem;
}

.image_header {
  width: 300px;
  height: 210px;
}
.sublist {
  display: flex;
  margin-right: -13px;
  padding: 0.8rem;
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.3333%;
  }
}

.card-content {
  height: 230px;
  width: 310px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.media-content p.title {
  font-size: 18px;
}
.media-content p.subtitle {
  margin-bottom: 0px;
}
.media-content p {
  font-size: 15px;
}
.content {
  margin-top: auto;
}
.content p.title {
  font-size: 20px;
}
.content p {
  font-size: 13px;
}

a.subtitle {
  font-size: 15px;
}

a.subtitle:hover {
  color: #3675d9;
}

.tags {
  position: absolute;
  bottom: 12px;
  width: auto;
}
</style>
