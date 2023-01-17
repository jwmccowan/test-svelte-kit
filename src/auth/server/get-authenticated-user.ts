import type { RequestEvent } from "@sveltejs/kit";
import { findUser } from "./find-user";
import getAuthCookieFromRequest from "./get-auth-cookie-from-request";

export default function getAuthenticatedUser(event: RequestEvent): User | null {
	const userCookie = getAuthCookieFromRequest(event);
	if (!userCookie) {
		return null;
	}

	return findUser(userCookie.id);
}
