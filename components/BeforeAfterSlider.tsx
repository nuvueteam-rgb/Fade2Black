"use client";

import { useState, useRef, useCallback } from "react";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] cursor-ew-resize select-none overflow-hidden border border-dark-light/50"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* "Before" — clear window (full background) */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-sky-100 to-blue-50">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Window frame */}
          <div className="w-3/4 h-3/4 border-[12px] border-gray-400 bg-gradient-to-b from-sky-300/80 to-sky-100/80 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
            {/* Scenery through window */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-600/40 to-transparent" />
            <div className="absolute top-4 right-8 w-16 h-10 bg-white/60 rounded-full" />
            <div className="absolute top-6 right-6 w-20 h-10 bg-white/40 rounded-full" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-black/70 text-white font-body text-xs uppercase tracking-wider px-3 py-1.5">
          Before
        </div>
      </div>

      {/* "After" — tinted window (clipped) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-neutral-900 to-black"
        style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 border-[12px] border-gray-700 bg-gradient-to-b from-neutral-800/90 to-black/90 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            {/* Dimmed scenery */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-900/20 to-transparent" />
            <div className="absolute top-4 right-8 w-16 h-10 bg-white/10 rounded-full" />
            <div className="absolute top-6 right-6 w-20 h-10 bg-white/5 rounded-full" />
          </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-red/90 text-white font-body text-xs uppercase tracking-wider px-3 py-1.5">
          After
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-10"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-0.5 h-full bg-red shadow-red-glow-sm" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-red rounded-full flex items-center justify-center shadow-red-glow slider-handle">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
