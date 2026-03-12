<script lang="ts">
import type { Snippet } from "svelte";
import { getContext } from "svelte";
import { cn } from "$lib/utils";
import {
	TIMELINE_CTX,
	TIMELINE_ITEM_CTX,
	type TimelineContext,
	type TimelineItemContext,
} from "./timeline-ctx.js";

type Color =
	| "default"
	| "green"
	| "red"
	| "amber"
	| "blue"
	| "purple"
	| "cyan"
	| "pink";
type Variant = "default" | "bare";

interface Props {
	color?: Color;
	variant?: Variant;
	children?: Snippet;
	class?: string;
	[key: string]: unknown;
}

let {
	color = "default",
	variant = "default",
	children,
	class: className,
	...rest
}: Props = $props();

const timelineCtx = getContext<TimelineContext>(TIMELINE_CTX);
const itemCtx = getContext<TimelineItemContext>(TIMELINE_ITEM_CTX);

const colorClasses: Record<Color, string> = {
	default: "bg-zinc-300 dark:bg-zinc-600",
	green: "bg-green-500",
	red: "bg-red-500",
	amber: "bg-amber-500",
	blue: "bg-blue-500",
	purple: "bg-purple-500",
	cyan: "bg-cyan-500",
	pink: "bg-pink-500",
};

const statusClasses: Record<string, string> = {
	complete: "bg-primary",
	current:
		"bg-primary ring-2 ring-primary ring-offset-2 ring-offset-background",
	incomplete: "bg-muted-foreground/30",
};

const dotClass = $derived(
	variant === "bare"
		? ""
		: itemCtx?.status
			? (statusClasses[itemCtx.status] ?? colorClasses[color])
			: colorClasses[color],
);

const sizeClass = $derived(
	variant === "bare"
		? ""
		: timelineCtx?.size === "lg"
			? "size-8 text-sm font-medium"
			: children
				? "size-5"
				: "size-2.5",
);

// Vertical alignment: align-self on the dot inside the ind-cell grid.
// The ind-cell is a grid that stretches to the full row height (set by col 2).
// The dot is the only grid item; align-self positions it within that height.
const dotAlignSelf = $derived((): string => {
	if (timelineCtx?.horizontal) return "";
	const a = itemCtx?.align ?? timelineCtx?.align ?? "baseline";
	if (a === "end") return "self-end";
	if (a === "center") return "self-center";
	return "self-start"; // 'start' and 'baseline'
});
</script>

<!--
	Vertical: the ind-cell is a single-column grid (display:grid) that stretches
	to the full row height because grid items default to align-self:stretch.
	The dot is placed with align-self (self-start/center/end) for alignment.
	The connector is absolutely positioned top-0/bottom-0 behind the dot,
	spanning the full cell height (= the full grid row height).

	Horizontal: position:relative flex, dot centered, connector absolute.
-->
<div
	class={cn(
		'timeline-ind-cell relative',
		timelineCtx?.horizontal
			? 'flex items-center justify-center'
			: 'grid justify-items-center',
		className
	)}
	{...rest}
>
	<!-- Connector line (rendered first so dot sits on top via z-index) -->
	{#if timelineCtx?.horizontal}
		<div
			class="connector absolute top-1/2 left-1/2 right-[-50%] h-px -translate-y-1/2 bg-border"
		></div>
	{:else}
		<div
			class="connector absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-border"
		></div>
	{/if}

	<!-- The indicator dot/icon -->
	<div
		class={cn(
			'relative z-10 flex shrink-0 items-center justify-center rounded-full',
			sizeClass,
			dotClass,
			!timelineCtx?.horizontal && dotAlignSelf()
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
