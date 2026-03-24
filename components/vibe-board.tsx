"use client";

import { useState, useRef, useCallback, type PointerEvent } from "react";
import { vibeCards, type VibeCard } from "@/data/vibes";

interface CardState {
  x: number;
  y: number;
  rotation: number;
  zIndex: number;
}

export function VibeBoard() {
  const [zCounter, setZCounter] = useState(10);
  const [cards, setCards] = useState<Record<string, CardState>>(() => {
    const initial: Record<string, CardState> = {};
    vibeCards.forEach((card, i) => {
      initial[card.id] = { x: 0, y: 0, rotation: card.rotation, zIndex: i };
    });
    return initial;
  });

  const dragRef = useRef<{
    id: string;
    startX: number;
    startY: number;
    origX: number;
    origY: number;
  } | null>(null);

  const bringToFront = useCallback(
    (id: string) => {
      const next = zCounter + 1;
      setZCounter(next);
      setCards((prev) => ({
        ...prev,
        [id]: { ...prev[id], zIndex: next },
      }));
    },
    [zCounter]
  );

  const onPointerDown = useCallback(
    (e: PointerEvent, card: VibeCard) => {
      e.preventDefault();
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      bringToFront(card.id);
      dragRef.current = {
        id: card.id,
        startX: e.clientX,
        startY: e.clientY,
        origX: cards[card.id].x,
        origY: cards[card.id].y,
      };
    },
    [cards, bringToFront]
  );

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      if (!dragRef.current) return;
      const { id, startX, startY, origX, origY } = dragRef.current;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      setCards((prev) => ({
        ...prev,
        [id]: { ...prev[id], x: origX + dx, y: origY + dy },
      }));
    },
    []
  );

  const onPointerUp = useCallback(() => {
    dragRef.current = null;
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "420px" }}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative" style={{ width: "700px", height: "380px" }}>
          {vibeCards.map((card, i) => {
            const state = cards[card.id];
            // Spread cards across the area
            const col = i % 4;
            const row = Math.floor(i / 4);
            const baseX = col * 165 - 330 + (row % 2 === 0 ? 0 : 80);
            const baseY = row * 185 - 90;

            return (
              <div
                key={card.id}
                className="absolute cursor-grab active:cursor-grabbing select-none touch-none"
                style={{
                  left: `calc(50% + ${baseX + state.x}px)`,
                  top: `calc(50% + ${baseY + state.y}px)`,
                  transform: `translate(-50%, -50%) rotate(${state.rotation}deg)`,
                  zIndex: state.zIndex,
                  transition: dragRef.current?.id === card.id
                    ? "none"
                    : "box-shadow 0.2s ease",
                }}
                onPointerDown={(e) => onPointerDown(e, card)}
              >
                <div className="bg-white rounded-sm p-2 pb-8 shadow-md hover:shadow-xl transition-shadow duration-200"
                  style={{ width: "150px" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.imageUrl}
                    alt={card.label}
                    className="w-full h-[140px] object-cover rounded-sm bg-muted"
                    draggable={false}
                  />
                  <p className="text-xs text-center mt-2 text-muted-foreground font-medium tracking-wide">
                    {card.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
