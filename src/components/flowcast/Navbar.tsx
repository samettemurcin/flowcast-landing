import { motion } from "framer-motion";

const APP_URL = "https://flowcast-app.streamlit.app";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Demo", href: "#demo" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 border-b border-app backdrop-blur-xl"
      style={{ backgroundColor: "rgba(10,10,15,0.8)" }}
    >
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="text-xl font-extrabold tracking-tight text-gradient">
          FlowCast
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-secondary-app">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={APP_URL}
            className="hidden sm:inline-flex h-9 px-4 items-center text-sm text-secondary-app hover:text-white transition-colors"
          >
            Sign in
          </a>
          <a
            href={APP_URL}
            className="inline-flex h-9 px-4 items-center rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-glow hover:opacity-95 transition-all hover:scale-[1.02]"
          >
            Start Free →
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
