<template>
	<posts :posts="posts" />
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Posts from "../components/Posts.vue";

export default Vue.extend({
	name: "Home",
	components: {
		Posts,
	},
	computed: {
		...mapGetters({
			posts: "allPosts",
		}),
	},
});
</script>
