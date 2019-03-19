import FormUser from './UserForm'

export default {
	render(createElement) {
		return createElement(FormUser, {
			props: {
				title: 'Nuevo Usuario',
				action: 'create',
				user: {
					firtsName: '',
					lastName : '',
					dni: '',
					typeDni: ''
				}
			},
			on: {
				validateBeforeSubmit: (draft) => {
                   this.$validator.validateAll().then((result) => {
                      if(result){
                        console.log('paso la validacion')
                      }
                    })                    
                }
			}
		})
	}
}