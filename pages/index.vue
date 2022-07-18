<template>
	<div class="home">
		<div class="home__sign text-white">
			<div class="flex">
				<img src="../static/image-accueil.png" class="w-1/2">
				<div class="flex flex-col justify-center items-center w-1/2">
					<div class="w-fit">
						<h2 class="text-4xl mb-6">Inscription pour 2022-2023</h2>
						<p class="text-5xl font-black uppercase mb-8">Ouverte</p>
						<a href="/courses">
							<Button text="Découvrir les cours" background-color="backgroundWhite"
								text-color="textGreen"></Button>
						</a>

					</div>
				</div>
			</div>
			<div>
				<h2 class="mx-56 mt-16 pb-16 text-3xl montserrat">GY.RA.VO. en quelques mots ...</h2>
			</div>
		</div>
		<div>
			<div class="flex justify-around mx-56 my-16">
				<div v-for="(el, index) in values" :key="index">
					<image-title-text :image="el.imgName" :title="el.title" :desc="el.description" :imgWidth="el.width" :imgHeight="el.heigth"></image-title-text>

				</div>
			</div>

			<div class="mx-56">
				<p class="my-5">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquid, corporis architecto,
					deleniti molestias, maxime sequi aliquam at qui illum itaque tempore porro dicta. Unde temporibus
					consequatur eius! Modi, ipsa.
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquid, corporis architecto,
					deleniti molestias, maxime sequi aliquam at qui illum itaque tempore porro dicta. Unde temporibus
					consequatur eius! Modi, ipsa.
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquid, corporis architecto,
					deleniti molestias, maxime sequi aliquam at qui illum itaque tempore porro dicta. Unde temporibus
					consequatur eius! Modi, ipsa.
				</p>

				<p class="my-5">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquid, corporis architecto,
					deleniti molestias, maxime sequi aliquam at qui illum itaque tempore porro dicta. Unde temporibus
					consequatur eius! Modi, ipsa.
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquid, corporis architecto,
					deleniti molestias, maxime sequi aliquam at qui illum itaque tempore porro dicta. Unde temporibus
					consequatur eius! Modi, ipsa.
				</p>
				<p class="my-5">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquid, corporis architecto,
					deleniti molestias, maxime sequi aliquam at qui illum itaque tempore porro dicta. Unde temporibus
					consequatur eius! Modi, ipsa.
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquid, corporis architecto,
					deleniti molestias,
				</p>
			</div>

			<div class="flex justify-around mx-56 my-16">
				<div v-for="(el, index) in objectifs" :key="index">
					<image-title-text :image="el.imgName" :title="el.title" :desc="el.description" :imgWidth="el.width" :imgHeight="el.heigth"></image-title-text>

				</div>
			</div>
		</div>
		<div class="home__courses py-16 px-56 text-white">
			<h2 class="pb-10 text-3xl montserrat font-bold">Les cours</h2>
			<div class="flex flex-wrap justify-between">
				<div v-for="(el, index) in courses" :key="index" class=" w-3/10 h-52 mx-2 my-4">
					<Course :title="el.title" :sub-text="el.subText" :link="el.link" :link-text="el.linkText"
						:icon="el.icon"></Course>
				</div>
			</div>
			<div class="flex justify-center my-16">
				<a href="/courses">
					<Button text="Voir tous les cours" background-color="backgroundWhite"
						text-color="textBlue"></Button>
				</a>
			</div>
		</div>

		<div class="home__members px-56 mb-56">
			<h2 class="pb-10 text-3xl montserrat font-bold  py-16">Les membres du bureau</h2>
			<div class="flex flex-wrap justify-center">
				<div v-for="(el, index) in members" :key="index" class=" w-3/12 h-44 my-4 mx-6">
					<image-title-text :title="el.name" :desc="el.role" :rounded="true" :image="el.imgName">
					</image-title-text>
				</div>
			</div>
			<div class="flex justify-center my-16">
				<a href="/contact">
					<Button text="Nous contacter" background-color="backgroundViolet" text-color="textWhite"></Button>

				</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import ImageTitleText from "../components/ImageTitleText.vue"
import Course from "../components/Course.vue"
import Button from "../components/Button.vue"
export default {
	name: "IndexPage",
	layout: "page",
	components: {
		ImageTitleText,
		Course,
		Button
	},

	data() {
		return {
			values: [
				{
					imgName: "Group.png",
					title: "Les rencontres",
					width: "w-24",
					heigth: "h-24"
				},
				{
					imgName: "Volunteering.png",
					title: "La bienveillance",
					width: "w-24",
					heigth: "h-24"
				},
				{
					imgName: "emoji_ear.png",
					title: "L'écoute",
					width: "w-20",
					heigth: "h-24"
				},
			],
			objectifs: [
				{
					imgName: "icon_Hiking.png",
					title: "S’entretenir physiquement",
					width: "w-20",
					heigth: "h-24"
				},
				{
					imgName: "icon_links_fill.png",
					title: "Permettre de créer des liens",
					width: "w-24",
					heigth: "h-24"
				},
			],
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
			],

			members: [
				{
					imgName: "monsieur-1.png",
					name: "Patrick FASSOT",
					role: "Président"
				},
				{
					imgName: "dame-1.png",
					name: "Isabelle FASSOT",
					role: "Professeur"
				},
				{
					imgName: "dame-2.png",
					name: "Danielle MAUDIT",
					role: "Trésorière"
				},
				{
					imgName: "dame-3.png",
					name: "Patricia MAILLOT",
					role: "Secrétaire"
				},
				{
					imgName: "monsieur-2.png",
					name: "André GOUFFE",
					role: "Scrétaire adjoint"
				},
			]
		}
	}
}
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.home {
	&__sign {
		-webkit-clip-path: polygon(100% 0, 100% 85%, 52% 100%, 0 100%, 0 0);
		clip-path: polygon(100% 0, 100% 85%, 52% 100%, 0 100%, 0 0);
		background-color: $mainGreen;
	}

	&__courses {
		-webkit-clip-path: polygon(50% 0%, 100% 16%, 100% 100%, 50% 100%, 0 84%, 0 0);
		clip-path: polygon(50% 0%, 100% 16%, 100% 100%, 50% 100%, 0 84%, 0 0);
		background-color: $mainBlue;
	}

	&__members {
		h2 {
			color: $mainViolet;
		}
	}
}
</style>
