import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";

const posts = [
  {
    cat: "Technology Strategy",
    date: "April 2026",
    read: "6 min read",
    title: "Why Technical Debt Is a Business Risk, Not Just a Tech Problem",
    excerpt: "When boards underwrite product roadmaps without underwriting the platform beneath them, they're underwriting a hidden liability. Here's how to put it on the balance sheet — before it puts itself there.",
  },
  {
    cat: "Artificial Intelligence",
    date: "March 2026",
    read: "8 min read",
    title: "AI Pilot to Production: What Most Organizations Get Wrong",
    excerpt: "The gap between an impressive demo and a deployed system is rarely about the model. It's about data, governance, and operational ownership. A field guide for getting AI past the pilot.",
  },
  {
    cat: "Regulatory · MedTech",
    date: "February 2026",
    read: "5 min read",
    title: "The Hidden Cost of EU MDR Non-Compliance for MedTech Companies",
    excerpt: "EU MDR isn't a paperwork problem — it's a market access problem. We break down the real cost curve and the operating model changes that turn compliance into a moat.",
  },
  {
    cat: "Software Delivery",
    date: "January 2026",
    read: "7 min read",
    title: "What Good Software Delivery Looks Like in a Regulated Environment",
    excerpt: "Regulated does not mean slow. The best regulated engineering orgs ship faster than their unregulated peers — because they've made compliance a property of the platform, not a phase of the SDLC.",
  },
];

const Insights = () => (
  <div>
    <PageHero
      eyebrow="Insights"
      title="Notes from the practice."
      lede="Field-tested perspectives on quality, regulatory, software delivery, and AI — written by the operators doing the work."
    />

    <section className="py-20 md:py-28">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {posts.map((p) => (
            <Link
              key={p.title}
              to="/insights"
              className="bg-background p-10 md:p-12 group hover:bg-ivory-warm transition-colors duration-500 flex flex-col"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="text-brass">{p.cat}</span>
                <span>{p.date}</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-ink mt-6 leading-snug text-balance">{p.title}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">{p.excerpt}</p>
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{p.read}</span>
                <span className="inline-flex items-center gap-2 font-medium text-ink">
                  Read article <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-12 text-sm text-muted-foreground text-center">
          New essays published monthly. Subscribe via LinkedIn for updates.
        </p>
      </div>
    </section>

    <CTABanner title="Want this thinking applied to your business?" subtitle="The fastest way to learn how Clarix works is to put a real problem in front of us." />
  </div>
);

export default Insights;