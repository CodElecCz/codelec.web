const filterButtons = document.querySelectorAll<HTMLButtonElement>('[data-project-filter]');
const projectCards = document.querySelectorAll<HTMLElement>('[data-project-card]');
const yearSections = document.querySelectorAll<HTMLElement>('[data-project-year]');
const filterStatus = document.querySelector<HTMLElement>('#filter-status');

if (filterButtons.length === 0 || projectCards.length === 0 || yearSections.length === 0 || !filterStatus) {
	throw new Error('Project filters could not be initialized.');
}

const english = document.documentElement.lang === 'en';

function applyFilter(button: HTMLButtonElement) {
	const selectedCategory = button.dataset.projectFilter;
	if (!selectedCategory) throw new Error('A project filter is missing its category.');

	filterButtons.forEach((filterButton) => {
		filterButton.setAttribute('aria-pressed', filterButton === button ? 'true' : 'false');
	});

	projectCards.forEach((card) => {
		card.hidden = selectedCategory !== 'all' && card.dataset.projectCategory !== selectedCategory;
	});

	yearSections.forEach((section) => {
		const cards = section.querySelectorAll<HTMLElement>('[data-project-card]');
		const visibleCount = Array.from(cards).filter((card) => !card.hidden).length;
		section.hidden = visibleCount === 0;
		const count = section.querySelector<HTMLElement>('[data-project-count]');
		const yearJump = document.querySelector<HTMLElement>(`[data-year-jump="${section.id}"]`);
		if (!count || !yearJump) throw new Error('A project year is missing its count or navigation link.');
		count.textContent = `${String(visibleCount).padStart(2, '0')} ${english ? 'ENTRIES' : 'KARET'}`;
		yearJump.hidden = visibleCount === 0;
	});

	const visibleTotal = Array.from(projectCards).filter((card) => !card.hidden).length;
	filterStatus.textContent = english
		? `Showing ${visibleTotal} of ${projectCards.length} portfolio entries.`
		: `Zobrazeno ${visibleTotal} z ${projectCards.length} referenčních karet.`;
}

filterButtons.forEach((button) => {
	button.addEventListener('click', () => applyFilter(button));
});

const categoryByArea = new Map([
	['eol', 'eol'],
	['pc-embedded', 'software'],
	['plc', 'plc'],
]);
const area = new URLSearchParams(window.location.search).get('oblast');
const initialCategory = area ? categoryByArea.get(area) : undefined;
if (initialCategory) {
	const button = Array.from(filterButtons).find((filterButton) => filterButton.dataset.projectFilter === initialCategory);
	if (!button) throw new Error('The requested project filter is missing.');
	applyFilter(button);
}
