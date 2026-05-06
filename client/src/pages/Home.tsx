/*
 * HOME PAGE — SGR Design
 * Design: Architectural Noir — Cinematic Brutalist Luxury
 * Full-bleed hero with stone entry wide photo, intro section,
 * featured projects grid, design quote, and CTA
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { images } from "@/lib/images";

const featuredProjects = [
  {
    image: images.heroCloseup,
    title: "Modern Stone Residence",
    category: "Custom Home",
  },
  {
    image: images.interiorLivingKitchen,
    title: "Oceanview Living",
    category: "Custom Home",
  },
  {
    image: images.exteriorTraditional,
    title: "Classic Craftsman",
    category: "Custom Home",
  },
];

export default function Home() {
  return (
    <PageLayout>
      {/* ═══ HERO ═══ */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={images.heroWide}
            alt="Modern luxury stone-clad home at dusk"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/80 via-[#0D1B2A]/50 to-[#0D1B2A]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-[#0D1B2A]/40" />
        </div>

        {/* Hero content */}
        <div className="relative h-full container flex flex-col justify-end pb-24 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="h-px w-16 bg-white/30 mb-8" />
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-semibold leading-[0.95] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Residential Design<br />
              <span className="text-white/60 italic font-normal">Grounded in Real</span><br />
              Construction Experience
            </h1>
            <p
              className="text-white/50 text-base lg:text-lg max-w-lg leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Custom homes, infill housing, and multi-family residential design across Vancouver Island and British Columbia — led by a former builder with over 30 years of hands-on construction experience.
            </p>
            <p
              className="text-white/30 text-sm lg:text-base italic mb-10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              From concept design to permit and construction drawings, SGR Design Ltd. creates homes that are refined, buildable, and carefully resolved before they reach the job site.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-8 py-4 text-[13px] tracking-[0.2em] uppercase transition-all duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View Projects
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white/60 hover:text-white/80 hover:bg-white/10 px-8 py-4 text-[13px] tracking-[0.2em] uppercase transition-all duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Start a Conversation
              </Link>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown size={20} className="text-white/30" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ INTRO SECTION ═══ */}
      <section className="py-24 lg:py-36 bg-[#0D1B2A]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <div className="h-px w-12 bg-white/20 mb-8" />
              <h2
                className="text-3xl lg:text-5xl text-white/90 font-medium leading-tight mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                A Builder's Eye<br />
                <span className="text-white/50 italic">for Residential Design</span>
              </h2>
              <p
                className="text-white/40 text-base leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                SGR Design Ltd. is a residential design studio based in Nanoose Bay, BC, led by principal designer Sylvain Giroux. With a background spanning carpentry, framing, site supervision, custom home building, and full residential design, Sylvain brings a practical builder's eye to every project.
              </p>
              <p
                className="text-white/40 text-base leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-body)" }}
              >
                The result is design that is refined, buildable, and carefully resolved — from early concept through permit and construction drawings. Every plan is approached not only as a design exercise, but as something that has to be permitted, priced, coordinated, and built.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-white/50 hover:text-white/70 text-[13px] tracking-[0.15em] uppercase transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Learn More About Us
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <img
                  src={images.interiorWhiteKitchen}
                  alt="Luxury white kitchen interior"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/30 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PROJECTS ═══ */}
      <section className="py-24 lg:py-36 bg-[#080F1A]">
        <div className="container">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16">
              <div>
                <div className="h-px w-12 bg-white/20 mb-8" />
                <h2
                  className="text-3xl lg:text-5xl text-white/90 font-medium"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Featured Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-white/40 hover:text-white/60 text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 mt-6 sm:mt-0"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View All
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.15}>
                <Link href="/projects" className="group block">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <p
                        className="text-white/40 text-[11px] tracking-[0.2em] uppercase mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {project.category}
                      </p>
                      <h3
                        className="text-white/90 text-xl lg:text-2xl font-medium"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VIDEO TOURS HIGHLIGHT ═══ */}
      <section className="py-24 lg:py-36 bg-[#0D1B2A]">
        <div className="container">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16">
              <div>
                <div className="h-px w-12 bg-white/20 mb-8" />
                <h2
                  className="text-3xl lg:text-5xl text-white/90 font-medium"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Video Tours
                </h2>
                <p
                  className="text-white/40 text-base mt-4 max-w-lg"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Step inside our custom homes through cinematic video walkthroughs.
                </p>
              </div>
              <Link
                href="/video-tours"
                className="group inline-flex items-center gap-2 text-white/40 hover:text-white/60 text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 mt-6 sm:mt-0"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View All Tours
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "UhUSXVtGOxQ", title: "West Coast Contemporary", style: "Contemporary" },
              { id: "tdgZHfcGBcE", title: "French Country Chateau", style: "French Country" },
              { id: "QZ2GW6DOhLI", title: "Modern Farmhouse", style: "Coastal Farmhouse" },
            ].map((vid, i) => (
              <ScrollReveal key={vid.id} delay={i * 0.15}>
                <a
                  href={`https://www.youtube.com/watch?v=${vid.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={`https://img.youtube.com/vi/${vid.id}/maxresdefault.jpg`}
                      alt={vid.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#0D1B2A]/30 group-hover:bg-[#0D1B2A]/10 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full border-2 border-white/40 group-hover:border-white/70 flex items-center justify-center transition-all duration-500 group-hover:scale-110 bg-white/5 group-hover:bg-white/10 backdrop-blur-sm">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white/70 group-hover:text-white ml-0.5"><polygon points="5,3 19,12 5,21" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p
                      className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {vid.style}
                    </p>
                    <h3
                      className="text-white/80 text-lg font-medium group-hover:text-white/90 transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {vid.title}
                    </h3>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUOTE SECTION ═══ */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.interiorLivingDark}
            alt="Modern living room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D1B2A]/75" />
        </div>
        <div className="relative container text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="h-px w-16 bg-white/20 mx-auto mb-12" />
              <blockquote
                className="text-2xl sm:text-3xl lg:text-4xl text-white/80 italic leading-relaxed"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                "You don't think your way to creative work. You work your way to creative thinking."
              </blockquote>
              <div className="h-px w-16 bg-white/20 mx-auto mt-12" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SERVICES PREVIEW ═══ */}
      <section className="py-24 lg:py-36 bg-[#0D1B2A]">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="h-px w-12 bg-white/20 mx-auto mb-8" />
              <h2
                className="text-3xl lg:text-5xl text-white/90 font-medium"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Services
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Custom Homes & Infill", desc: "Site-specific design for custom homes, duplexes, fourplexes, carriage houses, laneway homes, and small-scale residential development." },
              { title: "Multi-Family & Developer Support", desc: "Residential design and documentation for townhomes, multi-unit projects, and builder/developer-led work." },
              { title: "Permit & Construction Drawings", desc: "Detailed drawing packages prepared for municipal review and construction coordination." },
              { title: "3D Modelling & Visualization", desc: "Revit and Enscape models that help clients, builders, and consultants understand the design before construction begins." },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="border border-white/5 p-8 lg:p-10 hover:border-white/15 transition-colors duration-500 h-full">
                  <span
                    className="text-white/15 text-sm tracking-wider block mb-6"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className="text-white/80 text-xl font-medium mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-white/30 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {service.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-white/40 hover:text-white/60 text-[13px] tracking-[0.15em] uppercase transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View All Services
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ WHY SGR DESIGN SECTION ═══ */}
      <section className="py-24 lg:py-36 bg-[#0A1525]">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="h-px w-12 bg-white/20 mx-auto mb-8" />
              <h2
                className="text-3xl lg:text-5xl text-white/90 font-medium"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Why Work With SGR Design
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Design Informed by Construction",
                desc: "Sylvain's background in carpentry, framing, site supervision, and custom home building gives each project a practical foundation."
              },
              {
                title: "Drawings That Support the Build",
                desc: "Every plan is developed with attention to coordination, sequencing, code requirements, and the realities of construction."
              },
              {
                title: "Flexible Residential Expertise",
                desc: "From custom homes and infill housing to townhomes and multi-family communities, SGR Design works across a wide range of residential project types."
              },
              {
                title: "Clear Visualization Before Construction",
                desc: "Revit, Civil 3D, and Enscape help clients and project teams understand the design before major decisions are made."
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="border border-white/10 p-8 lg:p-10 hover:border-white/20 transition-colors duration-500">
                  <h3
                    className="text-white/80 text-lg font-medium mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-white/40 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS SECTION ═══ */}
      <section className="py-24 lg:py-36 bg-[#0D1B2A]">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="h-px w-12 bg-white/20 mx-auto mb-8" />
              <h2
                className="text-3xl lg:text-5xl text-white/90 font-medium"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                What Clients Say
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="border border-white/10 p-8 lg:p-10 hover:border-white/20 transition-colors duration-500">
                <p
                  className="text-white/60 text-base italic leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  "He consistently found solutions that balanced aesthetics, functionality, and constructability."
                </p>
                <p
                  className="text-white/40 text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="text-white/60 font-medium">Nikki & Michael Nygren</span>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="border border-white/10 p-8 lg:p-10 hover:border-white/20 transition-colors duration-500">
                <p
                  className="text-white/60 text-base italic leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  "Their designs are consistently thorough, practical, and cost-effective."
                </p>
                <p
                  className="text-white/40 text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="text-white/60 font-medium">Brandon Crema</span><br />
                  <span className="text-white/30">District Group</span>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="border border-white/10 p-8 lg:p-10 hover:border-white/20 transition-colors duration-500">
                <p
                  className="text-white/60 text-base italic leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  "He successfully captured the spirit of the site."
                </p>
                <p
                  className="text-white/40 text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span className="text-white/60 font-medium">Troy & Holly Gibson</span>
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href="/testimonials"
                className="group inline-flex items-center gap-2 text-white/40 hover:text-white/60 text-[13px] tracking-[0.15em] uppercase transition-colors duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Read Full Testimonials
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="py-24 lg:py-36 bg-[#080F1A]">
        <div className="container text-center">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <div className="h-px w-12 bg-white/20 mx-auto mb-8" />
              <h2
                className="text-3xl lg:text-5xl text-white/90 font-medium mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ready to Begin<br />
                <span className="italic text-white/50">Your Project?</span>
              </h2>
              <p
                className="text-white/40 text-base leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Let's discuss your vision. Whether you're planning a new custom home or
                reimagining an existing space, we'd love to hear from you.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-10 py-5 text-[13px] tracking-[0.2em] uppercase transition-all duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Start a Conversation
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
