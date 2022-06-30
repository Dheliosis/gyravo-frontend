<template>
	<div>
		<TitlePage title="Le blog" color="green"></TitlePage>

		<div class="px-56 py-20">
			<div class="flex justify-end">
				<Button text="Filtres" background-color="backgroundWhite" text-color="textGreen"></Button>
			</div>
			<div class="flex flex-wrap text-white py-10">
				<div v-for="(el, index) in news" :key="index" :class="`w-3/10 h-52 mx-4 my-4`">
					<Course :title="el.title" :sub-text="el.subText" :link="el.link" :link-text="el.linkText"
						:icon="el.icon"></Course>
				</div>
			</div>
		</div>

		<div class="flex justify-center pb-20">
			<img src="../static/loader.png" class="animate-spin w-fit" />

		</div>

	</div>
</template>

<script>
import Button from '~/components/Button.vue'
import Course from '~/components/Course.vue'
import TitlePage from '~/components/titlePage.vue'
export default {
	components: { Button, Course, TitlePage },
	// eslint-disable-next-line vue/multi-word-component-names
	name: "news",
	layout: "page",

	data() {
		return {
			news: [
				{
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
			],
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.blog {
	&__header {
		-webkit-clip-path: polygon(100% 0, 100% 85%, 52% 100%, 0 100%, 0 0);
		clip-path: polygon(100% 0, 100% 85%, 52% 100%, 0 100%, 0 0);
		background-color: $mainGreen;
	}

}
</style>
