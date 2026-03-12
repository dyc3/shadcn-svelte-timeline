<script lang="ts">
import Timeline from "../../../registry/timeline/timeline.svelte";
import TimelineContent from "../../../registry/timeline/timeline-content.svelte";
import TimelineIndicator from "../../../registry/timeline/timeline-indicator.svelte";
import TimelineItem from "../../../registry/timeline/timeline-item.svelte";
</script>

<Timeline>
	<TimelineItem>
		<TimelineIndicator />
		<TimelineContent>Item 1</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineIndicator />
		<TimelineContent>Item 2</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineIndicator color="green" />
		<TimelineContent>Item 3</TimelineContent>
	</TimelineItem>
</Timeline>
