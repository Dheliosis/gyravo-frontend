<template>
	<div :class="`px-56 title__header py-16 text-white ${color}`">
		<Breadcrumb></Breadcrumb>
		<div v-if="profilePicture" class="mt-5 flex items-center w-fit">
			<ProfilePicture></ProfilePicture>
			<h1 class="text-3xl montserrat font-bold ml-5">{{ title }}</h1>
		</div>
		<h1 v-else class=" mt-5 text-3xl montserrat font-bold">{{ title }}</h1>
	</div>
</template>

<script>
import Breadcrumb from './navigation/Breadcrumb.vue'
export default {
	components: {
		Breadcrumb
	},

	props: {
		title: {
			type: String,
			default: "Enter title"
		},
		color: {
			type: String,
			default: "green"
		},
		profilePicture: {
			type: Boolean,
			default: false
		}
	}

}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.title__header {
	-webkit-clip-path: polygon(100% 0, 100% 70%, 55% 100%, 0 100%, 0 0);
	clip-path: polygon(100% 0, 100% 70%, 55% 100%, 0 100%, 0 0);

}

.green {
	background-color: $mainGreen;
}

.violet {
	background-color: $mainViolet;
}

.blue {
	background-color: $mainBlue;
}
</style>
