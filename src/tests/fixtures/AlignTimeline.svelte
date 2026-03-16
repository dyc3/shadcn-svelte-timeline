<script lang="ts">
import Timeline from "../../../registry/timeline/timeline.svelte";
import TimelineContent from "../../../registry/timeline/timeline-content.svelte";
import TimelineIndicator from "../../../registry/timeline/timeline-indicator.svelte";
import TimelineItem from "../../../registry/timeline/timeline-item.svelte";

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
