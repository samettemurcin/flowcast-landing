import { motion } from "framer-motion";

const APP_URL = "https://tryflowcast.lovable.app";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#customers" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-line"
    >
      <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-ink">
          <span className="w-5 h-5 rounded-md bg-ink relative overflow-hidden">
            <span className="absolute inset-0 bg-emerald" style={{ clipPath: "polygon(0 60%, 100% 20%, 100% 100%, 0 100%)" }} />
          </span>
          <span className="font-display font-semibold tracking-tight">FlowCast</span>
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm text-ink-soft">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <a
            href={APP_URL}
            className="hidden sm:inline-flex h-8 px-3 items-center text-sm text-ink-soft hover:text-ink transition-colors rounded-md"
          >
            Sign in
          </a>
          <a
            href={APP_URL}
            className="btn-primary inline-flex h-8 px-3.5 items-center rounded-md text-sm font-medium"
          >
            Start free
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
