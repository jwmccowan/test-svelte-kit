import { expect, test } from "@playwright/test";

/*
  I don't want to spend so much time on these since the pages are constantly changing,
  but I want to do enough that I feel comfortable writing e2e tests for the app.
*/

test("home page has title", async ({ page }) => {
	await page.goto("/");
	await expect(page).toHaveTitle(/Testing svelte kit/);
});

test("unauthenticated user cannot navigate to admin page", async ({ page }) => {
	await page.goto("/");
	await page.getByRole("link", { name: "Admin page" }).click();
	await expect(page).toHaveURL("/");
});

test("cannot register without email", async ({ page }) => {
	await page.goto("/");
	await page.getByLabel("Email:").type("");
	await page.getByRole("button", { name: "Register" }).click();
	await expect(page.getByRole("heading", { level: 1 })).toHaveText("Something went wrong");
});
