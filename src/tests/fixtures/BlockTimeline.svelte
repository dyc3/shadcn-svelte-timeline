<script lang="ts">
    import Timeline from "../../../registry/ui/timeline/timeline.svelte";
    import TimelineBlock from "../../../registry/ui/timeline/timeline-block.svelte";
    import TimelineContent from "../../../registry/ui/timeline/timeline-content.svelte";
    import TimelineIndicator from "../../../registry/ui/timeline/timeline-indicator.svelte";
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
