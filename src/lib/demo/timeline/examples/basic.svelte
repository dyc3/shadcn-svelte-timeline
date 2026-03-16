<script lang="ts">
import * as Timeline from "$lib/registry/ui/timeline/index.js";
</script>

<Timeline.Root>
	<Timeline.Item>
		<Timeline.Indicator>
			<svg
				class="size-3 text-background"
				viewBox="0 0 16 16"
				fill="currentColor"
			>
				<path
					d="M8 3C4.5 3 1.5 5.5 1.5 8S4.5 13 8 13s6.5-2.5 6.5-5S11.5 3 8 3zm0 8a3 3 0 110-6 3 3 0 010 6z"
				/>
			</svg>
		</Timeline.Indicator>
		<Timeline.Content>
			<p class="text-sm font-medium">
				curtisss
				<span class="font-normal text-muted-foreground"
					>requested a review from</span
				>
				james_rob
				<span class="font-normal text-muted-foreground">· 4 days ago</span>
			</p>
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
					d="M2 2h5.586l6 6a2 2 0 010 2.828l-2.758 2.758a2 2 0 01-2.828 0L2 7.586V2zm3 3a1 1 0 100-2 1 1 0 000 2z"
				/>
			</svg>
		</Timeline.Indicator>
		<Timeline.Content>
			<p class="text-sm font-medium">
				curtisss
				<span class="font-normal text-muted-foreground">added tag</span>
				<span
					class="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium"
				>
					feature
				</span>
			</p>
		</Timeline.Content>
	</Timeline.Item>
	<Timeline.Item>
		<Timeline.Indicator class="bg-green-500">
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
			<p class="text-sm font-medium">
				james_rob
				<span class="font-normal text-muted-foreground"
					>approved these changes · 3 days ago</span
				>
			</p>
		</Timeline.Content>
	</Timeline.Item>
</Timeline.Root>
