import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async (event) => {
	if (!event.locals.user) {
		throw redirect(303, "/");
	}
	return {
		name: event.locals.user.name,
	};
}) satisfies PageServerLoad;
