import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/flowcast/Navbar";
import { Hero } from "@/components/flowcast/Hero";
import {
  Logos, Features, HowItWorks, ModeToggle, Pricing, Testimonials, CtaBanner, Footer,
} from "@/components/flowcast/Sections";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FlowCast — AI-Powered Financial Analytics & Forecasting" },
      { name: "description", content: "Upload your bank data and instantly see where every dollar goes — with AI-powered forecasts up to 24 months ahead." },
      { property: "og:title", content: "FlowCast — Understand Your Money. Forecast Your Future." },
      { property: "og:description", content: "AI-powered financial analytics with 6–24 month forecasts. Free forever plan." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-white text-ink min-h-screen overflow-x-hidden animate-in fade-in duration-700">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <HowItWorks />
      <ModeToggle />
      <Pricing />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}
