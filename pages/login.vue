<template>
	<div>
		<TitlePage title="Se connecter" color="blue"></TitlePage>
		<div class="flex flex-col justify-center items-center h-80 my-28 mx-28">
			<p class="mb-6 textEror" v-if="error">{{errorText}}</p>
			<form class="min-w-4/12 w-4/12 mb-14">
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
				<LinkAction text="Mot de pase oublié" color="green" class="ml-3"></LinkAction>
			</form>
			<Button text="Connexion" textColor="textBlue" backgroundColor="backgroundWhite" class="mb-3" @OnClick="login"></Button>
			<LinkAction text="Je n'ai pas de compte, je m'inscris" color="green"></LinkAction>
		</div>
	</div>
</template>

<script>
import TitlePage from '~/components/titlePage.vue';
import Button from '~/components/Button.vue';
import InputForm from '~/components/inputForm.vue';
import LinkAction from '~/components/linkAction.vue';
export default {
	name: "Login",
	layout: "page",
    components: { TitlePage, Button, InputForm, LinkAction },

	data(){
		return{
			email:"",
			password:"",
			emailError: false,
			emailTextError:"Veuillez renseigner un email valide",
			passwordError: false,
			passwordTextError:"Veuillez renseigner un mot de passe valide",
			error:false,
			errorText: "Une erreur est survenue, veuillez rééssayer.",
		}
	},

	methods:{
		login(){
			this.emailError = false
			this.passwordError = false
			if(this.email ===""){
				this.emailError = true
				this.emailTextError = "Veuillez renseigner votre email."
			}
			if(this.password ===""){
				this.passwordError = true
				this.passwordTextError = "Veuillez renseigner votre mot de passe."
			}

			if(!(this.passwordError || this.emailError)){
				console.log("login", this.email, this.password)
				localStorage.setItem('login', true)
				window.location.replace("/")
			}
		},

		setEmail(value){
			this.email = value
		},

		setPassword(value){
			this.password = value
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.textError{
	color: $mainBlue;
}
</style>

