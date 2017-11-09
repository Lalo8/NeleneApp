<template>
    <div class= "splitex">
      <div class="filter">
        <filter-bar :organisations="organisations" @filter="filteredOrganisations = $event">
        </filter-bar>
      </div>
      <div class="left">
        <div class="result">
          <h1> <span> {{filteredOrganisations.length}}</span> results </H1>
          <div class="noresult" v-if="filteredOrganisations.length===0">
            No result : do another research
          </div>
        </div>
        <organisations-list :organisations="filteredOrganisations" small >
          <organisation-card  smallimg smallcontent ></organisation-card>
        </organisations-list>
      </div>
      <div class="right">
        <map-org :organisations="filteredOrganisations" small></map-org>
      </div>
    </div>
</template>

<script>
import { getOrganisations } from "@/api/organisations";
import MapOrg from '@/components/MapOrg';
import FilterBar from '@/components/FilterBar';
import OrganisationsList from '@/components/OrganisationsList'


export default {
   components: {
        MapOrg,
        FilterBar,
        OrganisationsList
    },
	data () {
		return {
			center: {
				lat:  3.319292,
				lng: 4.4218547,
      },
      searched:'',
			userPosition: null,
      zoom: 4,
      organisations:[],
      filteredOrganisations:[]
		}
  },
  created() {
    getOrganisations().then(organisations => {
      this.organisations = organisations,
      this.filteredOrganisations = organisations
    })
  },
}
</script>

<style scoped>
.splitex{
display: flex;
padding-top:2rem;
flex-direction: row;
background-color:#FBF4FF;
height: 100%;
width: 1458px;


}
.filter{
  margin-top: 4rem;
  position: absolute;
  padding:20px;
  z-index: 700;
  left: 700px;
  /* text-align: center; */
  width: 500px;
  margin: auto;
  top: 54px;
  background-color: rgba(54, 25, 25, 0.3);
  
}
.left{
  width: 450px;
  height: 100%;
}
.right{
  height: 100%;
  width: 1100px;
  
}
.searchbar{
max-width: 600px;
}
.split{
  display:flex;
  flex-direction: column;
  height : 100%;
  padding: 10px;
  padding-top: 2rem;
      
}
.overviewcontainer{
  display: flex;
  flex-direction: row;
}
.result{
text-align:center;
  font-size: 35px;
  font-weight: bold;
  background-color:#FBF4FF;
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #795CD2;
   
}
.result span {
  font-weight: bold;
  font-size: 50px;
}
</style>
