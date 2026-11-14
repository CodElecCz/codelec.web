import { parse } from 'csv-parse/sync';

type Locale = 'cs' | 'en';
type Category = 'eol' | 'plc' | 'software';

type ReferenceRow = {
	year: string;
	customer: string;
	end_customer: string;
	commissioned_by: string;
	reference_group: string;
	show_cs: string;
	show_en: string;
	title_cs: string;
	title_en: string;
	description_cs: string;
	description_en: string;
	technologies_cs: string;
	technologies_en: string;
	category: string;
	badges_cs: string;
	badges_en: string;
};

type CustomerRow = {
	name: string;
	full_name: string;
	website: string;
};

type Project = {
	year: string;
	client: string;
	clientFullName?: string;
	clientWebsite?: string;
	commissionedBy?: string;
	title: string;
	description: string;
	technologies: string[];
	category: Category;
	badges?: string[];
};

type ReferenceGroup = {
	id: string;
	label: string;
	context: string;
	projects: Project[];
};

const columns: (keyof ReferenceRow)[] = [
	'year', 'customer', 'end_customer', 'commissioned_by', 'reference_group', 'show_cs', 'show_en',
	'title_cs', 'title_en', 'description_cs', 'description_en',
	'technologies_cs', 'technologies_en', 'category', 'badges_cs', 'badges_en',
];

function isCategory(value: string): value is Category {
	return value === 'eol' || value === 'plc' || value === 'software';
}

function list(value: string): string[] {
	return value ? value.split('|').map((item) => item.trim()).filter(Boolean) : [];
}

export function getReferenceGroups(csv: string, locale: Locale, customerCsv: string): ReferenceGroup[] {
	const rows: ReferenceRow[] = parse(csv, {
		bom: true,
		delimiter: ';',
		skip_empty_lines: true,
		columns(headers: string[]) {
			if (new Set(headers).size !== headers.length || columns.some((column) => !headers.includes(column))) {
				throw new Error('Reference CSV has duplicate or missing columns.');
			}
			return headers;
		},
	});
	const customers: CustomerRow[] = parse(customerCsv, {
		bom: true,
		delimiter: ';',
		skip_empty_lines: true,
		columns(headers: string[]) {
			if (new Set(headers).size !== headers.length || ['name', 'full_name', 'website'].some((column) => !headers.includes(column))) {
				throw new Error('Customer CSV has duplicate or missing columns.');
			}
			return headers;
		},
	});
	const customersByName = new Map<string, CustomerRow>();
	for (const [index, customer] of customers.entries()) {
		const name = customer.name.trim().toLowerCase();
		const website = customer.website.trim();
		const location = `Customer CSV record ${index + 2}`;
		if (!name || customersByName.has(name)) {
			throw new Error(`${location}: customer name is empty or duplicated.`);
		}
		if (website && (!URL.canParse(website) || !['http:', 'https:'].includes(new URL(website).protocol))) {
			throw new Error(`${location}: invalid website URL.`);
		}
		customersByName.set(name, customer);
	}
	const groups = new Map<string, ReferenceGroup>();
	const publishedGroups = new Set<string>();

	for (const [index, row] of rows.entries()) {
		const location = `Reference CSV record ${index + 2}`;
		const older = row.year === 'starší' || row.year === '2014–2016';
		if (!/^\d{4}$/.test(row.year) && !older) {
			throw new Error(`${location}: invalid year.`);
		}
		if (!['0', '1'].includes(row.show_cs) || !['0', '1'].includes(row.show_en)) {
			throw new Error(`${location}: show_cs and show_en must be 0 or 1.`);
		}
		if (row[`show_${locale}`] === '0') continue;
		if (!isCategory(row.category)) {
			throw new Error(`${location}: invalid category.`);
		}
		if (row.reference_group) {
			if (publishedGroups.has(row.reference_group)) {
				throw new Error(`${location}: reference group ${row.reference_group} has multiple published ${locale} rows.`);
			}
			publishedGroups.add(row.reference_group);
		}

		const client = row.end_customer.trim() ? row.end_customer : row.customer;
		const title = row[`title_${locale}`];
		const description = row[`description_${locale}`];
		if (!client.trim() || !title.trim() || !description.trim()) {
			throw new Error(`${location}: published ${locale} references need a client, title and description.`);
		}

		const historical = /^201[456]$/.test(row.year) || older;
		const olderLabel = locale === 'cs' ? 'Starší' : 'Earlier';
		const id = historical ? '2014-2016' : row.year;
		let group = groups.get(id);
		if (!group) {
			group = {
				id,
				label: historical ? olderLabel : row.year,
				context: historical
					? locale === 'cs'
						? 'Ve spolupráci se Suzhou Elcom Automation Technology Co., Ltd.'
						: 'In cooperation with Suzhou Elcom Automation Technology Co., Ltd.'
					: locale === 'cs' ? 'OSVČ' : 'Independent contractor',
				projects: [],
			};
			groups.set(id, group);
		}

		const badges = list(row[`badges_${locale}`]);
		const customer = customersByName.get(client.trim().toLowerCase());
		const commissionedBy = row.commissioned_by.trim();
		group.projects.push({
			year: older ? '2014–2016' : row.year,
			client,
			clientFullName: customer?.full_name.trim() || undefined,
			clientWebsite: customer?.website.trim() || undefined,
			commissionedBy: row.customer.trim().toLowerCase() !== client.trim().toLowerCase()
				&& commissionedBy.toLowerCase() !== client.trim().toLowerCase()
				? commissionedBy || undefined
				: undefined,
			title,
			description,
			technologies: list(row[`technologies_${locale}`]),
			category: row.category,
			badges: badges.length ? badges : undefined,
		});
	}

	return [...groups.values()].sort((a, b) => Number.parseInt(b.id, 10) - Number.parseInt(a.id, 10));
}
