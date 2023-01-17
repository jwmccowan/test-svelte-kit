import { redirect, type Actions } from "@sveltejs/kit";
import authCookieKey from "../../auth/constants/auth-cookie-key";

export const actions: Actions = {
	async default({ cookies }) {
		cookies.delete(authCookieKey);
		throw redirect(303, "/");
	},
};
