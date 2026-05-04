import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";

const cases = [
  {
    n: "01",
    industry: "Insurance / FinServ",
    title: "Contact Center AI Transformation",
    challenge: "High ticket resolution times and manual knowledge management across a sprawling support organization.",
    solution: "Architected a RAG pipeline on Azure OpenAI and deployed an LLM-powered IT support chatbot integrated with existing knowledge systems.",
    metric: "40%",
    metricLabel: "reduction in ticket resolution time",
  },
  {
    n: "02",
    industry: "Financial Services",
    title: "Enterprise Cost Transformation",
    challenge: "A bloated software portfolio, low engineering productivity, and runaway operating costs.",
    solution: "Led portfolio rationalization, Agile adoption at scale, and vendor consolidation across the technology org.",
    metric: "65% / 79%",
    metricLabel: "cost reduction · productivity gain in <12 months",
  },
  {
    n: "03",
    industry: "Title Insurance",
    title: "Technical Debt Elimination",
    challenge: "A legacy Lender Integration System carrying ~90% technical debt and blocking every major release.",
    solution: "Applied a Strangler Fig modernization pattern with Salesforce and MuleSoft re-engineering — incrementally, with zero downtime.",
    metric: "90%",
    metricLabel: "technical debt eliminated · zero disruptions",
  },
  {
    n: "04",
    industry: "Real Estate / Retail",
    title: "Cloud Migration & Cost Optimization",
    challenge: "Legacy infrastructure, escalating licensing costs, and limited engineering leverage.",
    solution: "Executed Cloud Optimizely migration aligned to the Azure Well-Architected Framework with active FinOps governance.",
    metric: "70% / 30%",
    metricLabel: "infra cost reduction · cloud cost savings",
  },
  {
    n: "05",
    industry: "Manufacturing",
    title: "AI-Driven Delivery Acceleration",
    challenge: "Slow SDLC, manual QA processes, and inconsistent defect detection across product lines.",
    solution: "Led an AI-centric SDLC transition with ML-based test automation and intelligent defect triage.",
    metric: "25% / 40%",
    metricLabel: "delivery acceleration · defect detection improvement",
  },
];

const Results = () => (
  <div>
    <PageHero
      eyebrow="Results"
      title="Show, don't tell. The work — and what it produced."
      lede="A selection of recent engagements across regulated and high-growth environments. Client names withheld per confidentiality."
    />

    <section className="py-20 md:py-28">
      <div className="container-tight space-y-px bg-border border border-border">
        {cases.map((c) => (
          <article key={c.n} className="bg-background grid md:grid-cols-12 gap-8 p-8 md:p-12 group hover:bg-ivory-warm transition-colors duration-500">
            <div className="md:col-span-1">
              <div className="font-display text-3xl text-brass">{c.n}</div>
            </div>
            <div className="md:col-span-7">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.industry}</div>
              <h2 className="font-display text-3xl md:text-4xl text-ink mt-3 leading-tight text-balance">{c.title}</h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Challenge</div>
                  <p className="text-ink/90 leading-relaxed text-sm">{c.challenge}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">What Clarix did</div>
                  <p className="text-ink/90 leading-relaxed text-sm">{c.solution}</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 md:border-l md:border-border md:pl-8 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Outcome</div>
              <div className="font-display text-4xl md:text-5xl font-light text-ink mt-3 leading-none">{c.metric}</div>
              <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.metricLabel}</div>
            </div>
          </article>
        ))}
      </div>
      <div className="container-tight mt-12">
        <p className="text-xs text-muted-foreground italic">
          Client names withheld per confidentiality. Detailed case references available upon request under NDA.
        </p>
      </div>
    </section>

    <CTABanner title="Want results like these?" subtitle="Most engagements start with a 30-minute conversation. We'll tell you honestly whether we can help." />
  </div>
);

export default Results;