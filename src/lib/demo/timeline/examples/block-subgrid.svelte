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
		<div class="col-span-full grid auto-rows-auto grid-cols-subgrid">
			<Timeline.Block
				class="overflow-hidden rounded-xl border bg-card after:h-0"
			>
				<Timeline.Subgrid class="bg-muted/30 p-3">
					<div
						class="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-semibold"
					>
						JR
					</div>
					<div class="space-y-1">
						<p class="text-sm font-medium">
							james_rob
							<span class="font-normal text-muted-foreground"
								>commented · 4 days ago</span
							>
						</p>
						<p class="text-sm text-muted-foreground">
							Contrast slider goes a bit wild at the top end...
						</p>
					</div>
				</Timeline.Subgrid>
				<div class="col-span-full border-t"></div>
				<Timeline.Subgrid class="bg-background p-3">
					<div
						class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground"
					>
						ME
					</div>
					<div>
						<input
							type="text"
							placeholder="Leave a reply..."
							class="w-full rounded-md border bg-background px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-ring"
						>
					</div>
				</Timeline.Subgrid>
			</Timeline.Block>
			<div aria-hidden="true" class="col-span-full h-6"></div>
		</div>
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
