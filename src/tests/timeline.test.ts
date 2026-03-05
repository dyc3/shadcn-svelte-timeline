import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';
import '../app.css';
import BasicVertical from './fixtures/BasicVertical.svelte';
import LargeTimeline from './fixtures/LargeTimeline.svelte';
import HorizontalTimeline from './fixtures/HorizontalTimeline.svelte';
import StatusTimeline from './fixtures/StatusTimeline.svelte';
import ColorTimeline from './fixtures/ColorTimeline.svelte';
import BareTimeline from './fixtures/BareTimeline.svelte';
import BlockTimeline from './fixtures/BlockTimeline.svelte';
import SubgridTimeline from './fixtures/SubgridTimeline.svelte';
import AlignTimeline from './fixtures/AlignTimeline.svelte';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Get computed style property from a CSS-selected element. */
function cs(selector: string, prop: string): string {
	const el = document.querySelector(selector) as HTMLElement | null;
	if (!el) throw new Error(`No element: ${selector}`);
	return window.getComputedStyle(el).getPropertyValue(prop).trim();
}

/** Get all elements matching selector and map each to computed style value. */
function csAll(selector: string, prop: string): string[] {
	return [...document.querySelectorAll(selector)].map((el) =>
		window.getComputedStyle(el as HTMLElement).getPropertyValue(prop).trim()
	);
}

// ---------------------------------------------------------------------------
// 1. Basic vertical timeline
// ---------------------------------------------------------------------------
describe('Basic vertical timeline', () => {
	test('renders as a 2-column grid', async () => {
		render(BasicVertical);

		await expect.element(page.getByText('Item 1')).toBeInTheDocument();
		expect(cs('.timeline', 'display')).toBe('grid');
	});

	test('has 3 content cells', async () => {
		render(BasicVertical);

		await expect.element(page.getByText('Item 1')).toBeInTheDocument();
		const cells = document.querySelectorAll('.timeline-content-cell');
		expect(cells.length).toBe(3);
	});

	test('last indicator connector is hidden', async () => {
		render(BasicVertical);

		await expect.element(page.getByText('Item 1')).toBeInTheDocument();
		const displays = csAll('.timeline-ind-cell .connector', 'display');
		expect(displays.length).toBeGreaterThan(1);
		// All but the last visible
		displays.slice(0, -1).forEach((d) => expect(d).not.toBe('none'));
		// Last is hidden
		expect(displays[displays.length - 1]).toBe('none');
	});

	test('content cells have ps-4 (16px) padding-inline-start', async () => {
		render(BasicVertical);

		await expect.element(page.getByText('Item 1')).toBeInTheDocument();
		expect(cs('.timeline-content-cell', 'padding-inline-start')).toBe('16px');
	});
});

// ---------------------------------------------------------------------------
// 2. Large timeline (size=lg)
// ---------------------------------------------------------------------------
describe('Large timeline (size=lg)', () => {
	test('indicator dot has 32px width (size-8)', async () => {
		render(LargeTimeline);

		await expect.element(page.getByText('Submit')).toBeInTheDocument();
		expect(cs('.timeline-ind-cell .rounded-full', 'width')).toBe('32px');
	});

	test('renders numeric labels 1, 2, 3', async () => {
		render(LargeTimeline);

		await expect.element(page.getByText('1')).toBeInTheDocument();
		await expect.element(page.getByText('2')).toBeInTheDocument();
		await expect.element(page.getByText('3')).toBeInTheDocument();
	});
});

// ---------------------------------------------------------------------------
// 3. Horizontal timeline
// ---------------------------------------------------------------------------
describe('Horizontal timeline', () => {
	test('timeline has data-horizontal attribute', async () => {
		render(HorizontalTimeline);

		await expect.element(page.getByText('Step 1')).toBeInTheDocument();
		const timeline = document.querySelector('.timeline') as HTMLElement;
		expect(timeline.getAttribute('data-horizontal')).toBe('true');
	});

	test('TimelineItems render as real grid items (display:grid)', async () => {
		render(HorizontalTimeline);

		await expect.element(page.getByText('Step 1')).toBeInTheDocument();
		const displays = csAll('.timeline-item', 'display');
		expect(displays.length).toBeGreaterThan(0);
		displays.forEach((d) => expect(d).toBe('grid'));
	});

	test('last timeline-item connector is hidden', async () => {
		render(HorizontalTimeline);

		await expect.element(page.getByText('Step 1')).toBeInTheDocument();
		const items = [...document.querySelectorAll('.timeline-item')] as HTMLElement[];
		expect(items.length).toBeGreaterThan(1);

		items.slice(0, -1).forEach((item) => {
			const connector = item.querySelector('.connector') as HTMLElement;
			expect(window.getComputedStyle(connector).display).not.toBe('none');
		});
		const lastConnector = items[items.length - 1].querySelector('.connector') as HTMLElement;
		expect(window.getComputedStyle(lastConnector).display).toBe('none');
	});

	test('content cells have text-center class', async () => {
		render(HorizontalTimeline);

		await expect.element(page.getByText('Step 1')).toBeInTheDocument();
		const cell = document.querySelector('.timeline-content-cell') as HTMLElement;
		expect(cell.classList.contains('text-center')).toBe(true);
	});
});

// ---------------------------------------------------------------------------
// 4. Status timeline
// ---------------------------------------------------------------------------
describe('Status timeline', () => {
	test('complete item indicator has bg-primary class', async () => {
		render(StatusTimeline);

		await expect.element(page.getByText('Completed step')).toBeInTheDocument();
		const dot = document.querySelector('[data-status="complete"] .rounded-full') as HTMLElement;
		expect(dot).not.toBeNull();
		expect(dot.classList.contains('bg-primary')).toBe(true);
	});

	test('current item indicator has ring-2 class', async () => {
		render(StatusTimeline);

		await expect.element(page.getByText('Current step')).toBeInTheDocument();
		const dot = document.querySelector('[data-status="current"] .rounded-full') as HTMLElement;
		expect(dot).not.toBeNull();
		expect(dot.classList.contains('ring-2')).toBe(true);
	});

	test('incomplete item indicator has muted foreground class', async () => {
		render(StatusTimeline);

		await expect.element(page.getByText('Incomplete step')).toBeInTheDocument();
		const dot = document.querySelector('[data-status="incomplete"] .rounded-full') as HTMLElement;
		expect(dot).not.toBeNull();
		expect(dot.className).toMatch(/bg-muted-foreground/);
	});
});

// ---------------------------------------------------------------------------
// 5. Indicator colors
// ---------------------------------------------------------------------------
describe('Indicator colors', () => {
	test('color=green dot has bg-green-500 class', async () => {
		render(ColorTimeline);

		await expect.element(page.getByText('Green')).toBeInTheDocument();
		const dots = [...document.querySelectorAll('.timeline-ind-cell .rounded-full')] as HTMLElement[];
		expect(dots.some((d) => d.classList.contains('bg-green-500'))).toBe(true);
	});

	test('color=red dot has bg-red-500 class', async () => {
		render(ColorTimeline);

		await expect.element(page.getByText('Red')).toBeInTheDocument();
		const dots = [...document.querySelectorAll('.timeline-ind-cell .rounded-full')] as HTMLElement[];
		expect(dots.some((d) => d.classList.contains('bg-red-500'))).toBe(true);
	});

	test('color=amber dot has bg-amber-500 class', async () => {
		render(ColorTimeline);

		await expect.element(page.getByText('Amber')).toBeInTheDocument();
		const dots = [...document.querySelectorAll('.timeline-ind-cell .rounded-full')] as HTMLElement[];
		expect(dots.some((d) => d.classList.contains('bg-amber-500'))).toBe(true);
	});
});

// ---------------------------------------------------------------------------
// 6. Bare indicator
// ---------------------------------------------------------------------------
describe('Bare indicator', () => {
	test('variant=bare dot has no size-* class', async () => {
		render(BareTimeline);

		await expect.element(page.getByText('Bare item 1')).toBeInTheDocument();
		const dot = document.querySelector('.timeline-ind-cell .rounded-full') as HTMLElement;
		expect(dot.className).not.toMatch(/size-\d/);
	});

	test('variant=bare dot has no color bg-* class', async () => {
		render(BareTimeline);

		await expect.element(page.getByText('Bare item 1')).toBeInTheDocument();
		const dot = document.querySelector('.timeline-ind-cell .rounded-full') as HTMLElement;
		expect(dot.className).not.toMatch(/bg-zinc|bg-green|bg-red|bg-amber|bg-blue|bg-purple|bg-cyan|bg-pink|bg-primary|bg-muted/);
	});
});

// ---------------------------------------------------------------------------
// 7. Block item
// ---------------------------------------------------------------------------
describe('Block item', () => {
	test('TimelineBlock has col-span-full class', async () => {
		render(BlockTimeline);

		await expect.element(page.getByText('Block item 1')).toBeInTheDocument();
		const block = document.querySelector('.timeline-block') as HTMLElement;
		expect(block.classList.contains('col-span-full')).toBe(true);
	});

	test('TimelineBlock grid-template-columns is set (not none)', async () => {
		render(BlockTimeline);

		await expect.element(page.getByText('Block item 1')).toBeInTheDocument();
		const colTemplate = cs('.timeline-block', 'grid-template-columns');
		expect(colTemplate).toBeTruthy();
		expect(colTemplate).not.toBe('none');
	});
});

// ---------------------------------------------------------------------------
// 8. Subgrid
// ---------------------------------------------------------------------------
describe('Subgrid', () => {
	test('TimelineSubgrid elements have col-span-full class', async () => {
		render(SubgridTimeline);

		await expect.element(page.getByText('Comment row 1')).toBeInTheDocument();
		const subgrids = [...document.querySelectorAll('.timeline-subgrid')] as HTMLElement[];
		subgrids.forEach((sg) => expect(sg.classList.contains('col-span-full')).toBe(true));
	});

	test('two subgrid rows are rendered', async () => {
		render(SubgridTimeline);

		await expect.element(page.getByText('Comment row 1')).toBeInTheDocument();
		expect(document.querySelectorAll('.timeline-subgrid').length).toBe(2);
	});
});

// ---------------------------------------------------------------------------
// 9. Alignment
// ---------------------------------------------------------------------------
describe('Alignment', () => {
	// The ind-cell always uses align-self:stretch so the connector fills the row.
	// Dot position within the cell is controlled by margin classes on the dot.
	// We verify by checking the dot's offset relative to the cell for each align value.

	function getDotOffset(): number {
		const cell = document.querySelector('.timeline-ind-cell') as HTMLElement;
		const dot = cell.querySelector('.rounded-full') as HTMLElement;
		return dot.getBoundingClientRect().top - cell.getBoundingClientRect().top;
	}

	function getCellHeight(): number {
		const cell = document.querySelector('.timeline-ind-cell') as HTMLElement;
		return cell.getBoundingClientRect().height;
	}

	function getDotHeight(): number {
		const dot = document.querySelector('.timeline-ind-cell .rounded-full') as HTMLElement;
		return dot.getBoundingClientRect().height;
	}

	test('align=start places dot at top of cell', async () => {
		render(AlignTimeline, { props: { align: 'start' } });
		await expect.element(page.getByText('Line one')).toBeInTheDocument();
		// Dot should be flush with (or very close to) the top of the cell
		expect(getDotOffset()).toBeLessThanOrEqual(2);
	});

	test('align=end places dot at bottom of cell', async () => {
		render(AlignTimeline, { props: { align: 'end' } });
		await expect.element(page.getByText('Line one')).toBeInTheDocument();
		const offset = getDotOffset();
		const cellH = getCellHeight();
		const dotH = getDotHeight();
		// Dot bottom should be flush with cell bottom
		expect(cellH - offset - dotH).toBeLessThanOrEqual(2);
	});

	test('align=center places dot at vertical center of cell', async () => {
		render(AlignTimeline, { props: { align: 'center' } });
		await expect.element(page.getByText('Line one')).toBeInTheDocument();
		const offset = getDotOffset();
		const cellH = getCellHeight();
		const dotH = getDotHeight();
		const center = (cellH - dotH) / 2;
		expect(Math.abs(offset - center)).toBeLessThanOrEqual(2);
	});

	test('align=baseline places dot at top of cell (same as start)', async () => {
		render(AlignTimeline, { props: { align: 'baseline' } });
		await expect.element(page.getByText('Line one')).toBeInTheDocument();
		expect(getDotOffset()).toBeLessThanOrEqual(2);
	});

	test('per-item align overrides timeline-level align', async () => {
		render(AlignTimeline, { props: { align: 'start', itemAlign: 'end' } });
		await expect.element(page.getByText('Line one')).toBeInTheDocument();
		const offset = getDotOffset();
		const cellH = getCellHeight();
		const dotH = getDotHeight();
		// With itemAlign=end, dot should be near the bottom
		expect(cellH - offset - dotH).toBeLessThanOrEqual(2);
	});
});
