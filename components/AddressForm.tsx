"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function AddressForm({
  placeholder = "Enter a property address, city, or postal code",
  cityName,
  regionName,
  compact = false
}: {
  placeholder?: string;
  cityName?: string;
  regionName?: string;
  compact?: boolean;
}) {
  const router = useRouter();
  const [address, setAddress] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const query = new URLSearchParams();
    if (address.trim()) query.set("address", address.trim());
    if (cityName) query.set("city", cityName);
    if (regionName) query.set("region", regionName);
    router.push(`/check?${query.toString()}`);
  }

  return (
    <form onSubmit={onSubmit} className={compact ? "flex gap-2" : "flex flex-col gap-3 sm:flex-row"}>
      <label className="sr-only" htmlFor={compact ? "sticky-address" : "address"}>
        Property address
      </label>
      <input
        id={compact ? "sticky-address" : "address"}
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-sm border border-sand-200 bg-white px-4 py-3 text-sm text-charcoal-950 outline-none ring-forest-800 placeholder:text-charcoal-500 focus:ring-2"
      />
      <button
        type="submit"
        className="shrink-0 rounded-sm bg-forest-800 px-4 py-3 text-sm font-semibold text-white hover:bg-forest-700"
      >
        Check my property
      </button>
    </form>
  );
}
