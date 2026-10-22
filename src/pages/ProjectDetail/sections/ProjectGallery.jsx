import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Image as ImageIcon,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ProjectGallery({ project }) {
  const images = project.images || [];
  const videos = project.videos || [];

  const media = [
    ...images.map((src) => ({
      type: "image",
      src,
    })),
    ...videos.map((src) => ({
      type: "video",
      src,
    })),
  ];

  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const activeMedia = media[active];

  const previous = () => {
    setActive((current) => (current === 0 ? media.length - 1 : current - 1));
  };

  const next = () => {
    setActive((current) => (current === media.length - 1 ? 0 : current + 1));
  };

  if (media.length === 0) {
    return (
      <section
        data-testid="project-gallery"
        className="bg-white px-5 py-8 md:px-10 md:py-12"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex min-h-105 items-center justify-center rounded-3xl border border-[#c7d7ea] bg-[#d9e2ef]">
            <ImageIcon className="h-12 w-12 text-[#0B2A4A]/30" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      data-testid="project-gallery"
      className="bg-white px-5 py-6 md:px-10 md:py-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Main Gallery */}
        <div className="relative overflow-hidden rounded-3xl border border-[#c7d7ea] bg-white">
          <div className="flex min-h-105 items-center justify-center bg-white md:min-h-140">
            {activeMedia.type === "video" ? (
              <video
                key={activeMedia.src}
                src={activeMedia.src}
                controls
                playsInline
                className="max-h-[75vh] w-full object-contain"
              />
            ) : (
              <img
                src={activeMedia.src}
                alt={`${project.title} - Image ${active + 1}`}
                className="max-h-[75vh] w-full cursor-zoom-in object-contain"
                onClick={() => setLightbox(true)}
              />
            )}
          </div>

          {/* Previous */}
          {media.length > 1 && (
            <>
              <button
                type="button"
                onClick={previous}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#0B2A4A] shadow-md transition hover:bg-[#3b82f6]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#0B2A4A] shadow-md transition hover:bg-[#3b82f6]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Counter */}
          {media.length > 1 && (
            <div className="absolute bottom-4 right-4 rounded-full bg-[#0B2A4A]/90 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
              {active + 1} / {media.length}
            </div>
          )}

          {/* Ready to move badge */}
          {project.availabilityNote && (
            <div className="absolute left-4 top-4 rounded-full bg-[#3b82f6] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0B2A4A]">
              {project.availabilityNote}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {media.length > 1 && (
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {media.map((item, i) => (
              <button
                key={`${item.type}-${i}`}
                type="button"
                onClick={() => setActive(i)}
                aria-label={
                  item.type === "video"
                    ? `Play video ${i + 1}`
                    : `View image ${i + 1}`
                }
                className={`group relative overflow-hidden rounded-xl border-2 bg-white transition-all duration-300 ${
                  active === i
                    ? "border-[#3b82f6]"
                    : "border-[#c7d7ea] hover:border-[#0B2A4A]/40"
                }`}
              >
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="aspect-square w-full object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0B2A4A]">
                        <Play className="ml-0.5 h-4 w-4 fill-current" />
                      </span>
                    </div>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt={`${project.title} thumbnail ${i + 1}`}
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && activeMedia?.type === "image" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
              onClick={() => setLightbox(false)}
            >
              <button
                type="button"
                onClick={() => setLightbox(false)}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0B2A4A] transition hover:bg-[#3b82f6]"
                aria-label="Close image"
              >
                <X className="h-5 w-5" />
              </button>

              <img
                src={activeMedia.src}
                alt={`${project.title} - Image ${active + 1}`}
                className="max-h-[90vh] max-w-[92vw] rounded-xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
