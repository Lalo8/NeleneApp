<template>
    <section v-if="user">
        <div class="cardprofile">
                <div class="profileimage">
                    <img :src="user.img" style="width:250px !important; height: 250px !important; object-fit: cover !important">
                    <br>
                    <div class="name">
                        {{user.firstname}} {{user.lastname}}
                    </div>
                </div>
                <div grouped class="informations">
                    <p> <b-icon icon="home" size="is-medium" type="is-primary">
                    </b-icon>
                   {{user.city}}, {{user.country}}</p>
                   <p class="expertise_announcement"> <b-icon pack="fa" icon="cogs" size="is-medium" type="is-primary">
                    </b-icon> {{user.expertise}}</p>
                </div>

                <div class="user_details">
                    <p class="title">Why I have joined Nelene</p> 
                    <div class="trait"></div>
                    <p class="subtitle">{{user.shortdescription}}</p>
                    <br>
                    <p class="title">My professional experiences</p> 
                    <div class="trait"></div>
                </div>
            
                <!-- <p class="title">Current job offers</p>
                <div class="trait2"></div>
                <button @click="isjobOfferModalActive =true">{{user.joboffer.label}}</button>
                <b-modal :active.sync="isjobOfferModalActive"> 
                    <iframe class="joboffertemp" :src="user.joboffer.content" width="800" height="900" frameborder="0"></iframe>
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
                                    <p class="title">GREAT ! </p>
                                    <p class="subtitle" style="margin-top:3px">For that, you just need to send a message to <a href="mailto:"></a>{{user.contact}}</p>
                                </div>
                            </div>
                        </div>
                    </b-modal>
        </div>
    </section>
</template>
<script>
import { getUser } from "@/api/users";
export default {
  data() {
    return {
      activeTab: 0,
      isCardModalActive: false,
      isjobOfferModalActive: false,
      user: null
    };
  },
  created() {
    getUser(this.$route.params.id).then(user => {
      this.user = user;
    });
  }
};
</script>

<style scoped>
.expertise_announcement {
}
span.icon.is-primary.is-medium {
  padding-bottom: 6px;
}
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
.informations {
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.informations p {
  font-weight: bold;
  color: #6d6d6d;
  margin-right: 50px;
  margin-left: 45px;
  font-size: 18px;
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
.name {
  font-size: 32px;
  font-weight: bold;
  color: #785bd2;
  margin-top: 10px;
}
img {
  border-radius: 200px;
}
.profileimage {
  text-align: center;
}

.user_details {
  margin-top: 40px;
}
span.tag.subtitle.is-warning.is-medium.is-rounded {
  margin: 10px;
}
</style>
