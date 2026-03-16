<script lang="ts">
import * as Timeline from "$lib/registry/ui/timeline/index.js";
</script>

<Timeline.Root horizontal>
	<Timeline.Item>
		<Timeline.Indicator>
			<svg
				class="size-3 text-background"
				viewBox="0 0 16 16"
				fill="currentColor"
			>
				<rect x="1" y="3" width="14" height="10" rx="1.5" />
			</svg>
		</Timeline.Indicator>
		<Timeline.Content>
			<p class="text-xs font-medium">Order confirmed</p>
		</Timeline.Content>
	</Timeline.Item>
	<Timeline.Item>
		<Timeline.Indicator>
			<svg
				class="size-3 text-background"
				viewBox="0 0 16 16"
				fill="currentColor"
			>
				<path
					d="M1 3a1 1 0 011-1h8a1 1 0 011 1v7H1V3zm9 0v7h1.5L13 7.5V6l-2-3H10zm-7 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm8 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
				/>
			</svg>
		</Timeline.Indicator>
		<Timeline.Content>
			<p class="text-xs font-medium">On its way</p>
		</Timeline.Content>
	</Timeline.Item>
	<Timeline.Item>
		<Timeline.Indicator>
			<svg
				class="size-3 text-background"
				viewBox="0 0 16 16"
				fill="currentColor"
			>
				<path d="M8 1L1 7v8h5V11h4v4h5V7L8 1z" />
			</svg>
		</Timeline.Indicator>
		<Timeline.Content>
			<p class="text-xs font-medium">Delivered</p>
		</Timeline.Content>
	</Timeline.Item>
</Timeline.Root>
