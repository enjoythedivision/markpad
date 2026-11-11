# Markpad

A frontend-only Markdown documentation reader built with React, TypeScript, Vite, and CSS.
This is an incremental portfolio and learning project. The landing page lets users choose one
or more Markdown files, then opens a workspace listing their filenames. Reading document
contents, Markdown rendering, and document navigation are upcoming milestones.

## Getting started

Use Node.js 22.18+ on the 22.x line, or Node.js 24+.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite in your browser. Stop the server with Ctrl+C.

## Commands

| Command                | Purpose                                              |
| ---------------------- | ---------------------------------------------------- |
| `npm run dev`          | Start Vite with React hot reload.                    |
| `npm run typecheck`    | Check browser source and Vite configuration types.   |
| `npm run lint`         | Check code with ESLint, including React Hooks rules. |
| `npm run format`       | Format project files with Prettier.                  |
| `npm run format:check` | Check formatting without changing files.             |
| `npm run build`        | Check types and create production assets in `dist/`. |
| `npm run preview`      | Serve the production build locally.                  |

## Project structure

```text
index.html            HTML entry point and root element
src/main.tsx          Mounts the React application
src/App.tsx           Root React component
src/components/LandingPage.tsx  Welcome screen and file selection
src/components/Sidebar.tsx  Sidebar component
src/index.css         Global styles
src/vite-env.d.ts     Vite's browser TypeScript definitions
vite.config.ts        Vite and React plugin configuration
tsconfig.json         Shared TypeScript settings for source and Vite configuration
eslint.config.mjs     Linting rules
```

React manages the interface and state. TypeScript checks types during development.
Vite serves source code during development and builds static assets for deployment.
Node.js is needed for these development tools; the application itself runs in a browser.

## File access and planned scope

Markpad accepts `.md` and `.markdown` files explicitly selected using a browser file picker.
Invalid selections show an error; cancelling the picker keeps the landing page open.
Selected `File` objects live in React state and are cleared by a page refresh. File contents
are not read or sent to a server. The sidebar currently lists filenames without navigation.

Markpad will read the selected documents using browser file APIs.
It cannot freely access the local filesystem. Directory import will depend on browser
support. Documents will be processed locally; there is no backend, authentication,
database, or server-side file storage.

`react-markdown`, `remark-gfm`, and `rehype-highlight` will be introduced in the
Markdown milestone rather than installed before they are needed.

## Configuration

The project uses one TypeScript configuration for application code and Vite's configuration.
Strict type checking remains enabled. This small setup shares browser and Node type definitions;
Node is used by the development tools and does not provide filesystem access in the browser.

Prettier settings live in `package.json`. Formatting commands target source code, root code files,
and documentation directly, so a separate formatter configuration and ignore file are unnecessary.
ESLint runs without a cache file. Editor preferences are left to your own editor settings.

## Progress

- [x] 1. Project setup — migrated to React, TypeScript, and Vite; configuration simplified.
- [ ] 2. UI foundation — landing, upload CTA, workspace, and responsive layout added; document viewer and table-of-contents panel pending.
- [ ] 3. Markdown rendering.
- [ ] 4. File import — multiple-file picker and extension validation added; reading contents and directory import pending.
- [ ] 5. Document navigation.
- [ ] 6. Table of contents.
- [ ] 7. Search.
- [ ] 8. Preferences.
- [ ] 9. Polish and quality.
- [ ] 10. Deployment.

The starter conversion was implemented by the assistant at the user's request. Concepts to
review together include the HTML entry point, mounting React, components, type checking,
and development versus production builds. Understanding these concepts is still part of
our learning work.

Lint, formatting, type checking, production build, and local HTTP serving have been verified.
Browser visual inspection has not been automated. Markdown reading and navigation are not implemented yet.

Next milestone: build the sidebar, document viewer, and table-of-contents layout.
