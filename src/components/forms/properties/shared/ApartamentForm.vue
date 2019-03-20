<template>
	<div class="form-elements">
	    <div class="va-row">
	      <div class="flex md12">
	      	<vuestic-widget :headerText="'forms.inputs.properties.apartamentTitle' | translate">
	          <form>
	            <div class="va-row">
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
	            </div>
	          </form>
	        </vuestic-widget>
	      </div>
	    </div>
	</div>
</template>