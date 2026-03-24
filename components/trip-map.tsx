"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { locations, type Location } from "@/data/locations";
import { categoryConfig, BERGEN_CENTER, type Category } from "@/lib/constants";
import "leaflet/dist/leaflet.css";

// Fix Leaflet default icon issue with bundlers
/* eslint-disable @typescript-eslint/no-explicit-any */
delete (L.Icon.Default.prototype as any)._getIconUrl;
/* eslint-enable @typescript-eslint/no-explicit-any */

const categoryMarkerColors: Record<Category, string> = {
  accommodation: "#5b7fa5",
  coffee: "#8c7056",
  lunch: "#6b9e7a",
  dinner: "#b07878",
  birthday: "#c8943e",
  activity: "#5b7fa5",
};

function createIcon(category: Category): L.DivIcon {
  const color = categoryMarkerColors[category];
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="
      width: 28px;
      height: 28px;
      border-radius: 50% 50% 50% 0;
      background: ${color};
      transform: rotate(-45deg);
      border: 2px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
    "><div style="
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
      transform: rotate(45deg);
    "></div></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28],
  });
}

function getDirectionsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

interface TripMapProps {
  filter?: Category | "all";
  onLocationSelect?: (location: Location) => void;
}

export default function TripMap({
  filter = "all",
  onLocationSelect,
}: TripMapProps) {
  const filtered =
    filter === "all"
      ? locations
      : locations.filter((l) => l.category === filter);

  return (
    <MapContainer
      center={[BERGEN_CENTER.lat, BERGEN_CENTER.lng]}
      zoom={14}
      className="h-full w-full"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {filtered.map((location) => (
        <Marker
          key={location.id}
          position={[location.lat, location.lng]}
          icon={createIcon(location.category)}
          eventHandlers={{
            click: () => onLocationSelect?.(location),
          }}
        >
          <Popup>
            <div className="text-sm min-w-[180px]">
              <p className="font-semibold text-foreground">{location.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {categoryConfig[location.category].label}
                {location.priceRange && ` · ${location.priceRange}`}
              </p>
              <p className="text-xs mt-1">{location.description}</p>
              <a
                href={getDirectionsUrl(location.lat, location.lng)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-xs text-blue-500 hover:underline"
              >
                Get Directions &rarr;
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
