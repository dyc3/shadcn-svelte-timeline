<script lang="ts">
	import '../app.css';

	let { children } = $props();
	let dark = $state(false);
</script>

<div class={dark ? 'dark' : ''}>
	<div class="min-h-screen bg-background text-foreground">
		<div class="fixed top-4 right-4 z-50">
			<button
				onclick={() => (dark = !dark)}
				class="rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground hover:bg-accent"
			>
				{dark ? 'Light' : 'Dark'} mode
			</button>
		</div>
		{@render children()}
	</div>
</div>
