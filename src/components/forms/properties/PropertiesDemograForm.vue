<template>
	<div class="form-elements">
	    <div class="va-row">
	      <div class="flex md12">
	      	<vuestic-widget :headerText="'forms.inputs.properties.demograTitle' | translate">
	          <form>
	            <div class="va-row">
	            	<template>
	            		<div class="flex md6 pr-1">
		            		<fieldset>
			                  <vuestic-simple-select
				                :label="'forms.inputs.country' | translate"
				                v-model="chosenCountry"
				                name="country"
				                option-key="description"
				                ref="hsCountrySelect"
				                v-bind:options="countriesList">
				              </vuestic-simple-select>
				            </fieldset>
		            	</div>
		            	<div class="flex md6 pr-1">
		            		<fieldset>
			                  <vuestic-simple-select
				                :label="'forms.inputs.departament' | translate"
				                v-model="chosenCountry"
				                name="country"
				                option-key="description"
				                ref="hsCountrySelect"
				                v-bind:options="countriesList">
				              </vuestic-simple-select>
				            </fieldset>
		            	</div>
		            	<div class="flex md6 pr-1">
		            		<fieldset>
			                  <vuestic-simple-select
				                :label="'forms.inputs.municipality' | translate"
				                v-model="chosenCountry"
				                name="country"
				                option-key="description"
				                ref="hsCountrySelect"
				                v-bind:options="countriesList">
				              </vuestic-simple-select>
				            </fieldset>
		            	</div>
		            	<div class="flex md6 pr-1">
		            		<fieldset>
			                  <vuestic-simple-select
				                :label="'forms.inputs.location' | translate"
				                v-model="chosenCountry"
				                name="country"
				                option-key="description"
				                ref="hsCountrySelect"
				                v-bind:options="countriesList">
				              </vuestic-simple-select>
				            </fieldset>
		            	</div>
	            	</template>
		            <template>
		            	<div class="flex md12">
		            		<fieldset>
			                  <vuestic-checkbox
			                    :label="$t('forms.inputs.properties.addressOption')"
			                    :value=true
			                    v-model="checkboxAddressOption.unselected"
			                  />
			                </fieldset>    
		            	</div>
		            	<div class="flex md12">
			            	<inver-maps-page></inver-maps-page>	
			        	</div>
	            	</template>
	            </div>
	          </form>
	        </vuestic-widget>
	      </div>
	    </div>
	</div>
</template>
<script>
import CountriesList from 'data/CountriesList'
import InverMapsPage from '../../maps/inversionesMaps/InverMapsPage'
export default {
	name: 'PropertiesBasicForm',
	components: {
		InverMapsPage
	},
	computed: {

	},
	data () {
		return {
			countriesList: CountriesList,
			chosenCountry: '',
			checkboxAddressOption: {
		        unselected: false,
		        selected: true,
		        editable: false,
		        readonly: true,
		        disabled: true,
		        error: false,
		        errorMessages: true
		      },
		    simpleSelectModelCountry: ''
		}
	},
	methods: {
	    clear (field) {
	      this[field] = ''
	    },
	  },
	  created () {
	  	console.log('entro ')
	    this.$nextTick(() => {
	      this.$validator.validateAll()
	    })
	  },
}
</script>