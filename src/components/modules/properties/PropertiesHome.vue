<template>
	<div>
		<h2>Desde Properties Home</h2>
		<vuestic-tabs :names="[$t('Arriendos'), $t('Ventas'), $t('Marcas'), $t('Suscribete'),]">
			<div :slot="$t('Arriendos')">
				<property-list></property-list>
			</div>	
			<div :slot="$t('Ventas')">
				Segunda Pestaña
			</div>		
			<div :slot="$t('Marcas')">
				Cuarta Pestaña
			</div>	
			<div :slot="$t('Suscribete')">
				Tercera Pestaña
			</div>
		</vuestic-tabs>	
	</div>
</template>
<script>
	import PropertyList from './PropertyList'
	export default {
		name: 'PropertiesHome',
		components: {
			PropertyList
		}
	}
</script>
<style lang="scss">
	
</style>