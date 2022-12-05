<script>
	export let data;
</script>

<li>{data.period}</li>
<li>{data.land}m<sup>2</sup> Land Area</li>
<li>{data.units} Units Built</li>
<li>{data.size}m<sup>2</sup> Property Size</li>

<style>
	sup {
		vertical-align: top;
		position: relative;
		top: -3px;
    font-size: 4px;
	}

	li {
		font-family: 'Nanum Myeongjo', serif;
		font-size: 15px;
		line-height: 250%;
		font-weight: 300;
		color: var(--black);
	}

	@media (min-aspect-ratio: 1/1) {
    li {
      font-size: 15px;
    }
  }
</style>
