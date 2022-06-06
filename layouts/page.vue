<template>
	<div>
		<Header />
		<main>
			<Nuxt />
		</main>
		<Footer />
	</div>
</template>

<script>
import Header from "~/components/layout/header/Header.vue"
import Footer from "~/components/layout/footer/Footer.vue"
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Layout",
	components: { Header, Footer },
	created(){
		console.log(this.$route);
	}
}
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

html{
	font-family: $secondaryFont;
	font-size: 18px;
	color: $black
}

.montserrat{
	font-family: $primaryFont;
}


.w-3\/10{
	width: 30%;
}
</style>
