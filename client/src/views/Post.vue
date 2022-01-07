<template>
	<v-container>
		<v-row>
			<v-col sm="10" class="pa-4 mx-auto">
				<v-card class="pa-2" outlined tile elevation="8">
					<v-img :src="`/images/posts/${postDetail.image}`"> </v-img>
					<v-row> </v-row>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import { IPostItems } from "../store";

export default Vue.extend({
	name: "Post",
	data: () => ({
		postDetail: {} as IPostItems,
	}),
	methods: {
		...mapActions({
			onePostDetails: "getOnePostById",
		}),
		...mapGetters({
			post: "getOnePost",
		}),
		recievePost() {
			this.postDetail = this.post();
		},
	},
	async created() {
		// await this.$store.dispatch({
		// 	type: "getOnePostById",
		// 	id: this.$route.params.postId,
		// });
		await this.onePostDetails({ id: this.$route.params.postId });
		this.recievePost();
	},
});
</script>

<style>
</style>