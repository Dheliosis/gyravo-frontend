<template>
	<div>
		<Header />
		<Breadcrumb v-show="$route.path !== '/'"/>
		<main>
			<Nuxt />
		</main>
		<Footer />
	</div>
</template>

<script>
import Header from "~/components/layout/header/Header.vue"
import Footer from "~/components/layout/footer/Footer.vue"
import Breadcrumb from "~/components/navigation/Breadcrumb.vue"
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Layout",
	components: { Header, Footer, Breadcrumb },
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
}

.montserrat{
	font-family: $primaryFont;
}

</style>
