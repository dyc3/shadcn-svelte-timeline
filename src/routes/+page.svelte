<script lang="ts">
import TimelineDemoSection from "$lib/demo/components/TimelineDemoSection.svelte";
import { timelineExamples } from "$lib/demo/timeline/examples";
</script>

<div class="mx-auto max-w-7xl space-y-16 px-6 py-12">
	<div class="max-w-3xl space-y-2">
		<h1 class="text-3xl font-bold tracking-tight">Timeline</h1>
		<p class="text-muted-foreground">
			A flexible timeline component with vertical and horizontal layouts, status
			indicators, and CSS grid alignment. Each example now renders from the same
			source shown in the code snippet.
		</p>
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
