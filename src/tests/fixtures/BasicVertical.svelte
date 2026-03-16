<script lang="ts">
    import Timeline from "$lib/registry/ui/timeline/timeline.svelte";
    import TimelineContent from "$lib/registry/ui/timeline/timeline-content.svelte";
    import TimelineIndicator from "$lib/registry/ui/timeline/timeline-indicator.svelte";
    import TimelineItem from "$lib/registry/ui/timeline/timeline-item.svelte";
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
