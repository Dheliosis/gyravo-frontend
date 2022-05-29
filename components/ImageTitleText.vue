<template>
	<div class="flex flex-col justify-center items-center">
		<img id="img" :src="require(`@/static/${image}`)" :class="`w-36 h-36 ${rounded ? 'rounded': null}`">
		<div class="text-center my-2">
			<p class="font-semibold">{{title}}</p>
			<p class="text-sm">{{desc}}</p>
		</div>
	</div>
</template>

<script>
export default {
	props:{
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
			default: "test"
		},
		rounded:{
			type: Boolean,
			default: false,
		}
	},
	data(){
		return{
			img: document.getElementById('img')
		}
	},



}
</script>

<style scoped>

.rounded{
	border-radius: 100%;
}

</style>
