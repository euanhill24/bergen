# Product Requirements Document — Bergen Trip Website

## 1. Product Overview

### What
An interactive trip website for 7 travellers visiting Bergen, Norway (April 16-20, 2026). The site is a central hub where the group can browse the itinerary, explore locations on a map, and find inspiration for restaurants, coffee shops, and activities.

### Why
Coordinating a group trip across a foreign city is chaotic. Information gets lost in group chats, people ask the same questions, and no one remembers the plan. This site puts everything in one place — accessible on everyone's phone while walking around Bergen.

### Goals
- Every traveller can quickly find "what's happening today" and "where are we going"
- Locations are visual and navigable on a map, not just text in a message
- Inspiration is browsable by category so people can suggest alternatives
- Works perfectly on mobile — this is a walking-around-the-city tool

---

## 2. Target Users

| Attribute | Detail |
|-----------|--------|
| Who | 7 friends on a group trip |
| Technical skill | Mixed — assume non-technical |
| Primary device | Mobile phones (iPhone/Android) |
| Usage context | Walking around Bergen, often with one hand, possibly in rain |
| Access | Public URL, no login required |
| Network | Mix of WiFi (at the Airbnb) and mobile data / roaming |

---

## 3. User Stories

### US-1: Browse Day-by-Day Itinerary

> As a trip member, I want to see the itinerary broken down by day so I know the rough plan for each day.

**Acceptance Criteria:**
- [ ] Each day (Wed 16 - Sun 20) is displayed as a selectable tab or section
- [ ] Each day shows a list of time slots with: time, activity name, short description, and category (activity / coffee / lunch / dinner)
- [ ] The current day is auto-selected when visiting the page (based on the user's local date)
- [ ] Special events (birthday dinner) are visually highlighted with a badge or distinct styling
- [ ] The layout is mobile-friendly — scrollable, large touch targets, readable text

### US-2: Explore Locations on an Interactive Map

> As a trip member, I want to see all planned locations on a map so I can understand where things are and navigate between them.

**Acceptance Criteria:**
- [ ] An embedded interactive map shows central Bergen
- [ ] All restaurants, coffee shops, activities, and the accommodation are marked with pins
- [ ] Pins are colour-coded or icon-coded by category (accommodation, restaurant, coffee, activity)
- [ ] The accommodation pin is visually distinct (e.g., home icon, different colour)
- [ ] Clicking/tapping a pin shows a popup or panel with the location name, category, and short description
- [ ] Map supports pinch-to-zoom and drag on mobile
- [ ] Optional: day filter to show only locations relevant to a specific day

### US-3: View Location Details and Get Directions

> As a trip member, I want to tap on a location to see useful details and get walking directions.

**Acceptance Criteria:**
- [ ] Each location has a detail view (card, panel, or sheet) showing: name, description, category, approximate price range, and address
- [ ] A "Get Directions" button opens Google Maps (or Apple Maps on iOS) with the destination pre-filled
- [ ] External links (restaurant website, booking page) are included where available
- [ ] Detail view is accessible from both the itinerary and the map

### US-4: Browse Inspiration by Category

> As a trip member, I want to browse curated recommendations for restaurants, coffee shops, and activities so I can suggest alternatives or make personal plans.

**Acceptance Criteria:**
- [ ] A dedicated section/page shows all recommendations grouped by category: Coffee, Lunch, Dinner, Birthday Dinner, Activities
- [ ] Each recommendation shows: name, one-line description, what makes it special, approximate price, and area/neighbourhood
- [ ] Categories are filterable or navigable via tabs/sections
- [ ] Birthday dinner options are in their own highlighted section

### US-5: View Practical Trip Information

> As a trip member, I want to find practical trip info (weather, transport, packing, accommodation) without digging through group chats.

**Acceptance Criteria:**
- [ ] A dedicated guide/info page with clear sections: Weather & Packing, Getting Around, Budget Tips, Accommodation Details, Useful Norwegian Phrases
- [ ] Accommodation section shows address, checkout time, and a Google Maps link
- [ ] Content is scannable (headers, bullet points, not walls of text)

### US-6: Mobile-First Responsive Experience

> As a trip member, I want to use this site comfortably on my phone while walking around Bergen.

**Acceptance Criteria:**
- [ ] Design is mobile-first with a clear, usable layout at 375px width
- [ ] Navigation between sections is easy and persistent (bottom tab bar or similar)
- [ ] Text is readable without zooming
- [ ] Touch targets are at least 44x44px
- [ ] Map is fully usable with touch gestures (pinch, drag, tap)
- [ ] Page load time < 3 seconds on a 4G connection
- [ ] Works well in both light and dark mode

---

## 4. Out of Scope (v1)

These features are explicitly not included in the first version:

- User accounts or authentication
- Voting or polls for group decisions
- Expense tracking or bill splitting
- Real-time weather API integration
- Push notifications or reminders
- Multi-language support
- Comments or chat functionality
- Offline mode / service worker
- Admin panel for editing content

---

## 5. Success Metrics

| Metric | Target |
|--------|--------|
| All 7 travellers access the site | 100% adoption |
| Site loads on mobile in < 3s | Performance target |
| No one asks "where are we going?" in the group chat | Qualitative — the site answers it |
| Lighthouse performance score | > 90 |
| Lighthouse accessibility score | > 90 |

---

## 6. Assumptions & Constraints

- All content is static and known ahead of time — no dynamic data fetching needed
- No backend or database required
- The site will be deployed as a public URL (no authentication)
- Content can be updated by editing source files and redeploying
- Primary use is during the trip (April 16-20) but may be shared beforehand for planning
