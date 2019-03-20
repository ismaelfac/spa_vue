<template>
	<div>
		<vuestic-tabs :names="[$t('InfoBasica'), $t('InfoDemografica'), $t('Perfil'), $t('Roles')]">
			<div :slot="$t('InfoBasica')">
				<properties-form></properties-form>
			</div>	
			<div :slot="$t('InfoDemografica')">
				
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
	import PropertiesForm from '../../forms/properties/PropertiesBasicForm'
	export default {
		name: 'RegisterUserAdmin',
		components: {
			PropertiesForm
		}
	}
</script>