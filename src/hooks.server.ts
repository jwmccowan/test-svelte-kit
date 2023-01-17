import type { Handle } from "@sveltejs/kit";
import getAuthenticatedUser from "./auth/server/get-authenticated-user";

export const handle = (async ({ event, resolve }) => {
	/* Before request */
	event.locals.user = getAuthenticatedUser(event);

	/* Do request */
	const request = resolve(event);

	/* After request */
	return request;
}) satisfies Handle;
