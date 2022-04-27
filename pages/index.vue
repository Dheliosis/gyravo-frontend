<template>
  <div>
    <Tutorial />
    <p class="bg-lime-500">test</p>
		<div class="test">
				<p>test</p>
		</div>
  </div>
</template>

<script lang="ts">
export default {
    name: "IndexPage",
}
</script>

<style lang="scss">
@import '../assets/styles/_variables.scss';
.test {
	p {
		color:$mainBlue
	}
}
</style>
