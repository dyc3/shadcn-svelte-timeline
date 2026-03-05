<script lang="ts">
	import Timeline from '../../../registry/timeline/timeline.svelte';
	import TimelineItem from '../../../registry/timeline/timeline-item.svelte';
	import TimelineIndicator from '../../../registry/timeline/timeline-indicator.svelte';
	import TimelineContent from '../../../registry/timeline/timeline-content.svelte';
</script>

<Timeline horizontal>
	<TimelineItem>
		<TimelineIndicator />
		<TimelineContent>Step 1</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineIndicator />
		<TimelineContent>Step 2</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineIndicator />
		<TimelineContent>Step 3</TimelineContent>
	</TimelineItem>
</Timeline>
