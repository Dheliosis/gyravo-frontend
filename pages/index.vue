<template>
<div>
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
				<h2 class="mx-40 mt-16 pb-16 text-3xl montserrat">GY.RA.VO en quelques mots ...</h2>
			</div>
		</div>
	</div>
	<div>
		<div class="flex justify-around mx-32 my-16">
			<div v-for="(el,index) in values" :key="index">
				<image-title-text :image="el.imgName" :title="el.title" :desc="el.description"></image-title-text>

			</div>
		</div>

		<div class="mx-32">
			<p class="my-5">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquid, corporis architecto, deleniti molestias, maxime sequi aliquam at qui illum itaque tempore porro dicta. Unde temporibus consequatur eius! Modi, ipsa.
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquid, corporis architecto, deleniti molestias, maxime sequi aliquam at qui illum itaque tempore porro dicta. Unde temporibus consequatur eius! Modi, ipsa.
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquid, corporis architecto, deleniti molestias, maxime sequi aliquam at qui illum itaque tempore porro dicta. Unde temporibus consequatur eius! Modi, ipsa.
			</p>

			<p class="my-5">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquid, corporis architecto, deleniti molestias, maxime sequi aliquam at qui illum itaque tempore porro dicta. Unde temporibus consequatur eius! Modi, ipsa.
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquid, corporis architecto, deleniti molestias, maxime sequi aliquam at qui illum itaque tempore porro dicta. Unde temporibus consequatur eius! Modi, ipsa.
			</p>
			<p class="my-5">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquid, corporis architecto, deleniti molestias, maxime sequi aliquam at qui illum itaque tempore porro dicta. Unde temporibus consequatur eius! Modi, ipsa.
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquid, corporis architecto, deleniti molestias,
			</p>
		</div>

		<div class="flex justify-around mx-32 my-16">
			<div v-for="(el,index) in objectifs" :key="index">
				<image-title-text :image="el.imgName" :title="el.title" :desc="el.description"></image-title-text>

			</div>
		</div>
	</div>
	<div>
		<h2 class="mx-40 mt-16 pb-16 text-3xl montserrat">Les cours</h2>
	</div>
</div>
</template>

<script lang="ts">
import ImageTitleText from "../components/ImageTitleText.vue"
export default {
	name: "IndexPage",
	layout: "page",
	components:{
		ImageTitleText,
	},

	data(){
		return{
			values:[
				{
					imgName:"image-accueil.png",
					title:"Valeur 1",
					description:"Description de la valeur",
				},
				{
					imgName:"image-accueil.png",
					title:"Valeur 2",
					description:"Description de la valeur",
				},
				{
					imgName:"image-accueil.png",
					title:"Valeur 3",
					description:"Description de la valeur",
				},
			],
			objectifs:[
				{
					imgName:"image-accueil.png",
					title:"Objectif 1",
					description:"Description de la valeur",
				},
				{
					imgName:"image-accueil.png",
					title:"Objectif 2",
					description:"Description de la valeur",
				},
			]
		}
	}
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
