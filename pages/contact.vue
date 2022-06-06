<template>
	<div class="h-fit mb-20">
		<TitlePage color="green" title="Contact"></TitlePage>
		<div class="flex flex-col justify-center items-center min-h-80 my-28 mx-28">
			<form class="min-w-4/12 mb-14">
				<p class="mb-6 greenText font-bold">Une question ? Posez là nous !</p>
				<p class="mb-6 textEror" v-if="error">{{errorText}}</p>
				<div class="flex justify-between">
					<InputForm
						id="lastname"
						class="mb-8 mr-4"
						label="Nom"
						type="text"
						:value="lastname"
						:error="lastnameError"
						:textError="lastnameTextError"
						@OnChange="setLastname"
					/>
					<InputForm
						id="firstname"
						class="mb-8"
						label="Prénom"
						type="text"
						:value="firstname"
						:error="firstnameError"
						:textError="firstnameTextError"
						@OnChange="setFirstname"
					/>
				</div>
				<InputForm
						id="email"
						class="mb-8"
						label="E-mail"
						type="email"
						:value="email"
						:error="emailError"
						:textError="emailTextError"
						@OnChange="setEmail"
					/>
					<InputForm
						id="message"
						class="mb-2"
						label="Votre message"
						type="textarea"
						:value="message"
						:error="messageError"
						:textError="messageTextError"
						@OnChange="setMessage"
					/>
			</form>
			<Button text="Envoyer" textColor="textGreen" backgroundColor="backgroundWhite" class="mb-3" @OnClick="singUp"></Button>
		</div>

		<div class="flex justify-around">
			<div>
				<h2 class="font-bold violetText">Pour joindre un membre du bureau</h2>
				<div>
					<div v-for="(el, index) in members" :key="index" class="my-6">
						<p>
							<span class="font-bold">
								{{el.firstname}}
								<span class="uppercase">{{el.lastname}}</span>
							</span>
							<span class="mx-2">
								-
							</span>
							{{el.function}}
						</p>
						<a class="greenText underline" :href="`mailto:${el.email}`">{{el.email}}</a>
					</div>
				</div>
			</div>
			<div class="text-right">
				<h2 class="font-bold blueText">Nous joindre directement !</h2>
				<div>
					<div class="my-6">
						<p class="font-bold">Adresse</p>
						<p>Place du Général de Gaule</p>
						<p>37501 CHINON</p>
					</div>
					<div class="my-6">
						<p class="font-bold">Email</p>
						<p>contact@gyravo.fr</p>
					</div>
					<div class="my-6">
						<p class="font-bold">Numéro de téléphone</p>
						<p>06 11 22 33 44 55</p>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TitlePage from '~/components/titlePage.vue';
import Button from '~/components/Button.vue';
import InputForm from '~/components/inputForm.vue';
import LinkAction from '~/components/linkAction.vue';
export default {
    name: "SingUp",
    components: { TitlePage, Button, InputForm, LinkAction },
	layout: "page",

	data(){
		return{
			email:"",
			message:"",
			lastname:"",
			firstname:"",
			emailError: false,
			emailTextError:"Veuillez renseigner un email valide",
			messageError: false,
			messageTextError:"Veuillez renseigner un mot de passe valide",
			lastnameError: false,
			lastnameTextError:"Veuillez renseigner un nom",
			firstnameError: false,
			firstnameTextError:"Veuillez renseigner un prénom",
			error:false,
			errorText: "Une erreur est survenue, veuillez rééssayer.",

			members:[
				{
					firstname:"Patrick",
					lastname:"FASSOT",
					function:"Président",
					email:"patrickfassot@gyravo.fr",
				},
			{
					firstname:"Isabelle",
					lastname:"FASSOT",
					function:"Professeur",
					email:"isabellefassot@gyravo.fr",
				},
			{
					firstname:"Danielle",
					lastname:"Maudit",
					function:"Trésorière",
					email:"daniellemaudit@gyravo.fr",
				},
			{
					firstname:"Patricia",
					lastname:"Maillot",
					function:"Secrétaire",
					email:"patriciamaillot@gyravo.fr",
				},
			{
					firstname:"André",
					lastname:"Gouffe",
					function:"Secrétaire adjoint",
					email:"andregouffe@gyravo.fr",
				},
			]
		}
	},

	methods:{
		singUp(){
			this.emailError = false
			this.messageError = false
			this.lastnameError = false
			this.firstnameError = false
			if(this.email ===""){
				this.emailError = true
				this.emailTextError = "Veuillez renseigner votre email."
			}
			if(this.message ===""){
				this.messageError = true
				this.messageTextError = "Veuillez renseigner votre mot de passe."
			}
			if(this.lastname ===""){
				this.lastnameError = true
				this.lastnameTextError = "Veuillez renseigner votre nom"
			}
			if(this.firstname ===""){
				this.firstnameError = true
				this.firstnameTextError = "Veuillez renseigner votre prénom"
			}

			console.log(this.firstname, this.lastname, this.email, this.message);
			if(!(this.messageError || this.emailError || this.lastnameError || this.firstnameError)){
				console.log("SignUp", this.email, this.message, this.firstname, this.lastname)
				localStorage.setItem('login', true)
				window.location.replace("/")
			}
		},
		setEmail(value){
			this.email = value
		},

		setMessage(value){
			this.message = value
		},

		setLastname(value){
			this.lastname = value
		},

		setFirstname(value){
			this.firstname = value
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
