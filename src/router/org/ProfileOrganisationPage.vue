<template>
    <section v-if="organisation">
        <div class="banner">
            {{organisation.name}}
        </div>
        <div class="cardprofile">
                <p class="title">Activity</p> 
                <div class="trait"></div>
                <p class="subtitle" v-html="organisation.description"></p>
                <br>
                <p class="title">Needs</p> 
                <div class="trait"></div>
                <div class="card-content centered">
                    <div class="need" v-for="need in organisation.needs" :key="need">
                        <figure class="image is-150x150" v-if="need === 'recruitment'" >
                            <img src="../../assets/rn.png">
                        </figure>
                        <figure class="image is-150x150" v-if="need === 'location'">
                            <img src="../../assets/ln.png">
                        </figure>
                        <figure class="image is-150x150" v-if="need === 'seed funding'">
                            <img src="../../assets/sn.png">
                        </figure>
                        <b-tag class="subtitle" rounded type="is-warning is-medium">
                            {{need}}
                        </b-tag>
                    </div>
                </div>
                <!-- <p class="title">Current job offers</p>
                <div class="trait2"></div>
                <button @click="isjobOfferModalActive =true">{{organisation.joboffer.label}}</button>
                <b-modal :active.sync="isjobOfferModalActive"> 
                    <iframe class="joboffertemp" :src="organisation.joboffer.content" width="800" height="900" frameborder="0"></iframe>
                </b-modal> -->
                    <br>
                    <button class="button is-primary is-medium" position:="is-centered"@click="isCardModalActive = true"> I want to help ! 
                    </button>
                    <b-modal :active.sync="isCardModalActive" :width="640">
                        <header class="modal-card-head">
                        <p class="modal-card-title">Let's help !</p>
                        <button class="delete" aria-label="close" @click="isCardModalActive = false"></button>
                        </header>
                        <div class="card">
                            <div class="card-content">
                                <div class="content centered">
                                    <p class="title">GREAT  fff ! </p>
                                    <p class="subtitle" style="margin-top:3px">For that, you just need to send a message to <a :href="`mailto:${organisation.contact}`">{{organisation.contact}}</a></p>
                                </div>
                            </div>
                        </div>
                    </b-modal>
        </div>
    </section>
</template>

<script>
import { getOrganisation } from "@/api/organisations";
export default {
  data() {
    return {
      activeTab: 0,
      isCardModalActive: false,
      isjobOfferModalActive: false,
      organisation: null
    };
  },
  created() {
    getOrganisation(this.$route.params.id).then(organisation => {
      this.organisation = organisation;
    });
  }
};
</script>

<style scoped>
.trait {
  background-color: rgb(121, 92, 210);
  height: 4pt;
  width: 54px;
  margin-top: -27px;
  margin-left: 3rem;
}
.trait2 {
  background-color: rgb(121, 92, 210);
  height: 4pt;
  width: 54px;
  margin-top: -27px;
  margin-left: 11rem;
}
.banner {
  width: 100%;
  height: 300px;
  margin-top: 0px;
  background-color: #cccccc;
  background-image: url("../../assets/dakar2.jpg");
  text-align: center;
  padding-top: 10%;
  color: white;
  font-size: 40px;
  font-weight: bold;
}
.button {
  width: 200px;
  margin: auto;
}
.subtitle {
  font-size: 18px;
}
.cardprofile {
  padding: 50px;
  margin-top: 40px;
  margin-bottom: 50px;
  max-width: 60rem;
  background-color: white;
  border-radius: 0.25rem;
  -webkit-box-shadow: 0 20px 40px -14px rgba(121, 92, 210, 0.9);
  box-shadow: 0 20px 40px -14px rgba(121, 92, 210, 1);
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
.card-content {
  display: flex;
  padding: 50px 30px;
}
p {
  margin-left: 10px;
  margin-bottom: 0px;
}
.title {
  margin-top: 5px;
  font-size: 25px;
}
.subtitle {
  margin-top: 20px;
}

.joboffertemp {
  margin-top: 80px;
}

.cardprofile,
article {
  width: 80%;
  margin: 30px auto;
  margin-bottom: 8rem;
  border: none;
}
.centered {
  margin: auto;
}
.need {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 150px;
}

span.tag.subtitle.is-warning.is-medium.is-rounded {
  margin: 10px;
}
</style>

 <!-- <b-tabs position="is-centered" class="block" v-model="activeTab">
            <b-tab-item label="Description">
               <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-128x128">
                                     <img src="https://bulma.io/images/placeholders/256x256.png" alt="Placeholder image">
                                </figure>
                            </div>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p class="title">
                                    {{organisation.name}}
                                </p>
                                <p class="subtitle">{{organisation.description}} 
                                </p>
                                <button class="button is-primary is-medium" @click="isCardModalActive = true"> I want to help ! 
                                </button>
                                <b-modal :active.sync="isCardModalActive" :width="640">
                                    <div class="card">
                                        <div class="card-content">
                                            <div class="content centered">
                                                <p class="title">GREAT ! </p>
                                                <p class="subtitle" style="margin-top:3px">For that, you just need to send a message to <a href="mailto:"></a>{{organisation.contact}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </b-modal>
                            </div>
                        </div>
                    </div>
                </div>
            </b-tab-item>

            <b-tab-item label="Team">
                <div class="box">
                    <article class="media">
                        <div class="media-left">
                        <figure class="image is-64x64">
                            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                        </figure>
                        </div>
                        <div class="media-content">
                        <div class="content">
                            <p class="title">
                            <strong>John Smith</strong> </p>
                            <br>
                            <p class="subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                            </p>
                        </div>
                        <nav class="level is-mobile">
                            <div class="level-left">
                            <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-reply"></i></span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-facebook"></i></span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-whatsapp"></i></span>
                            </a>
                            </div>
                        </nav>
                        </div>
                    </article>
                    <article class="media">
                        <div class="media-left">
                        <figure class="image is-64x64">
                            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                        </figure>
                        </div>
                        <div class="media-content">
                        <div class="content">
                            <p class="title">
                            <strong>John Smith</strong> </p>
                            <br>
                            <p class="subtitle" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                            </p>
                        </div>
                        <nav class="level is-mobile">
                            <div class="level-left">
                            <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-linkedin"></i></span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-facebook"></i></span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-whatsapp"></i></span>
                            </a>
                            </div>
                        </nav>
                        </div>
                    </article>
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-64x64">
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <p class= title>
                                    <strong>John Smith</strong>
                                </p>
                                <br>
                                <p class="subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                </p>
                            </div>
                            <nav class="level is-mobile">
                                <div class="level-left">
                                    <a class="level-item">
                                        <span class="icon is-small"><i class="fa fa-reply"></i></span>
                                    </a>
                                    <a class="level-item">
                                        <span class="icon is-small"><i class="fa fa-facebook"></i></span>
                                    </a>
                                    <a class="level-item">
                                        <span class="icon is-small"><i class="fa fa-whatsapp"></i></span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </article>
                </div>    
            </b-tab-item>

            <b-tab-item label="Current Needs">
                <div class="card">
                    <div class="card-content centered">
                        <div class="need" v-for="need in organisation.needs" :key="need">
                            <figure class="image is-150x150" v-if="need === 'recruitment'" >
                                <img src="../../assets/rn.png">
                            </figure>
                            <figure class="image is-150x150" v-if="need === 'location'">
                                <img src="../../assets/ln.png">
                            </figure>
                            <figure class="image is-150x150" v-if="need === 'seed funding'">
                                <img src="../../assets/sn.png">
                            </figure>
                            <b-tag class="subtitle" rounded type="is-warning is-medium">
                                {{need}}
                            </b-tag>
                        </div>
                    </div>
                </div>
            </b-tab-item>
        </b-tabs> -->