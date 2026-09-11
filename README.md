# UK Online Tuition – standalone rebuild

Production-oriented static rebuild of UK Online Tuition.

## Architecture
- Multi-page static HTML, not an iframe or overlay.
- Shared CSS and small progressive-enhancement JavaScript.
- Core content is present in HTML for crawlability.
- GitHub Pages deployment workflow.
- Staging is intentionally `noindex` until the production domain is switched.

## Before production launch
1. Connect the secure enquiry form delivery service.
2. Remove the page-level `noindex,nofollow` meta tags.
3. Change `robots.txt` to allow crawling and reference `sitemap.xml`.
4. Connect `www.ukonlinetuition.co.uk`.
5. Run accessibility, mobile and performance checks on the final domain.
