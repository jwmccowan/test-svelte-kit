export function findUser(id: string): User | null {
	const users: User[] = [
		{ id: "12345", name: "John", role: "ADMIN" },
		{ id: "23456", name: "Eric", role: "USER" },
	];
	return users.find((user) => user.id === id) ?? null;
}
