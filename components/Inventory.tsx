"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AnimateIn from "./AnimateIn";

interface Vehicle {
  id: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  price: number;
  mileage: number;
  photos?: string[];
  images?: string[];
  photo_url?: string;
  image_url?: string;
  status?: string;
}

const API_URL =
  "https://lot-os.vercel.app/api/inventory/public?dealer_id=9d84ce04-ef8a-448d-893b-3149578a99c4";

function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}

function formatMileage(mileage: number): string {
  return `${mileage.toLocaleString("en-US")} miles`;
}

function getPhoto(vehicle: Vehicle): string | null {
  if (vehicle.photos && vehicle.photos.length > 0) return vehicle.photos[0];
  if (vehicle.images && vehicle.images.length > 0) return vehicle.images[0];
  if (vehicle.photo_url) return vehicle.photo_url;
  if (vehicle.image_url) return vehicle.image_url;
  return null;
}

function SkeletonCard() {
  return (
    <div className="bg-black-card border border-dark-light/50 overflow-hidden animate-pulse">
      <div className="aspect-[4/3] bg-dark" />
      <div className="p-5">
        <div className="h-6 bg-dark-light rounded w-3/4 mb-3" />
        <div className="flex items-center justify-between mb-4">
          <div className="h-5 bg-dark-light rounded w-24" />
          <div className="h-4 bg-dark-light rounded w-28" />
        </div>
        <div className="h-12 bg-dark-light rounded w-full" />
      </div>
    </div>
  );
}

export default function Inventory() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchInventory() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const items: Vehicle[] = Array.isArray(data)
          ? data
          : data.vehicles || data.inventory || data.data || [];
        setVehicles(items);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchInventory();
  }, []);

  const isEmpty = !loading && !error && vehicles.length === 0;

  return (
    <section id="inventory-grid" className="relative py-20 bg-black-soft carbon-fiber-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-14">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-red mb-3">
            Current Inventory
          </p>
          <h2 className="font-heading text-5xl md:text-7xl text-white red-glow-text">
            VEHICLES FOR SALE
          </h2>
        </AnimateIn>

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Error state */}
        {error && (
          <AnimateIn className="text-center py-16">
            <p className="font-body text-silver text-lg">
              Unable to load inventory right now. Please try again later.
            </p>
            <a
              href="sms:+15155522660"
              className="inline-flex items-center gap-2 mt-6 bg-red hover:bg-red-light text-white font-body uppercase tracking-wider px-8 py-4 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              Text Austin Instead
            </a>
          </AnimateIn>
        )}

        {/* Empty state */}
        {isEmpty && (
          <AnimateIn className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-dark border border-dark-light flex items-center justify-center">
              <svg className="w-8 h-8 text-silver/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <p className="font-body text-silver text-lg mb-2">
              Check back soon — new inventory added weekly
            </p>
            <p className="font-body text-silver/50 text-sm">
              Text Austin to ask about upcoming vehicles
            </p>
            <a
              href="sms:+15155522660"
              className="inline-flex items-center gap-2 mt-6 bg-red hover:bg-red-light text-white font-body uppercase tracking-wider px-8 py-4 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              Text Austin
            </a>
          </AnimateIn>
        )}

        {/* Vehicle cards */}
        {!loading && !error && vehicles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle, index) => {
              const photo = getPhoto(vehicle);
              return (
                <AnimateIn key={vehicle.id || index} delay={index * 0.05}>
                  <div className="group bg-black-card border border-dark-light/50 overflow-hidden hover:border-red/30 transition-colors duration-300">
                    {/* Photo */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-dark">
                      {photo ? (
                        <Image
                          src={photo}
                          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-16 h-16 text-dark-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <h3 className="font-heading text-2xl text-white mb-1">
                        {vehicle.year} {vehicle.make} {vehicle.model}
                        {vehicle.trim && (
                          <span className="text-silver text-lg ml-2">{vehicle.trim}</span>
                        )}
                      </h3>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-heading text-xl text-red">
                          {vehicle.price ? formatPrice(vehicle.price) : "Call for Price"}
                        </span>
                        {vehicle.mileage != null && (
                          <span className="font-body text-sm text-silver">
                            {formatMileage(vehicle.mileage)}
                          </span>
                        )}
                      </div>
                      <a
                        href="sms:+15155522660"
                        className="flex items-center justify-center gap-2 w-full bg-red hover:bg-red-light text-white font-body uppercase tracking-wider text-sm px-4 py-3 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                        </svg>
                        Contact About This Vehicle
                      </a>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
