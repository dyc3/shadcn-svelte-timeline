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

	// Vertical alignment: margin classes on the dot to position it within the
	// flex-col ind-cell. The connector is absolutely positioned full-height so
	// it doesn't interfere with the flex layout.
	const dotAlignClass = $derived((): string => {
		if (timelineCtx?.horizontal) return '';
		const a = itemCtx?.align ?? timelineCtx?.align ?? 'baseline';
		if (a === 'end') return 'mt-auto';
		if (a === 'center') return 'my-auto';
		// 'start' and 'baseline' both sit at the top naturally
		return '';
	});
</script>

<!--
	Vertical: the ind-cell is position:relative and always stretches to fill
	the full grid row height (align-self:stretch). The connector is absolutely
	positioned top-0/bottom-0 so it spans the entire row. The dot uses
	align-self (self-start/center/end) to float within the stretched cell.

	Horizontal: the ind-cell is position:relative with the dot centered and
	the connector absolutely positioned behind it.
-->
<div
	class={cn(
		'timeline-ind-cell',
		timelineCtx?.horizontal
			? 'relative flex items-center justify-center'
			: 'relative flex flex-col items-center h-full',
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
			!timelineCtx?.horizontal && dotAlignClass()
		)}
	>
		{#if children}
			{@render children()}
		{/if}
	</div>

	<!-- Connector line: hidden on last item via CSS selector in parent -->
	{#if timelineCtx?.horizontal}
		<!-- Runs from this dot's center to the next dot's center. -->
		<div class="connector absolute top-1/2 left-1/2 right-[-50%] h-px -translate-y-1/2 bg-border"></div>
	{:else}
		<!-- Absolutely positioned so it spans the full cell height, behind the dot -->
		<div class="connector absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-border"></div>
	{/if}
</div>
