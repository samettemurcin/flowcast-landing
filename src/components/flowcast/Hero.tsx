import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const APP_URL = "https://tryflowcast.lovable.app";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-28 overflow-hidden">
      {/* subtle dot grid backdrop */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <a
            href="#features"
            className="inline-flex items-center gap-2 h-7 pl-1 pr-3 rounded-full border border-line bg-white text-xs text-ink-soft hover:text-ink transition-colors"
          >
            <span className="inline-flex items-center h-5 px-2 rounded-full bg-emerald-soft text-emerald font-medium">New</span>
            24-month AI forecasting is live
            <ArrowRight className="w-3 h-3" />
          </a>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-8 text-center font-display font-semibold tracking-tight text-ink text-5xl sm:text-6xl md:text-7xl leading-[1.02]"
        >
          Financial clarity,
          <br />
          <span className="text-ink-soft">engineered for you.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-xl mx-auto text-center text-lg text-ink-soft leading-relaxed"
        >
          Upload your bank data. FlowCast turns it into precise insight and forecasts
          up to 24 months out — no spreadsheets, no setup.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-9 flex items-center justify-center gap-3"
        >
          <a
            href={APP_URL}
            className="btn-primary inline-flex h-10 items-center px-5 rounded-md text-sm font-medium"
          >
            Start for free
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </a>
          <a
            href="#demo"
            className="inline-flex h-10 items-center px-5 rounded-md text-sm font-medium text-ink border border-line hover:bg-surface transition-colors"
          >
            View live demo
          </a>
        </motion.div>

        <p className="mt-5 text-center text-xs text-ink-soft">
          Free forever plan · No credit card required
        </p>

        {/* Clean product preview built in CSS — no stock illustrations */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mt-20"
        >
          <div className="mx-auto max-w-4xl rounded-xl border border-line bg-white overflow-hidden"
               style={{ boxShadow: "0 30px 80px -30px rgba(0,0,0,0.18)" }}>
            {/* window chrome */}
            <div className="flex items-center justify-between px-4 h-9 border-b border-line bg-surface">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5]" />
              </div>
              <span className="text-[11px] text-ink-soft">app.flowcast.ai</span>
              <span className="w-10" />
            </div>

            <div className="grid grid-cols-12 gap-0">
              {/* sidebar */}
              <aside className="col-span-3 border-r border-line p-5 hidden sm:block">
                <div className="text-[11px] uppercase tracking-wider text-ink-soft mb-3">Workspace</div>
                {["Overview", "Cash flow", "Forecasts", "Categories", "Reports"].map((s, i) => (
                  <div key={s} className={`text-sm py-1.5 px-2 rounded-md mb-0.5 ${i === 2 ? "bg-surface text-ink font-medium" : "text-ink-soft"}`}>
                    {s}
                  </div>
                ))}
              </aside>

              {/* main */}
              <div className="col-span-12 sm:col-span-9 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs text-ink-soft">Projected net cash · next 24 months</div>
                    <div className="mt-1 font-display text-3xl font-semibold text-ink">$184,920</div>
                  </div>
                  <div className="inline-flex items-center gap-1 h-6 px-2 rounded-md bg-emerald-soft text-emerald text-xs font-medium">
                    +12.4%
                  </div>
                </div>

                {/* chart */}
                <div className="mt-6 h-44 relative">
                  <svg viewBox="0 0 400 160" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="fc-fill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* gridlines */}
                    {[0,1,2,3].map(i => (
                      <line key={i} x1="0" x2="400" y1={40*i+10} y2={40*i+10} stroke="#EAEAEA" strokeDasharray="2 4" />
                    ))}
                    <path d="M0,120 L40,108 L80,112 L120,90 L160,82 L200,70 L240,60 L280,48 L320,38 L360,28 L400,18 L400,160 L0,160 Z" fill="url(#fc-fill)" />
                    <path d="M0,120 L40,108 L80,112 L120,90 L160,82 L200,70 L240,60 L280,48 L320,38 L360,28 L400,18" fill="none" stroke="#10B981" strokeWidth="2" />
                    <circle cx="280" cy="48" r="3.5" fill="#10B981" />
                    <circle cx="280" cy="48" r="7" fill="#10B981" fillOpacity="0.18" />
                  </svg>
                </div>

                {/* stat row */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { l: "Runway", v: "18.2 mo" },
                    { l: "Burn", v: "$9.4k" },
                    { l: "Confidence", v: "94%" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-md border border-line p-3">
                      <div className="text-[11px] text-ink-soft">{s.l}</div>
                      <div className="mt-0.5 font-display font-semibold text-ink">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
