<script lang="ts">
    import Timeline from "../../../registry/ui/timeline/timeline.svelte";
    import TimelineContent from "../../../registry/ui/timeline/timeline-content.svelte";
    import TimelineIndicator from "../../../registry/ui/timeline/timeline-indicator.svelte";
    import TimelineItem from "../../../registry/ui/timeline/timeline-item.svelte";
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
