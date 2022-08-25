<template>
	<div>
		<TitlePage :title="selectedCourse.title" color="green"></TitlePage>
		<div class="page">
			<div class="information">
				<img src="../../static/image-accueil.png" class="img" />
				<div class="textContainer">
					<p class="text">
						<font-awesome-icon icon="fa-solid fa-calendar-days" class="icon" />
						Prochaine session le {{ selectedCourse.nextSession }}
					</p>
					<p class="text">
						<font-awesome-icon icon="fa-solid fa-children" class="icon" />
						{{ selectedCourse.subText }}
					</p>
					<div class="buttonDiv">
						<Button text="M'inscrire au cours" background-color="backgroundGreen"
							text-color="textWhite"></Button>
					</div>
				</div>
			</div>
			<div class="containerText">
				<h2 class="titre">
					<font-awesome-icon icon="fa-solid fa-align-justify" class="textBlue pile" />
					Tout savoir sur le cours
				</h2>
				<p class="pSavoir">
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

				<p class="pSavoir">Malesuada leo cras purus blandit tempor. In nibh sodales odio diam vitae. Ut
					convallis
					sit nulla
					ullamcorper vitae lectus ultricies pharetra pellentesque. Malesuada nec ac id nunc, adipiscing
					vivamus
					lectus. Ut urna viverra id sit amet suscipit nunc. Aliquet felis velit eleifend sit venenatis
					condimentum nisl. Ut morbi quis dignissim quis mauris donec augue risus.
				</p>

				<p class="pSavoir">Dolor auctor ante dolor, at. Malesuada rhoncus vitae ut a, diam sed nisl. Dolor odio
					integer nec
					lacus.
					Orci mauris quis enim viverra. Id pellentesque in odio turpis habitant aenean sit. Sem magna ornare
					risus, nisl. Proin dis in suspendisse vitae feugiat scelerisque eros.
				</p>
			</div>
			<div class="containerText">
				<h2 class="titre">
					<span class="plus textViolet ">
						<font-awesome-icon icon="fa-solid fa-plus" />
					</span>
					Informations supplémentaires
				</h2>
				<div class="pilluleContainer">
					<p class="pillule">
						<font-awesome-icon icon="fa-solid fa-dollar-sign" class="pilluleIcon" />
						{{ selectedCourse.price }} / an
					</p>
					<p class="pillule">
						<font-awesome-icon icon="fa-solid fa-clock" class="pilluleIcon" />
						{{ selectedCourse.time }} / semaine
					</p>
				</div>
			</div>
			<div class="buttonDivSinscrire">
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

.page {
	display: flex;
	flex-direction: column;
	padding-left: 14rem;
	padding-right: 14rem;
	padding-top: 5rem;
	padding-bottom: 5rem;
}

.information {
	display: flex;
}

.img {
	width: 33%;
	border-radius: 8px;
}

.icon {
	margin-right: 0.5rem;
	height: 2rem;
}

.textContainer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 9rem;
}

.text {
	margin-top: 1rem;
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
}

.buttonDiv {
	margin-top: 2rem;
}

.containerText {
	margin-top: 4rem;
	margin-bottom: 4rem;
}

.titre {
	font-weight: 700;
	font-size: 2rem;
	line-height: 2.5rem;
	margin-bottom: 2rem;

}

.pSavoir {
	margin-top: 1rem;
	margin-bottom: 1rem;
}

.pilluleContainer {
	display: flex;
	margin-top: 1rem;
	margin-bottom: 1rem;
}

.pillule {
	width: fit-content;
	border: solid 2px black;
	border-radius: 100px;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	margin-right: 5rem;
}

.pilluleIcon {
	margin-right: 0.5rem
}

.buttonDivSinscrire {
	display: flex;
	justify-content: center;
	align-items: center;
}

.pile {
	margin-right: 1rem;
}

.plus {
	border: solid 2px;
	border-color: #6d42f1;
	border-radius: 100px;
	padding-left: 0.25rem;
	padding-right: 0.25rem;
	margin-right: 1rem;

}
</style>
