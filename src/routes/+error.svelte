<script lang="ts">
	import { page } from "$app/stores";
	import Container from "../common/components/container";
</script>

<Container>
	<h1 class="text-2xl font-bold">Something went wrong</h1>
	{#if $page.error?.message}
		<p>{$page.error.message}</p>
	{/if}
</Container>
