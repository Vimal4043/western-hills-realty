import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PropertyCard({ property, index = 0 }) {
  const image = property.image || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to={`/properties/${property.id}`}
        data-testid={`property-${property.id}`}
        className="group block overflow-hidden rounded-2xl border border-[#c7d7ea] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(11,42,74,0.12)]"
      >
        {/* Image */}
        <div className="relative aspect-3/4 overflow-hidden">
          <img
            src={image}
            alt={`${property.unitNumber || property.title}, ${property.location}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />

          {property.listingType && (
            <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0B2A4A]">
              {property.listingType}
            </span>
          )}

          {property.type === "Commercial" && (
            <span className="absolute right-4 top-4 rounded-full bg-[#0B2A4A]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
              Commercial
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#667085]">
            {property.location}
          </p>

          <h3 className="mt-2 font-heading text-xl font-bold text-[#0B2A4A]">
            {property.unitNumber || property.title}
          </h3>

          <p className="mt-3 font-heading text-xl font-extrabold tracking-tight text-[#071E35]">
            {property.type}
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-[#c7d7ea] pt-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#667085]">
                Price
              </p>

              <p className="mt-1 font-heading text-lg font-bold text-[#0B2A4A]">
                {property.price || "Price on request"}
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#071E35] transition-colors duration-300 group-hover:text-[#3b82f6]">
              View Property
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}