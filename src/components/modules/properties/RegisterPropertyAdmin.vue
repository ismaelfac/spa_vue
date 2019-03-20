<template>
	<div>
		<vuestic-tabs :names="[$t('InfoBasica'), $t('InfoDemografica'), $t('Perfil'), $t('Roles')]">
			<div :slot="$t('InfoBasica')">
				<properties-basic-form></properties-basic-form>
			</div>	
			<div :slot="$t('InfoDemografica')">
				<properties-demogra-form></properties-demogra-form>
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
	import PropertiesBasicForm from '../../forms/properties/PropertiesBasicForm'
	import PropertiesDemograForm from '../../forms/properties/PropertiesDemograForm'
	export default {
		name: 'RegisterUserAdmin',
		components: {
			PropertiesBasicForm,
			PropertiesDemograForm
		}
	}
</script>