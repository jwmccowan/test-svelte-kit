import { redirect, type Actions } from "@sveltejs/kit";
import authCookieKey from "../../auth/constants/auth-cookie-key";

export const actions: Actions = {
	async default(event) {
		event.cookies.set(authCookieKey, JSON.stringify({ id: "12345" }));
		throw redirect(303, "/");
	},
};
