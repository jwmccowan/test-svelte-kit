import type { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	interface Error {
		code: string;
		message: string;
	}

	namespace App {
		// interface Error {}
		interface Locals {
			user?: User | null;
			prismaClient: PrismaClient;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
