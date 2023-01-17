import type { RequestEvent } from "@sveltejs/kit";
import { findUser } from "./find-user";
import getAuthCookieFromRequest from "./get-auth-cookie-from-request";

export default function authenticateUser(event: RequestEvent): User | null {
	const userCookie = getAuthCookieFromRequest(event);
	if (!userCookie) {
		return null;
	}

	const user = findUser(userCookie.id);

	event.locals.user = user;
	return user;
}
