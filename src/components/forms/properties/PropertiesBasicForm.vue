<template>
	<div class="form-elements">
	    <div class="va-row">
	      <div class="flex md12">
	      	<vuestic-widget :headerText="'forms.inputs.user.title' | translate">
	          <form>
	            <div class="va-row">
            	<div class="flex md6 pr-1">
            		<fieldset>
	                  <vuestic-simple-select
	                    :label="'forms.inputs.user.userType' | translate"
	                    v-model="simpleSelectModelUserType"
	                    option-key="description"
	                    v-bind:options="simpleOptionsUserType"
	                  />
	                </fieldset>    
            	</div>
	            <div class="flex md6">
	                <fieldset>
	                  <vuestic-simple-select
	                    :label="'forms.inputs.user.dniType' | translate"
	                    v-model="simpleSelectModelDniType"
	                    option-key="description"
	                    v-bind:options="simpleOptionsDniType"
	                  />
	                </fieldset>
	            </div>
	            <template v-if="simpleSelectModelDniType.id === 1">
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
            	<template v-if="simpleSelectModelDniType.id === 2">
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
            	<template v-if="simpleSelectModelDniType.id === 1 || simpleSelectModelDniType.id === 2">
            		<div class="flex md6 pr-1">
	            		<fieldset>
		                  <div class="form-group">
		                    <div class="input-group">
		                      <input id="simple-input" required/>
		                      <label class="control-label" for="simple-input">{{'forms.inputs.user.dni'
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
		                      <label class="control-label" for="simple-input">{{'forms.inputs.user.phone'
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
		                      <label class="control-label" for="simple-input">{{'forms.inputs.user.landline'
		                        | translate}}</label><i class="bar"></i>
		                    </div>
		                  </div>
		                </fieldset>    
	            	</div>
	            	<div class="flex md6 pr-1">
	            		<fieldset>
		                  <div class="form-group with-icon-right"
		                       :class="{'has-error': errors.has('successfulEmail'), 'valid': isSuccessfulEmailValid}">
		                    <div class="input-group">
		                      <input
		                        id="successfulEmail"
		                        name="successfulEmail"
		                        v-model="successfulEmail"
		                        v-validate="'required|email'"
		                        required/>
		                      <i
		                        class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
		                      <i
		                        class="fa fa-check valid-icon icon-right input-icon"></i>
		                      <label class="control-label" for="successfulEmail">{{'forms.inputs.emailValidatedSuccess'
		                        | translate}} </label><i
		                      class="bar"></i>
		                      <small v-show="errors.has('successfulEmail')"
		                             class="help text-danger">
		                        {{ errors.first('successfulEmail') }}
		                      </small>
		                    </div>
		                  </div>
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