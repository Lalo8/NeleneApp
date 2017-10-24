<template> 
<ul>
<li v-for="organisation in organisations">
<p>{{organisation.name}}</p>
<p>{{organisation.description}}</p>
<p>{{organisation.category}}</p>
</li>
</ul>
</template>

<script>
import { getOrganisations } from '@/api/organisations'

export default {
  data() {
    return {
      organisations: [],
      errors: []
    }
  },
  created() {
    getOrganisations().then(organisations => {
      this.organisations = organisations
    })
  }
}
</script>