import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-serif text-4xl text-charcoal-950">That jurisdiction is not in the directory yet</h1>
      <p className="mt-3 text-sm text-charcoal-700">Try a state or province hub, or start with an address screen.</p>
      <Link href="/" className="mt-6 inline-block text-sm font-semibold text-forest-800 underline underline-offset-4">Back to the directory</Link>
    </main>
  );
}
