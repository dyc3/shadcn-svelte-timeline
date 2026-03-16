<script lang="ts">
import Timeline from "$lib/registry/ui/timeline/timeline.svelte";
import TimelineContent from "$lib/registry/ui/timeline/timeline-content.svelte";
import TimelineIndicator from "$lib/registry/ui/timeline/timeline-indicator.svelte";
import TimelineItem from "$lib/registry/ui/timeline/timeline-item.svelte";
</script>

<Timeline>
	<TimelineItem>
		<TimelineIndicator class="bg-green-500" />
		<TimelineContent>Green</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineIndicator class="bg-red-500" />
		<TimelineContent>Red</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineIndicator class="bg-amber-500" />
		<TimelineContent>Amber</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineIndicator class="bg-blue-500" />
		<TimelineContent>Blue</TimelineContent>
	</TimelineItem>
</Timeline>
