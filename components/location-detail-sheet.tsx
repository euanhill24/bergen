"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { CategoryBadge } from "@/components/category-badge";
import { type Location } from "@/data/locations";
import { cn } from "@/lib/utils";
import { MapPin, ExternalLink, Navigation } from "lucide-react";

function getDirectionsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

export function LocationDetailSheet({
  location,
  open,
  onOpenChange,
}: {
  location: Location | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!location) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="max-h-[70vh] rounded-t-2xl">
        <SheetHeader className="text-left">
          <div className="flex items-center gap-2 mb-1">
            <CategoryBadge category={location.category} />
            {location.tags?.includes("must-book") && (
              <span className="text-xs text-amber-600 font-medium">
                Book in advance
              </span>
            )}
          </div>
          <SheetTitle className="text-xl">{location.name}</SheetTitle>
        </SheetHeader>

        <div className="mt-4 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {location.longDescription}
          </p>

          <div className="space-y-2 text-sm">
            {location.priceRange && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="font-medium text-foreground">Price:</span>
                {location.priceRange}
              </div>
            )}
            {location.area && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                {location.area} — {location.address}
              </div>
            )}
          </div>

          <div className="flex gap-2 pt-2">
            <a
              href={getDirectionsUrl(location.lat, location.lng)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "default" }), "flex-1")}
            >
              <Navigation className="h-4 w-4 mr-2" />
              Get Directions
            </a>
            {location.website && (
              <a
                href={location.website}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
