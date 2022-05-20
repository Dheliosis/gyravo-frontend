<template>
	<nav aria-label="Breadcrumb">
		<ol role="list" class="flex items-center space-x-1 text-sm text-gray-500">
			<li v-for="(el, value) in list" :key="el.name" class="flex items-center">
				<a class="block transition-colors hover:text-gray-700" :href="el.link">
					{{ el.name }}
				</a>
				<svg
					v-if="value !== list.length - 1"
					xmlns="http://www.w3.org/2000/svg"
					class="w-4 h-4"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</li>
		</ol>
	</nav>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: "Breadcrumb",
	data() {
		return {
			completedList: [
				{
					id: "home",
					name: "Home",
					link: "/",
				},
				{
					id: "courses",
					name: "Cours",
					link: "/courses",
				},
				{
					id: "fitness",
					name: "Fitness",
					link: "/courses/fitness",
				},
				{
					id: "contact",
					name: "Contact",
					link: "/contact"
				}
			],
			list: [
				{
					id: "home",
					name: "Home",
					link: "/",
				},
			],
		}
	},
	mounted() {
		let splitPath = this.$route.fullPath.split("/")
		splitPath = splitPath.splice(1)
		for (const el of this.completedList) {
			if (splitPath.includes(el.id)) {
				this.list.push(el)
			}
		}
	},
}
</script>

<style></style>
