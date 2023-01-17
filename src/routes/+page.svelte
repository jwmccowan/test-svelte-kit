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
	{#if data.user}
		<h1 class="text-3xl font-bold py-12">Hello {data.user.name}!</h1>
	{/if}
	{#if !data.user}
		<h1 class="text-3xl font-bold py-12">Hello visitor</h1>
		<p>Feel free to login</p>
	{/if}
</Container>
