<script lang="ts">
	import { getContext } from 'svelte';
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	import {
		TIMELINE_CTX,
		TIMELINE_ITEM_CTX,
		type TimelineContext,
		type TimelineItemContext
	} from './timeline-ctx.js';

	type Color = 'default' | 'green' | 'red' | 'amber' | 'blue' | 'purple' | 'cyan' | 'pink';
	type Variant = 'default' | 'bare';

	interface Props {
		color?: Color;
		variant?: Variant;
		children?: Snippet;
		class?: string;
		[key: string]: unknown;
	}

	let { color = 'default', variant = 'default', children, class: className, ...rest }: Props =
		$props();

	const timelineCtx = getContext<TimelineContext>(TIMELINE_CTX);
	const itemCtx = getContext<TimelineItemContext>(TIMELINE_ITEM_CTX);

	const colorClasses: Record<Color, string> = {
		default: 'bg-zinc-300 dark:bg-zinc-600',
		green: 'bg-green-500',
		red: 'bg-red-500',
		amber: 'bg-amber-500',
		blue: 'bg-blue-500',
		purple: 'bg-purple-500',
		cyan: 'bg-cyan-500',
		pink: 'bg-pink-500'
	};

	const statusClasses: Record<string, string> = {
		complete: 'bg-primary',
		current: 'bg-primary ring-2 ring-primary ring-offset-2 ring-offset-background',
		incomplete: 'bg-muted-foreground/30'
	};

	const dotClass = $derived(
		variant === 'bare'
			? ''
			: itemCtx?.status
				? (statusClasses[itemCtx.status] ?? colorClasses[color])
				: colorClasses[color]
	);

	const sizeClass = $derived(
		variant === 'bare'
			? ''
			: timelineCtx?.size === 'lg'
				? 'size-8 text-sm font-medium'
				: children
					? 'size-5'
					: 'size-2.5'
	);

	// Vertical alignment: expressed as a Tailwind pt-* class on the dot wrapper
	// so the ind-cell can always use align-self:stretch (needed for the connector).
	const alignClass = $derived((): string => {
		if (timelineCtx?.horizontal) return '';
		const a = itemCtx?.align ?? timelineCtx?.align ?? 'baseline';
		if (a === 'start') return 'pt-0';
		if (a === 'end') return 'pb-0 mt-auto'; // push dot to bottom
		if (a === 'center') return 'my-auto';
		return ''; // 'baseline' — dot sits at natural top position
	});
</script>

<!--
	Vertical: the ind-cell always stretches (align-self: stretch) so the
	flex-1 connector fills from the dot to the bottom of the row.
	Dot position within the cell is controlled by padding/margin classes.

	Horizontal: the ind-cell is position:relative with the dot centered and
	the connector absolutely positioned behind it.
-->
<div
	class={cn(
		'timeline-ind-cell',
		timelineCtx?.horizontal
			? 'relative flex items-center justify-center'
			: 'flex flex-col items-center',
		className
	)}
	{...rest}
>
	<!-- The indicator dot/icon -->
	<div
		class={cn(
			'relative z-10 flex shrink-0 items-center justify-center rounded-full',
			sizeClass,
			dotClass,
			!timelineCtx?.horizontal && alignClass()
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</div>

	<!-- Connector line: hidden on last item via CSS selector in parent -->
	{#if timelineCtx?.horizontal}
		<!-- Runs from this dot's center to the next dot's center.
		     right:-50% overshoots by half a column so consecutive connectors
		     meet exactly at each dot center. Hidden on the last item by CSS. -->
		<div class="connector absolute top-1/2 left-1/2 right-[-50%] h-px -translate-y-1/2 bg-border"></div>
	{:else}
		<!-- flex-1 grows to fill remaining height in the stretched ind-cell -->
		<div class="connector w-px flex-1 bg-border"></div>
	{/if}
</div>
