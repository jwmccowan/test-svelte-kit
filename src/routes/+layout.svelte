<script>
	import Container from "../common/components/container";
	import "../app.css";
</script>

<div class="bg-green-500">
	<Container>
		<nav class="flex flex-row gap-6 py-4">
			<form method="post" action="/login">
				<input name="id" value="12345" hidden />
				<button
					class="px-4 py-2 text-sm text-white font-medium cursor-default bg-purple-500 rounded hover:bg-purple-600"
					type="submit"
				>
					Log in - admin
				</button>
			</form>
			<form method="post" action="/login">
				<input name="id" value="23456" hidden />
				<button
					class="px-4 py-2 text-sm text-white font-medium cursor-default bg-purple-500 rounded hover:bg-purple-600"
					type="submit"
				>
					Log in - user
				</button>
			</form>
			<form method="post" action="/logout">
				<button
					class="px-4 py-2 text-sm text-white font-medium cursor-default bg-purple-500 rounded hover:bg-purple-600"
					type="submit"
				>
					Log out
				</button>
			</form>
			<a
				class="px-4 py-2 text-sm text-white font-medium bg-purple-500 rounded hover:bg-purple-600"
				href="/admin"
			>
				Admin page
			</a>
		</nav>
	</Container>
</div>

<slot />
