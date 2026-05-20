import { motion } from "framer-motion";
import { useState } from "react";
import {
  Brain, LineChart, Wallet, Users, BarChart3, Lightbulb,
  Upload, Search, TrendingUp, Twitter, Linkedin, Github, Check, ArrowRight
} from "lucide-react";

const APP_URL = "https://tryflowcast.lovable.app";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

/* ---------------- Logos ---------------- */
export function Logos() {
  const logos = ["Chase", "Bank of America", "Wells Fargo", "Citi", "HSBC", "Barclays"];
  return (
    <section className="py-16 border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-ink-soft">
          Works with any bank export — CSV, Excel, OFX
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
          {logos.map((l) => (
            <span key={l} className="font-display font-medium text-ink-soft text-base">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Features ---------------- */
const features = [
  { icon: Brain, title: "AI-powered analysis", desc: "Instant categorization and anomaly detection across every transaction." },
  { icon: LineChart, title: "6–24 month forecasts", desc: "Prophet and ARIMA models with calibrated confidence intervals." },
  { icon: Wallet, title: "Spending DNA", desc: "Twelve focused visualizations of where every dollar actually goes." },
  { icon: Users, title: "Personal & business", desc: "Two purpose-built modes — budgets for you, cash flow for your company." },
  { icon: BarChart3, title: "Composable charts", desc: "Heatmaps, waterfalls, cohorts — every angle of your finances." },
  { icon: Lightbulb, title: "Smart recommendations", desc: "Surfaces savings, flags drift, and highlights unusual spending automatically." },
];

export function Features() {
  return (
    <section id="features" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-emerald font-medium">Platform</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
            A complete financial intelligence layer.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Replace spreadsheets and BI dashboards with a single workspace built for cash.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="bg-white p-8 hover:bg-surface transition-colors"
            >
              <f.icon className="w-5 h-5 text-emerald" strokeWidth={2} />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-ink-soft leading-relaxed text-[15px]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */
const steps = [
  { icon: Upload, n: "01", title: "Upload your data", desc: "Drop a CSV or Excel export. FlowCast reads any bank format." },
  { icon: Search, n: "02", title: "Instant analysis", desc: "Transactions categorized, profile built, baselines learned — in seconds." },
  { icon: TrendingUp, n: "03", title: "Forecast & decide", desc: "Project 6–24 months ahead and export reports ready for stakeholders." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-32 bg-surface border-y border-line">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-emerald font-medium">How it works</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
            From raw export to forecast in three steps.
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-white p-8"
            >
              <div className="flex items-center justify-between">
                <s.icon className="w-5 h-5 text-emerald" strokeWidth={2} />
                <span className="font-display text-sm text-ink-soft">{s.n}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-ink-soft leading-relaxed text-[15px]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Personal vs Business — CSS-built mock ---------------- */
const modes = {
  personal: {
    eyebrow: "Personal",
    title: "Track every expense, automatically.",
    benefits: [
      "AI categorizes spending the moment you import",
      "Spot forgotten subscriptions in one view",
      "Smart budgets with adaptive alerts",
    ],
    metric: { label: "Spent this month", value: "$2,148", delta: "-8.1%" },
    rows: [
      { l: "Groceries", v: "$412.30" },
      { l: "Rent", v: "$1,200.00" },
      { l: "Subscriptions", v: "$84.50" },
      { l: "Transport", v: "$112.80" },
    ],
  },
  business: {
    eyebrow: "Business",
    title: "Master your cash flow.",
    benefits: [
      "Forecast runway up to 24 months out",
      "Track MRR, burn rate, and seasonality",
      "Export investor-ready reports in one click",
    ],
    metric: { label: "Runway", value: "18.2 mo", delta: "+1.4 mo" },
    rows: [
      { l: "MRR", v: "$48,200" },
      { l: "Burn", v: "$9,420" },
      { l: "Net new", v: "$3,180" },
      { l: "Churn", v: "1.8%" },
    ],
  },
};

export function ModeToggle() {
  const [mode, setMode] = useState<"personal" | "business">("personal");
  const data = modes[mode];

  return (
    <section id="demo" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.2em] text-emerald font-medium">Two modes, one workspace</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
              Built for how you live and work.
            </h2>
          </div>
          <div className="inline-flex items-center p-1 rounded-lg bg-surface border border-line self-start">
            {(["personal", "business"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium capitalize transition-all ${
                  mode === m ? "bg-white text-ink shadow-sm" : "text-ink-soft hover:text-ink"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-14 grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* CSS-only product mock */}
          <div className="rounded-xl border border-line bg-white overflow-hidden"
               style={{ boxShadow: "0 20px 60px -25px rgba(0,0,0,0.15)" }}>
            <div className="px-5 py-4 border-b border-line flex items-center justify-between">
              <span className="text-xs font-medium text-ink-soft uppercase tracking-wider">{data.eyebrow}</span>
              <span className="inline-flex items-center gap-1 h-6 px-2 rounded-md bg-emerald-soft text-emerald text-xs font-medium">
                {data.metric.delta}
              </span>
            </div>
            <div className="p-6">
              <div className="text-xs text-ink-soft">{data.metric.label}</div>
              <div className="mt-1 font-display text-3xl font-semibold text-ink">{data.metric.value}</div>
              <div className="mt-6 space-y-2.5">
                {data.rows.map((r) => (
                  <div key={r.l} className="flex items-center justify-between text-sm">
                    <span className="text-ink-soft">{r.l}</span>
                    <span className="font-display font-medium text-ink">{r.v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-1.5 bg-surface rounded-full overflow-hidden">
                <div className="h-full bg-emerald" style={{ width: mode === "personal" ? "62%" : "78%" }} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink">{data.title}</h3>
            <ul className="mt-8 space-y-4">
              {data.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex w-5 h-5 items-center justify-center rounded-full bg-emerald-soft shrink-0">
                    <Check className="w-3 h-3 text-emerald" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] text-ink">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href={APP_URL}
              className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-emerald transition-colors"
            >
              Try {mode} mode <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
const tiers = [
  {
    name: "Free", price: "$0", period: "forever",
    features: ["Up to 3 file uploads", "6-month forecast", "8 chart types", "Basic insights"],
    cta: "Start free", highlight: false,
  },
  {
    name: "Pro", price: "$12", period: "per month, billed annually",
    features: ["Unlimited uploads", "24-month forecast", "All chart types", "AI recommendations", "PDF & Excel export", "Priority support"],
    cta: "Start Pro trial", highlight: true,
  },
  {
    name: "Business", price: "$29", period: "per month",
    features: ["Everything in Pro", "Business mode", "Team sharing", "API access", "Custom branding"],
    cta: "Contact sales", highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-surface border-y border-line">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-emerald font-medium">Pricing</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
            Simple, honest pricing.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">Start free. Upgrade only when you need more.</p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative rounded-xl p-8 bg-white border ${
                t.highlight ? "border-ink" : "border-line"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-2.5 left-8 px-2 py-0.5 text-[11px] font-medium rounded-full bg-ink text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-lg font-semibold text-ink">{t.name}</h3>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-semibold text-ink">{t.price}</span>
                <span className="text-ink-soft text-sm">{t.period}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-ink">
                    <Check className="w-4 h-4 text-emerald shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={APP_URL}
                className={`mt-10 inline-flex h-10 w-full items-center justify-center px-5 rounded-md text-sm font-medium transition-colors ${
                  t.highlight
                    ? "btn-primary"
                    : "border border-line text-ink hover:bg-surface"
                }`}
              >
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const quotes = [
  { q: "FlowCast showed me I was spending $400 a month on subscriptions I forgot about.", a: "Sarah K.", r: "Freelance Designer" },
  { q: "The 12-month forecast helped me decide exactly when to make my first hire.", a: "Marcus T.", r: "Founder, Northwind" },
  { q: "I finally understand my finances. The insights are unnervingly accurate.", a: "Priya M.", r: "Graduate Student" },
];

export function Testimonials() {
  return (
    <section id="customers" className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fadeUp} className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-emerald font-medium">Customers</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
            Loved by people who hate spreadsheets.
          </h2>
        </motion.div>
        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {quotes.map((t, i) => (
            <motion.div
              key={t.a}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl p-7 bg-white border border-line"
            >
              <p className="font-display text-lg text-ink leading-snug">"{t.q}"</p>
              <div className="mt-6 pt-5 border-t border-line">
                <div className="font-medium text-ink text-sm">{t.a}</div>
                <div className="text-xs text-ink-soft mt-0.5">{t.r}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA Banner ---------------- */
export function CtaBanner() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-2xl p-12 sm:p-16 bg-ink text-center"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
               style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Take control of your finances.
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Join thousands using FlowCast to forecast, plan, and decide with confidence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-3">
              <a
                href={APP_URL}
                className="inline-flex h-10 items-center px-5 rounded-md bg-white text-ink font-medium text-sm hover:bg-white/90 transition-colors"
              >
                Start free
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
              <a
                href="#demo"
                className="inline-flex h-10 items-center px-5 rounded-md border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-colors"
              >
                Book a demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  const cols = [
    { title: "Product", items: ["Features", "Pricing", "Demo", "Changelog"] },
    { title: "Company", items: ["About", "Blog", "Careers", "Contact"] },
    { title: "Legal", items: ["Privacy", "Terms", "Security"] },
  ];
  return (
    <footer className="border-t border-line py-16">
      <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-ink">
            <span className="w-5 h-5 rounded-md bg-ink relative overflow-hidden">
              <span className="absolute inset-0 bg-emerald" style={{ clipPath: "polygon(0 60%, 100% 20%, 100% 100%, 0 100%)" }} />
            </span>
            <span className="font-display font-semibold tracking-tight">FlowCast</span>
          </div>
          <p className="mt-3 text-ink-soft text-sm max-w-xs">
            Financial intelligence for people and businesses.
          </p>
          <div className="mt-5 flex gap-2">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-md border border-line flex items-center justify-center text-ink-soft hover:text-ink hover:border-ink/30 transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-xs font-semibold text-ink uppercase tracking-wider">{c.title}</div>
            <ul className="mt-4 space-y-2.5">
              {c.items.map((i) => (
                <li key={i}>
                  <a href="#" className="text-ink-soft hover:text-ink text-sm transition-colors">{i}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-6 mx-auto max-w-6xl px-6 border-t border-line flex items-center justify-between text-xs text-ink-soft">
        <div>© 2026 FlowCast, Inc.</div>
        <div>All systems normal</div>
      </div>
    </footer>
  );
}
