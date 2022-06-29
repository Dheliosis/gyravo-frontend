<template>
	<header class="flex justify-between items-center mx-10 my-5">
		<nuxt-link class="nuxt-link logo" to="/">
			<img src="~/static/logo_gyravo.png" />
		</nuxt-link>

		<div class="flex items-center">
			<ul class="flex content-center">
				<li>
					<nuxt-link class="nuxt-link" to="/courses">
						Les cours
					</nuxt-link>
				</li>
				<li>
					<nuxt-link class="nuxt-link" to="/news">
						Le blog
					</nuxt-link>
				</li>
				<li>
					<nuxt-link class="nuxt-link" to="/contact">
						Contact
					</nuxt-link>
				</li>
				<li>
					<nuxt-link v-if="!login" class="nuxt-link blue" to="/login">
						Se connecter
					</nuxt-link>
				</li>
				<li>
					<nuxt-link v-if="!login" class="nuxt-link violet" to="/signup">
						S'inscrire
					</nuxt-link>
				</li>
				<li>
					<nuxt-link v-if="login" class="nuxt-link blue" to="/profile">
						Mon profil
					</nuxt-link>
				</li>
				<li>
					<a v-if="login" class="nuxt-link violet" href="/" @click="logout">
						Se déconnecter
					</a>
				</li>

			</ul>

			<img class="w-9 h-9 ml-3" src="../../../static/accessibilite.png">
		</div>


	</header>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Header",
	data: () => {
		return {
			login: localStorage.getItem('login')
		}
	},

	methods: {
		logout() {
			localStorage.removeItem('login')
		}
	},
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/_variables.scss";

.nuxt-link {
	color: $mainGreen;
	margin: 0 1rem;
}

.violet {
	color: $mainViolet
}

.blue {
	color: $mainBlue
}


.logo {
	width: 15rem;
}
</style>
