import exampleSources from "virtual:timeline-example-sources";
import type { Component } from "svelte";
import { extractExampleMarkup } from "$lib/demo/utils/extract-example-markup";
import CodeAlignBaseline from "./alignment-baseline.svelte";
import CodeAlignStart from "./alignment-start.svelte";
import BareIndicator from "./bare-indicator.svelte";
import Basic from "./basic.svelte";
import BlockItem from "./block-item.svelte";
import BlockSubgrid from "./block-subgrid.svelte";
import Horizontal from "./horizontal.svelte";
import IndicatorColors from "./indicator-colors.svelte";
import Large from "./large.svelte";
import Status from "./status.svelte";

export type TimelineExample = {
	id: string;
	title: string;
	description: string;
	component: Component;
	source: string;
	previewClass?: string;
};

export const timelineExamples: TimelineExample[] = [
	{
		id: "basic",
		title: "Basic",
		description: "Default vertical timeline with icon indicators.",
		component: Basic,
		source: extractExampleMarkup(exampleSources["basic.svelte"]),
	},
	{
		id: "large",
		title: "Large",
		description:
			'Use `size="lg"` for numbered steps or more prominent indicators.',
		component: Large,
		source: extractExampleMarkup(exampleSources["large.svelte"]),
	},
	{
		id: "horizontal",
		title: "Horizontal",
		description: "Use `horizontal` to render the timeline horizontally.",
		component: Horizontal,
		source: extractExampleMarkup(exampleSources["horizontal.svelte"]),
	},
	{
		id: "status",
		title: "Status",
		description: "Use `status` on timeline items to indicate progress.",
		component: Status,
		source: extractExampleMarkup(exampleSources["status.svelte"]),
	},
	{
		id: "indicator-colors",
		title: "Indicator colors",
		description: "Use `color` on the indicator to set a colored background.",
		component: IndicatorColors,
		source: extractExampleMarkup(exampleSources["indicator-colors.svelte"]),
	},
	{
		id: "bare-indicator",
		title: "Bare indicator",
		description: 'Use `variant="bare"` for larger standalone icon indicators.',
		component: BareIndicator,
		source: extractExampleMarkup(exampleSources["bare-indicator.svelte"]),
	},
	{
		id: "block-item",
		title: "Block item",
		description:
			"Use `Timeline.Block` for full-width content blocks spanning both columns.",
		component: BlockItem,
		source: extractExampleMarkup(exampleSources["block-item.svelte"]),
	},
	{
		id: "block-subgrid",
		title: "Block subgrid",
		description:
			"Use `Timeline.Subgrid` inside a block to align avatars and content to the timeline's column tracks.",
		component: BlockSubgrid,
		source: extractExampleMarkup(exampleSources["block-subgrid.svelte"]),
	},
	{
		id: "alignment-start",
		title: "Alignment start",
		description:
			'Use `align="start"` to anchor indicators to the top of each item row.',
		component: CodeAlignStart,
		source: extractExampleMarkup(exampleSources["alignment-start.svelte"]),
	},
	{
		id: "alignment-baseline",
		title: "Alignment baseline",
		description:
			'Use `align="baseline"` to match the default vertical placement. It currently renders the same as `start`.',
		component: CodeAlignBaseline,
		source: extractExampleMarkup(exampleSources["alignment-baseline.svelte"]),
	},
];
