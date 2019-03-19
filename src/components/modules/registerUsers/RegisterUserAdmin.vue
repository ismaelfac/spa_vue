<template>
	<div>
        <users-info-widgets></users-info-widgets>
		<vuestic-tabs :names="[$t('InfoBasica'), $t('InfoDemografica'), $t('Perfil'), $t('Roles')]">
			<div :slot="$t('InfoBasica')">
				<h6>Información Basica</h6>
			</div>	
			<div :slot="$t('InfoDemografica')">
				Segunda Pestaña
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
	export default {
		name: 'RegisterUserAdmin',
		components: {
			UsersInfoWidgets
		}
	}
</script>