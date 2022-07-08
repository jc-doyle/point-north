<script context="module">
	export async function load({ params, fetch, session, stuff }) {
		const url = `../svg/${params.id}`;
		const response = await fetch(url);

		return {
			status: response.status,
			props: {
				svg: response.ok && (await response.json())
			}
		};
	}
</script>

<script>
	export let svg;
  $:header = svg.header;
</script>

<svg width="100%" height="100%" viewBox="0 0 1055 617">
	<path style="stroke: #ff3e00; fill: #ff3e00; stroke-width: 50;" d={header} />
</svg>
