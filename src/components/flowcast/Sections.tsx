import { motion } from "framer-motion";
import { useState } from "react";
import {
  Brain, LineChart, Wallet, Users, BarChart3, Lightbulb,
  Upload, Search, TrendingUp, Twitter, Linkedin, Github, Check
} from "lucide-react";
import personalImg from "@/assets/personal-mockup.jpg";
import businessImg from "@/assets/business-mockup.jpg";

const APP_URL = "https://your-flowcast-app.streamlit.app";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

/* ---------------- Logos ---------------- */
export function Logos() {
  const logos = ["Chase", "Bank of America", "Wells Fargo", "Citi", "HSBC", "Barclays", "Any CSV/Excel"];
  return (
    <section className="py-20 border-y border-app bg-black/20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.18em] text-secondary-app">
          Works with data from any bank
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((l) => (
            <span key={l} className="text-secondary-app/70 font-semibold text-lg hover:text-white transition-colors">
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
  { icon: Brain, title: "AI-Powered Analysis", desc: "Upload once. Get instant insights on spending patterns, trends, and anomalies." },
  { icon: LineChart, title: "6–24 Month Forecast", desc: "Prophet and ARIMA models predict your financial future with confidence intervals." },
  { icon: Wallet, title: "Spending DNA", desc: "Discover exactly where every dollar goes with 12+ interactive visualizations." },
  { icon: Users, title: "Personal & Business Modes", desc: "Separate views for personal budgets and business cash flow — optimized for each." },
  { icon: BarChart3, title: "12+ Chart Types", desc: "From heatmap calendars to waterfall charts — every angle of your data covered." },
  { icon: Lightbulb, title: "Smart Recommendations", desc: "AI spots savings opportunities and flags unusual spending automatically." },
];

export function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Everything you need to <span className="text-gradient">master your finances</span>
          </h2>
          <p className="mt-4 text-lg text-secondary-app">
            Personal or business — FlowCast adapts to your financial reality.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative p-7 rounded-2xl bg-card-app border border-app hover:border-transparent transition-all"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                   style={{ background: "var(--gradient-primary-soft)" }} />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                   style={{ boxShadow: "0 0 0 1px rgba(108,99,255,0.5), 0 20px 60px -10px rgba(108,99,255,0.35)" }} />
              <div className="relative">
                <div className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-secondary-app leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */
const steps = [
  { icon: Upload, n: "01", title: "Upload Your Data", desc: "Export CSV or Excel from your bank app. Works with any format — we handle the rest." },
  { icon: Search, n: "02", title: "Instant Analysis", desc: "Our AI reads your data, categorizes transactions, and builds your financial profile in seconds." },
  { icon: TrendingUp, n: "03", title: "Forecast & Decide", desc: "See 6–24 months ahead. Get personalized recommendations. Download your report." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-32 relative">
      <div className="absolute inset-x-0 top-1/2 h-[400px] -translate-y-1/2 bg-[#6C63FF]/10 blur-[140px] rounded-full max-w-3xl mx-auto" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Up and running in <span className="text-gradient">3 simple steps</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-3 gap-10 relative">
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] border-t-2 border-dashed border-white/10" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="mx-auto w-20 h-20 rounded-2xl bg-card-app border border-app flex items-center justify-center relative z-10 shadow-card">
                <s.icon className="w-8 h-8 text-white" />
              </div>
              <div className="mt-6 text-5xl font-extrabold text-gradient">{s.n}</div>
              <h3 className="mt-3 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-secondary-app max-w-xs mx-auto leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Personal vs Business ---------------- */
const modes = {
  personal: {
    img: personalImg,
    title: "Track every expense",
    benefits: [
      "Categorize spending automatically with AI",
      "Spot recurring subscriptions you forgot",
      "Set budgets and get smart alerts",
    ],
  },
  business: {
    img: businessImg,
    title: "Master your cash flow",
    benefits: [
      "Forecast runway up to 24 months out",
      "Track MRR, burn rate, and seasonality",
      "Export investor-ready reports in one click",
    ],
  },
};

export function ModeToggle() {
  const [mode, setMode] = useState<"personal" | "business">("personal");
  const data = modes[mode];

  return (
    <section id="demo" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Built for <span className="text-gradient">how you live and work</span>
          </h2>
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-card-app border border-app">
            {(["personal", "business"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-6 py-2 rounded-full text-sm font-semibold capitalize transition-all ${
                  mode === m ? "bg-gradient-primary text-white shadow-glow" : "text-secondary-app hover:text-white"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-primary opacity-25 blur-[80px] rounded-3xl" />
            <img
              src={data.img}
              alt={`${mode} dashboard preview`}
              loading="lazy"
              width={1200}
              height={900}
              className="relative rounded-2xl border border-app w-full h-auto shadow-card"
            />
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">{data.title}</h3>
            <ul className="mt-8 space-y-4">
              {data.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-gradient-primary shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </span>
                  <span className="text-lg text-white/90">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href={APP_URL}
              className="mt-10 inline-flex h-11 items-center px-6 rounded-full bg-gradient-primary text-white font-semibold shadow-glow hover:scale-[1.03] transition-transform"
            >
              Try {mode} mode →
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
    name: "Free", price: "$0", period: "/month", badge: "Most popular",
    features: ["Upload up to 3 files", "6-month forecast", "8 chart types", "Basic insights"],
    cta: "Get Started Free", highlight: false,
  },
  {
    name: "Pro", price: "$12", period: "/month, billed annually",
    features: ["Unlimited uploads", "24-month forecast", "All 12+ chart types", "AI recommendations", "Export to PDF/Excel", "Priority support"],
    cta: "Start Pro Trial", highlight: true,
  },
  {
    name: "Business", price: "$29", period: "/month",
    features: ["Everything in Pro", "Business mode", "Team sharing", "API access", "Custom branding"],
    cta: "Contact Sales", highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Simple, <span className="text-gradient">honest pricing</span>
          </h2>
          <p className="mt-4 text-lg text-secondary-app">Start free. Upgrade only when you need more power.</p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative rounded-2xl p-8 ${t.highlight ? "gradient-border shadow-glow" : "bg-card-app border border-app"}`}
            >
              {t.badge && (
                <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-semibold rounded-full bg-[#FF6584] text-white">
                  {t.badge}
                </span>
              )}
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold">{t.price}</span>
                <span className="text-secondary-app text-sm">{t.period}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-white/85">
                    <Check className="w-5 h-5 text-[#00C9A7] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={APP_URL}
                className={`mt-10 inline-flex h-11 w-full items-center justify-center px-6 rounded-full font-semibold transition-all ${
                  t.highlight
                    ? "bg-gradient-primary text-white shadow-glow hover:scale-[1.02]"
                    : "border border-white/15 text-white hover:bg-white/5"
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
  { q: "FlowCast showed me I was spending $400/month on subscriptions I forgot I had.", a: "Sarah K.", r: "Freelance Designer" },
  { q: "The 12-month forecast helped me decide when to hire my first employee.", a: "Marcus T.", r: "Small Business Owner" },
  { q: "I finally understand my finances. The AI insights are scary accurate.", a: "Priya M.", r: "Graduate Student" },
];

export function Testimonials() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 {...fadeUp} className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Loved by <span className="text-gradient">people who hate spreadsheets</span>
        </motion.h2>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {quotes.map((t, i) => (
            <motion.div
              key={t.a}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl p-7 bg-card-app border border-app hover:border-white/20 transition-colors"
            >
              <div className="text-[#FFD166] text-lg">★★★★★</div>
              <p className="mt-4 text-lg text-white/90 leading-relaxed">"{t.q}"</p>
              <div className="mt-6 pt-4 border-t border-app">
                <div className="font-semibold">{t.a}</div>
                <div className="text-sm text-secondary-app">{t.r}</div>
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
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-3xl p-12 sm:p-16 bg-gradient-banner text-center"
        >
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Ready to take control of your finances?
            </h2>
            <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto">
              Join thousands of users who already know where their money is going.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={APP_URL}
                className="inline-flex h-12 items-center px-7 rounded-full bg-white text-[#0A0A0F] font-semibold hover:scale-[1.03] transition-transform"
              >
                Start Free Today →
              </a>
              <a
                href="#demo"
                className="inline-flex h-12 items-center px-7 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Book a Demo
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
    <footer className="border-t border-app py-16">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-4">
        <div>
          <div className="text-xl font-extrabold text-gradient">FlowCast</div>
          <p className="mt-3 text-secondary-app text-sm max-w-xs">
            AI-powered financial clarity for people and businesses.
          </p>
          <div className="mt-5 flex gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-app flex items-center justify-center text-secondary-app hover:text-white hover:border-white/30 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-sm font-semibold text-white">{c.title}</div>
            <ul className="mt-4 space-y-2">
              {c.items.map((i) => (
                <li key={i}>
                  <a href="#" className="text-secondary-app hover:text-white text-sm transition-colors">{i}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-6 border-t border-app text-center text-sm text-secondary-app">
        © 2026 FlowCast. Built with <span className="text-[#FF6584]">♥</span> for financial clarity.
      </div>
    </footer>
  );
}
