import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const timelineExampleSourceModuleId = "virtual:timeline-example-sources";
const resolvedTimelineExampleSourceModuleId = `\0${timelineExampleSourceModuleId}`;

function timelineExampleSourcePlugin() {
	const examplesDirectory = resolve("src/lib/demo/timeline/examples");
	const exampleFiles = [
		"alignment-baseline.svelte",
		"alignment-start.svelte",
		"bare-indicator.svelte",
		"basic.svelte",
		"block-item.svelte",
		"block-subgrid.svelte",
		"horizontal.svelte",
		"indicator-colors.svelte",
		"large.svelte",
		"status.svelte",
	];

	return {
		name: "timeline-example-source-plugin",
		resolveId(id: string) {
			if (id === timelineExampleSourceModuleId) {
				return resolvedTimelineExampleSourceModuleId;
			}
		},
		load(id: string) {
			if (id !== resolvedTimelineExampleSourceModuleId) {
				return;
			}

			const sources = Object.fromEntries(
				exampleFiles.map((fileName) => [
					fileName,
					readFileSync(resolve(examplesDirectory, fileName), "utf8"),
				]),
			);

			return `export default ${JSON.stringify(sources)};`;
		},
	};
}

export default defineConfig({
	plugins: [timelineExampleSourcePlugin(), tailwindcss(), sveltekit()],
	server: {
		fs: {
			allow: ["registry"],
		},
	},
});
