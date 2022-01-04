<template>
	<main>
		<AsyncPosts />
		<router-view />
	</main>
</template>


<script lang="ts">
import { defineAsyncComponent, defineComponent } from "@vue/runtime-core";

export default defineComponent({
	name: "App",
	components: {
		AsyncPosts: defineAsyncComponent(
			() => import("./components/post/Posts.vue")
		),
	},
	data() {
		return {};
	},
});
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
