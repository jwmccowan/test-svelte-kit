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
		<h1 class="text-3xl font-bold py-12">Hello {data.user.email}!</h1>
	{/if}
	{#if !data.user}
		<h1 class="text-3xl font-bold py-12">Hello visitor</h1>
		<p>Feel free to login</p>
	{/if}
	<h2 class="text-xl font-bold py-8">Register an email</h2>
	<form method="post" action="/register">
		<label class="inline-block mb-1">
			Email:
			<input class="px-4 py-2 text-sm border rounded" name="email" type="email" />
		</label>
		<button
			class="px-4 py-2 text-sm text-white font-medium cursor-default bg-purple-500 rounded hover:bg-purple-600"
			type="submit"
		>
			Register
		</button>
	</form>
</Container>
