export interface GuideSection {
  id: string;
  title: string;
  icon: string;
  content: string[];
}

export const guideSections: GuideSection[] = [
  {
    id: "weather",
    title: "Weather & Packing",
    icon: "CloudRain",
    content: [
      "Temperature: 3-10°C (37-50°F). Can feel colder with wind on mountains and fjords.",
      "Rain: Bergen averages ~170 rain days per year. April is one of the drier months but expect rain on roughly half the days.",
      "Daylight: ~14-15 hours (sunrise ~06:15, sunset ~20:45). Long, bright days.",
      "Waterproof jacket — the single most important item.",
      "Layers: base layer, fleece/wool mid-layer, waterproof outer.",
      "Waterproof shoes or boots with good grip.",
      "Compact umbrella.",
      "Warm hat and gloves for mountain tops and fjord cruises.",
      "Something smart-casual for the birthday dinner.",
    ],
  },
  {
    id: "transport",
    title: "Getting Around",
    icon: "Train",
    content: [
      "Walking: Bergen's centre is very walkable. Most attractions are 10-20 min on foot from the house.",
      "Airport: Bybanen light rail runs directly from Bergen Airport (Flesland) to city centre, ~45 min, ~42 NOK.",
      "Public transport: Skyss runs buses and the light rail. Single ticket ~42 NOK. Day passes available.",
      "Bergen Card: Consider for 24/48/72 hours — includes free/discounted museum entry and free public transport.",
      "Taxis: Expensive (as with all of Norway). Use for convenience, not economy.",
    ],
  },
  {
    id: "budget",
    title: "Budget Tips",
    icon: "Wallet",
    content: [
      "Norway is expensive. Some rough guides:",
      "Coffee: 50-65 NOK (~£4-5)",
      "Casual lunch: 150-250 NOK (~£12-20)",
      "Dinner main course: 250-400 NOK (~£20-32)",
      "Fine dining tasting menu: 1,200-1,500 NOK (~£95-120)",
      "Beer at a bar: 90-120 NOK (~£7-10)",
      "Wine by the glass: 100-150 NOK (~£8-12)",
      "Groceries from Rema 1000, Kiwi, or Meny are much cheaper — stock up for breakfasts and snacks.",
    ],
  },
  {
    id: "accommodation",
    title: "Accommodation",
    icon: "Home",
    content: [
      "Address: Øvre Fjellsmauet 12, Bergenhus",
      "Host: Simen (Airbnb)",
      "Checkout: Monday 20th April at 11:00",
      "Location: Central Bergen, right near the Fløyen funicular base station, short walk to Bryggen.",
    ],
  },
  {
    id: "phrases",
    title: "Useful Norwegian",
    icon: "Languages",
    content: [
      "Thank you — Takk",
      "Please — Vær så snill",
      "Cheers! — Skål!",
      "Hello — Hei",
      "Goodbye — Ha det",
      "How much? — Hvor mye?",
      "The bill, please — Kan jeg få regningen?",
      "Delicious — Deilig",
    ],
  },
  {
    id: "tipping",
    title: "Tipping & Etiquette",
    icon: "HandCoins",
    content: [
      "Tipping is not expected in Norway — service charge is included.",
      "Rounding up or leaving 5-10% for exceptional service is appreciated but not obligatory.",
      "Card is accepted everywhere — even small kiosks. You rarely need cash.",
    ],
  },
];
