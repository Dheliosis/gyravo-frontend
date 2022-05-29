<template>
<div>
	<div class="px-56 courses__header py-16 text-white">
		<Breadcrumb></Breadcrumb>
		<h2 class=" pt-5 text-3xl montserrat font-bold">Les cours</h2>
	</div>

	<div class="px-56 py-20">
		<div class="flex justify-end">
			<Button text="Filtres" background-color="backgroundWhite" text-color="textGreen"></Button>
		</div>
		<div class="flex flex-wrap text-white py-10" >
			<div v-for="(el,index) in courses" :key="index" :class=" `w-3/10 h-52 mx-4 my-4`">
				<Course :title="el.title" :sub-text="el.subText" :link="el.link" :link-text="el.linkText" :icon="el.icon"></Course>
			</div>
		</div>
	</div>

</div>
</template>

<script>
import Button from '~/components/Button.vue'
import Course from '~/components/Course.vue'
import Breadcrumb from '~/components/navigation/Breadcrumb.vue'
export default {
  components: { Breadcrumb, Button, Course },
	// eslint-disable-next-line vue/multi-word-component-names
	name: "courses",
	layout: "page",

	data(){
		return{
			courses: [
				{
					title:"Fitness",
					icon: "fa-solid fa-children",
					subText: "12 - 99 ans",
					link:'/courses/1',
					linkText:'Voir le cours'
				},
				{
					title:"Rythm'Dance et Soft-Fitness",
					icon: "fa-solid fa-children",
					subText: "12 - 99 ans",
					link:'/courses/1',
					linkText:'Voir le cours'
				},
				{
					title:"Gym Ball - FitBall",
					icon: "fa-solid fa-children",
					subText: "12 - 99 ans",
					link:'/courses/1',
					linkText:'Voir le cours'
				},
				{
					title:"Gym douce, body-zen",
					icon: "fa-solid fa-children",
					subText: "12 - 99 ans",
					link:'/courses/1',
					linkText:'Voir le cours'
				},
				{
					title:"Marche nordique",
					icon: "fa-solid fa-children",
					subText: "12 - 99 ans",
					link:'/courses/1',
					linkText:'Voir le cours'
				},
				{
					title:"Acti-gym séniors",
					icon: "fa-solid fa-children",
					subText: "12 - 99 ans",
					link:'/courses/1',
					linkText:'Voir le cours'
				},
				{
					title:"Gym équilibre",
					icon: "fa-solid fa-children",
					subText: "12 - 99 ans",
					link:'/courses/1',
					linkText:'Voir le cours'
				},
				{
					title:"Gym loisir plaisir pour grandir",
					icon: "fa-solid fa-children",
					subText: "12 - 99 ans",
					link:'/courses/1',
					linkText:'Voir le cours'
				},
			],
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.courses{
	&__header{
		-webkit-clip-path: polygon(100% 0, 100% 85%, 52% 100%, 0 100%, 0 0);
		clip-path: polygon(100% 0, 100% 85%, 52% 100%, 0 100%, 0 0);
		background-color: $mainGreen;
	}

}

</style>
