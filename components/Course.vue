<template>
	<div class="course__image h-full rounded-lg flex flex-col justify-end"
		:style="`background-image: url('/_nuxt/static/${img}')`">
		<div class="course__gradient p-5">
			<h3 class="font-bold text-xl">{{ title }}</h3>
			<div class="flex items-center">
				<font-awesome-icon :icon="`${icon}`" />
				<p class="ml-3">{{ subText }}</p>
			</div>
			<nuxt-link :to="link">{{ linkText }}</nuxt-link>
		</div>
	</div>
</template>

<script>
/* import font awesome icon component */
import icon from "../assets/icon"
export default {
	props: {
		img: {
			type: String,
			default: "velo-couleur.png"
		},
		title: {
			type: String,
			default: "Nom du cours"
		},
		icon: {
			type: String,
			default: "icon"
		},
		subText: {
			type: String,
			default: "12 - 99 ans"
		},
		link: {
			type: String,
			default: "/courses"
		},
		linkText: {
			type: String,
			default: "Voir le cours"
		}
	},
	components: {
	}

}
</script>

<style lang="scss" scoped>
a {
	text-decoration: underline;
}

.course {
	&__image {
		background-position: center;
		/* Center the image */
		background-repeat: no-repeat;
		/* Do not repeat the image */
		background-size: cover;
		/* Resize the background image to cover the entire container */
		background-color: #cccccc;
		/* Used if the image is unavailable */
	}

	&__gradient {
		background: linear-gradient(to top, rgba(0, 0, 0, 0.459), rgba(255, 255, 255, 0));
		border-end-end-radius: 0.5rem;
		border-end-start-radius: 0.5rem;
	}
}
</style>
