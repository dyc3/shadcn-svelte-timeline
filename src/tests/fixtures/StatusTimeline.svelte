<script lang="ts">
import Timeline from "../../../registry/timeline/timeline.svelte";
import TimelineContent from "../../../registry/timeline/timeline-content.svelte";
import TimelineIndicator from "../../../registry/timeline/timeline-indicator.svelte";
import TimelineItem from "../../../registry/timeline/timeline-item.svelte";
</script>

<Timeline>
	<TimelineItem status="complete" data-status="complete">
		<TimelineIndicator />
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
