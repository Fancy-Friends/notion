# Changelog

All notable changes to `@particle-academy/notion-ui`,
`@particle-academy/notion-js`, `particle-academy/notion-php` and `fancy-notion`.

## [0.1.1] — 2026-09-06

### Changed

- **Published through npm Trusted Publishing, so these packages now carry PROVENANCE.**

Every earlier release went out under a scope-wide npm token. This one is
published by an OIDC exchange from the release workflow itself, and npm records
which workflow in which repository built it.
`npm view @particle-academy/notion-ui@0.1.1` shows the attestation; releases before
this one have none.

What it buys a consumer: the tarball on the registry can be tied to a public
commit and a public workflow run, rather than to whoever held a token. What it
does not buy: nothing about the code changed, and the runtime behaviour of all
four packages is identical to 0.1.0.

- **`repository.directory` in the npm packages.**

`@particle-academy/notion-ui` and `@particle-academy/notion-js` live at
`packages/ui` and `packages/js` inside the provider repo. npm's `repository`
field now says so, which makes the "Repository" link on each package page point
at the package rather than at the repository root.

## [0.1.0] - 2026-08-28

### Added

- Retrieve page content through Notion's enhanced Markdown endpoint.
- Capability-based OAuth without invented scope strings.
- Rotating refresh-token guidance and an explicitly undocumented access-token lifetime.
- Dedicated development-workspace sandbox guidance.
- A deterministic fixture matching Notion's top-level `page_markdown` response.

[0.1.0]: https://github.com/Fancy-Friends/notion/releases/tag/v0.1.0
