<script lang="ts">
	import Timeline from '../../../registry/timeline/timeline.svelte';
	import TimelineBlock from '../../../registry/timeline/timeline-block.svelte';
	import TimelineIndicator from '../../../registry/timeline/timeline-indicator.svelte';
	import TimelineContent from '../../../registry/timeline/timeline-content.svelte';
</script>

<!--
	TimelineBlock spans both columns and uses subgrid.
	It contains an indicator and content side by side via the subgrid columns.
-->
<Timeline>
	<TimelineBlock>
		<TimelineIndicator />
		<TimelineContent>Block item 1</TimelineContent>
	</TimelineBlock>
	<TimelineBlock>
		<TimelineIndicator />
		<TimelineContent>Block item 2</TimelineContent>
	</TimelineBlock>
</Timeline>
