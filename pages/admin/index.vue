<template>
	<div class="h-screen flex">
		<admin-menu />
		<div class="w-full mx-4 my-4 ml-64">
			<Box class="">
				<div class="w-full flex flex-col justify-center items-center">
					<h1 class="text-xl font-bold mb-4">Informations générales</h1>
					<div class="flex w-1/2 justify-between mb-4">
						<p>
							<font-awesome-icon icon="fa-solid fa-user" class="mr-2 textGreen" /> 74 licenciés
						</p>
						<p>
							<font-awesome-icon icon="fa-solid fa-user-xmark" class="mr-2 text-red-700" /> 12 dossiers en
							attente
						</p>
						<p>
							<font-awesome-icon icon="fa-solid fa-book-bookmark" class="mr-2 textBlue" /> 8 cours
							disponibles
						</p>
					</div>
				</div>
			</Box>
			<div class="flex">
				<div class="w-3/4">
					<Box class="w-full">
						<div>
							<h1 class="text-xl font-bold mb-4">Les cours de la semaine</h1>
							<table class="w-full mb-4">
								<tbody>
									<tr v-for="(el, index) in courses" :key="index" class="flex justify-between my-1">
										<td class="w-1/3">{{ el.title }}</td>
										<td class="w-1/4">
											<font-awesome-icon icon="fa-solid fa-calendar-days" class="mr-2" />
											{{ el.date }}
										</td>
										<td class="w-1/4">
											<font-awesome-icon icon="fa-solid fa-clock" class="mr-2" />
											{{ el.hour }}
										</td>
										<td class="w-1/4">
											<p class="underline textGreen hoverTextViolet cursor-pointer">Envoyer un
												rappel
											</p>
										</td>
									</tr>
								</tbody>
							</table>
							<Button text="Voir tous les cours" background-color="backgroundWhite"
								text-color="textGreen"></Button>

						</div>
					</Box>
					<Box class="w-full">
						<div>
							<h1 class="text-xl font-bold mb-4">Dossier à valider</h1>
							<table class="w-full mb-4">
								<thead>
									<tr class="flex justify-between my-1 text-left">
										<th class="w-1/4">Prénom Nom</th>
										<th class="w-1/3">Cours</th>
										<th class="w-1/4">Date de l'inscription</th>
										<th class="w-1/4">Voir l'inscription</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(el, index) in singUp" :key="index" class="flex justify-between my-1">
										<td class="w-1/4">{{ el.name }}</td>
										<td class="w-1/3">
											{{ el.course }}
										</td>
										<td class="w-1/4">
											{{ el.date }}
										</td>
										<td class="w-1/4">
											<font-awesome-icon icon="fa-solid fa-eye"
												class="hoverTextViolet cursor-pointer" />

										</td>
									</tr>
								</tbody>
							</table>
							<Button text="Voir toutes les inscriptions" background-color="backgroundWhite"
								text-color="textGreen"></Button>

						</div>
					</Box>
				</div>
				<div class="w-1/4 ml-8">
					<Box>
						<h1 class="text-xl font-bold mb-4">Licenciés</h1>
						<div v-for="(el, index) in licencees" :key="index" class="my-2 border-b-2">
							<div class="flex justify-between">
								<p>
									{{ el }}
								</p>
								<font-awesome-icon icon="fa-solid fa-eye" class="hoverTextViolet cursor-pointer" />
							</div>
						</div>
					</Box>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import AdminMenu from '~/components/navigation/AdminMenu.vue'
import icon from "../../assets/icon"
import Box from '~/components/Box.vue'
import Button from '~/components/Button.vue'


export default {
	name: "adminHome",
	components: {
		AdminMenu,
		Box,
		Button,
	},

	data() {
		return {
			courses: [
				{
					title: "Marche nordique",
					date: "06/06/2022",
					hour: "19h30-21h"
				},
				{
					title: "Rythm'Dance et Soft-Fitness",
					date: "07/09/2022",
					hour: "19h30-21h"
				},
				{
					title: "Fitness",
					date: "09/06/2022",
					hour: "19h30-21h"
				},
			],

			singUp: [
				{
					name: "John Doe",
					course: "Fitness",
					date: "05/08/2022"
				},
				{
					name: "Martine Lafaye",
					course: "Rythm'Dance et Soft- Fitness",
					date: "06/08/2022"
				},
				{
					name: "Kévin Sicard",
					course: "Marche nordique",
					date: "06/08/2022"
				},
			],

			licencees: [
				"Julie Leperce",
				"Mickael Leperce",
				"Marc Frost",
				"Roxane Perez",
				"Mary-lou Humbert",
				"Thibault Percevalt",
				"Kléa Blaise",
				"Margot Liégé"
			]
		}
	}

}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/_variables.scss";

.textGreen {
	color: $mainGreen;
}

.textViolet {
	color: $mainViolet;
}

.textBlue {
	color: $mainBlue;
}

.bgGreen {
	background-color: $mainGreen;
}

.bgViolet {
	background-color: $mainViolet;
}

.bgBlue {
	background-color: $mainBlue;
}

.hoverTextViolet:hover {
	color: $mainViolet
}
</style>
