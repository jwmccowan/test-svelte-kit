<script>
	import "../app.css";
</script>

<div class="container mx-auto px-4">
	<nav class="flex flex-row gap-6 py-4">
		<form method="post" action="/login">
			<button
				class="px-4 py-2 text-sm text-white font-medium cursor-default bg-purple-500 rounded hover:bg-purple-600"
				type="submit">Log in</button
			>
		</form>
		<form method="post" action="/logout">
			<button
				class="px-4 py-2 text-sm text-white font-medium cursor-default bg-purple-500 rounded hover:bg-purple-600"
				type="submit">Log out</button
			>
		</form>
		<a
			class="px-4 py-2 text-sm text-white font-medium cursor-default bg-purple-500 rounded hover:bg-purple-600"
			href="/admin"
		>
			Admin page
		</a>
	</nav>
</div>

<slot />
