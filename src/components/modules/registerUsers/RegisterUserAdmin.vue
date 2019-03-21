<template>
	<div>
        <users-info-widgets></users-info-widgets>
		<vuestic-tabs :names="[$t('InfoBasica'), $t('InfoDemografica'), $t('Perfil'), $t('Roles')]">
			<div :slot="$t('InfoBasica')">
				<user-basic-form></user-basic-form>
			</div>	
			<div :slot="$t('InfoDemografica')">
				<user-demogra-form></user-demogra-form>
			</div>		
			<div :slot="$t('Perfil')">
				Cuarta Pestaña
			</div>	
			<div :slot="$t('Roles')">
				Tercera Pestaña
			</div>
		</vuestic-tabs>	
		
	</div>
</template>
<script>
	import UsersInfoWidgets from './shared/UsersInfoWidgets'
	import UserBasicForm from '../../forms/users/UserBasicForm'
	import UserDemograForm from '../../forms/users/UserDemograForm'
	export default {
		name: 'RegisterUserAdmin',
		components: {
			UsersInfoWidgets,
			UserBasicForm,
			UserDemograForm
		}
	}
</script>