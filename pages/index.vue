<template>
	<div class="home">
		<div class="home__sign text-white">
			<div class="flex">
				<img src="../static/image-accueil.png" class="w-1/2">
				<div class="flex flex-col justify-center items-center w-1/2">
				<div class="w-fit">
					<h2 class="text-4xl mb-6">Inscription pour 2022-2023</h2>
					<p class="text-5xl font-black uppercase">Ouverte</p>
					<button>Composant à faire</button>
				</div>
				</div>
			</div>
			<div>
				<p class="mx-40 mt-16 pb-16 text-3xl">GY.RA.VO en quelques mots ...</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "IndexPage",
	layout: "page",
}
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.home{
	-webkit-clip-path: polygon(100% 0, 100% 85%, 52% 100%, 0 100%, 0 0);
	clip-path: polygon(100% 0, 100% 85%, 52% 100%, 0 100%, 0 0);

	&__sign{
		background-color: $mainGreen;
	}
}
</style>
