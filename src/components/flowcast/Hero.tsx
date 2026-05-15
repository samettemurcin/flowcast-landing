import { motion } from "framer-motion";
import { Sparkles, Play } from "lucide-react";
import dashboard from "@/assets/dashboard-hero.jpg";

const APP_URL = "https://your-flowcast-app.streamlit.app";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      {/* background decor */}
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#6C63FF]/30 blur-[140px] animate-drift" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#00C9A7]/25 blur-[140px] animate-drift" />

      {/* particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/30"
          style={{
            top: `${(i * 53) % 100}%`,
            left: `${(i * 37) % 100}%`,
            opacity: 0.15 + ((i % 5) / 10),
          }}
        />
      ))}

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gradient-border text-sm text-white/90 shadow-glow"
        >
          <Sparkles className="w-4 h-4 text-[#00C9A7]" />
          AI-Powered Financial Intelligence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
        >
          Understand Your Money.
          <br />
          Forecast Your{" "}
          <span className="text-gradient text-[1.08em] inline-block">Future.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-secondary-app"
        >
          Upload your bank data and instantly see where every dollar goes — with AI-powered
          forecasts up to 24 months ahead.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={APP_URL}
            className="inline-flex h-12 items-center px-7 rounded-full bg-gradient-primary text-white font-semibold shadow-glow hover:scale-[1.03] transition-transform"
          >
            Start for Free →
          </a>
          <a
            href="#demo"
            className="inline-flex h-12 items-center gap-2 px-7 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
          >
            <Play className="w-4 h-4" /> Watch Demo
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-6 text-sm text-secondary-app"
        >
          <span className="text-[#FFD166]">★★★★★</span>{" "}
          Trusted by 500+ users · No credit card required · Free forever plan
        </motion.p>

        {/* Hero visual */}
        <div className="relative mt-20 [perspective:1800px]">
          <div className="absolute -inset-10 bg-gradient-primary opacity-30 blur-[100px] rounded-[40px]" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="relative animate-float-slow rounded-2xl overflow-hidden border border-app shadow-glow bg-card-app"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-app bg-black/40">
              <span className="w-3 h-3 rounded-full bg-[#FF6584]/80" />
              <span className="w-3 h-3 rounded-full bg-[#FFD166]/80" />
              <span className="w-3 h-3 rounded-full bg-[#00C9A7]/80" />
              <span className="ml-4 text-xs text-secondary-app">app.flowcast.ai/dashboard</span>
            </div>
            <img
              src={dashboard}
              alt="FlowCast analytics dashboard"
              width={1600}
              height={1024}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
