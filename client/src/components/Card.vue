<template>
	<v-container>
		<v-row>
			<v-col>
				<v-card
					class="mx-auto"
					max-width="400"
					min-height="350"
					:to="{ name: 'posts', params: { postId: `${cardsInfo.id}` } }"
				>
					<v-img
						:src="`images/posts/${cardsInfo.image}`"
						height="300px"
					></v-img>

					<v-card-title class="headline"> {{ cardsInfo.title }} </v-card-title>

					<v-card-subtitle> {{ cardsInfo.category }}</v-card-subtitle>

					<v-card-actions>
						<v-btn color="blue darken-2" small outlined> Details </v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang='ts'>
import Vue from "vue";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";

export default Vue.extend({
	name: "Card",
	props: {
		cardsInfo: {
			required: true,
			type: Object as () => {
				id: string;
				title: string;
				content: string;
				category: string;
				image: string;
			},
		},
	},
	data: () => ({
		show: false,
		mdiChevronDown,
		mdiChevronUp,
	}),
	created: function () {},
});
</script>

<style lang="scss" scope>
</style>