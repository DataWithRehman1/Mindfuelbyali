import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function CTABanner() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-24"
      style={{ background: 'linear-gradient(135deg, #0F0F2E 0%, #1A1A3E 50%, #0C1220 100%)' }}
    >
      <div className="pointer-events-none absolute left-[-100px] top-[-100px] z-0 h-[400px] w-[400px] rounded-full bg-[rgba(124,58,237,0.12)] blur-[80px]" />
      <div className="pointer-events-none absolute bottom-[-80px] right-[-80px] z-0 h-[300px] w-[300px] rounded-full bg-[rgba(6,182,212,0.10)] blur-[60px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-[1] mx-auto max-w-[720px] px-6 text-center"
      >
        <div className="mx-auto inline-flex rounded-full border border-[rgba(6,182,212,0.25)] bg-[rgba(6,182,212,0.1)] px-4 py-2 font-display text-[14px] font-semibold text-[#67E8F9]">
          💬 Let's Build Something Together
        </div>

        <h2 className="mt-6 text-4xl font-extrabold leading-tight text-[#F8FAFC] md:text-5xl">Have a Project in Mind?</h2>

        <p className="mx-auto mt-5 max-w-[560px] text-lg leading-relaxed text-[#94A3B8]">
          We don't do fixed packages. Every project is different — tell us what you're building and we'll figure out the best way to help. Reach out directly and let's start a conversation.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://t.me/abdulrehman849"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-button bg-[#06B6D4] px-8 py-4 font-display text-base font-bold text-[#0C1220] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#0891B2] hover:shadow-[0_8px_24px_rgba(6,182,212,0.3)]"
          >
            📩 Message Us on Telegram
          </a>
          <Link
            to="contact"
            smooth
            offset={-64}
            className="cursor-pointer rounded-button border-[1.5px] border-[rgba(248,250,252,0.2)] bg-transparent px-8 py-4 font-display text-base text-[#F8FAFC] transition-all duration-300 hover:border-[rgba(248,250,252,0.5)] hover:bg-[rgba(248,250,252,0.05)]"
          >
            ✉️ Or Drop Us an Email
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="font-display text-sm text-[#64748B]">✅ No fixed packages</span>
          <span className="h-4 w-px bg-[rgba(148,163,184,0.2)]" aria-hidden="true" />
          <span className="font-display text-sm text-[#64748B]">⚡ Reply within 24hrs</span>
          <span className="h-4 w-px bg-[rgba(148,163,184,0.2)]" aria-hidden="true" />
          <span className="font-display text-sm text-[#64748B]">🌍 Remote — Worldwide</span>
        </div>
      </motion.div>
    </section>
  );
}

export default CTABanner;