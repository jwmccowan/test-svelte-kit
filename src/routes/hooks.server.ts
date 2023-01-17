import type { Handle } from "@sveltejs/kit";
import getAuthenticatedUser from "../auth/server/get-authenticated-user";

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = getAuthenticatedUser(event);
	const request = resolve(event);
	return request;
};
