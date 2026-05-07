/*
 * ABOUT PAGE — SGR Design
 * Design: Architectural Noir
 * Sylvain's story, experience, and design philosophy
 */
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { images } from "@/lib/images";

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageLayout>
      {/* Hero banner */}
      <section className="relative pt-32 lg:pt-40 pb-24 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.exteriorCraftsman}
            alt="Modern craftsman home designed by SGR Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/90 via-[#0D1B2A]/75 to-[#0D1B2A]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-transparent" />
        </div>
        <div className="relative container">
          <ScrollReveal>
            <div className="h-px w-12 bg-white/20 mb-8" />
            <h1
              className="text-4xl lg:text-6xl text-white/90 font-medium mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              About SGR Design
            </h1>
            <p
              className="text-white/40 text-base lg:text-lg max-w-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Three decades of construction experience, now focused on refined residential design.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story section */}
      <section className="py-24 lg:py-36 bg-[#0D1B2A]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Text column */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="h-px w-12 bg-white/20 mb-8" />
                <h2
                  className="text-3xl lg:text-4xl text-white/90 font-medium leading-tight mb-8"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  A Builder's Eye<br />
                  <span className="text-white/50 italic">for Design</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p
                  className="text-white/45 text-base leading-[1.85] mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  I came to design through construction.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p
                  className="text-white/45 text-base leading-[1.85] mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Before focusing exclusively on residential design, I spent decades building homes from the ground up — foundations, framing, cabinetry, site supervision, and eventually operating my own custom home building company. From 2004 to 2024, I designed and built more than 50 custom homes.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p
                  className="text-white/45 text-base leading-[1.85] mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  That background shapes the way I work today. Every plan is approached not only as a design exercise, but as something that has to be permitted, priced, coordinated, and built. The goal is always the same: create homes that are beautiful, practical, and grounded in the realities of construction.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <p
                  className="text-white/45 text-base leading-[1.85] mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Based in Nanoose Bay and serving clients across British Columbia and internationally, I work in many diverse styles — Traditional, Contemporary, Farmhouse, Beach/Lake, and French Country — always with constant attention to detail, proportion, livability, and site response.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p
                  className="text-white/45 text-base leading-[1.85] mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  I also bring experience from residential design projects in the Philippines, the Cayman Islands, and Mexico, which informs my approach to design in different climates and cultural contexts.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <p
                  className="text-white/45 text-base leading-[1.85]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  My wife, Christine, is an experienced interior designer, and our shared interest in design keeps me closely connected to trends in materials, finishes, layouts, and the way people actually live in their homes. That perspective reinforces my goal for every project: practical, well-proportioned residential design that feels considered from the overall site plan down to the details.
                </p>
              </ScrollReveal>
            </div>

            {/* Image column — Professional headshot */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031581976/EwCYT3qyrKgvKV5RtZocBw/photo_AQADFwxrG3JQ-EZ-_c94954cb.jpg"
                  alt="Sylvain Giroux, architect and designer at his desk with blueprints"
                  className="w-full aspect-[3/4] object-cover"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.interiorMasterBedroom}
            alt="Master bedroom interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D1B2A]/70" />
        </div>
        <div className="relative container text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="h-px w-16 bg-white/20 mx-auto mb-12" />
              <blockquote
                className="text-2xl sm:text-3xl lg:text-4xl text-white/80 italic leading-relaxed"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                "In the Builder-Client relationship, communication is crucial... but for me,
                I think honesty is the most important thing. Trust is absolutely essential."
              </blockquote>
              <p
                className="text-white/40 text-sm tracking-[0.15em] uppercase mt-8"
                style={{ fontFamily: "var(--font-body)" }}
              >
                — Sylvain Giroux
              </p>
              <div className="h-px w-16 bg-white/20 mx-auto mt-12" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Meet Sylvain — Personal section */}
      <section className="py-24 lg:py-32 bg-[#0D1B2A]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Image */}
            <ScrollReveal>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031581976/EwCYT3qyrKgvKV5RtZocBw/Gemini_Generated_Image_j1fyooj1fyooj1fy_91bf3886.png"
                alt="Sylvain Giroux with his dog by the water"
                className="w-full aspect-[3/4] object-cover"
              />
            </ScrollReveal>
            {/* Text */}
            <ScrollReveal delay={0.2}>
              <div>
                <div className="h-px w-12 bg-white/20 mb-8" />
                <h2
                  className="text-3xl lg:text-4xl text-white/90 font-medium leading-tight mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Life Beyond<br />
                  <span className="text-white/50 italic">the Drafting Table</span>
                </h2>
                <p
                  className="text-white/45 text-base leading-[1.85] mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  When Sylvain isn't designing homes, he's enjoying the natural beauty of the BC coast with his family and dog. A lifelong builder and craftsman, he brings the same attention to detail and thoughtful approach to everything he does — whether it's designing a custom home or planning his next adventure.
                </p>
                <p
                  className="text-white/45 text-base leading-[1.85]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  This passion for quality, combined with decades of hands-on experience, is what sets SGR Design apart. Sylvain doesn't just create beautiful homes — he creates spaces where people want to live.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience stats */}
      <section className="py-24 lg:py-32 bg-[#080F1A]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { number: "30+", label: "Years Experience" },
              { number: "100s", label: "Homes Designed" },
              { number: "5", label: "Design Styles" },
              { number: "4+", label: "Countries" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center lg:text-left">
                  <div
                    className="text-4xl lg:text-5xl text-white/80 font-semibold mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-white/30 text-[12px] tracking-[0.2em] uppercase"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
