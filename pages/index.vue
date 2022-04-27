<template>
  <div>
    <Tutorial />
		<Header></Header>
    <p class="bg-lime-500">test</p>
		<div class="test">
				<p>test</p>
		</div>
		<Footer></Footer>
  </div>
</template>

<script lang="ts">
import Header from "~/components/layout/header/Header.vue";
import Footer from "~/components/layout/footer/footer.vue";
export default {
    name: "IndexPage",
    components: { Header, Footer }
}
</script>

<style lang="scss">
@import '../assets/styles/_variables.scss';
.test {
	p {
		color:$mainBlue
	}
}
</style>
