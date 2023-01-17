import type { RequestEvent } from "@sveltejs/kit";
import authCookieKey from "../constants/auth-cookie-key";
import type { AuthCookie } from "../schemas/auth-cookie";
import AuthCookieSchema from "../schemas/auth-cookie";

export default function getAuthCookieFromRequest(event: RequestEvent): AuthCookie | null {
	const cookie = event.cookies.get(authCookieKey);
	if (!cookie) {
		return null;
	}
	try {
		return AuthCookieSchema.parse(JSON.parse(cookie));
	} catch {
		return null;
	}
}
