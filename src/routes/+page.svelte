<script lang="ts">
import TimelineDemoSection from "$lib/demo/components/TimelineDemoSection.svelte";
import { timelineExamples } from "$lib/demo/timeline/examples";
</script>

<div class="mx-auto max-w-7xl space-y-16 px-6 py-12">
	<div class="max-w-3xl space-y-4">
		<h1 class="text-3xl font-bold tracking-tight">Timeline</h1>
		<p class="text-muted-foreground">
			A flexible timeline component with vertical and horizontal layouts, status
			indicators, and CSS grid alignment. Each example now renders from the same
			source shown in the code snippet.
		</p>
		<div class="rounded-lg border bg-muted/40 p-4">
			<p class="text-sm font-medium">Add the component</p>
			<pre
				class="mt-3 overflow-x-auto rounded-md border bg-background p-3 text-sm"
			><code>npx shadcn-svelte@latest add https://shadcn-svelte-timeline.vercel.app/r/timeline.json</code></pre>
		</div>
	</div>

	{#each timelineExamples as example (example.id)}
		<TimelineDemoSection
			title={example.title}
			description={example.description}
			component={example.component}
			source={example.source}
			previewClass={example.previewClass}
		/>
	{/each}
</div>
