<script>
	export let data;
</script>

<div class="specs">
	<div class="spec">
		<li class="label">Location</li>
		<li class="value">{data.location}</li>
	</div>
	<div class="spec">
		<li class="label">Units Built</li>
		<li class="value">{data.units}</li>
	</div>
	<div class="spec">
		<li class="label">Land Size</li>
		<li class="value">{data.landsize}m<sup>2</sup></li>
	</div>
	<div class="spec">
		<li class="label">Property Size(s)</li>
		<li class="value">{data.unitsize}m<sup>2</sup></li>
	</div>
	<div class="spec">
		<li class="label">Client Build Options</li>
		<li class="value">{data.options}</li>
	</div>
	<div class="spec">
		<li class="label">Construction Time</li>
		<li class="value">{data.period}</li>
	</div>
</div>

<style>
  sup {
    vertical-align: top;
    position: relative;
    top: -3px;
  }

	.spec {
    padding: 0 5%;
    align-items: center;
		display: flex;
		justify-content: space-between;
	}

	.spec:nth-child(even) {
		background-color: var(--grey-list);
	}

	.label {
		font-family: 'Raleway', serif;
		font-size: 1.8vh;
		line-height: 200%;
		font-weight: 500;
		font-style: italic;
		color: var(--black);
	}

	.value {
		text-align: right;
		font-size: 1.8vh;
		line-height: 230%;
		font-weight: 300;
		color: var(--black);
	}

	@media (min-aspect-ratio: 1/1) {
    .spec:nth-child(even) {
      background-color: var(--background);
    }
  }
</style>
