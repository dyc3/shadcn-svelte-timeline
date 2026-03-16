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
					>requested a review · 4 days ago</span
				>
			</p>
		</Timeline.Content>
	</Timeline.Item>
	<Timeline.Item>
		<Timeline.Block>
			<div class="col-span-full rounded-xl border bg-card p-4">
				<div class="flex items-start gap-3">
					<div
						class="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold"
					>
						JR
					</div>
					<div class="space-y-1">
						<p class="text-sm font-medium">
							james_rob
							<span class="font-normal text-muted-foreground"
								>replied to your message · 4 days ago</span
							>
						</p>
						<p class="text-sm text-muted-foreground">
							Looks good to me! Just a few minor nits to address.
						</p>
					</div>
				</div>
				<div class="mt-3 flex gap-2">
					<button
						class="rounded-md border px-3 py-1.5 text-xs font-medium hover:bg-accent"
					>
						View message
					</button>
					<button
						class="rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
					>
						Reply
					</button>
				</div>
			</div>
		</Timeline.Block>
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
			<p class="text-sm font-medium">
				james_rob
				<span class="font-normal text-muted-foreground"
					>approved these changes · 3 days ago</span
				>
			</p>
		</Timeline.Content>
	</Timeline.Item>
</Timeline.Root>
