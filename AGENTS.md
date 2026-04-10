# AGENTS.md

## Project overview

This project uses:

- React
- TypeScript
- Mantine
- React Router v7
- Zod
- Vite
- pnpm
- React Compiler via `babel-plugin-react-compiler`

Follow the existing project patterns before introducing new abstractions or new structure.

## General working rules

- Prefer small, localized, and easy-to-review changes.
- Do not modify unrelated files.
- Do not add new dependencies unless they are clearly necessary.
- Reuse existing code patterns from nearby files whenever possible.
- Prefer editing an existing component, page, layout, hook, or shared type before creating a new one.
- Avoid unnecessary refactors unless the task explicitly requires them.
- When making a change, preserve consistency with the surrounding feature or module.
- Prefer aligning with the current repository conventions over introducing new local patterns ad hoc.

## Continuous improvement

- When a recurring mistake, improvement, or better project convention is discovered, update `AGENTS.md` in a focused way so future iterations do not repeat the same issue.
- Prefer improving project instructions when the same correction is likely to be useful again.
- Keep instruction updates concise, practical, and specific to this repository.
- Do not add speculative rules; only capture conventions that are already real, validated, or intentionally adopted.
- When a design-system or UI consistency decision is intentionally adopted during implementation, update `AGENTS.md` in the same task so the rule becomes part of the repository convention.

## React rules

- Prefer functional components and hooks.
- Keep components focused and reasonably small.
- Prefer granular, focused components over large multi-purpose components.
- Lift state only when necessary.
- Avoid premature abstractions.
- Prefer composition over overly complex component APIs.
- When a component grows too much in size or responsibility, extract subcomponents or move reusable logic to hooks.
- Keep rendering logic, state management, and side effects separated when possible.
- Prefer declarative code over imperative UI logic when both are reasonable.
- Avoid mixing data shaping, business rules, event orchestration, and large UI markup in the same file when separation would improve clarity.

## Modularity

- Avoid creating very large files with mixed responsibilities.
- If a file becomes too large or hard to reason about, split UI into smaller components.
- Move reusable or complex stateful logic into custom hooks when it improves clarity.
- Prefer modularization that improves readability and maintainability, not fragmentation without purpose.
- Keep each file focused on a single clear responsibility whenever possible.
- Avoid page files that contain large amounts of inline business logic, transformation logic, and UI markup all mixed together.
- If logic is reused across components in the same module, prefer extracting it once instead of duplicating it.
- Do not split code into many tiny files unless it clearly improves readability, testing, reuse, or ownership.

## TypeScript rules

- Use strict typing.
- Avoid `any` unless unavoidable.
- Use explicit types for component props.
- Reuse existing shared types before creating new ones.
- Prefer safe narrowing and type guards over unsafe assertions.
- Use PascalCase for React components, types, interfaces, enums, and other code symbols.
- Prefer inferred types when they are clear and stable, but do not sacrifice readability.
- Export shared types when they are part of a module contract.
- Keep type definitions close to the feature unless they are truly shared.
- Prefer modeling data shapes explicitly instead of relying on loose object usage.
- Keep public types stable and predictable at module boundaries.

## UI and Mantine rules

- Prefer Mantine components over custom UI when possible.
- Reuse shared components before creating new ones.
- Reuse shared layout and form patterns already present in the repo.
- Do not hardcode colors, spacing, radius, shadows, or breakpoints repeatedly across files.
- Use the project theme for visual consistency.
- Prefer extending the theme instead of duplicating visual values across components.
- If a visual decision is shared or repeated, move it to the theme or to a shared component.
- Prefer Mantine layout primitives and component APIs before introducing custom styling wrappers.
- Keep styling consistent with the existing Mantine approach used in the repo.
- Prefer theme-driven tokens over scattered one-off visual values.
- Avoid one-off styling decisions that bypass the design system unless they are truly isolated and justified.
- Treat Stitch as a visual and structural reference, but use the project theme as the source of truth for colors, spacing, radius, and typography.
- Prefer Mantine theme configuration and component defaults over one-off component styling.

## Design system rules

- Prefer Mantine theme tokens over hardcoded visual values.
- Do not introduce ad hoc colors, spacing, radius, or font sizes when an existing theme token is sufficient.
- Reuse the project theme before creating one-off visual styles.
- If a visual value is repeated or meant to be part of the design language, add it to the theme instead of hardcoding it in components.
- Prefer consistency with the project theme over local visual tweaks.
- Use Mantine spacing tokens (`xs`, `sm`, `md`, `lg`, `xl`) instead of arbitrary numeric spacing when possible.
- Use theme-driven color usage and avoid direct hex values in components unless there is a strong reason.
- Prefer the theme's default radius, heading scale, primary color, and component defaults before overriding values locally.
- When implementing a screen from Stitch, match the structure and hierarchy first, then adapt the visuals to the project theme instead of copying raw values literally.
- If a layout or styling pattern starts repeating across screens, extract it into the theme or a shared component rather than duplicating local styles.
- Treat indigo as the primary action color; prefer neutral `default` or gray-based treatments for secondary actions, informational badges, and decorative accents unless a semantic status color is required.
- Prefer extending Mantine component defaults in `src/theme/theme.tsx` for repeated visual decisions on `Button`, `ActionIcon`, `Badge`, `ThemeIcon`, `Tabs`, and similar primitives before adding local overrides in pages or components.
- Prefer Mantine's exposed props in `defaultProps` such as `fw`, `tt`, `radius`, `variant`, `size`, and similar before reaching for `styles`; use `styles` only when the visual rule cannot be expressed with component props.
- Prefer defining repeated avatar placeholder treatments in `src/theme/theme.tsx` so initials-based avatars inherit the same background and foreground contrast by default and only use local overrides for true exceptions.
- Prefer `Badge` light variants to use a soft surface from shade `0` and a stronger foreground from the active color scale, instead of relying on arbitrary local tint combinations.
- Prefer fixing repeated `light` and `subtle` color behavior through Mantine's global `variantColorResolver` in `src/theme/theme.tsx` when the project expects a stable surface/foreground pairing across components.
- Prefer `ThemeIcon` to inherit the system primary color by default, and make `transparent` use the strong foreground tone from the active color scale instead of Mantine's softer default when visual coherence requires it.
- Treat the sidebar and left brand area as a branded layout zone with its own visual rules: keep the base surface neutral, reserve indigo for brand and active navigation state, and avoid using generic tinted button fills for secondary sidebar actions.
- In the sidebar profile block, make the avatar and profile CTA mirror the active navigation treatment exactly: soft indigo background, indigo foreground, and no neutral text treatment on those highlighted elements.
- In the sidebar navigation, inactive items must keep neutral text with transparent background, switch only to a soft gray background on hover, and active items must use the same soft indigo background and stronger indigo text as the profile CTA without changing on hover.
- When a visual treatment is exclusive to a specific layout zone, implement it with explicit, scoped class names tied to that area and avoid relying on generic `.mantine-*` selectors unless the intent is truly global.
- If Mantine component state styles such as active or hover do not override reliably through inline `styles`, prefer a scoped module or layout CSS class that targets Mantine selectors only within that local area instead of escalating inline specificity.

## Forms and validation

- Use Mantine form patterns consistently across the project.
- Prefer schema-based validation for non-trivial forms.
- Use the validation approach already established in the repo for Mantine forms and Zod integration.
- Keep validation schemas close to the form or feature unless they are clearly shared.
- Reuse schemas and schema-derived types when they represent the same contract.
- Keep form field names, validation schema fields, and submitted payload shapes aligned.
- Prefer a single clear validation source of truth instead of duplicating validation logic in multiple places.
- For parsed or validated data, prefer safe and explicit schema-based handling over ad hoc checks.
- Avoid spreading validation rules across UI handlers, effects, and helper functions when one schema or form contract can define them clearly.

## Routing rules

- Follow the existing routing structure and patterns already present in the project.
- Follow the current React Router v7 pattern based on `createBrowserRouter`.
- Keep top-level route registration consistent with the current centralized router setup.
- Keep page-level route components inside `src/pages`.
- Do not hardcode navigation URLs repeatedly when a shared route constant or helper already exists.
- Prefer React Router navigation primitives and patterns already used in the repo.
- Keep route-related UI and route-specific logic close to the page module when practical.
- When adding navigation, preserve type safety and consistency with existing route usage.
- Prefer route organization that keeps ownership clear and avoids scattering route definitions across unrelated files.

## Date and time rules

- Use `dayjs` consistently for date formatting and date manipulation instead of mixing multiple approaches.
- Keep date formatting logic centralized when the same format is reused across the app.
- Avoid scattering magic date format strings across many files when a shared helper would improve consistency.
- Prefer shared helpers or constants for repeated date display patterns.

## Icons

- Prefer the existing icon approach already used in the surrounding module.
- Do not mix icon libraries inside the same component or tightly related UI block without a reason.
- Prefer consistent icon sizing and placement patterns across the UI.
- When an icon is purely decorative, keep the surrounding component accessible.

## Project structure

- Put shared and reusable UI components in `src/components`.
- Put page-level route components in `src/pages`.
- Put layout components in `src/layouts`.
- Put Mantine theme configuration in `src/theme`.
- Keep assets in `src/assets`.
- Keep shared domain or type definitions in the existing shared structure and reuse what already exists before creating new files.
- Keep feature-specific logic close to the page or module it belongs to unless it is actually reused.
- Prefer keeping ownership obvious: shared code in shared areas, local code near the module that owns it.

## Naming conventions

- Use `kebab-case` for all folders and file names.
- Use `PascalCase` for React components, TypeScript types, interfaces, enums, and other code symbols.
- Do not create files or folders in `PascalCase`.
- Follow the existing naming style consistently across the repo.

## File naming rules

- Page files should use descriptive kebab-case names following the current local pattern, for example: `medical-records.tsx`.
- Reusable component files should use kebab-case, for example: `data-table.tsx`, `patient-card.tsx`.
- Hook files should use kebab-case and start with `use-`, for example: `use-patients.ts`.
- Type or entity files should use kebab-case and a consistent suffix pattern across the repo.
- `index.ts` files are allowed and encouraged as module entry points when they are used only to re-export a page area, component group, layout area, hook group, or other module boundary.
- Do not create `index.ts` files for leaf modules that have no re-export purpose.
- For new type or entity files, prefer moving toward one consistent suffix pattern instead of introducing new variations.
- Existing legacy names may remain in place unless the task specifically includes standardizing them.

## Imports and exports

- Prefer the existing repo convention: use relative imports for nearby files inside the same feature, and use the `@/` alias for shared modules or cross-feature imports.
- Avoid deep cross-feature imports when a clearer module boundary is available.
- Prefer explicit exports for shared modules.
- `index.ts` re-export files are an accepted pattern in this repo when they clarify module boundaries and import paths.
- Keep re-export files focused and predictable; they should not hide ownership or mix unrelated modules.
- Prefer imports that make ownership obvious and avoid creating hidden coupling between distant modules.

## Structure boundaries

- Do not place feature-specific UI in shared folders unless it is actually reused.
- Prefer co-locating files with the page or area they belong to when appropriate.
- Reuse existing shared types before creating new global definitions.
- Do not create parallel structures that duplicate what already exists in `pages`, `components`, `layouts`, or `theme`.
- If logic is only used in one page or module, keep it local until reuse is proven.
- When introducing a new shared helper for routes, date formatting, or similar cross-cutting concerns, only extract it after repetition is real or clearly imminent.
- Shared modules should exist to reduce duplication or centralize stable behavior, not just to move code away from a page.

## Formatting and linting

- Follow the existing ESLint and Prettier configuration already present in the repo.
- Do not reformat unrelated files.
- Keep formatting changes scoped to the task.
- Respect existing lint-staged and Husky workflows.
- Do not introduce stylistic changes that conflict with the repo formatter or lint rules.

## Validation

Before finishing, run and verify:

- `pnpm lint`
- `pnpm format:check`
- `pnpm typecheck`
- `pnpm build`

## Definition of done

A task is complete when:

- The change is limited to the scope of the request.
- The code follows the existing project structure and naming rules.
- TypeScript errors are not introduced.
- Lint errors are not introduced.
- Formatting is consistent with the repo configuration.
- The UI is consistent with Mantine and the existing theme.
- Validation and forms follow the project patterns.
- Routing changes follow the existing route structure and navigation style.
- No unnecessary files, abstractions, or dependencies were added.
