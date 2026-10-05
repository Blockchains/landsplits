"use client";

import { useState } from "react";

export function FaqList({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-sand-200 border-y border-sand-200">
      {faqs.map((faq, index) => {
        const expanded = open === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? -1 : index)}
            >
              <span className="font-serif text-lg text-charcoal-950">{faq.question}</span>
              <span className="text-forest-800">{expanded ? "–" : "+"}</span>
            </button>
            {expanded ? <p className="pb-4 text-sm leading-6 text-charcoal-700">{faq.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
