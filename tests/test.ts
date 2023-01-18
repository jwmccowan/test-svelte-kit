import { expect, test } from "@playwright/test";

test("register email form shown", async ({ page }) => {
	await page.goto("/");
	expect(await page.textContent("h2")).toBe("Register an email");
});
