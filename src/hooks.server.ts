import type { Handle } from "@sveltejs/kit";
import getAuthenticatedUser from "./auth/server/get-authenticated-user";
import prisma from "./db/prisma-client.server";

export const handle = (async ({ event, resolve }) => {
	/* Before request */
	event.locals.prismaClient = prisma;
	event.locals.user = await getAuthenticatedUser(event);

	/* Do request */
	const response = await resolve(event);

	/* After request */
	return response;
}) satisfies Handle;
