import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async (event) => {
	if (!event.locals.user) {
		throw redirect(301, "/");
	}
	if (event.locals.user.role !== "ADMIN") {
		throw error(403, "Incorrect permissions");
	}
	return {
		name: event.locals.user.name,
	};
}) satisfies PageServerLoad;
