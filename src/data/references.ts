type Locale = 'cs' | 'en';
type Category = 'eol' | 'plc' | 'software';

type Addition = {
	year: string;
	category: Category;
	endCustomer?: string;
	commissionedBy?: string;
	title: Record<Locale, string>;
	description: Record<Locale, string>;
	technologies: string[];
};

const additions: Addition[] = [
	{
		year: '2026',
		category: 'eol',
		endCustomer: 'VALEO',
		title: { cs: 'Integrace varianty do testovací linky snímačů', en: 'Sensor test-line variant integration' },
		description: {
			cs: 'Implementace nové projektové varianty do existující výrobní testovací linky.',
			en: 'Implementation of a new project variant in an existing production test line.',
		},
		technologies: ['EoL', 'Testing'],
	},
	{
		year: '2026',
		category: 'software',
		commissionedBy: 'ESTELAR',
		title: { cs: 'Vývoj embedded zařízení', en: 'Embedded device development' },
		description: {
			cs: 'Programátorské práce na více embedded zařízeních.',
			en: 'Software development for several embedded devices.',
		},
		technologies: ['Embedded'],
	},
	{
		year: '2025',
		category: 'eol',
		commissionedBy: 'HOERBIGER',
		title: { cs: 'LabVIEW pro EoL stanici', en: 'LabVIEW for an EoL station' },
		description: {
			cs: 'Vývoj software pro stanici koncového testování.',
			en: 'Software development for an end-of-line test station.',
		},
		technologies: ['NI LabVIEW', 'EoL'],
	},
	{
		year: '2025',
		category: 'plc',
		endCustomer: 'VALEO',
		title: { cs: 'PLC pro výrobní a testovací stanice', en: 'PLC programming for production and test stations' },
		description: {
			cs: 'Programování PLC a úpravy stanic, přípravků a výběru variant včetně servisní podpory.',
			en: 'PLC programming and modifications to stations, fixtures and variant selection, including service support.',
		},
		technologies: ['PLC', 'Automation'],
	},
	{
		year: '2025',
		category: 'plc',
		endCustomer: 'MODEL · Moravské Budějovice',
		title: { cs: 'Úpravy PLC výrobního zařízení', en: 'Production equipment PLC modifications' },
		description: {
			cs: 'Úpravy PLC a servisní podpora výrobního zařízení.',
			en: 'PLC modifications and service support for production equipment.',
		},
		technologies: ['PLC', 'Automation'],
	},
	{
		year: '2025',
		category: 'eol',
		endCustomer: 'VALEO',
		title: { cs: 'Nové varianty testovací linky snímačů', en: 'Sensor test-line variants' },
		description: {
			cs: 'Úpravy stanic pro nové varianty snímačů a vzdálená podpora výrobní linky.',
			en: 'Station modifications for new sensor variants and remote production-line support.',
		},
		technologies: ['EoL', 'Testing'],
	},
	{
		year: '2025',
		category: 'software',
		commissionedBy: 'ESTELAR',
		title: { cs: 'Vývoj a údržba embedded produktů', en: 'Embedded product development and maintenance' },
		description: {
			cs: 'Programátorské práce na několika generacích embedded zařízení a jejich funkcích.',
			en: 'Software development across several generations of embedded devices and their features.',
		},
		technologies: ['Embedded'],
	},
	{
		year: '2024',
		category: 'plc',
		endCustomer: 'VALEO · Rakovník',
		title: { cs: 'PLC pro výrobní a testovací stanice', en: 'PLC for production and test stations' },
		description: {
			cs: 'PLC aplikace pro vstupní výrobní stanici a testovací pracoviště.',
			en: 'PLC applications for an incoming production station and test equipment.',
		},
		technologies: ['PLC', 'Beckhoff'],
	},
	{
		year: '2024',
		category: 'plc',
		endCustomer: 'MEA · Plzeň',
		title: { cs: 'PLC pro dopravníkové systémy', en: 'Conveyor system PLC programming' },
		description: {
			cs: 'Programování PLC pro dopravníkové systémy.',
			en: 'PLC programming for conveyor systems.',
		},
		technologies: ['PLC', 'Automation'],
	},
	{
		year: '2024',
		category: 'plc',
		endCustomer: 'PUREM · Rakovník',
		title: { cs: 'Bezpečnost výrobního zařízení', en: 'Production equipment safety' },
		description: {
			cs: 'Úpravy bezpečnostních funkcí výrobního zařízení.',
			en: 'Modifications to production equipment safety functions.',
		},
		technologies: ['PLC', 'Safety'],
	},
	{
		year: '2024',
		category: 'plc',
		endCustomer: 'SIEMENS · Trutnov',
		title: { cs: 'PLC komunikace s průmyslovou jednotkou', en: 'PLC communication with an industrial unit' },
		description: {
			cs: 'Programování PLC a LF komunikace s jednotkou včetně servisní podpory.',
			en: 'PLC programming and LF communication with an industrial unit, including service support.',
		},
		technologies: ['PLC', 'LF'],
	},
	{
		year: '2024',
		category: 'software',
		commissionedBy: 'VŠB – Technická univerzita Ostrava',
		title: { cs: 'Sběr a vyhodnocení elektrických měření', en: 'Electrical measurement acquisition and analysis' },
		description: {
			cs: 'Rozšíření a zprovoznění systému sběru dat, měření elektrických veličin a vyhodnocení výsledků.',
			en: 'Extension and commissioning of a data acquisition system, electrical measurements and analysis of results.',
		},
		technologies: ['Data acquisition', 'Measurement'],
	},
	{
		year: '2024',
		category: 'eol',
		commissionedBy: 'HOERBIGER',
		title: { cs: 'LabVIEW pro montážní stanici', en: 'LabVIEW for an assembly station' },
		description: {
			cs: 'Vývoj software pro montážní pracoviště.',
			en: 'Software development for an assembly station.',
		},
		technologies: ['NI LabVIEW'],
	},
	{
		year: '2024',
		category: 'eol',
		endCustomer: 'VALEO · Rakovník',
		title: { cs: 'Integrace variant do EoL testeru', en: 'EoL tester variant integration' },
		description: {
			cs: 'Integrace variant klimatizačního panelu do existujícího koncového testeru.',
			en: 'Integration of climate-control panel variants into an existing end-of-line tester.',
		},
		technologies: ['EoL', 'Testing'],
	},
	{
		year: '2023',
		category: 'plc',
		endCustomer: 'PUREM',
		title: { cs: 'Integrace svařovací buňky', en: 'Welding cell integration' },
		description: {
			cs: 'Integrace svařovací buňky, bezpečnostních funkcí a měření klapky.',
			en: 'Welding-cell and safety integration, including flap measurement.',
		},
		technologies: ['PLC', 'Safety', 'Measurement'],
	},
	{
		year: '2023',
		category: 'plc',
		endCustomer: 'EMBRACO · Slovensko',
		title: { cs: 'PLC aplikace testovací stanice', en: 'Test-station PLC application' },
		description: {
			cs: 'Programování PLC aplikace pro testovací stanici.',
			en: 'PLC application programming for a test station.',
		},
		technologies: ['PLC', 'Testing'],
	},
	{
		year: '2023',
		category: 'plc',
		endCustomer: 'MASSAG · Bílovec',
		title: { cs: 'Servis PLC průmyslové linky', en: 'Industrial line PLC service' },
		description: {
			cs: 'Servis a úpravy PLC průmyslové linky pro značení výrobků.',
			en: 'Service and PLC modifications for an industrial product-marking line.',
		},
		technologies: ['PLC', 'Automation'],
	},
	{
		year: '2023',
		category: 'software',
		commissionedBy: 'ESTELAR',
		title: { cs: 'Programování embedded zařízení', en: 'Embedded device programming' },
		description: {
			cs: 'Vývoj a úpravy více embedded zařízení a jejich funkcí.',
			en: 'Development and modifications across multiple embedded devices and their features.',
		},
		technologies: ['Embedded'],
	},
	{
		year: '2022',
		category: 'plc',
		commissionedBy: 'NC Line',
		title: { cs: 'PLC pro svařovací přípravek', en: 'Welding fixture PLC control' },
		description: {
			cs: 'Programování PLC Siemens pro svařovací přípravek.',
			en: 'Siemens PLC programming for a welding fixture.',
		},
		technologies: ['Siemens PLC'],
	},
	{
		year: '2022',
		category: 'plc',
		commissionedBy: 'PKS servis',
		title: { cs: 'PLC pro lisovací stroj', en: 'Pressing machine PLC control' },
		description: {
			cs: 'Programování PLC Siemens pro lisovací stroj.',
			en: 'Siemens PLC programming for a pressing machine.',
		},
		technologies: ['Siemens PLC'],
	},
	{
		year: '2022',
		category: 'plc',
		commissionedBy: 'ELCOM',
		title: { cs: 'Programování průmyslového přípravku', en: 'Industrial fixture programming' },
		description: {
			cs: 'Programátorské práce na průmyslovém pulzačním přípravku.',
			en: 'Programming work on an industrial pulsation fixture.',
		},
		technologies: ['Beckhoff TwinCAT'],
	},
	{
		year: '2022',
		category: 'software',
		endCustomer: 'Hyundai',
		title: { cs: 'Úprava kamerového systému', en: 'Vision system modification' },
		description: {
			cs: 'Úprava stávajícího kamerového systému pro průmyslovou kontrolu.',
			en: 'Modification of an existing industrial inspection camera system.',
		},
		technologies: ['Machine vision'],
	},
	{
		year: '2022',
		category: 'eol',
		endCustomer: 'VALEO · Rakovník',
		title: { cs: 'Podpora testování snímačů', en: 'Sensor testing support' },
		description: {
			cs: 'Podpora testovací linky a měření reverzního proudu.',
			en: 'Test-line support and reverse-current measurement.',
		},
		technologies: ['EoL', 'Measurement'],
	},
	{
		year: '2021',
		category: 'software',
		commissionedBy: 'ESTELAR',
		title: { cs: 'Síťové funkce embedded zařízení', en: 'Networked embedded device features' },
		description: {
			cs: 'Vývoj firmware, síťových služeb a webového rozhraní pro embedded zařízení.',
			en: 'Firmware development, network services and a web interface for embedded devices.',
		},
		technologies: ['STM32', 'LwIP', 'UART', 'HTTP', 'REST API'],
	},
	{
		year: '2021',
		category: 'eol',
		commissionedBy: 'Ebike Electronic',
		title: { cs: 'Testovací aplikace pro výrobu', en: 'Production testing application' },
		description: {
			cs: 'Programování aplikace pro testování produktů ve výrobě.',
			en: 'Development of an application for production testing.',
		},
		technologies: ['Test application'],
	},
	{
		year: '2020',
		category: 'software',
		title: { cs: 'Import a export ekonomických dat', en: 'Business data import and export' },
		description: {
			cs: 'Vývoj softwarové nadstavby pro import a export dat ekonomického systému.',
			en: 'Software extension for importing and exporting business system data.',
		},
		technologies: ['PC application', 'Data exchange'],
	},
	{
		year: '2019',
		category: 'eol',
		endCustomer: 'VALEO Interior Controls · Shenzhen',
		title: { cs: 'Testovací framework pro automobilové jednotky', en: 'Automotive unit test framework' },
		description: {
			cs: 'Vývoj testovacího frameworku a komunikační knihovny CAN.',
			en: 'Development of a test framework and CAN communication library.',
		},
		technologies: ['NI LabWindows/CVI', 'CAN'],
	},
	{
		year: '2018',
		category: 'eol',
		endCustomer: 'VALEO · Rakovník',
		title: { cs: 'Elektroprojekt a řízení EoL testeru', en: 'EoL tester electrical design and control' },
		description: {
			cs: 'Návrh zapojení testeru, PLC projektu a PC testovací sekvence.',
			en: 'Tester electrical design, PLC project and PC test sequence.',
		},
		technologies: ['EoL', 'PLC', 'PC'],
	},
	{
		year: '2017',
		category: 'eol',
		endCustomer: 'Continental · Trutnov',
		title: { cs: 'Oživení testeru čerpadel', en: 'Pump tester commissioning' },
		description: {
			cs: 'Programování, oživení a softwarová podpora koncového testeru čerpadel.',
			en: 'Programming, commissioning and software support for an end-of-line pump tester.',
		},
		technologies: ['EoL', 'Testing'],
	},
	{
		year: '2017',
		category: 'software',
		endCustomer: 'PF Plasty',
		title: { cs: 'Nastavení kamerové inspekce', en: 'Camera inspection setup' },
		description: {
			cs: 'Nastavení a softwarová podpora kamerové inspekce.',
			en: 'Configuration and software support for camera inspection.',
		},
		technologies: ['Machine vision', 'Baumer'],
	},
];

function getReferenceAdditions(locale: Locale) {
	return additions.map((project) => ({
		year: project.year,
		client: project.endCustomer
			?? (project.commissionedBy
				? locale === 'cs'
					? `Objednavatel: ${project.commissionedBy} · koncový zákazník neuveden`
					: `Commissioned by: ${project.commissionedBy} · end customer not specified`
				: locale === 'cs' ? 'Koncový zákazník neuveden' : 'End customer not specified'),
		title: project.title[locale],
		description: project.description[locale],
		technologies: project.technologies,
		category: project.category,
	}));
}

type CzechProject = {
	year: string;
	client: string;
	title: string;
	description: string;
	technologies: string[];
	category: Category;
	badges?: string[];
};

const czechAdditions = getReferenceAdditions('cs');
export const czechReferenceGroups: { id: string; label: string; context: string; projects: CzechProject[] }[] = [
	...['2026', '2025', '2024', '2023', '2022'].map((year) => ({
		id: year,
		label: year,
		context: 'OSVČ',
		projects: [],
	})),
	{
		id: '2021',
		label: '2021',
		context: 'OSVČ',
		projects: [
			{
				year: '2021',
				client: 'VALEO · Rakovník',
				title: 'EoL tester klimatizačního panelu PQ26',
				description:
					'Integrace projektu PQ26 do koncového testeru pro testování panelu řízení klimatizace.',
				technologies: ['C/C++', 'NI LabWindows/CVI', 'MySQL', 'CAN', 'V-Line'],
				category: 'eol',
			},
			{
				year: '2021',
				client: 'KSR Industrial · Opava',
				title: 'Sběr dat ze strojů Engel a Arburg',
				description: 'Vývoj aplikace pro sběr a ukládání výrobních dat z lisovacích strojů.',
				technologies: ['Qt', 'C++', 'MS SQL'],
				category: 'software',
			},
			{
				year: '2021',
				client: 'KSR Industrial · Opava',
				title: 'Laboratorní tester automobilových pedálů',
				description:
					'Testovací aplikace a řídicí logika pro laboratorní pracoviště včetně parametrizace terminálu VTEM.',
				technologies: ['Testovací aplikace', 'PLC FESTO', 'CODESYS', 'VTEM'],
				category: 'eol',
			},
		],
	},
	{
		id: '2020',
		label: '2020',
		context: 'OSVČ',
		projects: [
			{
				year: '2020',
				client: 'Estelar s.r.o.',
				title: 'STM32 aplikace a převodník UART–Ethernet',
				description:
					'Vývoj firmware pro mikrokontrolér STM32 a síťových služeb pro převodník UART na Ethernet.',
				technologies: ['STM32 CubeIDE', 'C/C++', 'RTOS', 'LwIP', 'MbedTLS', 'HTTP/HTTPS', 'REST'],
				category: 'software',
			},
			{
				year: '2020',
				client: 'URC Systems s.r.o.',
				title: 'Front-end aplikace GERASIM',
				description:
					'Uživatelské rozhraní modulárního generátoru radiotechnických signálů.',
				technologies: ['Qt', 'C++'],
				category: 'software',
			},
			{
				year: '2020',
				client: 'KSR Industrial · Opava',
				title: 'Svařovací přípravek',
				description: 'Programování řídicího systému svařovacího přípravku.',
				technologies: ['PLC Siemens S7-200'],
				category: 'plc',
			},
			{
				year: '2020',
				client: 'Automotive Lighting · Jihlava',
				title: 'EoL tester světlometů VW Tiguan',
				description:
					'Nasvěcování a koncové seřízení světlometů; parametrizace aplikace pro kontrolu světelných funkcí a mechanického ustavení.',
				technologies: ['NI LabVIEW', 'ELCOM a.s.'],
				category: 'eol',
			},
			{
				year: '2020',
				client: 'VALEO · Rakovník',
				title: 'EoL tester dešťového snímače Gen61',
				description:
					'Vývoj testovací aplikace a sekvence pro ověření dešťového snímače v koncovém testeru.',
				technologies: ['NI TestStand', 'LIN', 'NI-XNET'],
				category: 'eol',
			},
		],
	},
	{
		id: '2019',
		label: '2019',
		context: 'OSVČ',
		projects: [
			{
				year: '2019',
				client: 'VALEO · Rakovník',
				title: 'EoL tester dešťového snímače',
				description: 'Testovací aplikace a sekvence pro kontrolu dešťového snímače.',
				technologies: ['NI TestStand', 'LIN', 'NI-XNET'],
				category: 'eol',
			},
			{
				year: '2019',
				client: 'Automotive Lighting · Jihlava',
				title: 'EoL tester světlometů BMW F60LCI',
				description:
					'Nasvěcování a koncové seřízení světlometů včetně kontroly světelných funkcí a mechanického ustavení.',
				technologies: ['NI LabVIEW', 'ELCOM a.s.'],
				category: 'eol',
			},
			{
				year: '2019',
				client: 'KSR Industrial · Hannover',
				title: 'Laboratorní tester automobilových pedálů',
				description: 'Vývoj testovací aplikace pro laboratorní tester pedálů.',
				technologies: ['Testovací aplikace'],
				category: 'eol',
			},
			{
				year: '2019',
				client: 'VALEO Interior Controls · Shenzhen',
				title: 'EoL tester systému DMS',
				description:
					'Testování systému sledování řidiče (Driver Monitoring System) v koncovém testeru.',
				technologies: ['Testovací aplikace', 'MySQL', 'CAN', 'NI-XNET'],
				category: 'eol',
			},
			{
				year: '2019',
				client: 'Automotive Lighting · Jihlava',
				title: 'EoL tester světlometů AUDI A4',
				description:
					'Nasvěcování a koncové seřízení světlometů; nastavení aplikace pro kontrolu světelných funkcí a mechanického ustavení.',
				technologies: ['NI LabVIEW', 'ELCOM a.s.'],
				category: 'eol',
			},
			{
				year: '2019',
				client: 'VALEO Interior Controls · Shenzhen',
				title: 'EoL tester klimatizačního panelu FORD V362 MCA',
				description:
					'Integrace projektu do koncového testeru pro testování panelu řízení klimatizace.',
				technologies: ['C/C++', 'NI LabWindows/CVI', 'MySQL', 'CAN', 'V-Line'],
				category: 'eol',
			},
		],
	},
	{
		id: '2018',
		label: '2018',
		context: 'OSVČ',
		projects: [
			{
				year: '2018',
				client: 'Hyundai Motor Czech · Nošovice',
				title: 'Kamerový systém pro výstupní kontrolu převodovek',
				description:
					'Aplikace pro záznam snímků převodovek z kamer a podporu výstupní kontroly.',
				technologies: ['Qt', 'C++', 'Průmyslové kamery'],
				category: 'software',
			},
			{
				year: '2018',
				client: 'KSR Industrial · Opava',
				title: 'Vyhodnocení pozice svařené matky',
				description: 'Programování PLC a vyhodnocení polohy svařované matky.',
				technologies: ['OMC8000', 'Orbit Merret', 'MULTIPROG'],
				category: 'plc',
			},
			{
				year: '2018',
				client: 'VALEO Automotive Air Conditioning · Nanjing',
				title: 'EoL měření hluku a vibrací · MQB A0 / MQB 34',
				description:
					'Zprovoznění systému SAVAS pro měření hluku a vibrací na straně zákazníka.',
				technologies: ['SAVAS', 'ELCOM a.s.', 'EoL tester'],
				category: 'eol',
			},
			{
				year: '2018',
				client: 'VALEO Interior Controls · Shenzhen',
				title: 'EoL tester klimatizačního panelu FORD C519',
				description:
					'Integrace projektu do koncového testeru pro testování panelu řízení klimatizace.',
				technologies: ['C/C++', 'NI LabWindows/CVI', 'MySQL', 'CAN', 'V-Line'],
				category: 'eol',
			},
			{
				year: '2018',
				client: 'Automotive Lighting · Jihlava',
				title: 'EoL tester světlometů VW Tiguan',
				description:
					'Nasvěcování a koncové seřízení světlometů včetně kontroly světelných funkcí.',
				technologies: ['NI LabVIEW', 'ELCOM a.s.'],
				category: 'eol',
			},
			{
				year: '2018',
				client: 'MASSAG · Bílovec',
				title: 'Aplikace pro potisk trubek',
				description:
					'PC aplikace pro popisovačku trubek s PLC návazností a uživatelským rozhraním.',
				technologies: ['Qt', 'C++', 'PLC OMC8000', 'Orbit Merret', 'MULTIPROG'],
				category: 'software',
			},
		],
	},
	{
		id: '2017',
		label: '2017',
		context: 'OSVČ',
		projects: [
			{
				year: '2017',
				client: 'VALEO · Rakovník',
				title: 'EoL tester dotykového panelu T9',
				description:
					'Integrace projektu T9 do koncového testeru pro testování dotykového panelu.',
				technologies: ['C/C++', 'NI LabWindows/CVI', 'MySQL', 'CAN', 'LIN', 'V-Line'],
				category: 'eol',
			},
			{
				year: '2017',
				client: 'FAW & VALEO Automotive Air Conditioning · Qingdao',
				title: 'EoL měření hluku a vibrací · MQB 34',
				description:
					'Zprovoznění systému SAVAS pro měření hluku a vibrací na straně zákazníka.',
				technologies: ['SAVAS', 'ELCOM a.s.', 'EoL tester'],
				category: 'eol',
			},
			{
				year: '2017',
				client: 'VALEO Interior Controls · Shenzhen',
				title: 'EoL tester klimatizačního panelu FORD C490MCA',
				description:
					'Integrace projektu do koncového testeru pro testování panelu řízení klimatizace.',
				technologies: ['C/C++', 'NI LabWindows/CVI', 'MySQL', 'CAN', 'V-Line'],
				category: 'eol',
			},
			{
				year: '2017',
				client: 'Automotive Lighting · Jihlava',
				title: 'EoL tester světlometů BMW',
				description:
					'Nasvěcování a koncové seřízení světlometů včetně kontroly světelných funkcí.',
				technologies: ['NI LabVIEW', 'ELCOM a.s.'],
				category: 'eol',
			},
		],
	},
	{
		id: '2014-2016',
		label: '2014–2016',
		context: 'Ve spolupráci se Suzhou Elcom Automation Technology Co., Ltd.',
		projects: [
			{
				year: '2016',
				client: 'VALEO Interior Controls · Shenzhen',
				title: 'EoL tester dotykového panelu T9HD',
				description:
					'Integrace projektu T9HD do koncového testeru pro testování dotykového panelu.',
				technologies: ['C/C++', 'NI LabWindows/CVI', 'NI TestStand', 'MySQL', 'CAN', 'LIN', 'V-Line'],
				category: 'eol',
			},
			{
				year: '2014–2016',
				client: 'Magneti Marelli · Automotive Lighting · Čína',
				title: 'EoL testery světlometů — Magneti Marelli (Čína)',
				description:
					'Elektrické projekty strojů pro přednasvěcování a finální seřízení světlometů napříč výrobními závody Foshan, Wuhu a Xiaogan.',
				technologies: ['Beckhoff TwinCAT 2', 'MODBUS', 'Elektro projekt', 'HMI'],
				category: 'eol',
				badges: [
					'PSA X74',
					'GM Chevrolet D2JBI',
					'Jeep J523HL',
					'VW SVW376',
					'VW SVW511',
					'VW SVW378',
					'VW SVW253',
					'GM Chevrolet D586C',
				],
			},
			{
				year: '2014',
				client: 'Magneti Marelli · Automotive Lighting · Wuhu',
				title: 'EoL tester světlometů MBC W205',
				description: 'Asistence při přejímce stroje na straně zákazníka.',
				technologies: ['Přejímka stroje'],
				category: 'eol',
			},
		],
	},
];

for (const group of czechReferenceGroups) {
	group.projects.push(...czechAdditions.filter((project) => project.year === group.id));
}

type EnglishProject = {
	year: string;
	client: string;
	title: string;
	description: string;
	technologies: string[];
};

const englishAdditions = getReferenceAdditions('en');
export const englishReferenceGroups: { id: string; label: string; context: string; projects: EnglishProject[] }[] = [
	...['2026', '2025', '2024', '2023', '2022'].map((year) => ({
		id: year,
		label: year,
		context: 'Independent contractor',
		projects: [],
	})),
	{
		id: '2021',
		label: '2021',
		context: 'Independent contractor',
		projects: [
			{
				year: '2021',
				client: 'VALEO · Rakovník',
				title: 'PQ26 climate control panel EoL tester',
				description: 'Integrated the PQ26 project into an end-of-line tester for climate control panels.',
				technologies: ['C/C++', 'NI LabWindows/CVI', 'MySQL', 'CAN', 'V-Line'],
			},
			{
				year: '2021',
				client: 'KSR Industrial · Opava',
				title: 'Data acquisition from Engel and Arburg machines',
				description: 'Developed an application to collect and store production data from injection moulding machines.',
				technologies: ['Qt', 'C++', 'MS SQL'],
			},
			{
				year: '2021',
				client: 'KSR Industrial · Opava',
				title: 'Automotive pedal laboratory tester',
				description: 'Test application and control logic for a laboratory test station, including VTEM terminal configuration.',
				technologies: ['Test application', 'FESTO PLC', 'CODESYS', 'VTEM'],
			},
		],
	},
	{
		id: '2020',
		label: '2020',
		context: 'Independent contractor',
		projects: [
			{
				year: '2020',
				client: 'Estelar s.r.o.',
				title: 'STM32 application and UART–Ethernet gateway',
				description: 'Developed STM32 firmware and network services for a UART-to-Ethernet gateway.',
				technologies: ['STM32 CubeIDE', 'C/C++', 'RTOS', 'LwIP', 'MbedTLS', 'HTTP/HTTPS', 'REST'],
			},
			{
				year: '2020',
				client: 'URC Systems s.r.o.',
				title: 'GERASIM application front end',
				description: 'User interface for a modular radio-frequency signal generator.',
				technologies: ['Qt', 'C++'],
			},
			{
				year: '2020',
				client: 'KSR Industrial · Opava',
				title: 'Welding fixture',
				description: 'Programming the control system for a welding fixture.',
				technologies: ['Siemens S7-200 PLC'],
			},
			{
				year: '2020',
				client: 'Automotive Lighting · Jihlava',
				title: 'VW Tiguan headlamp EoL tester',
				description: 'Headlamp illumination and final aiming, with application configuration for lighting functions and mechanical alignment checks.',
				technologies: ['NI LabVIEW', 'ELCOM a.s.'],
			},
			{
				year: '2020',
				client: 'VALEO · Rakovník',
				title: 'Gen61 rain sensor EoL tester',
				description: 'Developed the test application and sequence for verification of a rain sensor on an end-of-line tester.',
				technologies: ['NI TestStand', 'LIN', 'NI-XNET'],
			},
		],
	},
	{
		id: '2019',
		label: '2019',
		context: 'Independent contractor',
		projects: [
			{
				year: '2019',
				client: 'VALEO · Rakovník',
				title: 'Rain sensor EoL tester',
				description: 'Test application and sequence for rain sensor inspection.',
				technologies: ['NI TestStand', 'LIN', 'NI-XNET'],
			},
			{
				year: '2019',
				client: 'Automotive Lighting · Jihlava',
				title: 'BMW F60 LCI headlamp EoL tester',
				description: 'Headlamp illumination and final aiming, including checks of lighting functions and mechanical alignment.',
				technologies: ['NI LabVIEW', 'ELCOM a.s.'],
			},
			{
				year: '2019',
				client: 'KSR Industrial · Hannover',
				title: 'Automotive pedal laboratory tester',
				description: 'Developed a test application for a laboratory pedal tester.',
				technologies: ['Test application'],
			},
			{
				year: '2019',
				client: 'VALEO Interior Controls · Shenzhen',
				title: 'Driver Monitoring System (DMS) EoL tester',
				description: 'End-of-line testing of a driver monitoring system.',
				technologies: ['Test application', 'MySQL', 'CAN', 'NI-XNET'],
			},
			{
				year: '2019',
				client: 'Automotive Lighting · Jihlava',
				title: 'AUDI A4 headlamp EoL tester',
				description: 'Headlamp illumination and final aiming, with application setup for lighting function and mechanical alignment checks.',
				technologies: ['NI LabVIEW', 'ELCOM a.s.'],
			},
			{
				year: '2019',
				client: 'VALEO Interior Controls · Shenzhen',
				title: 'FORD V362 MCA climate control panel EoL tester',
				description: 'Integrated the project into an end-of-line tester for climate control panels.',
				technologies: ['C/C++', 'NI LabWindows/CVI', 'MySQL', 'CAN', 'V-Line'],
			},
		],
	},
	{
		id: '2018',
		label: '2018',
		context: 'Independent contractor',
		projects: [
			{
				year: '2018',
				client: 'Hyundai Motor Czech · Nošovice',
				title: 'Vision system for transmission final inspection',
				description: 'Application to capture images of transmissions from cameras and support final inspection.',
				technologies: ['Qt', 'C++', 'Industrial cameras'],
			},
			{
				year: '2018',
				client: 'KSR Industrial · Opava',
				title: 'Welded nut position evaluation',
				description: 'PLC programming and evaluation of the welded nut position.',
				technologies: ['OMC8000', 'Orbit Merret', 'MULTIPROG'],
			},
			{
				year: '2018',
				client: 'VALEO Automotive Air Conditioning · Nanjing',
				title: 'MQB A0 / MQB 34 noise and vibration EoL measurement',
				description: 'Commissioned the SAVAS noise and vibration measurement system at the customer site.',
				technologies: ['SAVAS', 'ELCOM a.s.', 'EoL tester'],
			},
			{
				year: '2018',
				client: 'VALEO Interior Controls · Shenzhen',
				title: 'FORD C519 climate control panel EoL tester',
				description: 'Integrated the project into an end-of-line tester for climate control panels.',
				technologies: ['C/C++', 'NI LabWindows/CVI', 'MySQL', 'CAN', 'V-Line'],
			},
			{
				year: '2018',
				client: 'Automotive Lighting · Jihlava',
				title: 'VW Tiguan headlamp EoL tester',
				description: 'Headlamp illumination and final aiming, including checks of lighting functions.',
				technologies: ['NI LabVIEW', 'ELCOM a.s.'],
			},
			{
				year: '2018',
				client: 'MASSAG · Bílovec',
				title: 'Pipe marking application',
				description: 'PC application for a pipe marking machine, integrated with a PLC and operator interface.',
				technologies: ['Qt', 'C++', 'OMC8000 PLC', 'Orbit Merret', 'MULTIPROG'],
			},
		],
	},
	{
		id: '2017',
		label: '2017',
		context: 'Independent contractor',
		projects: [
			{
				year: '2017',
				client: 'VALEO · Rakovník',
				title: 'T9 touch panel EoL tester',
				description: 'Integrated the T9 project into an end-of-line tester for touch panels.',
				technologies: ['C/C++', 'NI LabWindows/CVI', 'MySQL', 'CAN', 'LIN', 'V-Line'],
			},
			{
				year: '2017',
				client: 'FAW & VALEO Automotive Air Conditioning · Qingdao',
				title: 'MQB 34 noise and vibration EoL measurement',
				description: 'Commissioned the SAVAS noise and vibration measurement system at the customer site.',
				technologies: ['SAVAS', 'ELCOM a.s.', 'EoL tester'],
			},
			{
				year: '2017',
				client: 'VALEO Interior Controls · Shenzhen',
				title: 'FORD C490MCA climate control panel EoL tester',
				description: 'Integrated the project into an end-of-line tester for climate control panels.',
				technologies: ['C/C++', 'NI LabWindows/CVI', 'MySQL', 'CAN', 'V-Line'],
			},
			{
				year: '2017',
				client: 'Automotive Lighting · Jihlava',
				title: 'BMW headlamp EoL tester',
				description: 'Headlamp illumination and final aiming, including checks of lighting functions.',
				technologies: ['NI LabVIEW', 'ELCOM a.s.'],
			},
		],
	},
	{
		id: '2014-2016',
		label: '2014–2016',
		context: 'In cooperation with Suzhou Elcom Automation Technology Co., Ltd.',
		projects: [
			{
				year: '2016',
				client: 'VALEO Interior Controls · Shenzhen',
				title: 'T9HD touch panel EoL tester',
				description: 'Integrated the T9HD project into an end-of-line tester for touch panels.',
				technologies: ['C/C++', 'NI LabWindows/CVI', 'NI TestStand', 'MySQL', 'CAN', 'LIN', 'V-Line'],
			},
			{
				year: '2016',
				client: 'Magneti Marelli · Automotive Lighting · Foshan',
				title: 'PSA X74 headlamp EoL tester',
				description: 'Electrical design of a machine for pre-aiming and final aiming of headlamps.',
				technologies: ['Beckhoff TwinCAT 2', 'MODBUS', 'User interface'],
			},
			{
				year: '2015',
				client: 'Magneti Marelli · Automotive Lighting · Wuhu',
				title: 'GM Chevrolet D2JBI headlamp EoL tester',
				description: 'Electrical design of a machine for final headlamp aiming.',
				technologies: ['Beckhoff TwinCAT 2', 'MODBUS', 'User interface'],
			},
			{
				year: '2015',
				client: 'Magneti Marelli · Automotive Lighting · Foshan',
				title: 'Jeep J523HL headlamp EoL tester',
				description: 'Electrical design of a machine for final headlamp aiming.',
				technologies: ['Beckhoff TwinCAT 2', 'MODBUS', 'User interface'],
			},
			{
				year: '2015',
				client: 'Magneti Marelli · Automotive Lighting · Wuhu',
				title: 'VW SVW376 headlamp EoL tester',
				description: 'Electrical design of a machine for final headlamp aiming.',
				technologies: ['Beckhoff TwinCAT 2', 'MODBUS', 'User interface'],
			},
			{
				year: '2015',
				client: 'Magneti Marelli · Automotive Lighting · Wuhu',
				title: 'VW SVW511 headlamp EoL tester',
				description: 'Electrical design of a machine for final headlamp aiming.',
				technologies: ['Beckhoff TwinCAT 2', 'MODBUS', 'User interface'],
			},
			{
				year: '2014',
				client: 'Magneti Marelli · Automotive Lighting · Wuhu',
				title: 'VW SVW378 headlamp EoL tester',
				description: 'Electrical design of a machine for final headlamp aiming.',
				technologies: ['Beckhoff TwinCAT 2', 'MODBUS', 'User interface'],
			},
			{
				year: '2014',
				client: 'Magneti Marelli · Automotive Lighting · Wuhu',
				title: 'VW SVW253 headlamp EoL tester',
				description: 'Electrical design of a machine for final headlamp aiming.',
				technologies: ['Beckhoff TwinCAT 2', 'MODBUS', 'User interface'],
			},
			{
				year: '2014',
				client: 'Magneti Marelli · Automotive Lighting · Xiaogan',
				title: 'GM Chevrolet D586C headlamp EoL tester',
				description: 'Electrical design of a machine for final headlamp aiming.',
				technologies: ['Beckhoff TwinCAT 2', 'MODBUS', 'User interface'],
			},
			{
				year: '2014',
				client: 'Magneti Marelli · Automotive Lighting · Wuhu',
				title: 'MBC W205 headlamp EoL tester',
				description: 'Assisted with machine acceptance at the customer site.',
				technologies: ['Machine acceptance'],
			},
		],
	},
];

for (const group of englishReferenceGroups) {
	group.projects.push(...englishAdditions.filter((project) => project.year === group.id));
}
