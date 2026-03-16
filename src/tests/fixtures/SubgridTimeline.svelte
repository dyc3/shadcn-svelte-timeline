<script lang="ts">
    import Timeline from "$lib/registry/ui/timeline/timeline.svelte";
    import TimelineBlock from "$lib/registry/ui/timeline/timeline-block.svelte";
    import TimelineSubgrid from "$lib/registry/ui/timeline/timeline-subgrid.svelte";
</script>

<!--
	TimelineSubgrid rows inside a TimelineBlock align to the parent
	timeline's column tracks via CSS subgrid.
-->
<Timeline>
    <TimelineBlock>
        <TimelineSubgrid>
            <div>Icon A</div>
            <div>Comment row 1</div>
        </TimelineSubgrid>
        <TimelineSubgrid>
            <div>Icon B</div>
            <div>Comment row 2</div>
        </TimelineSubgrid>
    </TimelineBlock>
</Timeline>
