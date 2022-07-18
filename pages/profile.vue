<template>
	<div>
		<TitlePage color="green" :title="`${firstname} ${lastname.toUpperCase()} `" :profilePicture="true"></TitlePage>

		<div class="mx-56 my-16">
			<div class="mb-16">
				<div class="flex justify-between items-center mb-4">
					<h2 class="font-bold greenText text-xl">Les prochains cours</h2>
					<Button backgroundColor="backgroundWhite" textColor="textGreen" text="Modifier mon profil" icon="fa-solid fa-gear"></Button>
				</div>
				<div class="flex">
					<div
						v-for="(el,index) in courses" :key="index"
						class="mr-20"
					>
						<ColorSquare :title="`${el.firstname} ${el.lastname.toUpperCase()}`" :subTitle="el.course" backgroundColor="green" textColor="green">
							<p class="text-sm"><font-awesome-icon icon="fa-solid fa-calendar-days" class="mr-2"/> {{el.date}}</p>
							<p class="text-sm"><font-awesome-icon icon="fa-solid fa-clock" class="mr-2"/> {{el.hour}}h</p>
						</ColorSquare>
					</div>
				</div>
			</div>
			<div class="mb-16">
				<div class="flex  mb-4">
					<h2 class="font-bold blueText text-xl">Mes documents</h2>
					<LinkAction class="ml-24" text="Ajouter un document" color="black" icon="fa-plus" ></LinkAction>
				</div>
				<div class="flex">
					<div
						v-for="(el,index) in documents" :key="index"
						class="mr-20"
					>
						<ColorSquare :title="`${el.firstname} ${el.lastname.toUpperCase()}`" :subTitle="el.documentType" backgroundColor="blue" textColor="blue">
							<p class="text-sm my-2">
								<font-awesome-icon icon="fa-solid fa-paperclip" class="mr-2"/>
								{{el.documentName}}
								<font-awesome-icon icon="fa-solid fa-xmark" class="ml-2 text-white cursor-pointer"/></p>
						</ColorSquare>
					</div>
				</div>
			</div>
			<div class="mb-16">
				<div class="flex items-center  mb-4">
					<h2 class="font-bold violetText text-xl">Mes licenciés</h2>
					<LinkAction class="ml-24" text="Ajouter un licencié" color="black" icon="fa-plus" ></LinkAction>
				</div>
				<div class="flex">
					<div
						v-for="(el,index) in licencees" :key="index"
						class="mr-20"
					>
						<ColorSquare :title="`${el.firstname} ${el.lastname.toUpperCase()}`" :subTitle="el.documentType" backgroundColor="violet" textColor="violet">
							<p class="text-sm my-2">
								<font-awesome-icon icon="fa-solid fa-calendar-days" class="mr-2"/>
								{{el.birthdate}}
							</p>
						</ColorSquare>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import icon from "../assets/icon"
import TitlePage from '~/components/titlePage.vue';
import Button from '~/components/Button.vue';
import ColorSquare from '~/components/colorSquare.vue';
import LinkAction from "~/components/linkAction.vue";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Profile",
    components: { TitlePage, Button, ColorSquare, LinkAction },
    layout: "page",
	data(){
		return {
			firstname: "Jane",
			lastname: "Doe",

			courses:[
				{
					firstname: "Jane",
					lastname: "Doe",
					course: "Fitness",
					date: "24/05/2022",
					hour: "18"
				},
				{
					firstname: "Jane",
					lastname: "Doe",
					course: "Fitness",
					date: "24/05/2022",
					hour: "18"
				},
				{
					firstname: "Jane",
					lastname: "Doe",
					course: "Fitness",
					date: "24/05/2022",
					hour: "18"
				},
			],

			documents:[
				{
					firstname: "Jane",
					lastname: "Doe",
					documentType: "Carte d'identitée",
					documentName: "NomDeLaCarte.pdf",
				},
				{
					firstname: "Jane",
					lastname: "Doe",
					documentType: "Certicat médical",
					documentName: "NomDuCertificat.pdf",
				},
			],

			licencees:[
				{
					firstname: "Jane",
					lastname: "Doe",
					birthdate: "24/05/2000",
				},
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.greenText{
	color: $mainGreen;
}

.violetText{
	color: $mainViolet;
}

.blueText{
	color: $mainBlue;
}

</style>
