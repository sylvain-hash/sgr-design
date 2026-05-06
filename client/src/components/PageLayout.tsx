/*
 * PageLayout — wraps every page with Navigation + Footer
 */
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0D1B2A]">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
