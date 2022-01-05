<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title> Magical Safari </v-list-item-title>
					<v-list-item-subtitle> Erfan Motallebi </v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-divider></v-divider>
			<v-list dense>
				<v-list-item-group color="primary">
					<v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
						<v-list-item-icon>
							<v-icon v-text="item.icon" color="blue"></v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title v-text="item.title"></v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-toolbar-title>Application</v-toolbar-title>
		</v-app-bar>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
import { mdiHome, mdiPost, mdiShare } from "@mdi/js";

export default {
	data: () => ({
		drawer: null,
		selectedItem: 1,
		items: [
			{ title: "Home", icon: mdiHome, link: "/" },
			{ title: "Add a post", icon: mdiPost, link: "/create-post" },
			{ title: "about us", icon: mdiShare, link: "/about-us" },
		],
	}),
};
</script>

<style lang="scss" scoped>
</style>