"use client";

import { useState } from "react";
import { LocationDetailSheet } from "@/components/location-detail-sheet";
import { locations, type Location } from "@/data/locations";
import { type Category } from "@/lib/constants";
import { MapPin, Coffee, UtensilsCrossed, Wine, PartyPopper, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

type FilterTab = "all" | Category;

const filterTabs: {
  value: FilterTab;
  label: string;
  icon: React.ElementType;
}[] = [
  { value: "all", label: "All", icon: Compass },
  { value: "coffee", label: "Coffee", icon: Coffee },
  { value: "lunch", label: "Lunch", icon: UtensilsCrossed },
  { value: "dinner", label: "Dinner", icon: Wine },
  { value: "birthday", label: "Birthday", icon: PartyPopper },
  { value: "activity", label: "Activities", icon: MapPin },
];

function LocationCard({
  location,
  featured,
  onClick,
}: {
  location: Location;
  featured?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-xl text-left transition-all duration-300",
        "hover:shadow-lg hover:-translate-y-1",
        featured ? "col-span-2 row-span-2" : ""
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-muted",
          featured ? "h-80" : "h-48"
        )}
      >
        {location.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={location.imageUrl}
            alt={location.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-muted to-muted/60" />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Price badge */}
        {location.priceRange && (
          <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-mono px-2 py-1 rounded-full text-foreground">
            {location.priceRange}
          </span>
        )}

        {/* Birthday tag */}
        {location.category === "birthday" && (
          <span className="absolute top-3 left-3 bg-amber-400/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full text-amber-950 flex items-center gap-1">
            <PartyPopper className="h-3 w-3" />
            Birthday option
          </span>
        )}
      </div>

      {/* Text overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3
          className={cn(
            "font-medium leading-tight",
            featured ? "text-lg" : "text-sm"
          )}
        >
          {location.name}
        </h3>
        <p className="text-xs text-white/80 mt-1 line-clamp-2">
          {location.description}
        </p>
        {location.area && (
          <p className="text-xs text-white/60 mt-1.5 flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {location.area}
          </p>
        )}
      </div>
    </button>
  );
}

export default function ExplorePage() {
  const [filter, setFilter] = useState<FilterTab>("all");
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [sheetOpen, setSheetOpen] = useState(false);

  const filtered =
    filter === "all"
      ? locations.filter((l) => l.category !== "accommodation")
      : locations.filter((l) => l.category === filter);

  function handleLocationClick(location: Location) {
    setSelectedLocation(location);
    setSheetOpen(true);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-light tracking-tight mb-2">Explore Bergen</h1>
        <p className="text-sm text-muted-foreground">
          Coffee, food, activities & birthday dinner ideas
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            className={cn(
              "flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200",
              filter === tab.value
                ? "bg-foreground text-background shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            )}
          >
            <tab.icon className="h-3.5 w-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Masonry-ish grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {filtered.map((location, i) => (
          <LocationCard
            key={location.id}
            location={location}
            featured={i === 0 && filter !== "all"}
            onClick={() => handleLocationClick(location)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-sm">Nothing here yet</p>
        </div>
      )}

      <LocationDetailSheet
        location={selectedLocation}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />
    </div>
  );
}
