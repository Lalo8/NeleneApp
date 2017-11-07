<template> 
  <div>
    <div class="container3">
      <organisations-list :organisations="organisations" editable>
      <organisation-card></organisation-card>
      </organisations-list>
    </div>
  </div>
</template>

<script>
import { getOrganisations,getOrganisationsByOwner } from '@/api/organisations'
import OrganisationsList from '@/components/OrganisationsList'

export default {
  components: {
    OrganisationsList,
  },
  data() {
    return {
      organisations: [],
      errors: []
    }
  },
  created() {
    getOrganisationsByOwner(this.$root.user._id).then(organisations => {
      this.organisations = organisations;
    });
  }
}

</script>

<style scoped>
footer {
  width: 400px;
  margin: 40px auto;
}


ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

li{
  display: flex;
  padding: 1rem;
  @media(min-width: 40rem) {
    width: 50%;
  }
  @media(min-width: 56rem) {
    width: 33.3333%;
  }
}
.container3 {
    margin: auto;
    max-width: 1242px;
    padding-bottom: 1rem;
    margin-bottom: 6rem;
}
</style>
/* <ul>
      <li v-for="organisation in organisations" :key="organisation._id">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../../assets/social.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{organisation.name}}</p>
                  <p class="subtitle is-6">{{organisation.author}}</p>
                </div>
              </div>

              <div class="content">
                <p>{{organisation.description}}</p>
                <router-link class="button is-primary is-outlined is-small" :to="'/organisations/view'+ organisation._id">Let's know more </router-link>
                <br>
                <div>
                  <b-tag rounded type="is-danger is-medium">{{organisation.category}}</b-tag>
                  <b-tag v-for="need in organisation.needs" :key="need" rounded type="is-warning is-medium">{{need}}</b-tag>
                  <b-tag rounded type="is-info is-medium">{{organisation.country}}</b-tag>
                </div>
                <div class="card-footer">
                  <router-link :href="'/organisations/edit/'+ organisation._id" class="button card-footer-item is-warning is-small">Edit</router-link>
                </div>
              </div>
          </div>
        </div>
      </li>
    </ul> */