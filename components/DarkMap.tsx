"use client";

import { useEffect, useRef } from "react";

const DARK_STYLE = [
  { elementType: "geometry", stylers: [{ color: "#0a0a0a" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0a0a0a" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#6b6b6b" }] },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1a1a1a" }],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [{ color: "#4a4a4a" }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#111111" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#171717" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#5a5a5a" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#131313" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#4a4a4a" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#1e1e1e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#141414" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#5a5a5a" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#2a2a2a" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1a1a1a" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b6b6b" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#171717" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#5a5a5a" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#0d0d0d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#3a3a3a" }],
  },
];

const LAT = 41.3578;
const LNG = -93.5614;

export default function DarkMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.google) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: LAT, lng: LNG },
        zoom: 15,
        styles: DARK_STYLE,
        disableDefaultUI: true,
        zoomControl: true,
      });

      new window.google.maps.Marker({
        position: { lat: LAT, lng: LNG },
        map,
        title: "Fade 2 Black — 1003 West 2nd Ave, Indianola, IA 50125",
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#dc2626",
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 2,
        },
      });
    };

    if (window.google?.maps) {
      initMap();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDGJIoeQj-ysamGVHz2wcvcOFC_O05_YmM&callback=initGoogleMap`;
    script.async = true;
    script.defer = true;

    (window as unknown as Record<string, unknown>).initGoogleMap = initMap;
    document.head.appendChild(script);

    return () => {
      delete (window as unknown as Record<string, unknown>).initGoogleMap;
    };
  }, []);

  return <div ref={mapRef} className="w-full h-[350px]" />;
}
