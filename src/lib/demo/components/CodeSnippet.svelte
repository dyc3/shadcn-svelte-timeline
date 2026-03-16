<script lang="ts">
let { code }: { code: string } = $props();
</script>

<div class="overflow-hidden rounded-xl border bg-zinc-950 shadow-sm">
	<div
		class="flex items-center justify-between border-b border-white/10 px-4 py-2"
	>
		<p class="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
			Source
		</p>
		<p class="text-[11px] text-zinc-500">Svelte</p>
	</div>
	<pre
		class="max-h-[32rem] overflow-auto px-4 py-4 text-sm leading-6 text-zinc-100"
	><code>{code}</code></pre>
</div>
