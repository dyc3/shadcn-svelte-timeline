<script lang="ts">
import * as Timeline from "$lib/registry/ui/timeline/index.js";
</script>

<Timeline.Root size="lg" align="start">
	<Timeline.Item>
		<Timeline.Indicator>1</Timeline.Indicator>
		<Timeline.Content>
			<p class="text-sm font-semibold">Start align</p>
			<p class="text-sm text-muted-foreground">
				Place the indicator at the start edge of the item row.
			</p>
		</Timeline.Content>
	</Timeline.Item>
	<Timeline.Item>
		<Timeline.Indicator>2</Timeline.Indicator>
		<Timeline.Content>
			<p class="text-sm font-semibold">Second item</p>
			<p class="text-sm text-muted-foreground">
				Another item using the same indicator placement.
			</p>
		</Timeline.Content>
	</Timeline.Item>
</Timeline.Root>
