<template>
	<div>
		<img :src="require(`@/static/${image}`)" class="w-32 border-8 rounded-full" />
	</div>
</template>

<script>
export default {
	props: {
		image: {
			type: String,
			default: "dame-4.png"
		}
	}

}
</script>

<style>
</style>
