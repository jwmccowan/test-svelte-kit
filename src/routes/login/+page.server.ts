import { error, redirect, type Actions } from "@sveltejs/kit";
import authCookieKey from "../../auth/constants/auth-cookie-key";

export const actions: Actions = {
	async default(event) {
		const formData = await event.request.formData();
		const email = formData.get("email");
		if (!email || typeof email !== "string") {
			throw error(400, "no credentials provided");
		}
		const foundUser = await event.locals.prismaClient.user.findFirst({ where: { email } });
		if (!foundUser) {
			throw error(400, "incorrect credentials");
		}
		const authCookie = JSON.stringify({ id: foundUser.id });
		event.cookies.set(authCookieKey, authCookie);
		throw redirect(303, "/");
	},
};
