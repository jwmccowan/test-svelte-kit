<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="container mx-auto px-4">
	<h1 class="text-3xl font-bold mb-4">Hello {data.name}!</h1>
	<p>
		<a href="/about">About us</a>
		<a href="/server-rendered">Calculator (long load)</a>
	</p>
</div>
