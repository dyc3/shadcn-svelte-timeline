<script lang="ts">
    import Timeline from "../../../registry/ui/timeline/timeline.svelte";
    import TimelineContent from "../../../registry/ui/timeline/timeline-content.svelte";
    import TimelineIndicator from "../../../registry/ui/timeline/timeline-indicator.svelte";
    import TimelineItem from "../../../registry/ui/timeline/timeline-item.svelte";
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
