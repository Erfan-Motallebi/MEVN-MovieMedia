<template>
	<Cards :cards="cardsItems" />
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Cards from "../components/Cards.vue";

export default Vue.extend({
	name: "Home",
	components: {
		Cards,
	},
	computed: {
		...mapGetters({
			cardsItems: "allPosts",
		}),
	},
});
</script>
