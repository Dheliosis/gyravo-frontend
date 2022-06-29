<template>
	<div>
		<TitlePage :title="selectedCourse.title" color="green"></TitlePage>
		<div class="flex flex-col px-56 py-20">
			<div class="flex">
				<img src="../../static/image-accueil.png" class="w-1/3 rounded-lg" />
				<div class="flex flex-col justify-center ml-36">
					<p class="my-4 flex items-center">
						<font-awesome-icon icon="fa-solid fa-calendar-days" class="mr-2 h-8" />
						Prochaine session le {{ selectedCourse.nextSession }}
					</p>
					<p class="my-4 flex items-center">
						<font-awesome-icon icon="fa-solid fa-children" class="mr-2 h-8" />
						{{ selectedCourse.subText }}
					</p>
					<div class="mt-8">
						<Button text="M'inscrire au cours" background-color="backgroundGreen"
							text-color="textWhite"></Button>
					</div>
				</div>
			</div>
			<div class="my-16">
				<h2 class="font-bold text-3xl mb-8">
					<font-awesome-icon icon="fa-solid fa-align-justify" class="textBlue mr-4" />
					Tout savoir sur le cours
				</h2>
				<p class="my-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum amet tristique aliquam in aliquet
					nunc,
					tellus. Facilisi gravida faucibus id tortor, scelerisque tortor pretium risus sapien. Nibh faucibus
					donec at enim, leo. Aenean neque posuere tristique faucibus lectus risus pulvinar duis ut. Purus
					eget
					interdum quisque malesuada nulla dignissim sed eget. Neque, vel, est lectus in in magna nec. Mollis
					ut
					diam risus elit. Nulla sit ac arcu nec. Scelerisque faucibus facilisis enim quisque dui et. Enim, ut
					iaculis velit nunc integer sit. Duis laoreet rhoncus sit vestibulum egestas pellentesque porttitor
					at
					nibh. Vitae, condimentum interdum velit amet.
				</p>

				<p class="my-4">Malesuada leo cras purus blandit tempor. In nibh sodales odio diam vitae. Ut convallis
					sit nulla
					ullamcorper vitae lectus ultricies pharetra pellentesque. Malesuada nec ac id nunc, adipiscing
					vivamus
					lectus. Ut urna viverra id sit amet suscipit nunc. Aliquet felis velit eleifend sit venenatis
					condimentum nisl. Ut morbi quis dignissim quis mauris donec augue risus.
				</p>

				<p class="my-4">Dolor auctor ante dolor, at. Malesuada rhoncus vitae ut a, diam sed nisl. Dolor odio
					integer nec
					lacus.
					Orci mauris quis enim viverra. Id pellentesque in odio turpis habitant aenean sit. Sem magna ornare
					risus, nisl. Proin dis in suspendisse vitae feugiat scelerisque eros.
				</p>
			</div>
			<div class="mb-16">
				<h2 class="font-bold text-3xl mb-8">
					<span class="border-solid border-2 rounded-full border-[#6d42f1] px-1 textViolet mr-4">
						<font-awesome-icon icon="fa-solid fa-plus" />
					</span>
					Informations supplémentaires
				</h2>
				<div class="flex my-4">
					<p class="w-fit border-solid border-2 rounded-full border-black px-6 py-2 mr-20">
						<font-awesome-icon icon="fa-solid fa-dollar-sign" class="mr-2" />
						{{ selectedCourse.price }} / an
					</p>
					<p class="w-fit border-solid border-2 rounded-full border-black px-6 py-2">
						<font-awesome-icon icon="fa-solid fa-clock" class="mr-2" />
						{{ selectedCourse.time }} / semaine
					</p>
				</div>
			</div>
			<div class="flex justify-center items-center">
				<Button text="M'inscrire au cours" background-color="backgroundGreen" text-color="textWhite"></Button>

			</div>
		</div>
	</div>

</template>

<script>
import TitlePage from '~/components/titlePage.vue'
import icon from "../../assets/icon"
import Button from '~/components/Button.vue'

export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Fitness",
	layout: "page",
	components: {
		TitlePage,
		Button
	},

	data() {
		return {
			courses: [
				{
					id: 1,
					title: "Fitness",
					icon: "fa-solid fa-children",
					subText: "18 - 60 ans",
					nextSession: "05 septembre 2022",
					price: "130",
					time: "1h30"
				},
				{
					id: 2,
					title: "Rythm'Dance et Soft-Fitness",
					icon: "fa-solid fa-children",
					subText: "18 - 70 ans",
					nextSession: "07 septembre 2022",
					price: "130",
					time: "1h"
				},
				{
					id: 3,
					title: "Gym Ball - FitBall",
					icon: "fa-solid fa-children",
					subText: "18 - 70 ans",
					nextSession: "09 septembre 2022",
					price: "130",
					time: "1h"
				},
				{
					id: 4,
					title: "Gym douce, body-zen",
					icon: "fa-solid fa-children",
					subText: "30 - 70 ans",
					nextSession: "10 septembre 2022",
					price: "130",
					time: "1h"
				},
				{
					id: 5,
					title: "Marche nordique",
					icon: "fa-solid fa-children",
					subText: "18 - 80 ans",
					nextSession: "06 septembre 2022",
					price: "80",
					time: "2h30"
				},
				{
					id: 6,
					title: "Acti-gym séniors",
					icon: "fa-solid fa-children",
					subText: "55 - 99 ans",
					nextSession: "09 septembre 2022",
					price: "110",
					time: "1h"
				},
				{
					id: 7,
					title: "Gym équilibre",
					icon: "fa-solid fa-children",
					subText: "55 - 99 ans",
					nextSession: "10 septembre 2022",
					price: "130",
					time: "1h30"
				},
				{
					id: 8,
					title: "Gym loisir plaisir pour grandir",
					icon: "fa-solid fa-children",
					subText: "7 - 14 ans",
					nextSession: "07 septembre 2022",
					price: "100",
					time: "2h"
				},
			],

			selectedCourse: {}
		}
	},

	created() {
		console.log(this.$route.params.course);
		const idCourse = this.$route.params.course
		this.selectedCourse = this.courses.filter(course => idCourse == course.id)[0];
		console.log(this.selectedCourse);
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
</style>
