import { z } from "zod";

const AuthCookieSchema = z.object({
	id: z.string(),
});

export type AuthCookie = z.infer<typeof AuthCookieSchema>;
export default AuthCookieSchema;
