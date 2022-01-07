<template>
	<v-main class="pa-2">
		<v-container>
			<v-row>
				<v-col v-for="card of cards" :key="card.id" xs="12" sm="6" md="4">
					<card
						:cardsInfo="{
							id: card.id,
							title: card.title,
							image: card.image,
							content: card.content,
							category: card.category,
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
		cards: {
			required: true,
			type: Array as () => IPostItems[],
		},
	},
	data: () => ({
		show: false,
	}),
});
</script>
