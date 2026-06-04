# Bergen 2026

A group trip planner for Bergen, Norway — April 16–20, 2026.

**Live:** [bergen-pi.vercel.app](https://bergen-pi.vercel.app)

## What it does

A collaborative travel companion for 7 people heading to Bergen. Four main sections:

- **Itinerary** — Day-by-day schedule from arrival (Thursday) through checkout (Monday), with timed activities and starred must-dos
- **Explore** — Curated listings for coffee, lunch, dinner, birthday restaurants, and activities, each with price ranges in NOK and neighbourhood tags
- **Map** — All locations on an interactive map
- **Guide** — Practical tips covering weather, transport, budget, accommodation, useful Norwegian phrases, and tipping etiquette

The homepage doubles as a mood board with draggable photos showcasing the trip highlights: Bryggen, Fløibanen, fjord cruises, saunas, hiking, and more.

## Tech stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Deployment:** [Vercel](https://vercel.com)

## Project structure

```
app/          → Next.js App Router pages and layouts
components/   → UI components (shadcn/ui + custom)
data/         → Trip data (itinerary, listings, guide content)
lib/          → Utility functions
public/       → Static assets and images
docs/         → Project documentation
```
