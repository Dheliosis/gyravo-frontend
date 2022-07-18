<template>
	<footer class="flex justify-around items-center py-10">
		<div>
			<img class="w-40" src="../../../static/logo_court-monochrome_blanc.png">
		</div>
		<div class="flex align-center">
			<div>
				<p class="font-semibold mb-2">Plan du site</p>
				<ul>
					<li>
						<a href="/">
							Accueil
						</a>
					</li>
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
						<a href="/cgu">
							CGU
						</a>
					</li>
				</ul>
			</div>

		</div>
		<div class="flex">
			<img class="w-15 h-14 mr-2" src="../../../static/facebook.png">
			<img class="w-15 h-14 ml-2" src="../../../static/youtube.png">
		</div>
	</footer>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Footer",
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/variables";

footer {
	color: white;
	background-color: $mainViolet;
}
</style>
