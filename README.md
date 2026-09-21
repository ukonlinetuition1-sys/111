# UK Online Tuition — unpublished coded draft

**This repository is not the production website.**

This branch reuses the existing ten-page HTML/CSS/JS site as a coded draft following user approval on 21 September 2026. Its latest visual update matches the current rendered live site across all ten pages. It does not alter or replace any Wix site. No workflow deploys this site.

## View and develop

Use a current Node.js version supported by Vite 8, then run:

```sh
npm ci
npm run dev
```

`npm run check` checks local references, page structure, draft indexing protection and JavaScript syntax. `npm run build` runs those checks and writes the static draft to `dist/`. You can also open `index.html` directly after downloading and extracting the files.

## Draft limits

The enquiry form only checks sample details locally. It cannot send or store enquiries. Existing Wix forms, notification routing and Smart Chat remain unchanged and are not connected to this draft. No Blog content migration, domain changes or publication is included.

Read `agency/QA_2026-09-21.md` for tested behaviour and remaining integration work. Historical Wix findings in the state and queue documents are retained as context, not instructions to modify protected sites.
