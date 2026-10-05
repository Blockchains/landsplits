import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 bg-forest-950 text-sand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl text-white">LandSplits</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-sand-200">
            Land subdivision guidance, city by city, across the United States and Canada. Educational
            and preliminary. Not a survey, legal opinion, or approval.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-sand-200">Directory</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/states" className="hover:text-white">United States</Link></li>
            <li><Link href="/canada" className="hover:text-white">Canada</Link></li>
            <li><Link href="/professionals" className="hover:text-white">Professionals</Link></li>
            <li><Link href="/how-it-works" className="hover:text-white">How it works</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-sand-200">Policy</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
            <li><Link href="/editorial-policy" className="hover:text-white">Editorial policy</Link></li>
            <li><Link href="/data-sources" className="hover:text-white">Data sources</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs leading-5 text-sand-200 sm:px-6">
          Information on LandSplits.com is educational and preliminary. Subdivision eligibility, zoning,
          lot dimensions, access, utilities, title, environmental constraints, financing, local standards,
          and approval processes must be verified with the relevant authority and qualified professionals.
        </p>
      </div>
    </footer>
  );
}
