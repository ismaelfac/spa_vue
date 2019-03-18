<template>
	<div class="form-wizard-page">
		<div class="va-row">
      <div class="flex md12">
        <vuestic-widget class="no-h-padding"
                        :headerText="$t('forms.wizard.simple')">
          <vuestic-wizard
            :steps="hsSteps">
            <div slot="page1" class="form-wizard-tab-content">
              <div class="form-wizard-tab-content-text">
                <p>Zebras communicate with facial expressions and sounds. They
                  make loud braying or barking sounds and
                  soft snorting sounds. The position of their ears, how wide
                  open their eyes are, and whether they show
                  their teeth all send a signal. For example, ears flat back
                  means trouble, or "you better follow orders!"</p>
              </div>
              <div class="form-group with-icon-right"
                   :class="{'has-error': errors.has('hsName'), 'valid': isFormFieldValid('hsName')}">
                <div class="input-group">
                  <input
                    name="hsName"
                    data-vv-as="Name"
                    v-model="hsName"
                    v-validate="'required'"
                    required title=""/>
                  <i
                    class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                  <i class="fa fa-check valid-icon icon-right input-icon"></i>
                  <label class="control-label">{{'forms.wizard.name' |
                    translate}}</label><i class="bar"></i>
                  <small v-show="errors.has('hsName')" class="help text-danger">
                    {{ errors.first('hsName') }}
                  </small>
                </div>
              </div>
            </div>
            <div slot="page2" class="form-wizard-tab-content">
              <div class="form-wizard-tab-content-text">
                <p>Zebras communicate with facial expressions and sounds. They
                  make loud braying or barking sounds and
                  soft snorting sounds. The position of their ears, how wide
                  open their eyes are, and whether they show
                  their teeth all send a signal. For example, ears flat back
                  means trouble, or "you better follow orders!"</p>
              </div>
              <vuestic-simple-select
                label="Select country"
                v-model="hsCountry"
                name="country"
                :required="true"
                ref="hsCountrySelect"
                v-bind:options="countriesList">
              </vuestic-simple-select>
            </div>
            <div slot="page3" class="form-wizard-tab-content">
              <h4>{{'forms.wizard.confirmSelection' | translate}}</h4>
              <p>
                Zebras communicate with facial expressions and sounds. They make
                loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open
                their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means
                trouble, or "you better follow orders!"
              </p>
            </div>
            <div slot="wizardCompleted" class="form-wizard-tab-content">
              <h4>{{'forms.wizard.completed' | translate}}</h4>
              <p>
                Zebras communicate with facial expressions and sounds. They make
                loud braying or barking sounds and
                soft snorting sounds. The position of their ears, how wide open
                their eyes are, and whether they show
                their teeth all send a signal. For example, ears flat back means
                trouble, or "you better follow orders!"
              </p>
            </div>
          </vuestic-wizard>
        </vuestic-widget>
      </div>
    </div>
	</div>
</template>
<script>
	import CountriesList from 'data/CountriesList'
	export default {
		name: 'SubscriteForm',
		components: {
		}
	}
</script>