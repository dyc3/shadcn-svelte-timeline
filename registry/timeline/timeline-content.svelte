<script lang="ts">
	import { getContext } from 'svelte';
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	import { TIMELINE_CTX, type TimelineContext } from './timeline-ctx.js';

	interface Props {
		children?: Snippet;
		class?: string;
		[key: string]: unknown;
	}

	let { children, class: className, ...rest }: Props = $props();

	const timelineCtx = getContext<TimelineContext>(TIMELINE_CTX);
</script>

<!--
	This is the content column cell (grid column 2).

	Vertical: pb-6 creates spacing between items. The connector line in the
	indicator cell fills this same height automatically (grid-row: 2, height: 1fr).
	ps-4 provides visual gap between indicator and content.

	Horizontal: pt-3 places content below indicators. text-center aligns text
	under each step.
-->
<div
	class={cn(
		'timeline-content-cell',
		timelineCtx?.horizontal ? 'pt-3 text-center' : 'pb-6 ps-4',
		className
	)}
	{...rest}
>
	{@render children?.()}
</div>
