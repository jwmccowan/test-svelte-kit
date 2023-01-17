import type { PageServerLoad } from "./$types";

export const load = (async (event) => {
	return {
		user: event.locals.user ?? null,
	};
}) satisfies PageServerLoad;
