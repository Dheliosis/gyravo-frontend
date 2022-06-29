<template>
	<div class="flex flex-col">
		<label :for="id" class="font-bold text-xl mb-1 ml-3">{{ label }}</label>
		<textarea v-if="type === 'textarea'" :id="id" v-model="value" :type="type" rows="10"
			:class="`w-full px-3 py-2 ${error ? 'error' : null}`" :placeholder="label" @change="onChange"></textarea>
		<input v-else :id="id" v-model="value" :type="type"
			:class="`rounded-full w-full px-3 py-2 ${error ? 'error' : null}`" :placeholder="label"
			@change="onChange" />

		<p v-if="error" class="ml-3  mt-2 textError">{{ textError }}</p>
	</div>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			default: "id"
		},
		label: {
			type: String,
			default: "Enter a label"
		},
		type: {
			type: String,
			default: "text"
		},
		error: {
			type: Boolean,
			default: false,
		},
		textError: {
			type: String,
			default: "Une erreur est survenu"
		}
	},

	data() {
		return {
			value: ""
		}
	},

	methods: {
		onChange() {
			this.$emit("OnChange", this.value)
		}
	}

}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

input,
textarea {
	background-color: $grey;

	&:active,
	&:focus,
	&:focus-visible {
		outline-style: solid;
		outline-color: $mainBlue  !important;
	}
}

textarea {
	border-radius: 30px;
}

.error {
	outline-style: solid;
	outline-color: red;
}

.textError {
	color: $mainBlue
}
</style>
