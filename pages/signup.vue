<template>
	<div class="h-fit">
		<TitlePage color="violet" title="S'inscrire"></TitlePage>
		<div class="flex flex-col justify-center items-center min-h-80 my-28 mx-28">
			<p class="mb-6 textEror" v-if="error">{{errorText}}</p>
			<form class="w-4/12 mb-14">
				<div class="flex justify-between">
					<InputForm
						id="lastname"
						class="mb-8"
						label="Nom"
						type="text"
						:value="lastname"
						:error="lastnameError"
						:textError="lastnameTextError"
						@OnChange="setLastname"
					/>
					<InputForm
						id="firstname"
						class="mb-2"
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
						id="password"
						class="mb-2"
						label="Mot de passe"
						type="password"
						:value="password"
						:error="passwordError"
						:textError="passwordTextError"
						@OnChange="setPassword"
					/>
				<div class="text-sm mt-4">
					<p class="blue font-bold">Votre mot de passe n'est pas suffisament fort !</p>
					<p>Il doit contenir au moins :</p>
					<ul class="list-disc ml-4">
						<li>8 caractères</li>
						<li>1 majuscule</li>
						<li>1 minuscule</li>
						<li>1 chiffre</li>
						<li>1 caractère spécial</li>
					</ul>
				</div>
			</form>
			<Button text="S'inscrire" textColor="textViolet" backgroundColor="backgroundWhite" class="mb-3" @OnClick="singUp"></Button>
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
			password:"",
			lastname:"",
			firstname:"",
			emailError: false,
			emailTextError:"Veuillez renseigner un email valide",
			passwordError: false,
			passwordTextError:"Veuillez renseigner un mot de passe valide",
			lastnameError: false,
			lastnameTextError:"Veuillez renseigner un nom",
			firstnameError: false,
			firstnameTextError:"Veuillez renseigner un prénom",
			error:false,
			errorText: "Une erreur est survenue, veuillez rééssayer.",
		}
	},

	methods:{
		singUp(){
			this.emailError = false
			this.passwordError = false
			this.lastnameError = false
			this.firstnameError = false
			if(this.email ===""){
				this.emailError = true
				this.emailTextError = "Veuillez renseigner votre email."
			}
			if(this.password ===""){
				this.passwordError = true
				this.passwordTextError = "Veuillez renseigner votre mot de passe."
			}
			if(this.lastname ===""){
				this.lastnameError = true
				this.lastnameTextError = "Veuillez renseigner votre nom"
			}
			if(this.firstname ===""){
				this.firstnameError = true
				this.firstnameTextError = "Veuillez renseigner votre prénom"
			}

			console.log(this.firstname, this.lastname, this.email, this.password);
			if(!(this.passwordError || this.emailError || this.lastnameError || this.firstnameError)){
				console.log("SignUp", this.email, this.password, this.firstname, this.lastname)
				localStorage.setItem('login', true)
				window.location.replace("/")
			}
		},
		setEmail(value){
			this.email = value
		},

		setPassword(value){
			this.password = value
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

.blue{
	color: $mainBlue;
}
</style>
