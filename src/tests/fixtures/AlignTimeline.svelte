<script lang="ts">
import Timeline from "../../../registry/timeline/timeline.svelte";
import TimelineContent from "../../../registry/timeline/timeline-content.svelte";
import TimelineIndicator from "../../../registry/timeline/timeline-indicator.svelte";
import TimelineItem from "../../../registry/timeline/timeline-item.svelte";

interface Props {
	align?: "start" | "baseline" | "center" | "end";
	itemAlign?: "start" | "baseline" | "center" | "end";
}

let { align = "baseline", itemAlign = undefined }: Props = $props();
</script>

<Timeline {align}>
	<TimelineItem align={itemAlign}>
		<TimelineIndicator />
		<TimelineContent>
			<p>Line one</p>
			<p>Line two</p>
			<p>Line three</p>
		</TimelineContent>
	</TimelineItem>
</Timeline>
