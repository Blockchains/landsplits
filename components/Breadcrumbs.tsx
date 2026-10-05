import type { Jurisdiction } from "@/lib/data";

export function Breadcrumbs({ city }: { city?: Jurisdiction; regionName?: string; regionSlug?: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-charcoal-500">
      <ol className="flex flex-wrap items-center gap-2">
        <li><a href="/" className="hover:text-forest-800">Home</a></li>
        <li aria-hidden="true">/</li>
        <li>
          <a href={city?.countryCode === "CA" ? "/canada" : "/states"} className="hover:text-forest-800">
            {city?.countryName ?? "Directory"}
          </a>
        </li>
        {city ? (
          <>
            <li aria-hidden="true">/</li>
            <li><a href={`/${city.regionSlug}`} className="hover:text-forest-800">{city.regionName}</a></li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal-800">{city.cityName}</li>
          </>
        ) : null}
      </ol>
    </nav>
  );
}
