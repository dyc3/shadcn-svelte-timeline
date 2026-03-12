<script lang="ts">
	import Timeline from '../../registry/timeline/timeline.svelte';
	import TimelineItem from '../../registry/timeline/timeline-item.svelte';
	import TimelineIndicator from '../../registry/timeline/timeline-indicator.svelte';
	import TimelineContent from '../../registry/timeline/timeline-content.svelte';
	import TimelineBlock from '../../registry/timeline/timeline-block.svelte';
	import TimelineSubgrid from '../../registry/timeline/timeline-subgrid.svelte';
</script>

<div class="mx-auto max-w-4xl space-y-16 px-6 py-12">
	<div>
		<h1 class="text-3xl font-bold tracking-tight">Timeline</h1>
		<p class="mt-2 text-muted-foreground">
			A flexible timeline component with vertical/horizontal layouts, status indicators, and CSS grid
			alignment.
		</p>
	</div>

	<!-- ─── 1. Basic vertical ─────────────────────────────────────────── -->
	<section class="space-y-4">
		<h2 class="text-lg font-semibold">Basic</h2>
		<p class="text-sm text-muted-foreground">
			Default vertical timeline with icon indicators.
		</p>
		<div class="rounded-lg border p-6">
			<Timeline>
				<TimelineItem>
					<TimelineIndicator>
						<!-- eye icon -->
						<svg class="size-3 text-background" viewBox="0 0 16 16" fill="currentColor">
							<path d="M8 3C4.5 3 1.5 5.5 1.5 8S4.5 13 8 13s6.5-2.5 6.5-5S11.5 3 8 3zm0 8a3 3 0 110-6 3 3 0 010 6z"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-medium">curtisss <span class="font-normal text-muted-foreground">requested a review from</span> james_rob <span class="font-normal text-muted-foreground">· 4 days ago</span></p>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineIndicator>
						<!-- tag icon -->
						<svg class="size-3 text-background" viewBox="0 0 16 16" fill="currentColor">
							<path d="M2 2h5.586l6 6a2 2 0 010 2.828l-2.758 2.758a2 2 0 01-2.828 0L2 7.586V2zm3 3a1 1 0 100-2 1 1 0 000 2z"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-medium">curtisss <span class="font-normal text-muted-foreground">added tag</span> <span class="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium">feature</span></p>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineIndicator color="green">
						<!-- check icon -->
						<svg class="size-3 text-white" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 8l3.5 3.5L13 4"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-medium">james_rob <span class="font-normal text-muted-foreground">approved these changes · 3 days ago</span></p>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</div>
	</section>

	<!-- ─── 2. Size lg (numbered steps) ──────────────────────────────── -->
	<section class="space-y-4">
		<h2 class="text-lg font-semibold">Large</h2>
		<p class="text-sm text-muted-foreground">
			Use <code class="rounded bg-muted px-1 py-0.5 text-xs font-mono">size="lg"</code> for numbered steps or more prominent indicators.
		</p>
		<div class="rounded-lg border p-6">
			<Timeline size="lg">
				<TimelineItem>
					<TimelineIndicator>1</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-semibold">Submit</p>
						<p class="text-sm text-muted-foreground">Complete the form and provide all necessary assets.</p>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineIndicator>2</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-semibold">Review</p>
						<p class="text-sm text-muted-foreground">Verify your data and approve the final draft for accuracy.</p>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineIndicator>3</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-semibold">Publish</p>
						<p class="text-sm text-muted-foreground">Finalize your settings and push your content live.</p>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</div>
	</section>

	<!-- ─── 3. Horizontal ────────────────────────────────────────────── -->
	<section class="space-y-4">
		<h2 class="text-lg font-semibold">Horizontal</h2>
		<p class="text-sm text-muted-foreground">
			Use <code class="rounded bg-muted px-1 py-0.5 text-xs font-mono">horizontal</code> to render the timeline horizontally.
		</p>
		<div class="rounded-lg border p-6">
			<Timeline horizontal>
				<TimelineItem>
					<TimelineIndicator>
						<!-- credit card icon -->
						<svg class="size-3 text-background" viewBox="0 0 16 16" fill="currentColor">
							<rect x="1" y="3" width="14" height="10" rx="1.5"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-xs font-medium">Order confirmed</p>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineIndicator>
						<!-- truck icon -->
						<svg class="size-3 text-background" viewBox="0 0 16 16" fill="currentColor">
							<path d="M1 3a1 1 0 011-1h8a1 1 0 011 1v7H1V3zm9 0v7h1.5L13 7.5V6l-2-3H10zm-7 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm8 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-xs font-medium">On its way</p>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineIndicator>
						<!-- home icon -->
						<svg class="size-3 text-background" viewBox="0 0 16 16" fill="currentColor">
							<path d="M8 1L1 7v8h5V11h4v4h5V7L8 1z"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-xs font-medium">Delivered</p>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</div>
	</section>

	<!-- ─── 4. Status ────────────────────────────────────────────────── -->
	<section class="space-y-4">
		<h2 class="text-lg font-semibold">Status</h2>
		<p class="text-sm text-muted-foreground">
			Use <code class="rounded bg-muted px-1 py-0.5 text-xs font-mono">status</code> on timeline items to indicate progress.
		</p>
		<div class="rounded-lg border p-6">
			<Timeline horizontal>
				<TimelineItem status="complete">
					<TimelineIndicator>
						<svg class="size-3 text-primary-foreground" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 8l3.5 3.5L13 4"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-xs font-medium">Order confirmed</p>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem status="current">
					<TimelineIndicator>
						<svg class="size-3 text-primary-foreground" viewBox="0 0 16 16" fill="currentColor">
							<path d="M1 3a1 1 0 011-1h8a1 1 0 011 1v7H1V3zm9 0v7h1.5L13 7.5V6l-2-3H10zm-7 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm8 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-xs font-medium">On its way</p>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem status="incomplete">
					<TimelineIndicator>
						<svg class="size-3 text-muted-foreground" viewBox="0 0 16 16" fill="currentColor">
							<path d="M8 1L1 7v8h5V11h4v4h5V7L8 1z"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-xs font-medium text-muted-foreground">Delivered</p>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</div>
	</section>

	<!-- ─── 5. Indicator colors ──────────────────────────────────────── -->
	<section class="space-y-4">
		<h2 class="text-lg font-semibold">Indicator colors</h2>
		<p class="text-sm text-muted-foreground">
			Use <code class="rounded bg-muted px-1 py-0.5 text-xs font-mono">color</code> on the indicator to set a colored background.
		</p>
		<div class="rounded-lg border p-6">
			<Timeline>
				<TimelineItem>
					<TimelineIndicator color="red">
						<svg class="size-3 text-white" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
							<path d="M4 4l8 8M12 4l-8 8"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-medium">Build failed</p>
						<p class="text-xs text-muted-foreground">Tests did not pass</p>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineIndicator color="amber">
						<svg class="size-3 text-white" viewBox="0 0 16 16" fill="currentColor">
							<path d="M8 2l1.5 4.5H14l-3.5 2.5 1.5 4.5L8 11l-4 2.5 1.5-4.5L2 6.5h4.5L8 2z"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-medium">Warning issued</p>
						<p class="text-xs text-muted-foreground">Deprecated API usage detected</p>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineIndicator color="green">
						<svg class="size-3 text-white" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 8l3.5 3.5L13 4"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-medium">Deployed successfully</p>
						<p class="text-xs text-muted-foreground">Production v2.4.1 is live</p>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</div>
	</section>

	<!-- ─── 6. Bare indicator ────────────────────────────────────────── -->
	<section class="space-y-4">
		<h2 class="text-lg font-semibold">Bare indicator</h2>
		<p class="text-sm text-muted-foreground">
			Use <code class="rounded bg-muted px-1 py-0.5 text-xs font-mono">variant="bare"</code> to use larger standalone icons as indicators.
		</p>
		<div class="rounded-lg border p-6">
			<Timeline>
				<TimelineItem>
					<TimelineIndicator variant="bare">
						<svg class="size-6 text-muted-foreground/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-medium">Draft created <span class="font-normal text-muted-foreground">· 2 days ago</span></p>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineIndicator variant="bare">
						<svg class="size-6 text-muted-foreground/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-medium">Edits made <span class="font-normal text-muted-foreground">· 1 day ago</span></p>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineIndicator variant="bare">
						<svg class="size-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-medium">Published <span class="font-normal text-muted-foreground">· just now</span></p>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</div>
	</section>

	<!-- ─── 7. Block item ────────────────────────────────────────────── -->
	<section class="space-y-4">
		<h2 class="text-lg font-semibold">Block item</h2>
		<p class="text-sm text-muted-foreground">
			Use <code class="rounded bg-muted px-1 py-0.5 text-xs font-mono">TimelineBlock</code> for full-width content blocks spanning both columns.
		</p>
		<div class="rounded-lg border p-6">
			<Timeline>
				<TimelineItem>
					<TimelineIndicator>
						<svg class="size-3 text-background" viewBox="0 0 16 16" fill="currentColor">
							<path d="M8 3C4.5 3 1.5 5.5 1.5 8S4.5 13 8 13s6.5-2.5 6.5-5S11.5 3 8 3zm0 8a3 3 0 110-6 3 3 0 010 6z"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-medium">curtisss <span class="font-normal text-muted-foreground">requested a review · 4 days ago</span></p>
					</TimelineContent>
				</TimelineItem>
			<TimelineItem>
				<TimelineBlock>
					<div class="col-span-full rounded-xl border bg-card p-4">
						<div class="flex items-start gap-3">
							<div class="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold">JR</div>
							<div class="space-y-1">
								<p class="text-sm font-medium">james_rob <span class="font-normal text-muted-foreground">replied to your message · 4 days ago</span></p>
								<p class="text-sm text-muted-foreground">Looks good to me! Just a few minor nits to address.</p>
							</div>
						</div>
						<div class="mt-3 flex gap-2">
							<button class="rounded-md border px-3 py-1.5 text-xs font-medium hover:bg-accent">View message</button>
							<button class="rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground">Reply</button>
						</div>
					</div>
				</TimelineBlock>
			</TimelineItem>
				<TimelineItem>
					<TimelineIndicator>
						<svg class="size-3 text-background" viewBox="0 0 16 16" fill="currentColor">
							<path d="M2 2h5.586l6 6a2 2 0 010 2.828l-2.758 2.758a2 2 0 01-2.828 0L2 7.586V2zm3 3a1 1 0 100-2 1 1 0 000 2z"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-medium">curtisss <span class="font-normal text-muted-foreground">added tag</span> <span class="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium">feature</span></p>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineIndicator color="green">
						<svg class="size-3 text-white" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 8l3.5 3.5L13 4"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-medium">james_rob <span class="font-normal text-muted-foreground">approved these changes · 3 days ago</span></p>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</div>
	</section>

	<!-- ─── 8. Block subgrid ─────────────────────────────────────────── -->
	<section class="space-y-4">
		<h2 class="text-lg font-semibold">Block subgrid</h2>
		<p class="text-sm text-muted-foreground">
			Use <code class="rounded bg-muted px-1 py-0.5 text-xs font-mono">TimelineSubgrid</code> inside a block to align avatars and content to the timeline's column tracks.
		</p>
		<div class="rounded-lg border p-6">
			<Timeline>
				<TimelineItem>
					<TimelineIndicator>
						<svg class="size-3 text-background" viewBox="0 0 16 16" fill="currentColor">
							<path d="M8 3C4.5 3 1.5 5.5 1.5 8S4.5 13 8 13s6.5-2.5 6.5-5S11.5 3 8 3zm0 8a3 3 0 110-6 3 3 0 010 6z"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-medium">curtisss <span class="font-normal text-muted-foreground">requested a review · 4 days ago</span></p>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<div class="col-span-full grid auto-rows-auto grid-cols-subgrid">
						<TimelineBlock class="overflow-hidden rounded-xl border bg-card after:h-0">
							<!-- First subgrid row: comment -->
							<TimelineSubgrid class="bg-muted/30 p-3">
								<div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-semibold">JR</div>
								<div class="space-y-1">
									<p class="text-sm font-medium">james_rob <span class="font-normal text-muted-foreground">commented · 4 days ago</span></p>
									<p class="text-sm text-muted-foreground">Contrast slider goes a bit wild at the top end...</p>
								</div>
							</TimelineSubgrid>
							<div class="border-t col-span-full"></div>
							<!-- Second subgrid row: reply input -->
							<TimelineSubgrid class="bg-background p-3">
								<div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">ME</div>
								<div>
									<input
										type="text"
										placeholder="Leave a reply..."
										class="w-full rounded-md border bg-background px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-ring"
									/>
								</div>
							</TimelineSubgrid>
						</TimelineBlock>
						<div aria-hidden="true" class="col-span-full h-6"></div>
					</div>
				</TimelineItem>
				<TimelineItem>
					<TimelineIndicator color="green">
						<svg class="size-3 text-white" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 8l3.5 3.5L13 4"/>
						</svg>
					</TimelineIndicator>
					<TimelineContent>
						<p class="text-sm font-medium">james_rob <span class="font-normal text-muted-foreground">approved these changes · 3 days ago</span></p>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</div>
	</section>

	<!-- ─── 9. Alignment ─────────────────────────────────────────────── -->
	<section class="space-y-4">
		<h2 class="text-lg font-semibold">Alignment</h2>
		<p class="text-sm text-muted-foreground">
			Use <code class="rounded bg-muted px-1 py-0.5 text-xs font-mono">align</code> to control how the indicator aligns with content.
		</p>
		<div class="grid grid-cols-2 gap-4">
			{#each ['start', 'baseline', 'center', 'end'] as alignVal}
				<div class="rounded-lg border p-4">
					<p class="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
						{alignVal}
					</p>
					<Timeline size="lg" align={alignVal as 'start' | 'baseline' | 'center' | 'end'}>
						<TimelineItem>
							<TimelineIndicator>{alignVal === 'start' ? '1' : alignVal === 'baseline' ? '2' : alignVal === 'center' ? '3' : '4'}</TimelineIndicator>
							<TimelineContent>
								<p class="text-sm font-semibold">{alignVal.charAt(0).toUpperCase() + alignVal.slice(1)} align</p>
								<p class="text-sm text-muted-foreground">Align indicator and content to the {alignVal}</p>
							</TimelineContent>
						</TimelineItem>
						<TimelineItem>
							<TimelineIndicator>{alignVal === 'start' ? '2' : alignVal === 'baseline' ? '3' : alignVal === 'center' ? '4' : '5'}</TimelineIndicator>
							<TimelineContent>
								<p class="text-sm font-semibold">Second item</p>
								<p class="text-sm text-muted-foreground">Another item showing alignment</p>
							</TimelineContent>
						</TimelineItem>
					</Timeline>
				</div>
			{/each}
		</div>
	</section>
</div>
