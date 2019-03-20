<template>
	<div class="form-elements">
	    <div class="va-row">
	      <div class="flex md12">
	      	<vuestic-widget :headerText="'forms.inputs.properties.title' | translate">
	          <form>
	            <div class="va-row">
            	<div class="flex md6 pr-1">
            		<fieldset>
	                  <vuestic-simple-select
	                    :label="'forms.inputs.properties.propertyType' | translate"
	                    v-model="simpleSelectModelPropertyType"
	                    option-key="description"
	                    v-bind:options="simpleOptionsPropertyType"
	                  />
	                </fieldset>    
            	</div>
	            <div class="flex md6">
	                <fieldset>
	                </fieldset>
	            </div>
	            <template v-if="simpleSelectModelPropertyType.id === 1 || simpleSelectModelPropertyType.id === 2">
            		<div class="flex md6 pr-1">
	            		<fieldset>
		                  <div class="form-group">
		                    <div class="input-group">
		                      <input id="simple-input" required/>
		                      <label class="control-label" for="simple-input">{{'forms.inputs.properties.propertyTitle'
		                        | translate}}</label><i class="bar"></i>
		                    </div>
		                  </div>
		                </fieldset>    
	            	</div>
            		<div class="flex md6 pr-1">
	            		<fieldset>
		                  <div class="form-group">
		                    <div class="input-group">
		                      <input id="simple-input" required/>
		                      <label class="control-label" for="simple-input">{{'forms.inputs.properties.stratum'
		                        | translate}}</label><i class="bar"></i>
		                    </div>
		                  </div>
		                </fieldset>    
	            	</div>
	            	<div class="flex md3 pr-1">
	            		<fieldset>
		                   <vuestic-checkbox
		                      :label="$t('forms.inputs.properties.checkboxSale')"
		                      v-model="checkboxSale.unselected"
		                    />
		                </fieldset>    
	            	</div>
	            	<div class="flex md3 pr-1">
	            		<fieldset>
		                   <div class="form-group" v-if="checkboxSale.selected === true">
		                    <div class="input-group">
		                      <input id="simple-input" required/>
		                      <label class="control-label" for="simple-input">{{'forms.inputs.properties.saleValue'
		                        | translate}}</label><i class="bar"></i>
		                    </div>
		                  </div>
		                </fieldset>    
	            	</div>
	            	<div class="flex md3 pr-1">
	            		<fieldset>
		                   <vuestic-checkbox
		                      :label="$t('forms.inputs.properties.checkboxRent')"
		                      v-model="checkboxRent.unselected"
		                    />
		                </fieldset>    
	            	</div>
	            	<div class="flex md3 pr-1">
	            		<fieldset>
		                   <div class="form-group" v-if="checkboxRent.selected === true">
		                    <div class="input-group">
		                      <input id="simple-input" required/>
		                      <label class="control-label" for="simple-input">{{'forms.inputs.properties.leaseCanon'
		                        | translate}}</label><i class="bar"></i>
		                    </div>
		                  </div>
		                </fieldset>    
	            	</div>
            	</template>
	            <template v-if="simpleSelectModelPropertyType.id === 1">
		            <div class="flex md6 pr-1">
	            		<fieldset>
		                  <div class="form-group">
		                    <div class="input-group">
		                      <input id="simple-input" required/>
		                      <label class="control-label" for="simple-input">{{'forms.inputs.user.firsName'
		                        | translate}}</label><i class="bar"></i>
		                    </div>
		                  </div>
		                </fieldset>    
	            	</div>
		            <div class="flex md6">
		                <fieldset>
		                  <div class="form-group">
		                    <div class="input-group">
		                      <input id="simple-input" required/>
		                      <label class="control-label" for="simple-input">{{'forms.inputs.user.lastName'
		                        | translate}}</label><i class="bar"></i>
		                    </div>
		                  </div>
		                </fieldset>
		            </div>
            	</template>
            	<template v-if="simpleSelectModelPropertyType.id === 2">
            		<div class="flex md6 pr-1">
	            		<fieldset>
		                  <div class="form-group">
		                    <div class="input-group">
		                      <input id="simple-input" required/>
		                      <label class="control-label" for="simple-input">{{'forms.inputs.user.businessName'
		                        | translate}}</label><i class="bar"></i>
		                    </div>
		                  </div>
		                </fieldset>    
	            	</div>
		            <div class="flex md6">
		                <fieldset>
		                  <vuestic-simple-select
		                    :label="'forms.inputs.user.businessUnit' | translate"
		                    v-model="simpleSelectModelBusinessUnit"
		                    option-key="description"
		                    v-bind:options="simpleOptionsBusinessUnit"
		                  />
	                	</fieldset>
		            </div>
            	</template>
            	<template v-else>
            		<h1 class="text-center">Seleccione el tipo de Usuario</h1>
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
	export default {
		name: 'UserForm',
		data () {
			return {
				kindPerson: true,
				checkboxSale: {
			        unselected: false,
			        selected: true,
			        readonly: true,
			        disabled: true,
			        error: false,
			        errorMessages: true
			      },
			    checkboxRent: {
			        unselected: false,
			        selected: true,
			        readonly: true,
			        disabled: true,
			        error: false,
			        errorMessages: true
			      },
				simpleOptionsPropertyType: [
					{
					  id: 1,
					  description: 'Apartamento',	
					},
					{
					  id: 2,
					  description: 'Oficinas',	
					},
					{
					  id: 3,
					  description: 'Casa Comercial',	
					}
				],
				simpleOptionsUserType: [
					{
			          id: 1,
			          description: 'Natural',
			        },
			        {
			          id: 2,
			          description: 'Juridica',
			        }
				],
				simpleOptionsDniType: [
			        {
			          id: 1,
			          description: 'Cedula de Ciudadania',
			        },
			        {
			          id: 2,
			          description: 'Nit',
			        },
			        {
			          id: 3,
			          description: 'Pasaporte',
			        }
			    ],
			    simpleOptionsBusinessUnit: [
			        {
			          id: 1,
			          description: 'Tecnologia',
			        },
			        {
			          id: 2,
			          description: 'Servicios',
			        },
			        {
			          id: 3,
			          description: 'Comercial',
			        }
			    ],
			    simpleSelectModelPropertyType: '',
			    simpleSelectModelDniType: '',
			    simpleSelectModelUserType: '',
			    simpleSelectModelBusinessUnit: '',
			}
		},
		methods: {
		    clear (field) {
		      this[field] = ''
		    },
		  },
		  created () {
		    this.$nextTick(() => {
		      this.$validator.validateAll()
		    })
		  },
	}
</script>