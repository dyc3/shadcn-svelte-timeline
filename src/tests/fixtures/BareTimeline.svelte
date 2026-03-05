<script lang="ts">
	import Timeline from '../../../registry/timeline/timeline.svelte';
	import TimelineItem from '../../../registry/timeline/timeline-item.svelte';
	import TimelineIndicator from '../../../registry/timeline/timeline-indicator.svelte';
	import TimelineContent from '../../../registry/timeline/timeline-content.svelte';
</script>

<Timeline>
	<TimelineItem>
		<TimelineIndicator variant="bare">
			<span>•</span>
		</TimelineIndicator>
		<TimelineContent>Bare item 1</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineIndicator variant="bare">
			<span>•</span>
		</TimelineIndicator>
		<TimelineContent>Bare item 2</TimelineContent>
	</TimelineItem>
</Timeline>
