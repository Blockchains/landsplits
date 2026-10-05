import type { Metadata } from "next";

export const metadata: Metadata = { title: "Editorial policy" };

export default function EditorialPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-serif text-4xl text-charcoal-950">Editorial policy</h1>
      <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-7 text-charcoal-700">
        <li>A city page is indexable only with a real jurisdiction, a stated authority, at least one official source path, and no promised outcome.</li>
        <li>Facts and prose are stored separately so a code change does not require a rewrite of the whole page.</li>
        <li>User corrections are queued. They are not auto-published.</li>
        <li>Scores under 40 stay out of the priority sitemap.</li>
      </ul>
    </main>
  );
}
