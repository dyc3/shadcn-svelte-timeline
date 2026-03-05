<script lang="ts">
	import Timeline from '../../../registry/timeline/timeline.svelte';
	import TimelineItem from '../../../registry/timeline/timeline-item.svelte';
	import TimelineIndicator from '../../../registry/timeline/timeline-indicator.svelte';
	import TimelineContent from '../../../registry/timeline/timeline-content.svelte';
</script>

<Timeline>
	<TimelineItem>
		<TimelineIndicator color="green" />
		<TimelineContent>Green</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineIndicator color="red" />
		<TimelineContent>Red</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineIndicator color="amber" />
		<TimelineContent>Amber</TimelineContent>
	</TimelineItem>
	<TimelineItem>
		<TimelineIndicator color="blue" />
		<TimelineContent>Blue</TimelineContent>
	</TimelineItem>
</Timeline>
