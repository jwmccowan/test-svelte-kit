import { error } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async (event) => {
	const organizations = await event.locals.prismaClient.organization.findMany({
		where: {
			users: {
				some: {
					userId: event.locals.user?.id,
				},
			},
		},
	});
	return {
		organizations: organizations,
	};
}) satisfies PageServerLoad;

export const actions = {
	async default(event) {
		if (!event.locals.user) {
			throw error(403, "Could not authenticate user");
		}
		const formData = await event.request.formData();
		const organizationName = formData.get("organization-name");
		if (!organizationName || typeof organizationName !== "string") {
			throw error(400, "Could not parse parameters");
		}
		organizationName;
		const organization = await event.locals.prismaClient.organization.create({
			data: {
				name: organizationName,
				users: {
					createMany: {
						data: [
							{
								role: "ADMIN",
								userId: event.locals.user.id,
							},
						],
					},
				},
			},
		});
		return organization.id;
	},
} satisfies Actions;
