<script lang="ts">
	import Container from "../../../common/components/container";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<Container>
	<h1 class="text-3xl font-bold py-8">{data.organization.name}</h1>
	<ul>
		{#each data.organization.users as orgUser}
			<li>{orgUser.user.email} - {orgUser.role}</li>
		{/each}
	</ul>
</Container>
