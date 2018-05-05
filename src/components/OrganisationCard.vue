<template>
    <li class="sublist">
        <div class="newCard">
            <div class="card">
                <div class="card-image" >
                    <div class="startup" v-if="organisation.category === 'startup'">
                        {{organisation.category}}
                    </div>
                    <div class="institution" v-if="organisation.category === 'incubator'">
                        {{organisation.category}}
                    </div>
                  
                </div>
                <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                          <figure class="image is-48x48">
                          <img :src="organisation.img" alt="Placeholder image">
                          </figure>
                      </div>
                      <div class="media-content">
                          <p class="title is-5">{{organisation.name}}</p>
                          <p class="subtitle is-7">{{organisation.author}}</p>
                      </div>
                    </div>
                    <div class="content">
                         <p v-html="organisation.shortDescription"></p>
                        <router-link class="button is-primary is-outlined is-small" :to="'/organisations/view/'+ organisation._id" v-html="$t('more.infos')">
                        </router-link>
                        <br>
                        <br>
                        <div class="tags_org">
                            <b-tag rounded type="is-danger is-small">{{organisation.category}}</b-tag>
                            <b-tag rounded type="is-warning is-small">{{organisation.type}}</b-tag>
                            <!-- <b-tag v-for="need in organisation.needs" :key="need" rounded type="is-warning is-medium">{{need}}</b-tag> -->
                            <b-tag rounded type="is-info is-small">{{organisation.country}}</b-tag>
                        </div>
                    </div>
                </div>
                <!-- <div v-if="editable" class="card-footer">
                </div> -->
            </div>
            <div class="optionAdmin" v-if="editable">
                <router-link :to="'/organisations/edit/'+ organisation._id" class="button commandA is-warning is-small">Edit</router-link>
                <button v-if="$root.user.isAdmin" @click="remove" class="button commandA is-danger is-small" >Delete</button>
            </div>
        </div>
    </li>
</template>

<script>
export default {
  props: {
    organisation: Object,
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
  methods: {
    remove() {
      this.$emit("delete");
    }
  }
};
</script>

<style scoped>
.newCard {
  display: flex;
}
.optionAdmin {
  display: flex;
  flex-direction: column;
}

.card-image {
  width: 320px;
  height: 190px;
  background-image: url("../assets/Job_Card_Org_V6.jpg");
  font-size: 28px;
  padding-top: 5.3rem;
  color: white;
  font-weight: bold;
  text-align: center;
}

.card {
  max-width: 20rem;
  max-height: 32rem;
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
/* .sublist {
  display: flex;
  margin-right: -13px;
  padding: 0.8rem}
  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.3333%;
  }
} */
.card-content {
  height: 280px;
  margin-top: 10px;
}

.media-content p.title {
  font-size: 20px;
  margin-bottom: 125rem;
}
.media-content p {
  font-size: 13px;
}
.content p.title {
  font-size: 15px;
}
.content p {
  font-size: 13px;
}

.tags_org {
  position: absolute;
  bottom: 24px;
  width: auto;
}

.button {
  position: absolute;
  bottom: 85px;
}
</style>
