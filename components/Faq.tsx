import { faqItems } from '@/content/faq';

/**
 * FAQ-Akkordeon auf Basis von <details>/<summary>:
 * funktioniert ohne JavaScript, ist barrierefrei und superschnell.
 */
export default function Faq() {
  return (
    <div className="divide-y divide-sand-200 border-y border-sand-200">
      {faqItems.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-medium text-navy [&::-webkit-details-marker]:hidden">
            {item.question}
            <span className="text-sand-500 transition-transform group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className="pb-5 pr-8 text-navy/75">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
