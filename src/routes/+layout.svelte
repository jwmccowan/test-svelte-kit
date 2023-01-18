<script>
	import Container from "../common/components/container";
	import "../app.css";
</script>

<div class="bg-green-500">
	<Container>
		<nav class="flex flex-row gap-6 py-4 justify-end">
			<a
				class="px-4 py-2 text-sm text-white font-medium bg-purple-600 rounded hover:bg-purple-700 mr-auto"
				href="/">Home</a
			>
			<a
				class="px-4 py-2 text-sm text-white font-medium bg-purple-600 rounded hover:bg-purple-700"
				href="/admin"
			>
				Admin page
			</a>
			<form method="post" action="/logout">
				<button
					class="px-4 py-2 text-sm text-white font-medium cursor-default bg-purple-600 rounded hover:bg-purple-700"
					type="submit"
				>
					Log out
				</button>
			</form>
		</nav>
	</Container>
</div>

<slot />
