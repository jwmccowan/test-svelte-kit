<script lang="ts">
	import Container from "../../common/components/container";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<title>Admin - Home</title>
	<meta name="description" content="A page with sensitive information" />
</svelte:head>

<Container>
	<h1 class="text-2xl font-bold py-12">Welcome to the admin page, {data.name}</h1>
</Container>
