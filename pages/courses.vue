<template>
	<div>
		<TitlePage title="Les cours" color="green"></TitlePage>

		<div class="px-56 py-20">
			<div class="flex justify-end">
				<Button text="Filtres" background-color="backgroundWhite" text-color="textGreen"></Button>
			</div>
			<div class="flex flex-wrap text-white py-10">
				<div v-for="(el, index) in courses" :key="index" :class="`w-3/10 h-52 mx-4 my-4`">
					<Course :title="el.title" :sub-text="el.subText" :link="el.link" :link-text="el.linkText"
						:icon="el.icon"></Course>
				</div>
			</div>
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
	name: "courses",
	layout: "page",

	data() {
		return {
			courses: [
				{
					title: "Fitness",
					icon: "fa-solid fa-children",
					subText: "18 - 60 ans",
					link: '/course/1',
					linkText: 'Voir le cours'
				},
				{
					title: "Rythm'Dance et Soft-Fitness",
					icon: "fa-solid fa-children",
					subText: "18 - 70 ans",
					link: '/course/2',
					linkText: 'Voir le cours'
				},
				{
					title: "Gym Ball - FitBall",
					icon: "fa-solid fa-children",
					subText: "18 - 70 ans",
					link: '/course/3',
					linkText: 'Voir le cours'
				},
				{
					title: "Gym douce, body-zen",
					icon: "fa-solid fa-children",
					subText: "30 - 70 ans",
					link: '/course/4',
					linkText: 'Voir le cours'
				},
				{
					title: "Marche nordique",
					icon: "fa-solid fa-children",
					subText: "18 - 80 ans",
					link: '/course/5',
					linkText: 'Voir le cours'
				},
				{
					title: "Acti-gym séniors",
					icon: "fa-solid fa-children",
					subText: "55 - 99 ans",
					link: '/course/6',
					linkText: 'Voir le cours'
				},
				{
					title: "Gym équilibre",
					icon: "fa-solid fa-children",
					subText: "55 - 99 ans",
					link: '/course/7',
					linkText: 'Voir le cours'
				},
				{
					title: "Gym loisir plaisir pour grandir",
					icon: "fa-solid fa-children",
					subText: "7 - 14 ans",
					link: '/course/8',
					linkText: 'Voir le cours'
				},
			],
		}
	}
}
</script>
