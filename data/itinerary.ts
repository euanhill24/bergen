import { type Category, type DayId } from "@/lib/constants";

export interface ItineraryEvent {
  id: string;
  day: DayId;
  time?: string;
  title: string;
  description: string;
  example?: string;
  locationId?: string;
  category: Category;
  isHighlight?: boolean;
  treatLabel?: string;
}

export const itinerary: ItineraryEvent[] = [
  // Thursday — Arrival
  {
    id: "thu-1",
    day: "thu",
    time: "Afternoon",
    title: "Arrive in Bergen",
    description: "Land, get to the house, unpack and settle in",
    locationId: "airbnb",
    category: "accommodation",
  },
  {
    id: "thu-2",
    day: "thu",
    time: "Late afternoon",
    title: "Explore the neighbourhood",
    description: "Get your bearings — the house is right near Bryggen and the fortress",
    example: "Walk along the wharf, find a coffee spot",
    category: "activity",
  },
  {
    id: "thu-3",
    day: "thu",
    time: "Evening",
    title: "Cook together at the house",
    description: "First night in — pick up groceries and cook a meal together. Chill vibes. You and Kate will cook together on the first night.",
    locationId: "airbnb",
    category: "accommodation",
  },

  // Friday — Explore & Birthday
  {
    id: "fri-1",
    day: "fri",
    time: "Morning",
    title: "Coffee",
    description: "Make coffee at home or find a coffee spot in town",
    example: "Kaffemisjonen, Det Lille Kaffekompaniet, or Godt Brød",
    category: "coffee",
  },
  {
    id: "fri-2",
    day: "fri",
    time: "Morning",
    title: "Explore the town",
    description: "Wander through Bryggen, the fish market, and the old streets",
    example: "Bryggen walking tour, Fish Market, Skostredet creative quarter",
    category: "activity",
  },
  {
    id: "fri-3",
    day: "fri",
    time: "Lunchtime",
    title: "Lunch",
    description: "Make something at home or head out",
    example: "Fish Market, Pingvinen, or Bryggeloftet",
    category: "lunch",
  },
  {
    id: "fri-4",
    day: "fri",
    time: "Afternoon",
    title: "Fløibanen funicular",
    description: "Take the funicular up Mount Fløyen for panoramic views over Bergen and the fjords",
    locationId: "floibanen",
    category: "activity",
  },
  {
    id: "fri-5",
    day: "fri",
    time: "Evening",
    title: "Nigel's birthday dinner",
    description: "Celebrating Nigel! Special dinner out together.",
    category: "birthday",
    isHighlight: true,
    treatLabel: "Mum & Dad's treat",
  },

  // Saturday — Boat Tour & Birthday
  {
    id: "sat-1",
    day: "sat",
    time: "Morning",
    title: "Leisurely morning",
    description: "Sleep in, no rush. Coffee at the house or head out somewhere.",
    example: "Godt Brød for cinnamon buns",
    category: "coffee",
  },
  {
    id: "sat-boat",
    day: "sat",
    time: "Morning",
    title: "Fjord boat tour",
    description: "Take the Mostraumen fjord cruise — stunning scenery through narrow straits and waterfalls",
    locationId: "mostraumen",
    category: "activity",
  },
  {
    id: "sat-free",
    day: "sat",
    time: "Afternoon",
    title: "Free time",
    description: "Relax, explore, or revisit a favourite spot",
    category: "activity",
  },
  {
    id: "sat-4",
    day: "sat",
    time: "Evening",
    title: "Euan's birthday dinner",
    description: "The big celebration! Special dinner out to celebrate Euan.",
    category: "birthday",
    isHighlight: true,
    treatLabel: "Mum & Dad's treat",
  },

  // Sunday — Sauna & Explore
  {
    id: "sun-1",
    day: "sun",
    time: "Morning",
    title: "Coffee",
    description: "Make coffee at home or find a coffee spot in town",
    example: "Blom, Kippers, or Dromedar",
    category: "coffee",
  },
  {
    id: "sun-sauna",
    day: "sun",
    time: "Late morning",
    title: "Sauna session",
    description: "Relax and warm up with a proper Nordic sauna experience",
    category: "activity",
  },
  {
    id: "sun-2",
    day: "sun",
    time: "Lunchtime",
    title: "Lunch",
    description: "Make something at home or head out",
    example: "Zupperia, Trekroneren, or Lysverket lunch",
    category: "lunch",
  },
  {
    id: "sun-3",
    day: "sun",
    time: "Afternoon",
    title: "Free afternoon",
    description: "Last chance to tick things off the list",
    example: "Anything we haven't done yet — museums, hikes, shopping",
    category: "activity",
  },
  {
    id: "sun-4",
    day: "sun",
    time: "Evening",
    title: "Evening meal",
    description: "Cook at home or head out — whatever we fancy on the day",
    category: "dinner",
  },

  // Monday — Departure
  {
    id: "mon-1",
    day: "mon",
    time: "Morning",
    title: "Pack up & breakfast",
    description: "Make something at home or head out — then pack up",
    locationId: "airbnb",
    category: "accommodation",
  },
  {
    id: "mon-2",
    day: "mon",
    time: "11:00",
    title: "Checkout",
    description: "Leave the house by 11:00",
    locationId: "airbnb",
    category: "accommodation",
  },
  {
    id: "mon-3",
    day: "mon",
    time: "Afternoon",
    title: "Head home",
    description: "Bybanen light rail to Bergen Airport (~45 min) or taxi",
    category: "activity",
  },
];

export function getEventsByDay(day: DayId): ItineraryEvent[] {
  return itinerary.filter((e) => e.day === day);
}
