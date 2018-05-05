<template>
  <div class="container">
       <!-- <div class="part1">
            <div class="maintitle">
                <h1>{{ $t("announce.concept") }}</h1>
                <div class="trait"></div>
            </div>
       </div> -->

      <div class="cardform">
        <div class="maintitle">
        <h1 v-html="$t('announce.concept')"></h1>
        </div>
       <div class="conceptDescription">
           <p v-html="$t('description.concept.intro')"></p>
            <p class= "ourRole" v-html="$t('description.concept.ourole')"></p>
            <p v-html="$t('description.concept.service1')"></p>

             <p v-html="$t('description.concept.service')"></p>
              <p class="verdict" v-html="$t('description.concept.verdict')"></p>
              <p class="visitorole1" v-html="$t('description.concept.visitorole1')"></p>
              <p v-html="$t('description.concept.visitorole')"></p>


       </div> 
     </div>
  </div>
</template>
<style scoped>
.container {
  margin-top: 50px;
  margin-bottom: 100px;
}
/* .trait {
  background-color: rgb(121, 92, 210);
  height: 4pt;
  width: 28%;
  z-index: 300;
  margin-top: -23px;
  margin-left: 35rem;
}
.trait2 {
  background-color: rgb(121, 92, 210);
  height: 4px;
  width: 28%;
  margin-top: 0px;
  margin-left: 66%;
  width: 88px; */

/* .trait3 {
  background-color: #fedc62;
  height: 4px;
  width: 28%;
  margin-top: 36px;
  margin-bottom: -31px;
  margin-left: 36%;
  width: 112px;
} */
h1 {
  font-size: 30px;
  margin: auto;
  margin-bottom: 1rem;
  font-weight: bold;
  padding-bottom: 10px;
  line-height: 30px;
  padding-top: 1rem;
}
.maintitle {
  text-align: center;

  padding: 20px;
  background-color: #fedc62;
  border-radius: 6px;
}
.conceptDescription {
  margin: auto;
  margin-top: 30px;
  max-width: 900px;
  margin-left: 25px;
  font-size: 20px;
}

.verdict {
  color: #785bd2;
  font-weight: 400;
}

.cardform {
  padding: 50px;
  margin-top: 30px;
  margin-bottom: 100px;
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
.ourRole {
  font-weight: bold;
}

.visitorole1 {
  font-weight: bold;
  margin-bottom: 10px;
}

.part1 {
  background-color: #fedc62;
  padding: 50px;
}
</style>
