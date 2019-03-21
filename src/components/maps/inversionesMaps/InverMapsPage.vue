<template>
  <div class="google-maps-page">
    <div class="va-row">
      <div class="flex md6 pr-1">
        <fieldset>
            <div class="form-group form-group-w-btn">
              <div class="input-group">
                <input id="input-w-btn" v-model="addressLocation" required/>
                <label class="control-label" for="input-w-btn">{{'forms.inputs.properties.addressLocation'
                  | translate}}</label><i class="bar"></i>
              </div>
              <div class="btn btn-micro btn-primary">
                {{'forms.inputs.properties.btnSearchLocatiom' | translate}}
              </div>
            </div>
          </fieldset>   
      </div>
      <div class="flex md3 pr-1">
        <fieldset>
            <div class="form-group">
              <div class="input-group">
                <input id="simple-input" v-model="latitud" required/>
                <label class="control-label" for="simple-input">{{'forms.inputs.properties.latitud'
                  | translate}}</label><i class="bar"></i>
              </div>
            </div>
          </fieldset>    
      </div>
      <div class="flex md3 pr-1">
        <fieldset>
            <div class="form-group">
              <div class="input-group">
                <input id="simple-input" v-model="longitud" required/>
                <label class="control-label" for="simple-input">{{'forms.inputs.properties.longitud'
                  | translate}}</label><i class="bar"></i>
              </div>
            </div>
          </fieldset>    
      </div>
      <div class="flex md12 xs12">
        <vuestic-widget
          class="google-maps-page__widget"
          headerText="Google Maps"
        >
          <google-map :addressLocation="this.addressLocation" :latitud="this.latitud" :longitud="this.longitud" ></google-map>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from '../google-maps/GoogleMap'

export default {
  name: 'google-maps-page',
  components: {
    GoogleMap,
  },
  data () {
    return {
      addressLocation: '',
      latitud: '',
      longitud: '',
    }
  }
}
</script>

<style lang="scss">
 .google-maps-page{
   &__widget {
     height: 70vh;
     .vuestic-widget-body {
       height: 65vh;
     }
   }
 }
</style>
