<template>
  <div class="form-wizard-page">
    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget class="no-h-padding"
                        :headerText="$t('Registrarme')">
          <vuestic-wizard
            :steps="hsSteps">
            <div slot="page1" class="form-wizard-tab-content">
              <div class="form-wizard-tab-content-text">
                <p>A continuación te presentamos 3 pasos sencillos para suscribirte, y recibiras contenido exclusivo en inmuebles, avaluos, catastros, propiedades, pot y mucho mas!"</p>
              </div>
              <div class="form-group with-icon-right"
                   :class="{'has-error': errors.has('hsName'), 'valid': isFormFieldValid('hsName')}">
                <div class="input-group">
                  <input
                    name="hsName"
                    data-vv-as="fullName"
                    v-model="hsName"
                    v-validate="'required'"
                    required title="Nombres Completos"/>
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
              <div class="form-group with-icon-right">
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
              <h4>{{'Subscripción Finalizada' | translate}}</h4>
              <p>
                Felicitaciones!, acabas de suscribirte con nosotros.<br> Por favor, revise su correo para confirmar sus datos."
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
    name: 'RegisterUserHome',
    components: {
    },
    computed: {
      hsSteps () {
        return [
          {
            label: this.$t('forms.wizard.stepOne'),
            slot: 'page1',
            onNext: () => {
              this.validateFormField('hsName'),
              this.validateFormField('successfulEmail')
            },
            isValid: () => {
              return this.isFormFieldValid('hsName'), this.isFormFieldValid('successfulEmail')
            },
          },
          {
            label: this.$t('forms.wizard.stepTwo'),
            slot: 'page2',
            onNext: () => {
              this.$refs.hsCountrySelect.validate()
            },
            isValid: () => {
              return this.$refs.hsCountrySelect.isValid()
            },
          },
          {
            label: this.$t('forms.wizard.stepThree'),
            slot: 'page3',
          },
        ]
      },
      isSuccessfulEmailValid () {
        let isValid = false
        if (this.formFields.successfulEmail) {
          isValid = this.formFields.successfulEmail.validated && this.formFields.successfulEmail.valid
        }
        return isValid
      }
    },
    data () {
      return {
        hsName: '',
        successfulEmail: '',
        hsCountry: '',
        countriesList: CountriesList,
        chosenCountry: '',
      }
    },
    methods: {
        isFormFieldValid (field) {
          let isValid = false
          if (this.formFields[field]) {
            isValid = this.formFields[field].validated && this.formFields[field].valid
          }
          return isValid
        },
        validateFormField (fieldName) {
          this.$validator.validate(fieldName, this[fieldName])
        },
      },
    created () {
      this.$nextTick(() => {
        this.$validator.validateAll()
      })
    }
  }
</script>
<style lang="scss">
.widget.simple-vertical-wizard-widget {
  .widget-body {
    padding: 0 $widget-padding;
    @include media-breakpoint-down(sm) {
      padding: $widget-padding 0;
    }
  }
}
</style>
