<template>
	<div class="bgGreen h-screen w-1/6 rounded-r-3xl px-8 py-12 flex flex-col justify-between fixed">
		<div>
			<nuxt-link to="/" class="flex items-center justify-center">
				<img src="../../static/logo_court-monochrome_blanc.png" class="w-1/3 rounded-lg" />
			</nuxt-link>
			<nav class=" font-bold my-20">
				<ul>
					<li v-for="(el, index) in menu" :key="index" class="my-10 text-white hoverTextViolet">
						<nuxt-link :to="el.link">{{ el.title }}</nuxt-link>
					</li>
				</ul>
			</nav>
		</div>
		<div class="text-white flex flex-col items-center justify-center">
			<p class="text-xl font-bold">
				<font-awesome-icon icon="fa-solid fa-user" class="mr-2" /> Patrick Fassot
			</p>
			<nuxt-link to="/" class="hoverTextViolet">Déconnexion</nuxt-link>
		</div>
	</div>
</template>

<script>
import icon from "../../assets/icon"

export default {
	name: "AdminMenu",

	data() {
		return {
			menu: [
				{
					title: "Accueil",
					link: "/admin/"
				},
				{
					title: "Liste des cours",
					link: "/admin/"
				},
				{
					title: "Liste des sessions",
					link: "/admin/"
				},
				{
					title: "Membres du bureau",
					link: "/admin/"
				},
				{
					title: "Les licenciés",
					link: "/admin/"
				},
				{
					title: "Les inscription",
					link: "/admin/"
				},
				{
					title: "Actualités",
					link: "/admin/"
				},
			]
		}
	}

}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";

.textGreen {
	color: $mainGreen;
}

.textViolet {
	color: $mainViolet;
}

.textBlue {
	color: $mainBlue;
}

.bgGreen {
	background-color: $mainGreen;
}

.bgViolet {
	background-color: $mainViolet;
}

.bgBlue {
	background-color: $mainBlue;
}

.hoverTextViolet:hover {
	color: $mainViolet
}
</style>
