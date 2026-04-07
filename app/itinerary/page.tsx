"use client";

import { useState } from "react";
import { CategoryBadge } from "@/components/category-badge";
import { LocationDetailSheet } from "@/components/location-detail-sheet";
import { tripDays, type DayId } from "@/lib/constants";
import { getEventsByDay } from "@/data/itinerary";
import { getLocationById, type Location } from "@/data/locations";
import { PartyPopper, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ItineraryPage() {
  const [selectedDay, setSelectedDay] = useState<DayId>("thu");
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [sheetOpen, setSheetOpen] = useState(false);

  const dayInfo = tripDays.find((d) => d.id === selectedDay)!;
  const events = getEventsByDay(selectedDay);

  function handleEventClick(locationId?: string) {
    if (!locationId) return;
    const location = getLocationById(locationId);
    if (location) {
      setSelectedLocation(location);
      setSheetOpen(true);
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-light tracking-tight mb-2">Itinerary</h1>
        <p className="text-sm text-muted-foreground">
          A rough outline — we&apos;ll fill in the details together
        </p>
      </div>

      {/* Day selector */}
      <div className="flex justify-center gap-1 mb-10">
        {tripDays.map((day) => (
          <button
            key={day.id}
            onClick={() => setSelectedDay(day.id)}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-medium transition-all duration-200",
              selectedDay === day.id
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            {day.shortLabel}
          </button>
        ))}
      </div>

      {/* Day header */}
      <div className="mb-8 text-center">
        <h2 className="text-lg font-medium">
          {dayInfo.label} {dayInfo.shortLabel.split(" ")[1]} April
        </h2>
        <p className="text-sm text-muted-foreground mt-0.5">
          {dayInfo.title} &mdash; {dayInfo.subtitle}
        </p>
      </div>

      {/* Events */}
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className={cn(
              "rounded-xl border border-border p-5 transition-all duration-200",
              event.locationId
                ? "cursor-pointer hover:bg-muted/40 hover:shadow-sm"
                : "",
              event.isHighlight
                ? "border-amber-200 bg-amber-50/50"
                : "bg-card"
            )}
            role={event.locationId ? "button" : undefined}
            tabIndex={event.locationId ? 0 : undefined}
            onClick={() => handleEventClick(event.locationId)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleEventClick(event.locationId);
              }
            }}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                {event.time && (
                  <span className="text-xs text-muted-foreground font-medium tracking-wide">
                    {event.time}
                  </span>
                )}
                <CategoryBadge category={event.category} />
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                {event.isMandatory && (
                  <>
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-medium text-amber-600">
                      Mum &amp; Dad&apos;s treat
                    </span>
                  </>
                )}
                {event.isHighlight && !event.isMandatory && (
                  <PartyPopper className="h-4 w-4 text-amber-500" />
                )}
              </div>
            </div>

            <h3 className="font-medium text-sm">{event.title}</h3>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              {event.description}
            </p>
            {event.example && (
              <p className="text-xs text-muted-foreground/70 mt-2 italic">
                e.g. {event.example}
              </p>
            )}
            {event.choices && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {event.choices.map((choice) => (
                  <span
                    key={choice}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-muted text-muted-foreground border border-border"
                  >
                    {choice}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <LocationDetailSheet
        location={selectedLocation}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />
    </div>
  );
}
