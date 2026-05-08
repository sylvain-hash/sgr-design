/*
 * TESTIMONIALS PAGE — SGR Design
 * Design: Architectural Noir
 * Client testimonials with featured quote and imagery
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { images } from "@/lib/images";

const testimonials = [
  {
    id: "nygren",
    quote: `Working with Sylvain at SGR Design was an outstanding experience from beginning to end. From our initial conversations, it was clear that he brings a rare level of expertise, combining strong design sensibility with deep, practical knowledge of construction. Our site presented a number of challenges, but Sylvain navigated them with confidence and creativity. He quickly understood the constraints and opportunities of the property and developed a design that not only responded beautifully to the site, but also made complete sense from a building and execution standpoint. Throughout the process, his attention to detail and thoughtful approach gave us a great deal of confidence. The drawings were clear, the communication was seamless, and every decision felt considered and intentional. He consistently found solutions that balanced aesthetics, functionality, and constructability. The final result exceeded our expectations. Our home feels both refined and highly livable, and we couldn't be happier with how everything came together. We would highly recommend Sylvain to anyone looking for a designer who brings experience, insight, and a truly elevated level of professionalism to their work.`,
    author: "Nikki & Michael Nygren",
    role: "Custom Home Client",
    image: images.heroCloseup,
  },
  {
    id: "crema",
    quote: `Sylvain Giroux Designs has been an outstanding partner to District Group on a wide range of projects throughout British Columbia. Their depth of construction knowledge, built on decades of hands-on experience in both residential and commercial construction, truly sets them apart. Their designs are consistently thorough, practical, and cost-effective, resulting in solutions that are not only well conceived but also highly buildable. What we value most is their exceptional command of building code, often identifying and resolving issues that even building officials have overlooked or misconstrued. Their versatility is equally impressive, with the ability to execute virtually any architectural style, from classic French château to clean, modern, and minimalist design, all with the same level of skill and attention to detail. Sylvain Giroux Designs has supported District Group on a multitude of projects across British Columbia, and we confidently recommend them to anyone seeking a design firm that combines creativity, technical expertise, and real-world construction knowledge.`,
    author: "Brandon Crema",
    role: "District Group",
    image: images.interiorKitchenOpen,
  },
  {
    id: "gibson",
    quote: `It is a pleasure to provide this reference for Sylvain Giroux of SGR Design regarding the custom home plans he completed for our property in Nanoose Bay, British Columbia. Building a home on the Fairwinds Golf Club course presented a unique set of architectural challenges. Specifically, the design needed to navigate strict local height restrictions while simultaneously maximizing the expansive views of the fairways and the property's feature watercourse. Sylvain handled these complexities with remarkable technical skill and creative problem-solving. Throughout the design process, Sylvain demonstrated several key strengths that set him apart: Attention to Detail & Regulations with thorough understanding of local building codes and specific community regulations, ensuring compliance without compromising aesthetics. Efficiency and Turnaround with consistently impressive speed and excellent turnaround times. Communication that is proactive and professional, highly receptive to feedback, making collaboration seamless and enjoyable. Site-Specific Design that captures the spirit of the site, highlighting the stunning natural landscape and water feature. The final plans are a testament to his eye for detail and ability to balance technical constraints with beautiful, functional design. I would not hesitate to recommend Sylvain Giroux and SGR Design to anyone looking for a dedicated, efficient, and highly skilled designer for their custom home project.`,
    author: "Troy and Holly Gibson",
    role: "Fairwinds Custom Home Client",
    image: images.exteriorCraftsman,
  },
  {
    id: "davies",
    quote: `His past experience in framing and building carries through into the design and development of a project. He saves time and money by seeing possible problems and resolving them before construction.`,
    author: "Jason and Barbara Davies",
    role: "Long-Term Partner & Client",
    image: images.exteriorEstate,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

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
              Client Testimonials
            </h1>
            <p
              className="text-white/40 text-base lg:text-lg max-w-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              What our clients say about working with SGR Design.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured testimonial carousel */}
      <section className="py-24 lg:py-36 bg-[#0D1B2A]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Image */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].author}
                  className="w-full aspect-[3/4] object-cover transition-all duration-500"
                />
              </ScrollReveal>
            </div>

            {/* Testimonial text */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <ScrollReveal delay={0.15}>
                <Quote size={40} className="text-white/10 mb-8" />
                <blockquote
                  className="text-white/60 text-base lg:text-lg leading-[1.85] mb-10"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {testimonials[activeIndex].quote}
                </blockquote>

                <div className="h-px w-16 bg-white/10 mb-6" />
                <p
                  className="text-white/70 text-base font-medium"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {testimonials[activeIndex].author}
                </p>
                <p
                  className="text-white/30 text-sm mt-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {testimonials[activeIndex].role}
                </p>

                {/* Navigation dots and arrows */}
                <div className="flex items-center gap-6 mt-10">
                  <button
                    onClick={goToPrevious}
                    className="p-2 border border-white/20 text-white/40 hover:text-white/70 hover:border-white/40 transition-all duration-300"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-2 transition-all duration-300 ${
                          idx === activeIndex ? "w-8 bg-white/60" : "w-2 bg-white/20 hover:bg-white/40"
                        }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={goToNext}
                    className="p-2 border border-white/20 text-white/40 hover:text-white/70 hover:border-white/40 transition-all duration-300"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.interiorBathroomTub}
            alt="Luxury bathroom"
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

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#080F1A]">
        <div className="container text-center">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <h2
                className="text-3xl lg:text-4xl text-white/90 font-medium mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Your Dream Home<br />
                <span className="italic text-white/50">Starts Here</span>
              </h2>
              <p
                className="text-white/40 text-base leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Join our growing list of satisfied clients and partners. Let's create something extraordinary together.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-10 py-5 text-[13px] tracking-[0.2em] uppercase transition-all duration-300"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Get in Touch
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
}
