import type { Component } from "svelte";
import { extractExampleMarkup } from "$lib/demo/utils/extract-example-markup";
import CodeAlignBaseline from "./alignment-baseline.svelte";
import codeAlignBaselineSource from "./alignment-baseline.svelte?raw";
import CodeAlignStart from "./alignment-start.svelte";
import codeAlignStartSource from "./alignment-start.svelte?raw";
import BareIndicator from "./bare-indicator.svelte";
import bareIndicatorSource from "./bare-indicator.svelte?raw";
import Basic from "./basic.svelte";
import basicSource from "./basic.svelte?raw";
import BlockItem from "./block-item.svelte";
import blockItemSource from "./block-item.svelte?raw";
import BlockSubgrid from "./block-subgrid.svelte";
import blockSubgridSource from "./block-subgrid.svelte?raw";
import Horizontal from "./horizontal.svelte";
import horizontalSource from "./horizontal.svelte?raw";
import IndicatorColors from "./indicator-colors.svelte";
import indicatorColorsSource from "./indicator-colors.svelte?raw";
import Large from "./large.svelte";
import largeSource from "./large.svelte?raw";
import Status from "./status.svelte";
import statusSource from "./status.svelte?raw";

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
		source: extractExampleMarkup(basicSource),
	},
	{
		id: "large",
		title: "Large",
		description:
			'Use `size="lg"` for numbered steps or more prominent indicators.',
		component: Large,
		source: extractExampleMarkup(largeSource),
	},
	{
		id: "horizontal",
		title: "Horizontal",
		description: "Use `horizontal` to render the timeline horizontally.",
		component: Horizontal,
		source: extractExampleMarkup(horizontalSource),
	},
	{
		id: "status",
		title: "Status",
		description: "Use `status` on timeline items to indicate progress.",
		component: Status,
		source: extractExampleMarkup(statusSource),
	},
	{
		id: "indicator-colors",
		title: "Indicator colors",
		description: "Use `color` on the indicator to set a colored background.",
		component: IndicatorColors,
		source: extractExampleMarkup(indicatorColorsSource),
	},
	{
		id: "bare-indicator",
		title: "Bare indicator",
		description: 'Use `variant="bare"` for larger standalone icon indicators.',
		component: BareIndicator,
		source: extractExampleMarkup(bareIndicatorSource),
	},
	{
		id: "block-item",
		title: "Block item",
		description:
			"Use `Timeline.Block` for full-width content blocks spanning both columns.",
		component: BlockItem,
		source: extractExampleMarkup(blockItemSource),
	},
	{
		id: "block-subgrid",
		title: "Block subgrid",
		description:
			"Use `Timeline.Subgrid` inside a block to align avatars and content to the timeline's column tracks.",
		component: BlockSubgrid,
		source: extractExampleMarkup(blockSubgridSource),
	},
	{
		id: "alignment-start",
		title: "Alignment start",
		description:
			'Use `align="start"` to anchor indicators to the top of each item row.',
		component: CodeAlignStart,
		source: extractExampleMarkup(codeAlignStartSource),
	},
	{
		id: "alignment-baseline",
		title: "Alignment baseline",
		description:
			'Use `align="baseline"` to match the default vertical placement. It currently renders the same as `start`.',
		component: CodeAlignBaseline,
		source: extractExampleMarkup(codeAlignBaselineSource),
	},
];
