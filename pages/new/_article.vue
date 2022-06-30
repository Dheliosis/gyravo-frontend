<template>
	<div>
		<TitlePage :title="selectedArticle.title" color="green"></TitlePage>
		<div class="flex px-56 py-20 relative">
			<div class="pr-24 w-3/4">
				<div>

					<p>Malesuada leo cras purus blandit tempor. In nibh sodales odio diam vitae. Ut convallis sit nulla
						ullamcorper vitae lectus ultricies pharetra pellentesque. Malesuada nec ac id nunc, adipiscing
						vivamus
						lectus. Ut urna viverra id sit amet suscipit nunc. Aliquet felis velit eleifend sit venenatis
						condimentum nisl. Ut morbi quis dignissim quis mauris donec augue risus.</p>
					<div class="flex items-end justify-center my-10">
						<img src="../../static/image-accueil.png" class=" w-1/2 rounded-lg" />
					</div>
					<div>
						<div class="my-8">
							<h2 class="font-bold text-2xl mb-5">Sous titre 1</h2>
							<p>Malesuada leo cras purus blandit tempor. In nibh sodales odio diam vitae. Ut convallis
								sit
								nulla
								ullamcorper vitae lectus ultricies pharetra pellentesque. Malesuada nec ac id nunc,
								adipiscing
								vivamus lectus. Ut urna viverra id sit amet suscipit nunc. Aliquet felis velit eleifend
								sit
								venenatis condimentum nisl. Ut morbi quis dignissim quis mauris donec augue risus.</p>
						</div>
						<div class="my-8">
							<h2 class="font-bold text-2xl mb-5">Sous titre 2</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum amet tristique aliquam in
								aliquet
								nunc, tellus. Facilisi gravida faucibus id tortor, scelerisque tortor pretium risus
								sapien.
								Nibh
								faucibus donec at enim, leo. Aenean neque posuere tristique faucibus lectus risus
								pulvinar
								duis
								ut. Purus eget interdum quisque malesuada nulla dignissim sed eget. Neque, vel, est
								lectus
								in in
								magna nec. Mollis ut diam risus elit. Nulla sit ac arcu nec. Scelerisque faucibus
								facilisis
								enim
								quisque dui et. Enim, ut iaculis velit nunc integer sit. Duis laoreet rhoncus sit
								vestibulum
								egestas pellentesque porttitor at nibh. Vitae, condimentum interdum velit amet.</p>
						</div>
						<div class="my-8">
							<h2 class="font-bold text-2xl mb-5">Sous titre 3</h2>
							<p>Dolor auctor ante dolor, at. Malesuada rhoncus vitae ut a, diam sed nisl. Dolor odio
								integer
								nec
								lacus. Orci mauris quis enim viverra. Id pellentesque in odio turpis habitant aenean
								sit.
								Sem
								magna ornare risus, nisl. Proin dis in suspendisse vitae feugiat scelerisque eros.</p>
						</div>

						<div class="flex items-center py-32">
							<img id="img" :src="require(`@/static/dame-1.png`)" :class="`w-36 h-36 rounded`">
							<p class="mx-10 text-xl"><span class="font-bold">Isabelle Fassot,</span> Professeur</p>

						</div>
					</div>
				</div>
			</div>
			<div class="otherArticle w-2/5">
				<h2 class="font-bold mb-8">Autres articles</h2>
				<div class="text-white w-2/4">
					<div v-for="(el, index) in otherNews" :key="index" :class="`w-full h-32 mx-4 my-4 text-xs`">
						<Course :title="el.title" :sub-text="el.subText" :link="el.link" :link-text="el.linkText"
							:icon="el.icon"></Course>
					</div>
				</div>
			</div>

		</div>
	</div>

</template>

<script>
import TitlePage from '~/components/titlePage.vue'
import icon from "../../assets/icon"
import Button from '~/components/Button.vue'
import Course from '~/components/Course.vue'
import ImageTitleText from "../../components/ImageTitleText.vue"



export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Fitness",
	layout: "page",
	components: {
		TitlePage,
		Button,
		Course,
		ImageTitleText
	},

	data() {
		return {
			selectedArticle: {},
			news: [
				{
					id: 1,
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					id: 2,
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					id: 3,
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					id: 4,
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					id: 5,
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					id: 6,
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					id: 7,
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					id: 8,
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					id: 9,
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
			],

			otherNews: [
				{
					id: 1,
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
				{
					id: 2,
					title: "Nom de l'article",
					icon: "fa-solid fa-calendar-days",
					subText: "12 Juin 2022",
					link: "/new/1",
					linkText: "Voir l'article"
				},
			]

		}
	},

	created() {
		console.log(this.$route.params);
		const idNew = this.$route.params.article
		this.selectedArticle = this.news.filter(article => idNew == article.id)[0];
		// console.log(this.selectedArticle);
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

.otherArticle {
	height: fit-content;
	position: sticky;
	top: 0;
}
</style>
