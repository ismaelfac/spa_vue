<template>
  <div class="google-map">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as GoogleMapsLoader from 'google-maps'

export default {
  name: 'google-map',
  props: {
    addressLocation:{type: String},
    latitud: { type: String, default:'10.9576147' },
    longitud: { type: String, default:'-74.8044416' }
  },
  computed: mapGetters({
    config: 'config',
  }),

  mounted () {
    GoogleMapsLoader.KEY = this.config.googleMaps.apiKey
    /* We stick to version updates instead of weekly channel update because
       using weekly updates you need to test them, but we prefer to use stable
       versions. */
    GoogleMapsLoader.VERSION = '3.35'
    GoogleMapsLoader.load((google) => {
      /* eslint-disable no-new */
      new google.maps.Map(this.$el, {
        center: new google.maps.LatLng(this.latitud, this.longitud),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      })
    })
  },
}
</script>

<style lang="scss">
.google-map {
  height: 100%;
}
</style>
