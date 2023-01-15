import type { PageServerLoad } from "./$types";

export const load = (async () => {
	console.log("starting 5 second timer");
	await new Promise<void>((resolve) => {
		setTimeout(() => resolve(), 5000);
	});
	console.log("ending 5 second timer");
	return { name: "World!" };
}) satisfies PageServerLoad;
