# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and Open Graph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## Editing references

Edit [refereces.csv](src/data/refereces.csv) in a spreadsheet or text editor. Save it as UTF-8 CSV with a semicolon (`;`) delimiter and keep the header row. Both reference pages read this file when the site builds.

- Set `show_cs` and `show_en` to `1` to publish a language, or `0` to hide it. Published languages require their `client`, `title`, and `description` columns. Use `eol`, `plc`, or `software` for `category`.
- Separate multiple customers, technologies, or badges with ` | `. The `customer`, `end_customer`, and `commissioned_by` fields are data only; the `client_cs` and `client_en` fields are what the pages display.
- [offers.csv](src/data/offers.csv) contains one row per accounting folder and is not read by the website. If the folder specifies no separate end customer, it is the same as the customer. To publish an offer, add a reference row and enter its details and visibility there. Only one reference with the same `reference_group` may be published per language.
- Offer `project_description` values are editable Czech descriptions, based on matching offer PDFs or references where available. They are not updated automatically; some offers have no description.
- [customers.csv](src/data/customers.csv) is an editable snapshot of distinct customer and end-customer names from the offers. Its `direct_customer` and `end_customer` columns indicate each role with `1` or `0`; it is not updated automatically.
- Folder-derived names are provisional, not proof that a project was completed.
- The Czech 2014–2016 Magneti Marelli card is consolidated; the corresponding English-only rows retain the existing individual cards.

The CSV files contain customer and offer metadata. They are not included in the generated site, but they **will be visible in the repository** if committed to a public repository.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
