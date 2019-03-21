<template>
	<!-- FEATURED FLAT AREA START -->
	<div class="featured-flat-area pt-5 pb-80">
		<div class="container">
			<div class="row">
				<properties-item
					v-for="(property, index) in properties"
					:key="property.id"
					:properties="properties"
					:property="property"
					:index="index"
				></properties-item>
			</div>
		</div>
	</div>
	<!-- FEATURED FLAT AREA END -->
</template>
<script>
import { mapState } from "vuex";
import PropertiesItem from "./PropertyItem.vue";
export default {
	name: "PropertiesFavorites",
	components: {
		PropertiesItem
	},
	computed: mapState({
		properties: state => state.properties.all
	}),
	created() {
		this.$store.dispatch("properties/getAllProperties");
	}
};
</script>
<style lang="css" scoped></style>
