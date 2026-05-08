"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

const plans = [
  {
    name: "Starter",
    description: "For small teams validating AI support value",
    price: { monthly: 299, annual: 249 },
    features: [
      "Real-time chat module (Module A)",
      "3 languages supported",
      "5,000 conversations / month",
      "1 knowledge base",
      "Email support",
      "Standard API access",
    ],
    cta: "Free 14-day trial",
    ctaHref: "/contact",
    popular: false,
  },
  {
    name: "Business",
    description: "All modules unlocked for scaling teams",
    price: { monthly: 999, annual: 829 },
    features: [
      "All 4 modules",
      "11 languages supported",
      "Unlimited conversations",
      "Multi-knowledge base management",
      "Nightly batch processing",
      "Proactive outreach engine",
      "Dedicated customer success manager",
      "99.9% SLA guarantee",
    ],
    cta: "Start trial",
    ctaHref: "/contact",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom requirements",
    price: { monthly: null, annual: null },
    features: [
      "Everything in Business",
      "Private deployment option",
      "Custom model fine-tuning",
      "Dedicated data isolation",
      "24/7 dedicated support",
      "Compliance audit reports",
      "Custom SLA agreement",
      "Custom contract terms",
    ],
    cta: "Contact sales",
    ctaHref: "/contact",
    popular: false,
  },
];

const faqs = [
  {
    q: "How is billing calculated?",
    a: "All plans are flat monthly or annual rates. Token consumption is included — there are no per-token overage charges. Your bill is predictable regardless of conversation volume.",
  },
  {
    q: "Can I switch plans mid-cycle?",
    a: "Yes. Upgrades take effect immediately and are prorated. Downgrades take effect at the start of the next billing cycle.",
  },
  {
    q: "What languages are included in the Starter plan?",
    a: "Starter includes English plus 2 additional Southeast Asian languages of your choice. Business and Enterprise unlock all 11 SEA languages simultaneously.",
  },
  {
    q: "Is there a free trial?",
    a: "Starter comes with a 14-day free trial, no credit card required. Business trials are available on request — contact our sales team.",
  },
  {
    q: "What does 'private deployment' mean for Enterprise?",
    a: "Enterprise clients can opt for a dedicated, isolated deployment on their own cloud infrastructure or ours. Data never co-mingles with other tenants.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most Starter deployments are live within 30 minutes. Business and Enterprise onboarding typically takes 2–6 weeks depending on integration complexity.",
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-24 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
            <span className="w-8 h-px bg-foreground/30" />
            Pricing
          </span>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight mb-8">
            Simple, transparent
            <br />
            <span className="text-stroke">pricing.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            No hidden fees. No surprise token bills. A flat monthly rate you can
            plan around — whether you're running one module or all four.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Toggle */}
          <div className="flex items-center gap-4 mb-16">
            <span
              className={`text-sm transition-colors ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle billing period"
              className="relative w-14 h-7 bg-foreground/10 rounded-full p-1 transition-colors hover:bg-foreground/20"
            >
              <div
                className={`w-5 h-5 bg-foreground rounded-full transition-transform duration-300 ${isAnnual ? "translate-x-7" : "translate-x-0"}`}
              />
            </button>
            <span
              className={`text-sm transition-colors ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}
            >
              Annual
            </span>
            {isAnnual && (
              <span className="ml-2 px-2 py-1 bg-foreground text-background text-xs font-mono">
                Save 17%
              </span>
            )}
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
            {plans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`relative p-8 lg:p-12 bg-background ${plan.popular ? "md:-my-4 md:py-12 lg:py-16 border-2 border-foreground" : ""}`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-background text-xs font-mono uppercase tracking-widest">
                    Most Popular
                  </span>
                )}
                <div className="mb-8">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-3xl text-foreground mt-2">
                    {plan.name}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.description}
                  </p>
                </div>
                <div className="mb-8 pb-8 border-b border-foreground/10">
                  {plan.price.monthly !== null ? (
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-5xl lg:text-6xl text-foreground">
                        $
                        {isAnnual
                          ? plan.price.annual?.toLocaleString()
                          : plan.price.monthly?.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                  ) : (
                    <span className="font-display text-4xl text-foreground">
                      Custom
                    </span>
                  )}
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.ctaHref}
                  className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${plan.popular ? "bg-foreground text-background hover:bg-foreground/90" : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"}`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-muted-foreground">
            All plans include HTTPS, DDoS protection, and automatic updates.{" "}
            <a
              href="/contact"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Talk to sales for a custom quote
            </a>
          </p>
        </div>
      </section>

      {/* Feature comparison */}
      <section id="compare" className="py-32 lg:py-40 border-t border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-16">
            What's included
          </span>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-foreground/10">
                  <th className="text-left py-4 pr-8 font-normal text-muted-foreground w-1/2">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 font-display text-lg">Starter</th>
                  <th className="text-center py-4 px-4 font-display text-lg">Business</th>
                  <th className="text-center py-4 px-4 font-display text-lg">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Real-time Chat (Module A)", true, true, true],
                  ["Nightly Batch Processing (Module B)", false, true, true],
                  ["Proactive Outreach (Module C)", false, true, true],
                  ["Multilingual Knowledge Base (Module D)", false, true, true],
                  ["Languages supported", "3", "11", "11+"],
                  ["Conversations / month", "5,000", "Unlimited", "Unlimited"],
                  ["Knowledge bases", "1", "Unlimited", "Unlimited"],
                  ["99.9% SLA", false, true, true],
                  ["Dedicated CSM", false, true, true],
                  ["Private deployment", false, false, true],
                  ["Custom model fine-tuning", false, false, true],
                  ["Compliance audit reports", false, false, true],
                  ["Custom SLA", false, false, true],
                ].map(([feature, starter, business, enterprise]) => (
                  <tr
                    key={feature as string}
                    className="border-b border-foreground/10 hover:bg-foreground/[0.02] transition-colors"
                  >
                    <td className="py-4 pr-8 text-muted-foreground">{feature}</td>
                    {[starter, business, enterprise].map((val, i) => (
                      <td key={i} className="text-center py-4 px-4">
                        {typeof val === "boolean" ? (
                          val ? (
                            <Check className="w-4 h-4 mx-auto text-foreground" />
                          ) : (
                            <span className="text-foreground/20">—</span>
                          )
                        ) : (
                          <span className="text-foreground">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 lg:py-40 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
                FAQ
              </span>
              <h2 className="font-display text-4xl lg:text-5xl tracking-tight">
                Common
                <br />
                questions.
              </h2>
            </div>
            <div className="lg:col-span-8">
              {faqs.map((faq, i) => (
                <div key={i} className="border-t border-foreground/10">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left gap-8 group"
                  >
                    <span className="text-sm font-medium group-hover:text-muted-foreground transition-colors">
                      {faq.q}
                    </span>
                    <span
                      className={`text-xl font-light shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <p className="pb-6 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
              <div className="border-t border-foreground/10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-5xl lg:text-6xl tracking-tight mb-6">
            Not sure which plan?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Tell us about your use case and we'll recommend the right fit —
            most enterprise clients start on Business and expand from there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 h-14 text-base rounded-full hover:bg-foreground/90 transition-colors group"
            >
              Talk to Sales
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 border border-foreground/20 px-8 h-14 text-base rounded-full hover:bg-foreground/5 transition-colors"
            >
              See Client Results
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
