/*
 * SERVICES PAGE — SGR Design
 * Design: Architectural Noir
 * Four service areas with descriptions and imagery, plus project types and audience segments
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { images } from "@/lib/images";

const services = [
  {
    number: "01",
    title: "Schematic Design",
    description:
      "We help shape projects from the earliest stage, turning ideas into clear design direction through layout, proportion, form, and overall planning. Our collaborative approach ensures your vision is understood and refined before moving forward.",
    image: images.heroCloseup,
    styles: null,
  },
  {
    number: "02",
    title: "Permit Drawings",
    description:
      "Complete drawing packages prepared for municipal review, with attention to applicable BC Building Code requirements, site conditions, and the practical details that help reduce back-and-forth during permitting.",
    image: images.exteriorTraditional,
    styles: null,
  },
  {
    number: "03",
    title: "Working Drawings & Construction Sets",
    description:
      "Every drawing package is prepared to clearly communicate the design intent and support accurate, efficient construction on site.",
    image: images.interiorLivingKitchen,
    styles: null,
  },
  {
    number: "04",
    title: "3D Modelling & Visualization",
    description:
      "Using 3D modeling and rendering, we create detailed models and photorealistic visualizations that help you understand the design before construction begins. This makes it easier to visualize the final result, refine decisions early, and move forward with greater certainty.",
    image: images.interiorWhiteKitchen,
    styles: null,
  },
];

export default function Services() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

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
              Our Services
            </h1>
            <p
              className="text-white/40 text-base lg:text-lg max-w-2xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              SGR Design Ltd. provides residential design services primarily for Part 9 projects under the BC Building Code, with the ability to collaborate with architects, engineers, builders, and developers on larger or more complex projects. Our work includes schematic design, permit drawings, working drawings, construction documentation, and 3D visualization. Every project is developed with a focus on proportion, livability, site response, code awareness, and constructability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services list */}
      {services.map((service, i) => (
        <section
          key={service.number}
          className={`py-20 lg:py-28 ${i % 2 === 0 ? "bg-[#0D1B2A]" : "bg-[#0A1525]"}`}
        >
          <div className="container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              i % 2 === 1 ? "lg:direction-rtl" : ""
            }`}>
              {/* Text */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ScrollReveal>
                  <span
                    className="text-white/10 text-6xl lg:text-8xl font-semibold block mb-4"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {service.number}
                  </span>
                  <h2
                    className="text-2xl lg:text-4xl text-white/90 font-medium mb-6"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {service.title}
                  </h2>
                  <p
                    className="text-white/40 text-base leading-[1.85] mb-6"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {service.description}
                  </p>
                  {service.styles && (
                    <p
                      className="text-white/25 text-sm mb-8"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <span className="text-white/40">Styles:</span> {service.styles}
                    </p>
                  )}
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-white/40 hover:text-white/60 text-[13px] tracking-[0.15em] uppercase transition-colors duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Discuss Your Project
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </ScrollReveal>
              </div>

              {/* Image */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <ScrollReveal delay={0.2}>
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/20 to-transparent" />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Project Types section */}
      <section className="py-24 lg:py-36 bg-[#0A1525]">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="h-px w-12 bg-white/20 mx-auto mb-8" />
              <h2
                className="text-3xl lg:text-4xl text-white/90 font-medium mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Project Types
              </h2>
              <p
                className="text-white/40 text-base max-w-lg mx-auto"
                style={{ fontFamily: "var(--font-body)" }}
              >
                We work across a range of residential project scales and types.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Custom Homes", desc: "Site-specific residential design for private clients, from compact homes to large custom residences." },
              { title: "Small-Scale Residential", desc: "Duplexes, fourplexes, carriage houses, laneway homes, and small-scale residential development." },
              { title: "Townhomes & Multi-Family", desc: "Residential communities designed with livability, market appeal, code awareness, and construction efficiency in mind." },
              { title: "Builder & Developer Support", desc: "Design and documentation support for builders, developers, and architects who need practical, buildable residential drawings." },
            ].map((type, i) => (
              <ScrollReveal key={type.title} delay={i * 0.1}>
                <div className="border border-white/10 p-8 lg:p-10 hover:border-white/20 transition-colors duration-500">
                  <h3
                    className="text-white/80 text-lg font-medium mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {type.title}
                  </h3>
                  <p
                    className="text-white/40 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {type.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With section */}
      <section className="py-24 lg:py-36 bg-[#0D1B2A]">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="h-px w-12 bg-white/20 mx-auto mb-8" />
              <h2
                className="text-3xl lg:text-4xl text-white/90 font-medium mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Who We Work With
              </h2>
              <p
                className="text-white/40 text-base max-w-lg mx-auto"
                style={{ fontFamily: "var(--font-body)" }}
              >
                SGR Design serves homeowners, builders, developers, and design professionals.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Homeowners", desc: "For clients planning a custom home and looking for a designer who can translate ideas into a buildable plan." },
              { title: "Builders", desc: "For builders who need clear, practical drawings that support efficient construction and fewer site questions." },
              { title: "Developers", desc: "For multi-family projects where design, unit planning, code awareness, and cost-conscious construction all matter." },
              { title: "Architects & Consultants", desc: "For collaborative residential design and documentation support on larger or more complex projects." },
            ].map((audience, i) => (
              <ScrollReveal key={audience.title} delay={i * 0.1}>
                <div className="border border-white/10 p-8 lg:p-10 hover:border-white/20 transition-colors duration-500">
                  <h3
                    className="text-white/80 text-lg font-medium mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {audience.title}
                  </h3>
                  <p
                    className="text-white/40 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {audience.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-24 lg:py-36 bg-[#080F1A]">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="h-px w-12 bg-white/20 mx-auto mb-8" />
              <h2
                className="text-3xl lg:text-4xl text-white/90 font-medium mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Design Process
              </h2>
              <p
                className="text-white/40 text-base max-w-lg mx-auto"
                style={{ fontFamily: "var(--font-body)" }}
              >
                A collaborative approach that puts your experience at the forefront.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {[
              { step: "01", title: "Consultation", desc: "We listen to your vision, assess your site, and understand your requirements and budget." },
              { step: "02", title: "Concept Design", desc: "Initial design concepts are developed, exploring layouts, massing, and architectural character." },
              { step: "03", title: "Design Development", desc: "The chosen concept is refined with detailed floor plans, elevations, sections, and 3D views." },
              { step: "04", title: "Construction Docs", desc: "Complete drawing packages are prepared for permits, coordination, and construction." },
            ].map((phase, i) => (
              <ScrollReveal key={phase.step} delay={i * 0.1}>
                <div className={`p-8 lg:p-10 h-full ${i % 2 === 0 ? "bg-[#080F1A]" : "bg-[#0A1220]"}`}>
                  <span
                    className="text-white/10 text-3xl font-semibold block mb-6"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {phase.step}
                  </span>
                  <h3
                    className="text-white/80 text-lg font-medium mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {phase.title}
                  </h3>
                  <p
                    className="text-white/30 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {phase.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-24 lg:py-36 bg-[#0A1525]">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="h-px w-12 bg-white/20 mx-auto mb-8" />
              <h2
                className="text-3xl lg:text-4xl text-white/90 font-medium mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "Do you build the homes you design?",
                a: "SGR Design Ltd. now focuses on residential design, permit drawings, construction drawings, and 3D visualization. Sylvain's previous experience as a custom home builder informs the design process."
              },
              {
                q: "What areas do you serve?",
                a: "SGR Design is based in Nanoose Bay, BC, and serves clients across British Columbia and internationally."
              },
              {
                q: "Do you work with builders and developers?",
                a: "Yes. SGR Design works with private homeowners, builders, developers, and engineers on custom homes and multi-family residential projects."
              },
              {
                q: "Can you help with permit drawings?",
                a: "Yes. SGR Design prepares drawing packages for municipal review, developed with attention to applicable code requirements, site conditions, and constructability."
              },
              {
                q: "Do I need a survey before starting design?",
                a: "A legal survey or site plan is often helpful early in the process, especially for setbacks, grades, easements, height limits, and site planning. If you are unsure what you have, SGR Design can review your available documents and identify what may be needed."
              },
              {
                q: "Can you work with my builder or architect?",
                a: "Yes. SGR Design regularly works with homeowners, builders, developers, engineers, and consultants to help move projects from concept through permit and construction drawings."
              },
            ].map((item, i) => (
              <ScrollReveal key={item.q} delay={i * 0.1}>
                <div className="border border-white/10 p-8 hover:border-white/20 transition-colors duration-500">
                  <h3
                    className="text-white/80 text-base font-medium mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.q}
                  </h3>
                  <p
                    className="text-white/40 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#0D1B2A]">
        <div className="container text-center">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <blockquote
                className="text-2xl lg:text-3xl text-white/70 italic leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                "Recognizing the need is the primary condition for design."
              </blockquote>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-10 py-5 text-[13px] tracking-[0.2em] uppercase transition-all duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Start Your Project
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
