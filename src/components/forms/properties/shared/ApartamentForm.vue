<template>
	<div class="form-elements">
	    <div class="va-row">
	      <div class="flex md12">
	      	<vuestic-widget :headerText="'forms.inputs.properties.apartamentTitle' | translate">
	          <form>
	            <div class="va-row">
	            	<div class="flex md1 pr-1">
	            		<fieldset>
	            			<label class="control-label" for="simple-input">{{'forms.inputs.properties.elevator'
		                        | translate}}</label>
	            		</fieldset>
	            	</div>
	            	<div class="flex md2 pr-2">
	            		<fieldset>
		                  <vuestic-switch v-model="isElevator">
		                    <span
		                      slot="trueTitle">{{'forms.inputs.yes' | translate}}</span>
		                    <span slot="falseTitle">{{'forms.inputs.not' | translate}}</span>
		                  </vuestic-switch>
		                </fieldset>    
	            	</div>
	            	<div class="flex md2 pr-2">
	            		<fieldset>
		                  <div class="form-group">
		                    <div class="input-group">
		                      <input id="simple-input" v-model="totalArea" required/>
		                      <label class="control-label" for="simple-input">{{'forms.inputs.properties.totalArea'
		                        | translate}}</label><i class="bar"></i>
		                    </div>
		                  </div>
		                </fieldset>    
	            	</div>
	            	<div class="flex md2 pr-2">
	            		<fieldset>
		                  <div class="form-group">
		                    <div class="input-group">
		                      <input id="simple-input" v-model="boundaries" required/>
		                      <label class="control-label" for="simple-input">{{'forms.inputs.properties.boundaries'
		                        | translate}}</label><i class="bar"></i>
		                    </div>
		                  </div>
		                </fieldset>    
	            	</div>
	            	<div class="flex md2 pr-1">
	            		<fieldset>
		                  <div class="form-group">
		                    <div class="input-group">
		                      <input id="simple-input" v-model="parkingLot" required/>
		                      <label class="control-label" for="simple-input">{{'forms.inputs.properties.parkingLot'
		                        | translate}}</label><i class="bar"></i>
		                    </div>
		                  </div>
		                </fieldset>    
	            	</div>
	            	<div class="flex md2 pr-1">
	            		<fieldset>
		                  <div class="form-group">
		                    <div class="input-group">
		                      <input id="simple-input" v-model="administration" required/>
		                      <label class="control-label" for="simple-input">{{'forms.inputs.properties.administration'
		                        | translate}}</label><i class="bar"></i>
		                    </div>
		                  </div>
		                </fieldset>    
	            	</div>
	            </div>
	          </form>
	        </vuestic-widget>
	      </div>
	    </div>
	</div>
</template>
<script>
	export default {
		name: 'ApartamentForm',
		data () {
			return {
				isElevator: false,
				totalArea: '',
				boundaries: '',
				parkingLot: '',
				administration: ''
			}
		}
	}
</script>