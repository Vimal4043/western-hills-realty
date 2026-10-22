import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQAccordion({ questions }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="mt-12">
      {questions.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.q}
            className="border-b border-[#c7d7ea] first:border-t"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-5 py-6 text-left"
            >
              <span className="font-heading text-lg font-bold leading-snug text-[#0B2A4A] md:text-xl">
                {item.q}
              </span>

              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "border-[#3b82f6] bg-[#3b82f6]"
                    : "border-[#c7d7ea] bg-white"
                }`}
              >
                {isOpen ? (
                  <Minus className="h-4 w-4 text-[#0B2A4A]" />
                ) : (
                  <Plus className="h-4 w-4 text-[#071E35]" />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-6 text-base leading-7 text-[#667085] md:text-lg">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
