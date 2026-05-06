/*
 * CONTACT PAGE — SGR Design
 * Design: Architectural Noir
 * Contact form, map, contact details, Instagram link
 */
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Instagram, Send } from "lucide-react";
import { toast } from "sonner";
import PageLayout from "@/components/PageLayout";
import ScrollReveal from "@/components/ScrollReveal";
import { MapView } from "@/components/Map";
import { images } from "@/lib/images";

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "", projectType: "", projectScope: "", timeline: "", propertyOwnership: "", surveyStatus: "", consultantInvolved: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll be in touch soon.");
      setForm({ name: "", email: "", phone: "", location: "", projectType: "", projectScope: "", timeline: "", propertyOwnership: "", surveyStatus: "", consultantInvolved: "", message: "" });
    }, 1500);
  };

  const handleMapReady = (map: google.maps.Map) => {
    // Nanoose Bay, BC coordinates
    const position = { lat: 49.2627, lng: -124.1647 };
    map.setCenter(position);
    map.setZoom(12);
    new google.maps.marker.AdvancedMarkerElement({
      map,
      position,
      title: "SGR Design Ltd.",
    });
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
              Start a Project<br />
              <span className="italic text-white/50">Conversation</span>
            </h1>
            <p
              className="text-white/40 text-base lg:text-lg max-w-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Tell us about your property, project type, and timeline. Whether you are planning a custom home, infill project, multi-family development, or significant residential renovation, SGR Design Ltd. can help you understand the next step.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 lg:py-24 bg-[#0D1B2A]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2
                  className="text-2xl lg:text-3xl text-white/80 font-medium mb-8"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="text-white/40 text-[11px] tracking-[0.15em] uppercase block mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 text-white/80 px-4 py-3.5 text-sm focus:outline-none focus:border-white/25 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        className="text-white/40 text-[11px] tracking-[0.15em] uppercase block mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 text-white/80 px-4 py-3.5 text-sm focus:outline-none focus:border-white/25 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="text-white/40 text-[11px] tracking-[0.15em] uppercase block mb-2"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 text-white/80 px-4 py-3.5 text-sm focus:outline-none focus:border-white/25 transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                      placeholder="250-000-0000"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="text-white/40 text-[11px] tracking-[0.15em] uppercase block mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Project Location
                      </label>
                      <input
                        type="text"
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 text-white/80 px-4 py-3.5 text-sm focus:outline-none focus:border-white/25 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                        placeholder="e.g., Nanoose Bay, BC"
                      />
                    </div>
                    <div>
                      <label
                        className="text-white/40 text-[11px] tracking-[0.15em] uppercase block mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Project Type
                      </label>
                      <select
                        value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 text-white/80 px-4 py-3.5 text-sm focus:outline-none focus:border-white/25 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <option value="">Select project type</option>
                        <option value="custom-home">Custom Home</option>
                        <option value="infill-housing">Infill Housing</option>
                        <option value="multi-family">Multi-Family</option>
                        <option value="renovation">Renovation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="text-white/40 text-[11px] tracking-[0.15em] uppercase block mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Project Scope
                      </label>
                      <select
                        value={form.projectScope}
                        onChange={(e) => setForm({ ...form, projectScope: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 text-white/80 px-4 py-3.5 text-sm focus:outline-none focus:border-white/25 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <option value="">Select scope</option>
                        <option value="concept-design">Concept Design</option>
                        <option value="permit-drawings">Permit Drawings</option>
                        <option value="construction-drawings">Construction Drawings</option>
                        <option value="3d-visualization">3D Visualization</option>
                        <option value="full-service">Full Service</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-white/40 text-[11px] tracking-[0.15em] uppercase block mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Estimated Timeline
                      </label>
                      <select
                        value={form.timeline}
                        onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 text-white/80 px-4 py-3.5 text-sm focus:outline-none focus:border-white/25 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate</option>
                        <option value="3-months">Within 3 months</option>
                        <option value="6-months">Within 6 months</option>
                        <option value="12-months">Within 12 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="text-white/40 text-[11px] tracking-[0.15em] uppercase block mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Do you currently own the property?
                      </label>
                      <select
                        value={form.propertyOwnership}
                        onChange={(e) => setForm({ ...form, propertyOwnership: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 text-white/80 px-4 py-3.5 text-sm focus:outline-none focus:border-white/25 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <option value="">Select...</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="under-contract">Under contract</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-white/40 text-[11px] tracking-[0.15em] uppercase block mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Do you have a survey or site plan?
                      </label>
                      <select
                        value={form.surveyStatus}
                        onChange={(e) => setForm({ ...form, surveyStatus: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 text-white/80 px-4 py-3.5 text-sm focus:outline-none focus:border-white/25 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <option value="">Select...</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="unsure">Unsure</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      className="text-white/40 text-[11px] tracking-[0.15em] uppercase block mb-2"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Do you already have a builder, architect, or engineer involved?
                    </label>
                    <select
                      value={form.consultantInvolved}
                      onChange={(e) => setForm({ ...form, consultantInvolved: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 text-white/80 px-4 py-3.5 text-sm focus:outline-none focus:border-white/25 transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <option value="">Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="not-yet">Not yet</option>
                      <option value="unsure">Unsure</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="text-white/40 text-[11px] tracking-[0.15em] uppercase block mb-2"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 text-white/80 px-4 py-3.5 text-sm focus:outline-none focus:border-white/25 transition-colors resize-none"
                      style={{ fontFamily: "var(--font-body)" }}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="group inline-flex items-center gap-3 border border-white/20 text-white/80 hover:text-white hover:border-white/40 disabled:opacity-50 px-10 py-4 text-[13px] tracking-[0.2em] uppercase transition-all duration-300"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {sending ? "Sending..." : "Send Message"}
                    <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              </ScrollReveal>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <h2
                  className="text-2xl lg:text-3xl text-white/80 font-medium mb-8"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Contact Details
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3
                      className="text-white/40 text-[11px] tracking-[0.2em] uppercase mb-3"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Principal Designer
                    </h3>
                    <p
                      className="text-white/70 text-lg"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Sylvain Giroux
                    </p>
                  </div>

                  <div className="h-px bg-white/5" />

                  <a
                    href="tel:250-954-7347"
                    className="flex items-center gap-4 text-white/50 hover:text-white/70 transition-colors group"
                  >
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.15em] uppercase text-white/30 mb-1" style={{ fontFamily: "var(--font-body)" }}>Phone</p>
                      <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-body)" }}>250-954-7347</p>
                    </div>
                  </a>

                  <a
                    href="mailto:sylvain@sgrdesign.ca"
                    className="flex items-center gap-4 text-white/50 hover:text-white/70 transition-colors group"
                  >
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.15em] uppercase text-white/30 mb-1" style={{ fontFamily: "var(--font-body)" }}>Email</p>
                      <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-body)" }}>sylvain@sgrdesign.ca</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-white/50">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.15em] uppercase text-white/30 mb-1" style={{ fontFamily: "var(--font-body)" }}>Address</p>
                      <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                        3093 Swallow Cr.<br />
                        Nanoose Bay, BC V9P 9J2
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://www.instagram.com/sylvain_giroux_designs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white/50 hover:text-white/70 transition-colors group"
                  >
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                      <Instagram size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-[0.15em] uppercase text-white/30 mb-1" style={{ fontFamily: "var(--font-body)" }}>Instagram</p>
                      <p className="text-white/60 text-sm" style={{ fontFamily: "var(--font-body)" }}>@sylvain_giroux_designs</p>
                    </div>
                  </a>

                  <div className="h-px bg-white/5" />

                  <div>
                    <h3
                      className="text-white/40 text-[11px] tracking-[0.2em] uppercase mb-3"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Service Areas
                    </h3>
                    <p
                      className="text-white/50 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Vancouver Island &middot; Okanagan
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="bg-[#080F1A]">
        <div className="h-[400px] lg:h-[500px] w-full">
          <MapView
            initialCenter={{ lat: 49.2627, lng: -124.1647 }}
            initialZoom={12}
            onMapReady={handleMapReady}
            className="w-full h-full"
          />
        </div>
      </section>
    </PageLayout>
  );
}
