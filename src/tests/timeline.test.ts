import { describe, expect, test } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";
import "../app.css";
import AlignTimeline from "./fixtures/AlignTimeline.svelte";
import BareTimeline from "./fixtures/BareTimeline.svelte";
import BasicVertical from "./fixtures/BasicVertical.svelte";
import BlockTimeline from "./fixtures/BlockTimeline.svelte";
import ColorTimeline from "./fixtures/ColorTimeline.svelte";
import HorizontalTimeline from "./fixtures/HorizontalTimeline.svelte";
import LargeTimeline from "./fixtures/LargeTimeline.svelte";
import StatusTimeline from "./fixtures/StatusTimeline.svelte";
import SubgridTimeline from "./fixtures/SubgridTimeline.svelte";

/**
 * Returns every Tailwind padding or margin utility class found in the class
 * list of the given element. Matches the full set of directional shorthands:
 *   p / px / py / ps / pe / pt / pr / pb / pl
 *   m / mx / my / ms / me / mt / mr / mb / ml
 * followed by a dash and any value (e.g. p-4, mb-0, ps-1.5, mx-auto).
 */
function findPaddingMarginClasses(el: Element): string[] {
	return [...el.classList].filter((cls) => /^[pm](?:[xysetblr])?-/.test(cls));
}

/**
 * Collect all timeline component elements from the current document and
 * return any padding/margin Tailwind classes found on them, as a flat array
 * of `"<selector> → <class>"` strings for readable assertion output.
 */
function auditTimelineNodes(): string[] {
	const selectors = [
		".timeline",
		".timeline-item",
		".timeline-ind-cell",
		".timeline-content-cell",
		".timeline-block",
		".timeline-subgrid",
	];

	const violations: string[] = [];
	for (const sel of selectors) {
		for (const el of document.querySelectorAll(sel)) {
			for (const cls of findPaddingMarginClasses(el)) {
				violations.push(`${sel} → ${cls}`);
			}
		}
	}
	return violations;
}

/** Get computed style property from a CSS-selected element. */
function cs(selector: string, prop: string): string {
	const el = document.querySelector(selector) as HTMLElement | null;
	if (!el) throw new Error(`No element: ${selector}`);
	return window.getComputedStyle(el).getPropertyValue(prop).trim();
}

/** Get all elements matching selector and map each to computed style value. */
function csAll(selector: string, prop: string): string[] {
	return [...document.querySelectorAll(selector)].map((el) =>
		window
			.getComputedStyle(el as HTMLElement)
			.getPropertyValue(prop)
			.trim(),
	);
}

describe("Basic vertical timeline", () => {
	test("default indicator dot keeps the neutral zinc background", async () => {
		render(BasicVertical);

		await expect.element(page.getByText("Item 1")).toBeInTheDocument();
		const dot = document.querySelector(
			".timeline-ind-cell .rounded-full",
		) as HTMLElement;
		expect(dot.classList.contains("bg-zinc-300")).toBe(true);
	});

	test("renders as a 2-column grid", async () => {
		render(BasicVertical);

		await expect.element(page.getByText("Item 1")).toBeInTheDocument();
		expect(cs(".timeline", "display")).toBe("grid");
	});

	test("has 3 content cells", async () => {
		render(BasicVertical);

		await expect.element(page.getByText("Item 1")).toBeInTheDocument();
		const cells = document.querySelectorAll(".timeline-content-cell");
		expect(cells.length).toBe(3);
	});

	test("last indicator connector is hidden", async () => {
		render(BasicVertical);

		await expect.element(page.getByText("Item 1")).toBeInTheDocument();
		const displays = csAll(".timeline-ind-cell .connector", "display");
		expect(displays.length).toBeGreaterThan(1);
		// All but the last visible
		displays.slice(0, -1).forEach((d) => expect(d).not.toBe("none"));
		// Last is hidden
		expect(displays[displays.length - 1]).toBe("none");
	});

	test("timeline uses a 16px grid column gap instead of content padding", async () => {
		render(BasicVertical);

		await expect.element(page.getByText("Item 1")).toBeInTheDocument();
		expect(cs(".timeline", "column-gap")).toBe("16px");
	});

	test("connector spans full ind-cell height (absolute positioning)", async () => {
		render(BasicVertical);

		await expect.element(page.getByText("Item 1")).toBeInTheDocument();
		// Check first (non-last) connector matches its parent ind-cell height
		const indCell = document.querySelector(".timeline-ind-cell") as HTMLElement;
		const connector = indCell.querySelector(".connector") as HTMLElement;
		const cellHeight = indCell.getBoundingClientRect().height;
		const connectorHeight = connector.getBoundingClientRect().height;
		expect(connectorHeight).toBeCloseTo(cellHeight, 0);
	});

	test("ind-cell is left of content-cell", async () => {
		render(BasicVertical);

		await expect.element(page.getByText("Item 1")).toBeInTheDocument();
		const indCell = document.querySelector(".timeline-ind-cell") as HTMLElement;
		const contentCell = document.querySelector(
			".timeline-content-cell",
		) as HTMLElement;
		expect(indCell.getBoundingClientRect().left).toBeLessThan(
			contentCell.getBoundingClientRect().left,
		);
	});
});

describe("Large timeline (size=lg)", () => {
	test("indicator dot has 32px width (size-8)", async () => {
		render(LargeTimeline);

		await expect.element(page.getByText("Submit")).toBeInTheDocument();
		expect(cs(".timeline-ind-cell .rounded-full", "width")).toBe("32px");
	});

	test("renders numeric labels 1, 2, 3", async () => {
		render(LargeTimeline);

		await expect.element(page.getByText("1")).toBeInTheDocument();
		await expect.element(page.getByText("2")).toBeInTheDocument();
		await expect.element(page.getByText("3")).toBeInTheDocument();
	});
});

describe("Horizontal timeline", () => {
	test("timeline has data-horizontal attribute", async () => {
		render(HorizontalTimeline);

		await expect.element(page.getByText("Step 1")).toBeInTheDocument();
		const timeline = document.querySelector(".timeline") as HTMLElement;
		expect(timeline.getAttribute("data-horizontal")).toBe("true");
	});

	test("TimelineItems render as real grid items (display:grid)", async () => {
		render(HorizontalTimeline);

		await expect.element(page.getByText("Step 1")).toBeInTheDocument();
		const displays = csAll(".timeline-item", "display");
		expect(displays.length).toBeGreaterThan(0);
		displays.forEach((d) => expect(d).toBe("grid"));
	});

	test("last timeline-item connector is hidden", async () => {
		render(HorizontalTimeline);

		await expect.element(page.getByText("Step 1")).toBeInTheDocument();
		const items = [
			...document.querySelectorAll(".timeline-item"),
		] as HTMLElement[];
		expect(items.length).toBeGreaterThan(1);

		items.slice(0, -1).forEach((item) => {
			const connector = item.querySelector(".connector") as HTMLElement;
			expect(window.getComputedStyle(connector).display).not.toBe("none");
		});
		const lastConnector = items[items.length - 1].querySelector(
			".connector",
		) as HTMLElement;
		expect(window.getComputedStyle(lastConnector).display).toBe("none");
	});

	test("content cells have text-center class", async () => {
		render(HorizontalTimeline);

		await expect.element(page.getByText("Step 1")).toBeInTheDocument();
		const cell = document.querySelector(
			".timeline-content-cell",
		) as HTMLElement;
		expect(cell.classList.contains("text-center")).toBe(true);
	});
});

describe("Status timeline", () => {
	test("complete item indicator has bg-primary class", async () => {
		render(StatusTimeline);

		await expect.element(page.getByText("Completed step")).toBeInTheDocument();
		const dot = document.querySelector(
			'[data-status="complete"] .rounded-full',
		) as HTMLElement;
		expect(dot).not.toBeNull();
		expect(dot.classList.contains("bg-primary")).toBe(true);
		expect(dot.classList.contains("bg-red-500")).toBe(false);
	});

	test("current item indicator has ring-2 class", async () => {
		render(StatusTimeline);

		await expect.element(page.getByText("Current step")).toBeInTheDocument();
		const dot = document.querySelector(
			'[data-status="current"] .rounded-full',
		) as HTMLElement;
		expect(dot).not.toBeNull();
		expect(dot.classList.contains("ring-2")).toBe(true);
	});

	test("incomplete item indicator has muted foreground class", async () => {
		render(StatusTimeline);

		await expect.element(page.getByText("Incomplete step")).toBeInTheDocument();
		const dot = document.querySelector(
			'[data-status="incomplete"] .rounded-full',
		) as HTMLElement;
		expect(dot).not.toBeNull();
		expect(dot.className).toMatch(/bg-muted-foreground/);
	});
});

describe("Indicator colors", () => {
	test("custom green class reaches the indicator dot", async () => {
		render(ColorTimeline);

		await expect.element(page.getByText("Green")).toBeInTheDocument();
		const dots = [
			...document.querySelectorAll(".timeline-ind-cell .rounded-full"),
		] as HTMLElement[];
		expect(dots.some((d) => d.classList.contains("bg-green-500"))).toBe(true);
	});

	test("custom red class reaches the indicator dot", async () => {
		render(ColorTimeline);

		await expect.element(page.getByText("Red")).toBeInTheDocument();
		const dots = [
			...document.querySelectorAll(".timeline-ind-cell .rounded-full"),
		] as HTMLElement[];
		expect(dots.some((d) => d.classList.contains("bg-red-500"))).toBe(true);
	});

	test("custom amber class reaches the indicator dot", async () => {
		render(ColorTimeline);

		await expect.element(page.getByText("Amber")).toBeInTheDocument();
		const dots = [
			...document.querySelectorAll(".timeline-ind-cell .rounded-full"),
		] as HTMLElement[];
		expect(dots.some((d) => d.classList.contains("bg-amber-500"))).toBe(true);
	});
});

describe("Bare indicator", () => {
	test("variant=bare dot has no size-* class", async () => {
		render(BareTimeline);

		await expect.element(page.getByText("Bare item 1")).toBeInTheDocument();
		const dot = document.querySelector(
			".timeline-ind-cell .rounded-full",
		) as HTMLElement;
		expect(dot.className).not.toMatch(/size-\d/);
	});

	test("variant=bare dot has no color bg-* class", async () => {
		render(BareTimeline);

		await expect.element(page.getByText("Bare item 1")).toBeInTheDocument();
		const dot = document.querySelector(
			".timeline-ind-cell .rounded-full",
		) as HTMLElement;
		expect(dot.className).not.toMatch(
			/bg-zinc|bg-green|bg-red|bg-amber|bg-blue|bg-purple|bg-cyan|bg-pink|bg-primary|bg-muted/,
		);
	});
});

describe("Block item", () => {
	test("TimelineBlock has col-span-full class", async () => {
		render(BlockTimeline);

		await expect.element(page.getByText("Block item 1")).toBeInTheDocument();
		const block = document.querySelector(".timeline-block") as HTMLElement;
		expect(block.classList.contains("col-span-full")).toBe(true);
	});

	test("TimelineBlock grid-template-columns is set (not none)", async () => {
		render(BlockTimeline);

		await expect.element(page.getByText("Block item 1")).toBeInTheDocument();
		const colTemplate = cs(".timeline-block", "grid-template-columns");
		expect(colTemplate).toBeTruthy();
		expect(colTemplate).not.toBe("none");
	});
});

describe("Subgrid", () => {
	test("TimelineSubgrid elements have col-span-full class", async () => {
		render(SubgridTimeline);

		await expect.element(page.getByText("Comment row 1")).toBeInTheDocument();
		const subgrids = [
			...document.querySelectorAll(".timeline-subgrid"),
		] as HTMLElement[];
		subgrids.forEach((sg) =>
			expect(sg.classList.contains("col-span-full")).toBe(true),
		);
	});

	test("two subgrid rows are rendered", async () => {
		render(SubgridTimeline);

		await expect.element(page.getByText("Comment row 1")).toBeInTheDocument();
		expect(document.querySelectorAll(".timeline-subgrid").length).toBe(2);
	});
});

describe("Alignment", () => {
	// The ind-cell is a grid that stretches to the full row height.
	// The dot uses align-self to position within it.
	// The connector is absolute top-0/bottom-0 so it always spans the full height.

	function getDot(): HTMLElement {
		return document.querySelector(
			".timeline-ind-cell .rounded-full",
		) as HTMLElement;
	}

	test("align=start dot has self-start class", async () => {
		render(AlignTimeline, { props: { align: "start" } });
		await expect.element(page.getByText("Line one")).toBeInTheDocument();
		expect(getDot().classList.contains("self-start")).toBe(true);
	});

	test("align=baseline dot has self-start class (same as start)", async () => {
		render(AlignTimeline, { props: { align: "baseline" } });
		await expect.element(page.getByText("Line one")).toBeInTheDocument();
		expect(getDot().classList.contains("self-start")).toBe(true);
	});

	test("per-item align overrides timeline-level align", async () => {
		render(AlignTimeline, { props: { align: "start", itemAlign: "baseline" } });
		await expect.element(page.getByText("Line one")).toBeInTheDocument();
		expect(getDot().classList.contains("self-start")).toBe(true);
	});

	test("horizontal timelines ignore align", async () => {
		render(AlignTimeline, { props: { horizontal: true, align: "start" } });
		await expect.element(page.getByText("Line one")).toBeInTheDocument();
		expect(getDot().classList.contains("self-start")).toBe(false);
	});
});

describe("No padding/margin Tailwind classes on timeline elements - Use grid instead", () => {
	test("vertical timeline has no p-*/m-* classes on any timeline node", async () => {
		render(BasicVertical);
		await expect.element(page.getByText("Item 1")).toBeInTheDocument();
		expect(auditTimelineNodes()).toEqual([]);
	});

	test("horizontal timeline has no p-*/m-* classes on any timeline node", async () => {
		render(HorizontalTimeline);
		await expect.element(page.getByText("Step 1")).toBeInTheDocument();
		expect(auditTimelineNodes()).toEqual([]);
	});

	test("block timeline has no p-*/m-* classes on any timeline node", async () => {
		render(BlockTimeline);
		await expect.element(page.getByText("Block item 1")).toBeInTheDocument();
		expect(auditTimelineNodes()).toEqual([]);
	});

	test("subgrid timeline has no p-*/m-* classes on any timeline node", async () => {
		render(SubgridTimeline);
		await expect.element(page.getByText("Comment row 1")).toBeInTheDocument();
		expect(auditTimelineNodes()).toEqual([]);
	});

	test("status timeline has no p-*/m-* classes on any timeline node", async () => {
		render(StatusTimeline);
		await expect.element(page.getByText("Completed step")).toBeInTheDocument();
		expect(auditTimelineNodes()).toEqual([]);
	});

	test("color timeline has no p-*/m-* classes on any timeline node", async () => {
		render(ColorTimeline);
		await expect.element(page.getByText("Green")).toBeInTheDocument();
		expect(auditTimelineNodes()).toEqual([]);
	});

	test("bare indicator timeline has no p-*/m-* classes on any timeline node", async () => {
		render(BareTimeline);
		await expect.element(page.getByText("Bare item 1")).toBeInTheDocument();
		expect(auditTimelineNodes()).toEqual([]);
	});

	test("large timeline has no p-*/m-* classes on any timeline node", async () => {
		render(LargeTimeline);
		await expect.element(page.getByText("Submit")).toBeInTheDocument();
		expect(auditTimelineNodes()).toEqual([]);
	});

	test("alignment timeline has no p-*/m-* classes on any timeline node", async () => {
		render(AlignTimeline, { props: { align: "start" } });
		await expect.element(page.getByText("Line one")).toBeInTheDocument();
		expect(auditTimelineNodes()).toEqual([]);
	});
});
