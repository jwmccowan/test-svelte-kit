// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	interface User {
		id: string;
		name: string;
		role: "ADMIN" | "USER";
	}

	interface Error {
		code: string;
		message: string;
	}

	namespace App {
		// interface Error {}
		interface Locals {
			user?: User | null;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
