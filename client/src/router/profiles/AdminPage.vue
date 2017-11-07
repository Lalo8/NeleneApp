<template> 
    <div>
        <div class="container2">
            <div class="title">
                <h1>Let's do some cleanup !</h1>
            </div>
            <div class="container3">
                <organisations-list :organisations="organisations" :editable="true">
                    <organisation-card></organisation-card>
                </organisations-list>
            </div>
        </div>
    </div>
</template>

<script>
import { getOrganisations,removeOrganisation, editOrganisation} from '@/api/organisations'
import OrganisationsList from '@/components/OrganisationsList'

export default {
components: {
    OrganisationsList,
  },
  data() {
    return {
      organisations: [],
      errors: [],
      selected: null,
      name: '',
      organisation: {}
    }
},

  // computed: {
  //           filteredDataObj() {
  //               return this.organisations.filter((option) => {
  //                   return option.organisation.name
  //                       .toString()
  //                       .toLowerCase()
  //                       .indexOf(this.name.toLowerCase()) >= 0
  //               })
  //           }
  //       },

  created() {
    getOrganisations().then(organisations => {
      this.organisations = organisations
    })
  }
}

</script>

<style scoped>
h1{
    font-size: 40px;
    margin: 30px auto;
    font-weight: bold;
}
.title {
    text-align: center;
    margin-top: 150px;
}

footer {
  width: 400px;
  margin: 40px auto;
}
.searchbar{
margin: 30px auto;
max-width: 700px;
}
.card{
  max-width: 25rem;
   background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    .card__image {
      filter: contrast(100%);
    }
  }
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-right: 42px;
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
.card-content{
    padding-bottom : 0px;
}
.card-footer {
    padding-bottom: 20px;
}
span.icon {
    color: #dbdbdb;
    height: 1.5em;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 1.60em;
    z-index: 4;
}
.container3 {
    margin: auto;
    max-width: 1230px;
    padding-bottom: 1rem;
    margin-bottom: 6rem;
    margin-right: 38px;
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
                            <router-link class="button is-primary is-outlined is-small" :to="'/organisations/view/'+ organisation._id">Let's know more </router-link>
                            <br>
                            <br>
                            <!-- <div>
                                <b-tag rounded type="is-danger is-medium">{{organisation.category}}</b-tag>
                                <b-tag v-for="need in organisation.needs" :key="need" rounded type="is-warning is-medium">{{need}}</b-tag>
                                <b-tag rounded type="is-info is-medium">{{organisation.country}}</b-tag>
                            </div> -->
                        </div>

                    </div>
                </div>
            </li>
        </ul> */