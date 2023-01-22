<script lang="ts">
	import Container from "../../common/components/container";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<Container>
	<h1 class="text-3xl font-bold py-8">Organizations</h1>
	<ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
		{#each data.organizations as org}
			<li>
				<a class="block rounded bg-green-600 p-4 text-white" href={`/organizations/${org.id}`}>
					{org.name}
				</a>
			</li>
		{/each}
	</ul>
	<form method="post">
		<h2 class="text-2xl font-bold py-8">New organization</h2>
		<label class="inline-block mb-1">
			<span> Organization name: </span>
			<input class="px-4 py-2 text-sm border rounded" name="organization-name" type="text" />
		</label>
		<button
			class="px-4 py-2 text-sm text-white font-medium cursor-default bg-purple-600 rounded hover:bg-purple-700"
			type="submit"
		>
			Create
		</button>
	</form>
</Container>
