import { redirect, type Actions } from "@sveltejs/kit";
import authCookieKey from "../../auth/constants/auth-cookie-key";

export const actions: Actions = {
	async default(event) {
		const formData = await event.request.formData();
		const authCookie = JSON.stringify({ id: formData.get("id") });
		event.cookies.set(authCookieKey, authCookie);
		throw redirect(303, "/");
	},
};
