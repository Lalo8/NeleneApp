<template>
  <gmap-map
    :class="{
      map: true,
      small: small
    }"
    :center="center"
    :zoom="zoom"
    > 
      <gmap-info-window :content="infoContent" :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
      </gmap-info-window>
    <gmap-marker
      v-for="organisation in organisations"
      :key="organisation._id"
      v-if="organisation.location && organisation.location.coordinates && organisation.location.coordinates.length === 2"
      :position="{ lat: organisation.location.coordinates[1], lng: organisation.location.coordinates[0] }"
    >
  
    </gmap-marker>

  </gmap-map>
</template>

<script>
export default {
  props: {
    organisations: Array,
    small: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      center: {
        lat: 3.319292,
        lng: 4.4218547
      },
      userPosition: null,
      zoom: 4,
      infoContent: "",
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    };
  },

  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = organisation.name;
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        //if different marker set infowindow to open and reset current marker index
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  }
};
</script>

<style scoped>
.map {
  height: 600px;
  width: 100%;
}
.small {
  height: 988px;
}
</style>
