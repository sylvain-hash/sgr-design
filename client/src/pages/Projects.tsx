/*
 * PROJECTS PAGE — SGR Design
 * Design: Architectural Noir
 * Featured projects as case studies with project details and descriptions
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { images } from "@/lib/images";

interface CaseStudy {
  title: string;
  location: string;
  type: string;
  services: string;
  challenge: string;
  builderContext: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Blind Bay — 36-Unit Community",
    location: "Blind Bay, BC",
    type: "Multi-family residential",
    services: "Schematic design, design development, permit and construction drawing support",
    challenge: "Creating a cohesive residential community with efficient unit planning, practical construction detailing, and marketable exterior character.",
    builderContext: "SGR Design's construction background helped keep the design focused on repeatable assemblies, efficient detailing, and practical execution across multiple units.",
    image: images.blindBayAerial01,
  },
  {
    title: "Copley Ridge — Contemporary Oceanview Estate",
    location: "Lantzville, BC",
    type: "Custom home",
    services: "Custom home design, 3D modelling, permit and construction drawings",
    challenge: "Designing for a steep elevated site while maximizing ocean, island, and mountain views.",
    builderContext: "The design response balanced dramatic view capture with the realities of a steep site, structural coordination, access, and buildability.",
    image: images.copleyRidgeAerial,
  },
  {
    title: "Predator Ridge — 60-Unit Community",
    location: "Vernon, BC",
    type: "Multi-family residential",
    services: "Design development, permit drawings, construction documentation",
    challenge: "Balancing density, livability, and market appeal in a large-scale residential community.",
    builderContext: "Construction experience informed efficient site planning, practical unit layouts, and cost-conscious building details that support developer timelines and budgets.",
    image: images.predatorRidgeUnit,
  },
  {
    title: "Fairwinds Golf Course Home",
    location: "Nanoose Bay, BC",
    type: "Custom home",
    services: "Site-specific residential design, permit and construction drawings",
    challenge: "Designing around golf course height restrictions, view corridors, and the property's natural watercourse.",
    builderContext: "The project required careful design decisions around height, view corridors, watercourse context, and community restrictions—all resolved through practical, buildable solutions.",
    image: images.heroWide,
  },
];

export default function Projects() {
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
              Featured Projects
            </h1>
            <p
              className="text-white/40 text-base lg:text-lg max-w-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              A selection of significant residential projects designed by SGR Design across Vancouver Island, the Okanagan, and British Columbia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case studies */}
      {caseStudies.map((project, i) => (
        <section
          key={project.title}
          className={`py-20 lg:py-28 ${i % 2 === 0 ? "bg-[#0D1B2A]" : "bg-[#0A1525]"}`}
        >
          <div className="container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              i % 2 === 1 ? "lg:direction-rtl" : ""
            }`}>
              {/* Image */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ScrollReveal delay={0.1}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/20 to-transparent" />
                  </div>
                </ScrollReveal>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <ScrollReveal>
                  <h2
                    className="text-2xl lg:text-4xl text-white/90 font-medium mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </h2>

                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-white/30 text-[11px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "var(--font-body)" }}>
                        Location
                      </p>
                      <p className="text-white/60 text-base" style={{ fontFamily: "var(--font-body)" }}>
                        {project.location}
                      </p>
                    </div>

                    <div>
                      <p className="text-white/30 text-[11px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "var(--font-body)" }}>
                        Project Type
                      </p>
                      <p className="text-white/60 text-base" style={{ fontFamily: "var(--font-body)" }}>
                        {project.type}
                      </p>
                    </div>

                    <div>
                      <p className="text-white/30 text-[11px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "var(--font-body)" }}>
                        Services
                      </p>
                      <p className="text-white/60 text-base" style={{ fontFamily: "var(--font-body)" }}>
                        {project.services}
                      </p>
                    </div>

                    <div>
                      <p className="text-white/30 text-[11px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "var(--font-body)" }}>
                        Design Challenge
                      </p>
                      <p className="text-white/60 text-base leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="text-white/30 text-[11px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "var(--font-body)" }}>
                        Builder's Perspective
                      </p>
                      <p className="text-white/60 text-base leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                        {project.builderContext}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-white/40 hover:text-white/60 text-[13px] tracking-[0.15em] uppercase transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Discuss a Similar Project
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Portfolio gallery section */}
      <section className="py-24 lg:py-36 bg-[#0D1B2A]">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="h-px w-12 bg-white/20 mx-auto mb-8" />
              <h2
                className="text-3xl lg:text-4xl text-white/90 font-medium mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Interior Spaces & Details
              </h2>
              <p
                className="text-white/40 text-base max-w-lg mx-auto"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Select interior spaces shown as part of SGR Design's residential design portfolio, including kitchens, great rooms, staircases, ensuite layouts, and architectural interior detailing.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: images.interiorLivingKitchen, title: "Oceanview Great Room" },
              { image: images.interiorWhiteKitchen, title: "Chef's Kitchen" },
              { image: images.interiorLivingDark, title: "Contemporary Living" },
              { image: images.interiorKitchenBeams, title: "Exposed Beam Kitchen" },
              { image: images.interiorMasterBedroom, title: "Master Suite" },
              { image: images.interiorBathroomTub, title: "Spa Bathroom" },
              { image: images.detailStaircase, title: "Staircase Detail" },
              { image: images.interiorKitchenView, title: "Kitchen with View" },
              { image: images.interiorKitchenOpen, title: "Open Concept Kitchen" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.05}>
                <div className="group relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0D1B2A]/0 group-hover:bg-[#0D1B2A]/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <p
                      className="text-white/60 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#080F1A]">
        <div className="container text-center">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <div className="h-px w-12 bg-white/20 mx-auto mb-8" />
              <h2
                className="text-3xl lg:text-5xl text-white/90 font-medium mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ready to Start<br />
                <span className="italic text-white/50">Your Project?</span>
              </h2>
              <p
                className="text-white/40 text-base leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Whether you're planning a custom home, infill project, multi-family development, or renovation, SGR Design can help you understand the next step.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-10 py-5 text-[13px] tracking-[0.2em] uppercase transition-all duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Start a Project Conversation
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
