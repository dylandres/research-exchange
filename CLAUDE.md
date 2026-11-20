@AGENTS.md

# Research Exchange

Product Studio (TECH 5900, Cornell Tech), Team 104, fall 2026.

HMW: "How might we improve how knowledge flows out of universities?"

Research Exchange is a two-sided platform. Companies (starting with early-stage NYC startups) submit research challenges and get matched with university researchers and labs. The name is "Research Exchange", not "The Research Exchange".

Source material (decks, docs, experiment sheets) is in the team Google Drive under "Team 104 - ...".

## Current scope

This is a **static demo** of the Maker Day 2 mockups. There is no real auth: a "Demo view" switcher in the header toggles between the company and researcher roles.

Status:

1. Done: app shell, sidebar, role switcher, seed data.
2. To do: Submit a Research Challenge (company), `/challenges/new`.
3. To do: Browse Research Challenges (researcher), `/challenges`.
4. To do: Match Details (chat, why matched, intro-call slots), `/matches`.

Unbuilt sidebar items (Dashboard, Messages and so on) are disabled on purpose.

## Code map

- `lib/demo-data.ts`: all seed data (users, companies, labs, challenges, matches, messages, intro-call slots). The demo company is Meridian Health and the demo lab is Dr. Alex Morgan's Applied AI Lab.
- `lib/role.ts` and `app/actions.ts`: the demo role lives in the `rx-role` cookie, which only the `setRole` server action sets.
- `next.config.ts`: redirects `/` to the role's home screen based on the cookie.
- `components/`: `sidebar`, `sidebar-nav`, `page-header`, `role-switcher`, and `coming-soon` (a placeholder for unbuilt screens).
- Styling: Tailwind v4. Brand colors are defined in `app/globals.css` (`brand`, `brand-50`) and icons come from `lucide-react`.

## Gotchas

- `cacheComponents` is on, so anything that reads cookies or other request data must be inside `<Suspense>`. Otherwise `npm run build` fails during prerendering.
- Before finishing a change, check it with `npm run lint`, `npx tsc --noEmit` and `npm run build`.

## Conventions

- Build only what was asked. Suggest extras instead of adding them.
- The README only covers running the app locally.
- Demo data uses fictional people. Don't attribute invented papers or messages to real researchers.
- Never commit `.env.local` or print the database URL.

## Infrastructure

- Database: Neon Postgres, project `research-exchange` (us-east-2). The app doesn't use it yet. Ask Dylan for access to the Neon project, then put your own connection string in `.env.local` as `DATABASE_URL`.
- `.mcp.json` configures the Neon MCP server, and each person signs in with their own Neon account. Ask before running destructive Neon operations such as deleting a branch, database or project.
- Hosting: Vercel is planned (GitHub Pages can't run server actions or cookie redirects). When the app starts using the database, set the Vercel function region to `cle1` so it runs near Neon.
