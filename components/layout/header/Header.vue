<template>
	<header class="flex justify-between items-center">
		<a href="/" class="logo">
			<img src="~/static/logo_gyravo.png"/>
		</a>

		<div class="flex items-center">
				<ul class="flex content-center">
					<li>
						<a href="/courses">
							Les cours
						</a>
					</li>
						<li>
						<a href="/news">
							Le blog
						</a>
					</li>
					<li>
						<a href="/contact">
							Contact
						</a>
					</li>
					<li>
						<a href="/login" id="logIn">
							Se connecter
						</a>
					</li>
					<li>
						<a href="/singup" id="signUp">
							S'inscrire
						</a>
					</li>
				</ul>

				<img class="w-9 h-9 ml-3" src="../../../static/accessibilite.png">
		</div>


	</header>
</template>

<script>
export default {
	name: "Header",
	data: () => {
		return{
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/_variables.scss";
header{
	margin: 10px 2rem;
}

a{
	color: $mainGreen;
	margin: 0 1rem;
}

#signUp{
	color: $mainViolet
}

#logIn{
	color: $mainBlue
}

.logo{
	width: 15rem;
}


</style>
