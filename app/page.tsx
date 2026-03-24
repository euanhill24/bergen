import Link from "next/link";
import { CalendarDays, Compass, Map, BookOpen, ArrowRight } from "lucide-react";
import { VibeBoard } from "@/components/vibe-board";

const TRIP_START = new Date("2026-04-16T00:00:00");

function getDaysUntil(): number {
  const now = new Date();
  const diff = TRIP_START.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

const navLinks = [
  {
    href: "/itinerary",
    label: "Itinerary",
    desc: "Day-by-day outline",
    icon: CalendarDays,
  },
  {
    href: "/explore",
    label: "Explore",
    desc: "Things to do & eat",
    icon: Compass,
  },
  {
    href: "/map",
    label: "Map",
    desc: "All locations",
    icon: Map,
  },
  {
    href: "/guide",
    label: "Guide",
    desc: "Practical tips",
    icon: BookOpen,
  },
];

export default function HomePage() {
  const daysUntil = getDaysUntil();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-20">
      {/* Hero */}
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
          April 16–20 &middot; 7 people
        </p>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
          Bergen
        </h1>
        <p className="text-lg text-muted-foreground font-light">Norway</p>

        {daysUntil > 0 && (
          <div className="mt-8 inline-flex items-center gap-3 text-sm text-muted-foreground">
            <span className="w-8 h-px bg-border" />
            <span className="font-mono tracking-wide">
              {daysUntil} days
            </span>
            <span className="w-8 h-px bg-border" />
          </div>
        )}
      </div>

      {/* Quick details */}
      <div className="grid grid-cols-2 gap-px bg-border rounded-lg overflow-hidden mb-16">
        <div className="bg-card p-5">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
            Stay
          </p>
          <p className="text-sm font-medium">Øvre Fjellsmauet 12</p>
          <p className="text-xs text-muted-foreground mt-0.5">Bergenhus</p>
        </div>
        <div className="bg-card p-5">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
            Checkout
          </p>
          <p className="text-sm font-medium">Monday 20 April</p>
          <p className="text-xs text-muted-foreground mt-0.5">11:00</p>
        </div>
      </div>

      {/* The Vibe */}
      <div className="mb-16">
        <h2 className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
          The Vibe
        </h2>
        <VibeBoard />
        <p className="text-center text-xs text-muted-foreground mt-4">
          Drag the photos around
        </p>
      </div>

      {/* Nav links */}
      <div className="space-y-2 mb-16">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center justify-between py-4 px-1 border-b border-border group hover:bg-muted/30 transition-colors rounded-sm"
          >
            <div className="flex items-center gap-4">
              <link.icon className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">{link.label}</p>
                <p className="text-xs text-muted-foreground">{link.desc}</p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>

    </div>
  );
}
