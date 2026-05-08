/*
 * VIDEO TOURS PAGE — SGR Design
 * Design: Architectural Noir — Cinematic Brutalist Luxury
 * Six featured video tours of custom homes designed by Sylvain Giroux
 * Each video has a cinematic embed with project description
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";

interface VideoProject {
  id: string;
  title: string;
  style: string;
  location: string;
  description: string;
  thumbnail: string;
}

const videoProjects: VideoProject[] = [
  {
    id: "UhUSXVtGOxQ",
    title: "West Coast Contemporary",
    style: "Contemporary Modern",
    location: "Oak Leaf Drive, Nanoose Bay",
    description:
      "A striking cliffside residence featuring intersecting geometric volumes with flat rooflines, a sophisticated mix of stucco, warm wood paneling, and board-formed concrete. The interior showcases double-height ceilings with massive floor-to-ceiling windows, a floating staircase against a multi-story concrete wall, and a sleek black kitchen with waterfall-edge island.",
    thumbnail: `https://img.youtube.com/vi/UhUSXVtGOxQ/maxresdefault.jpg`,
  },
  {
    id: "fLJg4TuiLXQ",
    title: "Coastal Contemporary Oceanview",
    style: "West Coast Contemporary",
    location: "Oak Leaf Drive, Nanoose Bay",
    description:
      "Perched on a rugged coastal cliff with panoramic ocean views, this home features a dramatic dual-sided floor-to-ceiling fireplace, modern dark kitchen with marble waterfall island, a walk-in closet, and a glass wine display wall. Solar panels, water features, and carefully framed ocean views add to the home's site-specific character.",
    thumbnail: `https://img.youtube.com/vi/fLJg4TuiLXQ/maxresdefault.jpg`,
  },
  {
    id: "tdgZHfcGBcE",
    title: "French Country Chateau",
    style: "French Country",
    location: "Vancouver Island",
    description:
      "A French Country-inspired residence organized around a dramatic entry sequence, turreted dining room, stone fireplace, and formal garden approach. The kitchen features a custom hammered-copper range hood and copper farmhouse sink, with formal gardens, sculpted hedges, and stone fountains.",
    thumbnail: `https://img.youtube.com/vi/tdgZHfcGBcE/maxresdefault.jpg`,
  },
  {
    id: "u6eat24EvXs",
    title: "Waterfront Estate",
    style: "French Country / Chateauesque",
    location: "Vancouver Island Waterfront",
    description:
      "Built into a steep rocky cliffside, this estate marries European permanence with West Coast waterfront living. A stunning stone archway frames ocean views from the courtyard, while the interior features soaring dark-stained beams, arched windows, and a glass-enclosed fireplace. A spiral staircase connects multi-level patios overlooking the Pacific.",
    thumbnail: `https://img.youtube.com/vi/u6eat24EvXs/maxresdefault.jpg`,
  },
  {
    id: "QZ2GW6DOhLI",
    title: "Modern Farmhouse",
    style: "Coastal Contemporary Farmhouse",
    location: "Vancouver Island",
    description:
      "Crisp white board-and-batten siding with matte black accents defines this elevated coastal farmhouse. Inside, soaring vaulted ceilings with skylights, a floor-to-ceiling stone fireplace, and light wide-plank hardwood create a bright, airy atmosphere. The home sits on a rocky bluff with panoramic ocean and island views.",
    thumbnail: `https://img.youtube.com/vi/QZ2GW6DOhLI/maxresdefault.jpg`,
  },
  {
    id: "2jaRycCaJ9w",
    title: "Hillside Oceanview Contemporary",
    style: "Modern West Coast",
    location: "Vancouver Island",
    description:
      "Terraced into a hillside with sweeping panoramic ocean and mountain views, this home combines textured stone veneer with smooth stucco and dark-framed windows. Multi-level patios with glass railings and seamless indoor-outdoor living spaces respond to the site's natural setting.",
    thumbnail: `https://img.youtube.com/vi/2jaRycCaJ9w/maxresdefault.jpg`,
  },
  {
    id: "6Xm-WRu4814",
    title: "Modern Farmhouse Elegance",
    style: "Modern Farmhouse",
    location: "563 Eaglecrest Drive",
    description:
      "A blend of traditional exterior character with contemporary interior design. This modern farmhouse features a Craftsman-style exterior with brown wood shingles and white trim, while the interior showcases bright, airy spaces with white cabinetry, light hardwood floors, and modern fixtures. The kitchen includes a large central island, and the home features vaulted ceilings with exposed beams, a bathroom with freestanding soaking tub, and a wooden deck.",
    thumbnail: `https://img.youtube.com/vi/6Xm-WRu4814/maxresdefault.jpg`,
  },
  {
    id: "fUTrsbAUNt4",
    title: "Contemporary Oceanview Estate",
    style: "Modern Contemporary",
    location: "7545 Copley Ridge Drive, Lantzville",
    description:
      "Perched atop the Lantzville foothills with unobstructed panoramic ocean, island, and mountain views, this contemporary home features a clean geometric design with crisp white siding and bold black paneling. The multi-level layout maximizes the elevated position with expansive glass, high ceilings, and seamless indoor-outdoor living. The kitchen includes a black and white marble island, a glass wine display wall, and a modern linear fireplace, with a wrap-around terrace overlooking the coastal views.",
    thumbnail: `https://img.youtube.com/vi/fUTrsbAUNt4/maxresdefault.jpg`,
  },
];

function VideoModal({ video, onClose }: { video: VideoProject; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mt-4">
          <h3
            className="text-white/90 text-xl font-medium"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {video.title}
          </h3>
          <p
            className="text-white/40 text-sm mt-1"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {video.location} &middot; {video.style}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function VideoTours() {
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      {/* Page header */}
      <section className="pt-32 lg:pt-40 pb-16 bg-[#0D1B2A]">
        <div className="container">
          <ScrollReveal>
            <div className="h-px w-12 bg-white/20 mb-8" />
            <h1
              className="text-4xl lg:text-6xl text-white/90 font-medium mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Video Tours
            </h1>
            <p
              className="text-white/40 text-base lg:text-lg max-w-2xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Step inside our custom homes through cinematic video walkthroughs. From West Coast
              Contemporary to French Country estates, experience the craftsmanship and attention
              to detail that defines every SGR Design project.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Video grid */}
      <section className="py-12 lg:py-20 bg-[#0D1B2A]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {videoProjects.map((video, i) => (
              <ScrollReveal key={video.id} delay={i * 0.1}>
                <div className="group">
                  {/* Thumbnail with play button */}
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="relative block w-full overflow-hidden aspect-video mb-6"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#0D1B2A]/30 group-hover:bg-[#0D1B2A]/10 transition-colors duration-500" />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-2 border-white/40 group-hover:border-white/70 flex items-center justify-center transition-all duration-500 group-hover:scale-110 bg-white/5 group-hover:bg-white/10 backdrop-blur-sm">
                        <Play
                          size={24}
                          className="text-white/70 group-hover:text-white transition-colors duration-300 ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                    {/* Style badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="text-[10px] tracking-[0.2em] uppercase text-white/70 bg-black/40 backdrop-blur-sm px-3 py-1.5 border border-white/10"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {video.style}
                      </span>
                    </div>
                  </button>

                  {/* Project info */}
                  <div>
                    <h3
                      className="text-white/90 text-xl lg:text-2xl font-medium mb-2 group-hover:text-white transition-colors duration-300"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {video.title}
                    </h3>
                    <p
                      className="text-white/30 text-[11px] tracking-[0.15em] uppercase mb-4"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {video.location}
                    </p>
                    <p
                      className="text-white/35 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {video.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom quote */}
      <section className="py-20 lg:py-28 bg-[#080F1A]">
        <div className="container text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="h-px w-16 bg-white/20 mx-auto mb-10" />
              <blockquote
                className="text-xl sm:text-2xl lg:text-3xl text-white/70 italic leading-relaxed"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                "Creativity is to discover a question that has never been asked."
              </blockquote>
              <div className="h-px w-16 bg-white/20 mx-auto mt-10" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Video modal */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
