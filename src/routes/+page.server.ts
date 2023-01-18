import type { PageServerLoad } from "./$types";

export const load = (async (event) => {
	const users = await event.locals.prismaClient.user.findMany();
	return {
		user: event.locals.user ?? null,
		users,
	};
}) satisfies PageServerLoad;
