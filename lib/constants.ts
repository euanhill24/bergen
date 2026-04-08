export type Category =
  | "accommodation"
  | "coffee"
  | "lunch"
  | "dinner"
  | "birthday"
  | "activity";

export const categoryConfig: Record<
  Category,
  { label: string; color: string; bg: string; icon: string }
> = {
  accommodation: {
    label: "Accommodation",
    color: "text-scandi-fjord",
    bg: "bg-scandi-fjord/10 text-scandi-fjord border-scandi-fjord/20",
    icon: "Home",
  },
  coffee: {
    label: "Coffee",
    color: "text-scandi-wood",
    bg: "bg-scandi-wood/10 text-scandi-wood border-scandi-wood/20",
    icon: "Coffee",
  },
  lunch: {
    label: "Lunch",
    color: "text-scandi-sage",
    bg: "bg-scandi-sage/10 text-scandi-sage border-scandi-sage/20",
    icon: "UtensilsCrossed",
  },
  dinner: {
    label: "Dinner",
    color: "text-scandi-rose",
    bg: "bg-scandi-rose/10 text-scandi-rose border-scandi-rose/20",
    icon: "Wine",
  },
  birthday: {
    label: "Birthday",
    color: "text-amber-600",
    bg: "bg-amber-50 text-amber-700 border-amber-200",
    icon: "PartyPopper",
  },
  activity: {
    label: "Activity",
    color: "text-scandi-fjord",
    bg: "bg-scandi-fjord/10 text-scandi-fjord border-scandi-fjord/20",
    icon: "MapPin",
  },
};

export const ACCOMMODATION_COORDS = { lat: 60.3975, lng: 5.3195 };

export const BERGEN_CENTER = { lat: 60.3913, lng: 5.3221 };

export type DayId = "thu" | "fri" | "sat" | "sun" | "mon";

export const tripDays: {
  id: DayId;
  date: string;
  label: string;
  shortLabel: string;
  title: string;
  subtitle: string;
}[] = [
  {
    id: "thu",
    date: "2026-04-16",
    label: "Thursday",
    shortLabel: "Thu 16",
    title: "Arrival Day",
    subtitle: "Settle in & first evening",
  },
  {
    id: "fri",
    date: "2026-04-17",
    label: "Friday",
    shortLabel: "Fri 17",
    title: "Explore & Birthday",
    subtitle: "First proper day — Nigel's birthday dinner",
  },
  {
    id: "sat",
    date: "2026-04-18",
    label: "Saturday",
    shortLabel: "Sat 18",
    title: "Boat Tour & Birthday",
    subtitle: "Fjord cruise & birthday dinner",
  },
  {
    id: "sun",
    date: "2026-04-19",
    label: "Sunday",
    shortLabel: "Sun 19",
    title: "Sauna Day",
    subtitle: "Relax, sauna & explore",
  },
  {
    id: "mon",
    date: "2026-04-20",
    label: "Monday",
    shortLabel: "Mon 20",
    title: "Departure",
    subtitle: "Checkout by 11:00",
  },
];
