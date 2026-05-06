import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="pt-40 pb-32 bg-[#0D1B2A] min-h-[60vh] flex items-center">
        <div className="container text-center">
          <h1
            className="text-8xl lg:text-9xl text-white/10 font-semibold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            404
          </h1>
          <p
            className="text-white/50 text-lg mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            The page you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 px-8 py-4 text-[13px] tracking-[0.2em] uppercase transition-all duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Return Home
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
