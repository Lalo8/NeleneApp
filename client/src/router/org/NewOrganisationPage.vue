<template>
    <div class="container">
        <div class="header">
            <h1 class= "title">Let's create a new organisation !</h1>
             <div class="trait"></div>
            <p>In order for the organisation page to be useful, please enter as many details as possible  </p>
        </div>
         <div class="card">
            <organisation-form @submit="addNewOrganisation"></organisation-form>
       
            <section>
            </section>
        </div>
    </div> 
</template>
<script>
import { addNewOrganisation } from '@/api/organisations'
import OrganisationForm from '@/components/OrganisationForm'
export default {
    components: {
    OrganisationForm,
  },
    data() {
        return {
            errors: [],
            selectedOptions: []
        }
    },
    methods: {
        
        addNewOrganisation(organisation) {
            // this.organisation.name = "Paps"
            // this.organisation.description = "Geolocation delivery service app"
            // this.organisation.contact = "contact@paps.com"
            // this.organisation.address = "2 ruoe"
            // this.organisation.country = "Sénégal"
            // this.organisation.city = "Dakar"
            // this.organisation.category = "startup"
            // this.organisation.needs = "seed funding"
            // this.organisation.ownerId = "59f0ab43c12c7c4a2bfc0918"
            addNewOrganisation(organisation).then(organisation => {
                console.log("Organisation created: ", organisation)
                this.$router.push('/');
            })
            
        }
    }
  }


</script>

<style scoped >
.trait
{
background-color:rgb(121,92,210);
height: 4pt;
width: 22%;
margin-left: 38rem;
margin-top: -5px;
}
.title{
margin : 0px;
}
.header{
    text-align: center;
    margin-top: 3rem;
   ;
}

.header p {
    margin-top: 15px;
}
.container{
    padding: 20px;
    padding-top: 15px;
    margin-bottom: 7rem;
}
.card{
  padding: 50px;
    margin-top: 30px;
    margin-bottom: 50px;
    max-width: 60rem;
    background-color: white;
    border-radius: 0.25rem;
    -webkit-box-shadow: 0 20px 40px -14px rgba(121,92,210,0.9);
    box-shadow: 0 20px 40px -14px rgba(121,92,210,1);
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
