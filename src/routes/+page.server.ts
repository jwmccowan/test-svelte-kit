import type { PageServerLoad } from "./$types";

export const load = (async () => {
	return {
		name: "John",
	};
}) satisfies PageServerLoad;
