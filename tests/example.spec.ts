import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Web App/);
});

test("get started link", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Get started" }).click();

  await expect(page.getByRole("heading", { name: "Get Started" })).toBeVisible();
});