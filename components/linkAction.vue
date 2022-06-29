<template>
	<div :class="`text-sm flex items-center cursor-pointer ${color}`">
		<font-awesome-icon :icon="`${icon}`" class="mr-4" />
		<p class="underline">{{ text }}</p>
	</div>
</template>

<script>
import icon from "../assets/icon"

export default {

	props: {
		icon: {
			type: String,
			default: "none"
		},
		color: {
			type: String,
			default: "black",
		},
		text: {
			type: String,
			default: "Enter a text"
		}
	}

}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

div {
	transition: 0.3s;
}

.green {
	color: $mainGreen;

	&:hover {
		color: $mainBlue
	}

	&:active {
		color: $tertiaryBlue
	}
}

.violet {
	color: $mainViolet;
}

.blue {
	color: $mainBlue;
}

.black {
	&:hover {
		color: $mainGreen
	}

	&:active {
		color: $tertiaryGreen,
	}
}
</style>
