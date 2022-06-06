<template>
	<div :class="`${backgroundColor}Background w-fit p-6 rounded-2xl`">
		<p :class="`font-bold ${textColor}Text my-2`">{{title}}</p>
		<p v-if="subTitle !== ''" class="font-bold text-white my-2">{{subTitle}}</p>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props:{
		backgroundColor:{
			type: String,
			default: "green"
		},
		textColor:{
			type: String,
			default: "green"
		},
		title:{
			type: String,
			default: "Enter a title"
		},
		subTitle:{
			type: String,
			default: ""
		},
	}

}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.greenText{
	color: $mainGreen
}

.violetText{
	color: $mainViolet;
}

.blueText{
	color: $mainBlue;
}

.greenBackground{
	background-color: $mainGreen25;

}

.violetBackground{
	background-color: $mainViolet25;

}

.blueBackground{
	background-color: $mainBlue25;

}
</style>
