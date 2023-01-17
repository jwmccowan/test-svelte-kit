<script lang="ts">
	import Container from "../common/components/container";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<title>Testing svelte kit</title>
	<meta name="A minimum setup for all things sveltey" />
</svelte:head>

<Container>
	<h1 class="text-3xl font-bold mb-4">Hello {data.name}!</h1>
</Container>
