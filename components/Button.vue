<template>
	<button :class="`${backgroundColor} ${textColor} border-2 rounded-full px-8 py-2 font-bold`">
		<font-awesome-icon :icon="`${icon}`" />
		{{text}}
		</button>
</template>

<script>
import icon from "../assets/icon"

export default {
	props:{
		text: {
			type: String,
			default: "Text button"
		},
		backgroundColor:{
			type: String,
			default: "white"
		},
		textColor:{
			type: String,
			default: "black"
		},
		icon:{
			type: String,
			default: "none"
		}
	},

	created(){


	}

}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

button{
	transition: 0.5s;
}

.backgroundBlue{
	background-color: $mainBlue;
}

.backgroundGreen{
	background-color: $mainGreen;

	&:hover{
		background-color: $mainBlue;
	}
}

.backgroundViolet{
	background-color: $mainViolet;
}

.backgroundWhite{
	background-color: $white;
}

.textBlue{
	color: $mainBlue;
	border-color: $mainBlue;
	&:hover{
		background-color: $secondaryBlue;
	}
}

.textGreen{
	color: $mainGreen;
	border-color: $mainGreen;
	&:hover{
		background-color: $secondaryGreen;
	}
}

.textViolet{
	color: $mainViolet;
	border-color: $mainViolet;
}

.textWhite{
	color: $white;
	border-color: $white;
}


</style>
