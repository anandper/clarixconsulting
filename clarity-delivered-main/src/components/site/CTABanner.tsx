import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTABanner = ({
  title = "Ready to move faster with less risk?",
  subtitle = "Let's talk about what you're building — and how we can help you deliver.",
  cta = "Schedule a Conversation",
  to = "/contact",
}: { title?: string; subtitle?: string; cta?: string; to?: string }) => (
  <section className="relative overflow-hidden bg-gradient-hero text-ivory">
    <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:24px_24px]" />
    <div className="container-tight py-24 md:py-32 relative">
      <div className="grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <div className="eyebrow text-ivory/60"><span className="h-px w-8 bg-brass" />Let's begin</div>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] mt-4 text-balance">{title}</h2>
          <p className="mt-6 text-lg text-ivory/70 max-w-xl text-pretty">{subtitle}</p>
        </div>
        <div className="md:col-span-4 md:text-right">
          <Button asChild variant="hero" size="xl">
            <Link to={to}>{cta} <ArrowRight className="ml-1" /></Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);