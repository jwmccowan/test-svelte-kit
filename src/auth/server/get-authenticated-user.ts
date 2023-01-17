import type { RequestEvent } from "@sveltejs/kit";
import getAuthCookieFromRequest from "./get-auth-cookie-from-request";
import type { User } from "@prisma/client";

export default async function getAuthenticatedUser(event: RequestEvent): Promise<User | null> {
	const userCookie = getAuthCookieFromRequest(event);
	if (!userCookie) {
		return null;
	}

	return event.locals.prismaClient.user.findFirst();
}
