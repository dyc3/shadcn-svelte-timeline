<script lang="ts">
import * as Timeline from "$lib/registry/ui/timeline/index.js";
</script>

<Timeline.Root>
	<Timeline.Item>
		<Timeline.Indicator color="red">
			<svg
				class="size-3 text-white"
				viewBox="0 0 16 16"
				fill="none"
				stroke="currentColor"
				stroke-width="2.5"
				stroke-linecap="round"
			>
				<path d="M4 4l8 8M12 4l-8 8" />
			</svg>
		</Timeline.Indicator>
		<Timeline.Content>
			<p class="text-sm font-medium">Build failed</p>
			<p class="text-xs text-muted-foreground">Tests did not pass</p>
		</Timeline.Content>
	</Timeline.Item>
	<Timeline.Item>
		<Timeline.Indicator color="amber">
			<svg class="size-3 text-white" viewBox="0 0 16 16" fill="currentColor">
				<path
					d="M8 2l1.5 4.5H14l-3.5 2.5 1.5 4.5L8 11l-4 2.5 1.5-4.5L2 6.5h4.5L8 2z"
				/>
			</svg>
		</Timeline.Indicator>
		<Timeline.Content>
			<p class="text-sm font-medium">Warning issued</p>
			<p class="text-xs text-muted-foreground">Deprecated API usage detected</p>
		</Timeline.Content>
	</Timeline.Item>
	<Timeline.Item>
		<Timeline.Indicator color="green">
			<svg
				class="size-3 text-white"
				viewBox="0 0 16 16"
				fill="none"
				stroke="currentColor"
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M3 8l3.5 3.5L13 4" />
			</svg>
		</Timeline.Indicator>
		<Timeline.Content>
			<p class="text-sm font-medium">Deployed successfully</p>
			<p class="text-xs text-muted-foreground">Production v2.4.1 is live</p>
		</Timeline.Content>
	</Timeline.Item>
</Timeline.Root>
