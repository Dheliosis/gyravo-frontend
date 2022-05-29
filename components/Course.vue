<template>
	<div class="course__image h-full rounded-lg flex flex-col justify-end" :style="`background-image: url('/_nuxt/static/${img}')`">
	<div class="course__gradient p-5">
		<h3 class="font-bold text-xl">{{title}}</h3>
		<div class="flex">
			<i class="fas fa-clock" style="font-size:24px;"></i>
			<p class="ml-3">{{subText}}</p>
		</div>
		<a :href="link">{{linkText}}</a>
	</div>
	</div>
</template>

<script>
export default {
	props:{
		img:{
			type: String,
			default: "image-accueil.png"
		},
		title:{
			type: String,
			default: "Nom du cours"
		},
		icon:{
			type: String,
			default: "icon"
		},
		subText:{
			type: String,
			default: "12 - 99 ans"
		},
		link:{
			type: String,
			default: "/courses"
		},
		linkText:{
			type: String,
			default: "Voir le cours"
		}
	}

}
</script>

<style lang="scss" scoped>
a{
	text-decoration: underline;
}

.course{
	&__image{
		background-position: center; /* Center the image */
		background-repeat: no-repeat; /* Do not repeat the image */
		background-size: cover; /* Resize the background image to cover the entire container */
		background-color: #cccccc; /* Used if the image is unavailable */
	}

	&__gradient{
		background: linear-gradient(to top, rgba(0, 0, 0, 0.459), rgba(255, 255, 255, 0));
		border-end-end-radius: 0.5rem;
		border-end-start-radius: 0.5rem;
	}
}

</style>
