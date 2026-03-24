"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { LocationDetailSheet } from "@/components/location-detail-sheet";
import { type Location } from "@/data/locations";
import { type Category, categoryConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

const TripMap = dynamic(() => import("@/components/trip-map"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-muted/30">
      <p className="text-sm text-muted-foreground">Loading map...</p>
    </div>
  ),
});

type FilterTab = "all" | Category;

const filterTabs: { value: FilterTab; label: string }[] = [
  { value: "all", label: "All" },
  { value: "coffee", label: "Coffee" },
  { value: "lunch", label: "Lunch" },
  { value: "dinner", label: "Dinner" },
  { value: "activity", label: "Activities" },
];

export default function MapPage() {
  const [filter, setFilter] = useState<FilterTab>("all");
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [sheetOpen, setSheetOpen] = useState(false);

  function handleLocationSelect(location: Location) {
    setSelectedLocation(location);
    setSheetOpen(true);
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] md:h-[calc(100vh-3.5rem)]">
      {/* Filter bar */}
      <div className="px-4 py-3 border-b border-border bg-background flex items-center gap-2 overflow-x-auto">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200",
              filter === tab.value
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="px-4 py-2 border-b border-border bg-background flex flex-wrap gap-3 text-xs">
        {Object.entries(categoryConfig)
          .filter(([key]) => key !== "accommodation")
          .map(([key, config]) => (
            <span key={key} className="flex items-center gap-1.5">
              <span
                className={`w-2.5 h-2.5 rounded-full ${config.color.replace("text-", "bg-")}`}
              />
              {config.label}
            </span>
          ))}
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-scandi-fjord" />
          Home
        </span>
      </div>

      {/* Map */}
      <div className="flex-1">
        <TripMap filter={filter} onLocationSelect={handleLocationSelect} />
      </div>

      <LocationDetailSheet
        location={selectedLocation}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />
    </div>
  );
}
