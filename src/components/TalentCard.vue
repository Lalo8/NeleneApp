<template>
    <li class="sublist">
        <div class="newCard">
            <div class="card">
                <div class="card-image" >
                    <figure>
                        <img :src="user.img" alt="Placeholder image" style="width:318px !important; height: 210px !important; object-fit: cover !important">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                          <p class="title is-5">{{user.firstname}}</p>
                          <p  v-if="user.country !== undefined & user.city!== undefined " class="country"> {{user.city}}, {{user.country}}</p>
                      </div>
                   
                    
                    </div>
                    <div class="content">
                      <div class="description">
                        <p>{{user.shortdescription}}</p>
                        <router-link class="button is-primary is-outlined is-small" :to="'users/view/'+ user._id">
                            Discover my profile !
                        </router-link>
                        <br>
                        <br>
                      </div>
                      
                        <div class="taglist">
                            <b-tag rounded type="is-danger is-small">{{user.expertise}}</b-tag>
                            <b-tag rounded type="is-info is-small" v-if="user.isJobSeeker==true">looking for a job</b-tag>
                            <b-tag rounded type="is-warning is-small" v-if="user.isStartupSeeker==true">Want to join a startup team</b-tag>
                            <!-- <b-tag v-for="need in organisation.needs" :key="need" rounded type="is-warning is-medium">{{need}}</b-tag>
                            <b-tag rounded type="is-info is-small">{{organisation.country}}</b-tag>-->
                        </div>
                </div>
            </div>
            <!-- <div v-if="editable" class="card-footer">
            </div> -->
        </div>
            <!-- <div class="optionAdmin" v-if="editable">
                <router-link :to="'/organisations/edit/'+ organisation._id" class="button commandA is-warning is-small">Edit</router-link>
                <button v-if="$root.user.isAdmin" @click="remove" class="button commandA is-danger is-small" >Delete</button>
            </div> -->
    </div> 
    </li>
</template>
<script>
export default {
  props: {
    user: Object,
    editable: Boolean,
    isJobSeeker: {
      type: Boolean,
      default: false
    }
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
  }
  // data() {
  //   return {
  //     img: "",
  //     name: "",
  //     shortdescription: ""
  //   };
  // }
};
</script>

<style scoped>
.taglist {
}
span.tag.is-warning.is-small.is-rounded {
  margin-top: 3px;
}
.newCard {
  display: flex;
}
.optionAdmin {
  display: flex;
  flex-direction: column;
}
figure {
  text-align: center;
}

.card {
  max-width: 18rem;
  max-height: 30rem;
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
.card-footer {
  margin-top: 10px;
  border: none;
}
.sublist {
  display: flex;
  margin-right: -10px;
  padding: 0.8rem;
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.3333%;
  }
}

.card-content {
  height: 300px;
  padding-top: 1rem;
}
.media-content {
  text-align: center;
}
.media-content p.title {
  font-size: 25px;
}
.media-content p {
  font-size: 13px;
  margin-bottom: 0px;
}
.country {
  color: #785bd2;
}
.content {
  text-align: center;
}
.content p {
  font-size: 16px;
  font-style: italic;
}
</style>
