<script>
	export let name;
	export let i;

	function getCoords() {
		var elem = document.getElementById(`${name}${i}`)
		console.log(elem.getBoundingClientRect())
		console.log()
	}
</script>

<div class="image" on:mouseenter={getCoords}>
	<img id="{name}{i}" alt="{name}{i}" src="/images/{name}/{i}" />
</div>

<style>
	.image {
		width: 100%;
		height: 100%;
	}

	@media (min-width: 600px) {
		img {
			width: 40vw;
		}
	}
</style>
