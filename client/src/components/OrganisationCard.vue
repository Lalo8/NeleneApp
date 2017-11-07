<template>
    <li>
        <div class="newCard">
            <div class="card" :class="{smallcard :smallcard}">
                <div class="card-image" >
                    <figure class="image is-3by2" :class="{smallimg :smallimg}" v-if="organisation.type === 'social business'">
                        <img src="../assets/social.png" alt="Placeholder image">
                    </figure>
                    <figure class="image is-3by2" :class="{smallimg :smallimg}"  v-if="organisation.type === 'tech'">
                        <img src="../assets/tech2.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img :src="organisation.img" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content" :class="{smallcontent :smallcontent}">
                        <p class="title is-5">{{organisation.name}}</p>
                        <p class="subtitle is-7">{{organisation.author}}</p>
                    </div>
                    </div>
                    <div class="content" :class="{smallcontent :smallcontent}">
                        <p>{{organisation.description}}</p>
                        <router-link class="button is-primary is-outlined is-small" :to="'/organisations/view/'+ organisation._id">
                            Let's know more
                        </router-link>
                        <br>
                        <br>
                        <div v-if="smallcard">
                            <b-tag rounded type="is-danger is-small">{{organisation.category}}</b-tag>
                            <b-tag rounded type="is-warning is-small">{{organisation.type}}</b-tag>
                            <!-- <b-tag v-for="need in organisation.needs" :key="need" rounded type="is-warning is-medium">{{need}}</b-tag> -->
                            <b-tag rounded type="is-info is-small">{{organisation.country}}</b-tag>
                        </div>
                        <div v-else>
                            <b-tag rounded type="is-danger is-medium">{{organisation.category}}</b-tag>
                            <b-tag rounded type="is-warning is-medium">{{organisation.type}}</b-tag>
                            <!-- <b-tag v-for="need in organisation.needs" :key="need" rounded type="is-warning is-medium">{{need}}</b-tag> -->
                            <b-tag rounded type="is-info is-medium">{{organisation.country}}</b-tag>
                        </div>
                    </div>
                </div>
                <!-- <div v-if="editable" class="card-footer">
                </div> -->
            </div>
            <div class="optionAdmin" v-if="editable">
                <router-link :to="'/organisations/edit/'+ organisation._id" class="button commandA is-warning is-small">Edit</router-link>
                <button v-if="$root.user.isAdmin" @click="remove" class="button commandA card-footer-item is-danger is-small" >Delete</button>
            </div>
        </div>
    </li>
</template>

<script>
export default {
  props: {
    organisation: Object,
    editable: Boolean,
    smallcard: {
      type: Boolean,
      default: true,
    },
    smallimg: {
      type: Boolean,
      default: true,
    },
    smallcontent: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
      remove() {
          this.$emit('delete')
      }
  }
    
};
</script>

<style scoped>
.newCard{
    display: flex;

}
.optionAdmin {
    flex-direction: column;
    height: 100%;
}

.commandA{
    height: 50%;
    width : 100%;
}
.card{
  max-width: 23rem;
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
.card-footer{
  margin-top: 10px;
  border: none;
}
li{
  display: flex;
  margin-left: -16px;
  padding: 1rem;
  @media(min-width: 40rem) {
    width: 50%;
  }
  @media(min-width: 56rem) {
    width: 33.3333%;
  }
}

.smallcard{
    max-width: 20rem;
    max-height: 32rem;
}
.smallimg {
    padding-top: 60%;
}
/* .smallcontent{
    height: 300px

} */

.smallcontent p.title{
font-size: 15px;

}
.smallcontent p{
font-size: 13px;
} 

</style>
