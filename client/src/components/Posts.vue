<template>
	<v-main class="pa-2">
		<v-container>
			<v-row>
				<v-col v-for="post of posts" :key="post.id" cols="3" md="4">
					<card
						:cardsInfo="{
							title: post.title,
							image: post.image,
							content: post.content,
							category: post.category,
						}"
					/>
				</v-col>
			</v-row>
		</v-container>
	</v-main>
</template>

<script lang="ts">
import Vue from "vue";
import { IPostItems } from "../store/index";
import Card from "./Card.vue";

export default Vue.extend({
	components: { Card },
	name: "Posts",
	props: {
		posts: {
			required: true,
			type: Array as () => IPostItems[],
		},
	},
	data: () => ({
		show: false,
	}),
});
</script>
