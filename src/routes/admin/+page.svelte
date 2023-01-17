<script lang="ts">
	import Container from "../../common/components/container";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<Container>
	<h1 class="text-2xl font-bold py-12">Welcome to the app, {data.name}</h1>
</Container>
