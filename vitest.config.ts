import path from "node:path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [tailwindcss(), svelte()],
	resolve: {
		alias: {
			$lib: path.resolve("./src/lib"),
		},
	},
	test: {
		browser: {
			enabled: true,
			headless: true,
			provider: playwright(),
			instances: [{ browser: "chromium" }],
		},
		include: ["src/tests/**/*.{test,spec}.{ts,js}"],
	},
});
