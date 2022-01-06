<template>
	<v-container>
		<v-row>
			<pre>{{ JSON.stringify(posts, null, 3) }}</pre>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { IPostItems } from "../store/index";

export default Vue.extend({
	name: "HelloWorld",
	props: {
		posts: {
			required: true,
			type: Array as () => IPostItems[],
		},
	},
	data: () => {
		return {};
	},
});
</script>
