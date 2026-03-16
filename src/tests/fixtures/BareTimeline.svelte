<script lang="ts">
    import Timeline from "../../../registry/ui/timeline/timeline.svelte";
    import TimelineContent from "../../../registry/ui/timeline/timeline-content.svelte";
    import TimelineIndicator from "../../../registry/ui/timeline/timeline-indicator.svelte";
    import TimelineItem from "../../../registry/ui/timeline/timeline-item.svelte";
</script>

<Timeline>
    <TimelineItem>
        <TimelineIndicator variant="bare"><span>•</span></TimelineIndicator>
        <TimelineContent>Bare item 1</TimelineContent>
    </TimelineItem>
    <TimelineItem>
        <TimelineIndicator variant="bare"><span>•</span></TimelineIndicator>
        <TimelineContent>Bare item 2</TimelineContent>
    </TimelineItem>
</Timeline>
