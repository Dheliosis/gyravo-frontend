<template>
	<div class="flex flex-col justify-center items-center">
		<img id="img" :src="require(`@/static/${image}`)" :class="`${imgWidth} ${imgHeight} ${rounded ? 'rounded' : null}`">
		<div class="text-center my-2">
			<p class="font-semibold">{{ title }}</p>
			<p v-if="desc" class="text-sm">{{ desc }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		image: {
			type: String,
			default: "image-accueil.png"
		},
		title: {
			type: String,
			default: "test"
		},
		desc: {
			type: String,
			default: null
		},
		rounded: {
			type: Boolean,
			default: false,
		},
		imgWidth: {
			type: String,
			default: "w-36"
		},
		imgHeight: {
			type: String,
			default: "h-36"
		},
	},
	data() {
		return {
			img: document.getElementById('img')
		}
	},



}
</script>

<style scoped>
.rounded {
	border-radius: 100%;
}
</style>
