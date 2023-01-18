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
	<div class="divide-y divide-green-600 py-8">
		<div />
		<div />
	</div>
	<h2 class="text-xl font-bold pb-8">Register an email</h2>
	<p class="pb-4">
		Do not put in a real email, or one you're not comfortable being posted on this site
	</p>
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
	<div class="divide-y divide-green-600 py-8">
		<div />
		<div />
	</div>
	<h2 class="text-xl font-bold pb-8">Users</h2>
	<ul class="space-y-4">
		{#each data.users as user}
			<li>
				<form method="post" action="/login">
					<input name="email" value={user.email} hidden />
					<button
						class="px-4 py-2 text-sm text-white font-medium cursor-default bg-purple-500 rounded hover:bg-purple-600"
						type="submit">Login as {user.email}</button
					>
				</form>
			</li>
		{/each}
	</ul>
</Container>
