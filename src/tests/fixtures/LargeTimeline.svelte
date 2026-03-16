<script lang="ts">
    import Timeline from "../../../registry/ui/timeline/timeline.svelte";
    import TimelineContent from "../../../registry/ui/timeline/timeline-content.svelte";
    import TimelineIndicator from "../../../registry/ui/timeline/timeline-indicator.svelte";
    import TimelineItem from "../../../registry/ui/timeline/timeline-item.svelte";
</script>

<Timeline size="lg">
    <TimelineItem>
        <TimelineIndicator>1</TimelineIndicator>
        <TimelineContent>
            <p>Submit</p>
            <p>Complete the form.</p>
        </TimelineContent>
    </TimelineItem>
    <TimelineItem>
        <TimelineIndicator>2</TimelineIndicator>
        <TimelineContent>
            <p>Review</p>
            <p>Verify your data.</p>
        </TimelineContent>
    </TimelineItem>
    <TimelineItem>
        <TimelineIndicator>3</TimelineIndicator>
        <TimelineContent>
            <p>Publish</p>
            <p>Push your content live.</p>
        </TimelineContent>
    </TimelineItem>
</Timeline>
