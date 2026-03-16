<script lang="ts">
import type { Component } from "svelte";
import CodeSnippet from "$lib/demo/components/CodeSnippet.svelte";

let {
	title,
	description,
	component,
	source,
	previewClass = "",
}: {
	title: string;
	description: string;
	component: Component;
	source: string;
	previewClass?: string;
} = $props();

const Demo = $derived(component);
</script>

<section class="space-y-4">
	<div class="space-y-2">
		<h2 class="text-lg font-semibold">{title}</h2>
		<p class="text-sm text-muted-foreground">{description}</p>
	</div>
	<div class="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
		<div
			class={`rounded-xl border bg-card p-6 shadow-sm ${previewClass}`.trim()}
		>
			<Demo />
		</div>
		<CodeSnippet code={source} />
	</div>
</section>
