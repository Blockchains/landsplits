"use client";

import { useEffect, useState } from "react";
import { AddressForm } from "./AddressForm";

export function StickyAddressBar({ cityName, regionName }: { cityName: string; regionName: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand-200 bg-white/95 shadow-[0_-8px_30px_rgba(18,48,40,0.08)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-6">
        <p className="shrink-0 text-sm font-semibold text-charcoal-950">
          Check a real property in {cityName}
        </p>
        <div className="min-w-0 flex-1">
          <AddressForm
            compact
            cityName={cityName}
            regionName={regionName}
            placeholder={`Enter your ${cityName} address to screen subdivision factors...`}
          />
        </div>
      </div>
    </div>
  );
}
