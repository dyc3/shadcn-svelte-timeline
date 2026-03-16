<script lang="ts">
    import Timeline from "$lib/registry/ui/timeline/timeline.svelte";
    import TimelineContent from "$lib/registry/ui/timeline/timeline-content.svelte";
    import TimelineIndicator from "$lib/registry/ui/timeline/timeline-indicator.svelte";
    import TimelineItem from "$lib/registry/ui/timeline/timeline-item.svelte";

    interface Props {
        horizontal?: boolean;
        align?: "start" | "baseline";
        itemAlign?: "start" | "baseline";
    }

    let {
        horizontal = false,
        align = "baseline",
        itemAlign = undefined,
    }: Props = $props();
</script>

<Timeline {horizontal} {align}>
    <TimelineItem align={itemAlign}>
        <TimelineIndicator />
        <TimelineContent>
            <p>Line one</p>
            <p>Line two</p>
            <p>Line three</p>
        </TimelineContent>
    </TimelineItem>
</Timeline>
