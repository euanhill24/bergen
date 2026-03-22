# Technical Architecture — Bergen Trip Website

---

## 1. Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 16 (App Router) | Static site generation, excellent DX, zero-config Vercel deploy |
| UI Components | shadcn/ui | Polished, accessible, dark mode support, mobile-ready |
| Styling | Tailwind CSS 4 | Utility-first, pairs with shadcn/ui |
| Typography | Geist Sans + Geist Mono | Clean, modern, Vercel design system |
| Map | Leaflet + react-leaflet | Free, open-source, no API key needed, good mobile touch support |
| Map Tiles | OpenStreetMap | Free, no billing, reliable |
| Icons | Lucide React | Included with shadcn/ui, comprehensive icon set |
| Hosting | Vercel | Zero-config for Next.js, free tier sufficient |
| Data | Static TypeScript files | No database — all content is known at build time |

---

## 2. Project Structure

```
bergen-trip/
├── app/
│   ├── layout.tsx                 # Root layout: fonts, theme, nav shell
│   ├── page.tsx                   # Home: hero, trip countdown, daily highlights
│   ├── itinerary/
│   │   └── page.tsx               # Day-by-day itinerary with tabs
│   ├── explore/
│   │   └── page.tsx               # Browse inspiration by category
│   ├── map/
│   │   └── page.tsx               # Full interactive map view
│   └── guide/
│       └── page.tsx               # Practical info (weather, transport, packing)
├── components/
│   ├── ui/                        # shadcn/ui primitives (Card, Tabs, Badge, Sheet, Button, etc.)
│   ├── nav.tsx                    # Bottom tab bar (mobile) / top nav (desktop)
│   ├── day-tabs.tsx               # Day selector tabs (Wed-Sun)
│   ├── timeline.tsx               # Vertical timeline for a single day
│   ├── event-card.tsx             # Individual itinerary event card
│   ├── location-card.tsx          # Location card for explore/inspiration view
│   ├── location-detail-sheet.tsx  # Slide-up sheet with full location details
│   ├── trip-map.tsx               # Leaflet map wrapper component
│   ├── map-marker.tsx             # Custom map marker by category
│   ├── category-badge.tsx         # Colour-coded category label
│   ├── countdown.tsx              # Trip countdown timer
│   └── directions-button.tsx      # "Get Directions" link to Google Maps
├── data/
│   ├── locations.ts               # All locations with coordinates, descriptions, prices
│   ├── itinerary.ts               # Day-by-day events referencing locations
│   └── guide.ts                   # Practical info content (weather, transport, phrases)
├── lib/
│   ├── utils.ts                   # cn() utility, date helpers
│   └── constants.ts               # Trip dates, accommodation coords, category colours
├── public/
│   └── images/                    # Static images if needed
├── next.config.ts
├── tailwind.config.ts
├── components.json                # shadcn/ui configuration
├── tsconfig.json
└── package.json
```

---

## 3. Data Model

### Location

```typescript
type Category =
  | "accommodation"
  | "restaurant"
  | "coffee"
  | "lunch"
  | "dinner"
  | "activity"
  | "birthday";

interface Location {
  id: string;                    // e.g., "det-lille-kaffekompaniet"
  name: string;                  // e.g., "Det Lille Kaffekompaniet"
  category: Category;
  description: string;           // One-line summary
  longDescription: string;       // Full "why go" paragraph
  address: string;
  lat: number;
  lng: number;
  priceRange?: string;           // e.g., "50-65 NOK"
  area?: string;                 // e.g., "Bryggen"
  website?: string;
  googleMapsUrl?: string;
  tags?: string[];               // e.g., ["must-book", "fine-dining", "birthday-option"]
  highlight?: boolean;           // Special visual treatment
}
```

### Itinerary Event

```typescript
interface ItineraryEvent {
  id: string;
  day: "wed" | "thu" | "fri" | "sat" | "sun";
  date: string;                  // ISO format "2026-04-16"
  time: string;                  // "09:30"
  endTime?: string;              // "12:00"
  title: string;
  description: string;
  locationId?: string;           // References Location.id (optional — some events are general)
  category: Category;
  isHighlight?: boolean;         // Birthday dinner, key moments
}
```

### Day

```typescript
interface TripDay {
  id: "wed" | "thu" | "fri" | "sat" | "sun";
  date: string;                  // "2026-04-16"
  label: string;                 // "Wednesday"
  shortLabel: string;            // "Wed"
  title: string;                 // "Arrival Day"
  subtitle: string;              // "Settle in & first evening"
}
```

### Guide Section

```typescript
interface GuideSection {
  id: string;
  title: string;                 // "Weather & Packing"
  icon: string;                  // Lucide icon name
  content: string;               // Markdown or structured content
}
```

---

## 4. Pages

### Home (`/`)
- Hero banner with "Bergen 2026" title, date range, group size
- Countdown to trip start (or "Day X" during the trip)
- Quick highlight cards for today's/tomorrow's key events
- Navigation cards to Itinerary, Explore, Map, Guide
- **Components**: Card, Badge, countdown

### Itinerary (`/itinerary`)
- Tab bar across the top: Wed | Thu | Fri | Sat | Sun
- Auto-selects current day during the trip
- Selected day shows a vertical timeline of events
- Each event is a card with: time, title, category badge, short description
- Tapping an event card opens a Sheet with full details + "Get Directions" button
- Birthday dinner event has special highlight styling (gold accent, badge)
- **Components**: Tabs, Card, Badge, Sheet, ScrollArea, Separator

### Explore (`/explore`)
- Category tabs or sections: Coffee | Lunch | Dinner | Birthday | Activities
- Grid of location cards, each showing: name, category badge, one-line description, price range, area
- Tapping a card opens a Sheet with: full description, price, address, "Get Directions" button, website link
- Birthday section has a distinct visual treatment
- **Components**: Tabs, Card, Badge, Sheet, Button

### Map (`/map`)
- Full-viewport Leaflet map centered on Bergen (60.3913, 5.3221)
- Markers for all locations, colour-coded by category:
  - Accommodation: blue/home icon
  - Coffee: brown/warm
  - Lunch: orange
  - Dinner: red
  - Birthday: gold/star
  - Activity: green
- Category legend overlay
- Optional day filter tabs at the top
- Tapping a marker opens a Sheet with location details + directions
- **Components**: Sheet, Badge, Button (custom Leaflet markers)

### Guide (`/guide`)
- Static content page with collapsible sections:
  - Weather & Packing
  - Getting Around
  - Budget Tips
  - Accommodation Details (address, checkout time, Google Maps link)
  - Useful Norwegian Phrases
  - Tipping & Etiquette
- **Components**: Card, Accordion or collapsible sections

---

## 5. Key Design Decisions

### Static Site Generation (SSG)
All content is known at build time. Use `output: "export"` in `next.config.ts` for a fully static export. No API routes, no server-side rendering needed. Results in the fastest possible load times.

### Mobile-First Layout
Bottom tab navigation on mobile (Itinerary / Explore / Map / Guide), top navigation bar on desktop. All components sized for touch. Sheet component slides up for details rather than navigating to new pages.

### Dark Mode Default
Default to dark mode — better for evening restaurant browsing and battery life on OLED phones. Light mode toggle available. Use shadcn/ui's built-in dark mode support with `next-themes`.

### Leaflet for Maps
Free, open-source, no API key or billing required. OpenStreetMap tiles are reliable and free. `react-leaflet` provides React integration. Good mobile support with pinch-to-zoom and touch gestures. Dynamic imports needed (Leaflet requires `window`).

### Data as TypeScript Files
Type-safe at build time. No API calls, no loading states for content. Easy to edit — update a `.ts` file, redeploy. Co-located with the codebase. Zod validation optional but not required for static data.

### No Authentication
Public URL shared via the group chat. No login friction. The content isn't sensitive enough to warrant auth.

---

## 6. shadcn/ui Components Required

Install via `npx shadcn@latest add <component>`:

| Component | Usage |
|-----------|-------|
| `tabs` | Day selector, category filter |
| `card` | Event cards, location cards, info cards |
| `badge` | Category labels, "Birthday" highlight |
| `sheet` | Location detail panel (mobile slide-up) |
| `button` | Actions (Get Directions, links) |
| `separator` | Timeline dividers |
| `scroll-area` | Scrollable content regions |
| `accordion` | Collapsible guide sections |

---

## 7. Technical Considerations

### Leaflet Dynamic Import
Leaflet requires `window` and won't work with SSR. Use Next.js dynamic imports:

```typescript
import dynamic from "next/dynamic";

const TripMap = dynamic(() => import("@/components/trip-map"), {
  ssr: false,
  loading: () => <MapSkeleton />,
});
```

### Google Maps Directions Links
Construct deep links to Google Maps for "Get Directions":

```typescript
function getDirectionsUrl(lat: number, lng: number, name: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${encodeURIComponent(name)}`;
}
```

On iOS, this will offer to open in Apple Maps or Google Maps.

### Category Colour System
Define consistent colours in `lib/constants.ts`:

```typescript
export const categoryColors: Record<Category, string> = {
  accommodation: "bg-blue-500",
  coffee: "bg-amber-700",
  lunch: "bg-orange-500",
  dinner: "bg-red-500",
  birthday: "bg-yellow-500",
  restaurant: "bg-red-500",
  activity: "bg-emerald-500",
};
```

### Static Export Configuration
```typescript
// next.config.ts
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // Required for static export
};
```

---

## 8. Implementation Steps

1. **Scaffold**: `npx create-next-app@latest bergen-trip --typescript --tailwind --app --src-dir=false`
2. **shadcn/ui**: `npx shadcn@latest init` + add tabs, card, badge, sheet, button, separator, scroll-area, accordion
3. **Fonts**: Configure Geist Sans + Geist Mono via `next/font/local` or the `geist` package
4. **Theme**: Set up `next-themes` for dark mode, default to dark
5. **Data files**: Create `data/locations.ts`, `data/itinerary.ts`, `data/guide.ts` with all content from the itinerary doc
6. **Constants**: Create `lib/constants.ts` with trip dates, accommodation coordinates, category colours
7. **Layout + Nav**: Root layout with bottom tab bar (mobile) and top nav (desktop)
8. **Home page**: Hero, countdown, daily highlights, navigation cards
9. **Itinerary page**: Day tabs + vertical timeline + event cards + detail sheets
10. **Explore page**: Category tabs + location card grid + detail sheets
11. **Map page**: Leaflet integration with dynamic import, custom markers, category legend, detail sheets
12. **Guide page**: Accordion sections with practical info content
13. **Polish**: Responsive testing, dark/light mode, birthday highlights, category colours, touch targets
14. **Deploy**: Push to GitHub, connect to Vercel, deploy

---

## 9. Verification Plan

### Functional Testing
- [ ] All 5 pages load without errors
- [ ] Day tabs switch content correctly on itinerary page
- [ ] Category tabs filter correctly on explore page
- [ ] Map loads with all markers in correct positions
- [ ] Tapping a marker opens the detail sheet with correct info
- [ ] "Get Directions" links open Google Maps with the right destination
- [ ] Birthday dinner events are visually highlighted
- [ ] Current day is auto-selected on itinerary page

### Responsive Testing
- [ ] Test at 375px width (iPhone SE)
- [ ] Test at 390px width (iPhone 14)
- [ ] Test at 768px width (tablet)
- [ ] Test at 1280px width (desktop)
- [ ] Bottom nav visible on mobile, top nav on desktop
- [ ] Map is usable with touch gestures

### Performance
- [ ] Lighthouse performance score > 90
- [ ] Lighthouse accessibility score > 90
- [ ] Page load < 3s on throttled 4G
- [ ] Static export works (`next build` succeeds)

### Cross-Browser
- [ ] Chrome (Android)
- [ ] Safari (iOS)
- [ ] Firefox (desktop)
