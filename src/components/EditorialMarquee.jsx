const WORDS = [
  "Villas",
  "Penthouses",
  "Waterfront",
  "Estates",
  "Private Tours",
  "Off-Market",
  "Architectural",
  "Concierge",
];

export default function EditorialMarquee() {
  return (
    <section className="border-y border-white/10 bg-[#0B2A4A] py-8 md:py-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6">
        {WORDS.map((word) => (
          <div key={word} className="flex items-center gap-8">
            <span className="font-heading text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              {word}
            </span>
            <span className="text-2xl text-[#3b82f6]">âœ¦</span>
          </div>
        ))}
      </div>
    </section>
  );
}