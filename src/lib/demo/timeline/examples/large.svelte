<script lang="ts">
import * as Timeline from "$lib/registry/ui/timeline/index.js";
</script>

<Timeline.Root size="lg">
	<Timeline.Item>
		<Timeline.Indicator>1</Timeline.Indicator>
		<Timeline.Content>
			<p class="text-sm font-semibold">Submit</p>
			<p class="text-sm text-muted-foreground">
				Complete the form and provide all necessary assets.
			</p>
		</Timeline.Content>
	</Timeline.Item>
	<Timeline.Item>
		<Timeline.Indicator>2</Timeline.Indicator>
		<Timeline.Content>
			<p class="text-sm font-semibold">Review</p>
			<p class="text-sm text-muted-foreground">
				Verify your data and approve the final draft for accuracy.
			</p>
		</Timeline.Content>
	</Timeline.Item>
	<Timeline.Item>
		<Timeline.Indicator>3</Timeline.Indicator>
		<Timeline.Content>
			<p class="text-sm font-semibold">Publish</p>
			<p class="text-sm text-muted-foreground">
				Finalize your settings and push your content live.
			</p>
		</Timeline.Content>
	</Timeline.Item>
</Timeline.Root>
