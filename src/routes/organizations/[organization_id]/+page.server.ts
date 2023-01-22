import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async (event) => {
	const organizationId = event.params.organization_id;
	const organization = await event.locals.prismaClient.organization.findFirst({
		where: {
			id: organizationId,
			users: {
				some: {
					userId: event.locals.user?.id,
				},
			},
		},
		include: {
			users: {
				include: {
					user: true,
				},
			},
		},
	});
	if (!organization) {
		throw error(404, "Organization not found");
	}
	return { organization };
}) satisfies PageServerLoad;
