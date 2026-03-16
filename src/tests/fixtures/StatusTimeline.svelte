<script lang="ts">
import Timeline from "$lib/registry/ui/timeline/timeline.svelte";
import TimelineContent from "$lib/registry/ui/timeline/timeline-content.svelte";
import TimelineIndicator from "$lib/registry/ui/timeline/timeline-indicator.svelte";
import TimelineItem from "$lib/registry/ui/timeline/timeline-item.svelte";
</script>

<Timeline>
	<TimelineItem status="complete" data-status="complete">
		<TimelineIndicator class="bg-red-500" />
		<TimelineContent>Completed step</TimelineContent>
	</TimelineItem>
	<TimelineItem status="current" data-status="current">
		<TimelineIndicator />
		<TimelineContent>Current step</TimelineContent>
	</TimelineItem>
	<TimelineItem status="incomplete" data-status="incomplete">
		<TimelineIndicator />
		<TimelineContent>Incomplete step</TimelineContent>
	</TimelineItem>
</Timeline>
