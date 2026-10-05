import Link from "next/link";

const links = [
  { href: "/states", label: "United States" },
  { href: "/canada", label: "Canada" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/professionals", label: "Professionals" },
  { href: "/check", label: "Check a property" }
];

export function Header() {
  return (
    <header className="border-b border-white/10 bg-forest-950 text-sand-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-sm border border-sand-200/40">
            <ParcelMark />
          </span>
          <span>
            <span className="block font-serif text-lg leading-none tracking-tight text-white">LandSplits</span>
            <span className="mt-1 block text-[11px] uppercase tracking-[0.16em] text-sand-200">City by city</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-sand-100 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/check"
          className="rounded-sm bg-sand-50 px-3 py-2 text-sm font-semibold text-forest-950 hover:bg-white"
        >
          Check property
        </Link>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-white/10 px-4 py-2 text-sm text-sand-100 md:hidden">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="whitespace-nowrap">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function ParcelMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
      <rect x="3" y="4" width="26" height="24" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 16h16M19 4v24" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="3" cy="4" r="1.1" fill="#E5D7BF" />
      <circle cx="19" cy="4" r="1.1" fill="#E5D7BF" />
      <circle cx="29" cy="4" r="1.1" fill="#E5D7BF" />
      <circle cx="3" cy="16" r="1.1" fill="#E5D7BF" />
      <circle cx="19" cy="16" r="1.1" fill="#E5D7BF" />
      <circle cx="3" cy="28" r="1.1" fill="#E5D7BF" />
      <circle cx="19" cy="28" r="1.1" fill="#E5D7BF" />
      <circle cx="29" cy="28" r="1.1" fill="#E5D7BF" />
    </svg>
  );
}
