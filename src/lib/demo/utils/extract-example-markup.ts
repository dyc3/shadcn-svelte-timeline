const LEADING_SCRIPT_PATTERN = /^<script(?:\s[^>]*)?>[\s\S]*?<\/script>\s*/;

export function extractExampleMarkup(source: string) {
	const withoutScript = source.replace(LEADING_SCRIPT_PATTERN, "").trim();
	const rootIndex = withoutScript.indexOf("<Timeline.Root");

	if (rootIndex === -1) {
		return withoutScript;
	}

	return withoutScript.slice(rootIndex).trim();
}
