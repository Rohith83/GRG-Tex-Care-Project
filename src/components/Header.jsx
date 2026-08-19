import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact us', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-black/5">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 h-[64px] flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <Logo />
          <span className="flex flex-col leading-none">
            <span className="font-extrabold text-[15px] tracking-tight text-dark">GRG Tex Care</span>
            <span className="text-[10px] font-medium tracking-[0.08em] text-muted mt-1">Think best, Do best</span>
          </span>
        </a>
<nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-ink/80">
  {NAV_LINKS.map((l) => (
    <a
      key={l.label}
      href={l.href}
      className="group relative py-1 hover:text-dark transition-colors duration-300"
    >
      {l.label}

      <span className="absolute left-1/2 bottom-0 h-[2px] w-0 -translate-x-1/2 rounded-full bg-dark transition-all duration-300 ease-out group-hover:w-full" />
    </a>
  ))}
</nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-dark-2 text-cream border border-dark-2 text-[14px] font-semibold px-5 py-2.5 hover:bg-white hover:text-dark-2 transition-colors"
        >
          Get a Quote
        </a>

        <button
          className="md:hidden text-dark"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

  {open && (
  <div className="md:hidden border-t border-black/5 bg-cream px-5 pb-5 pt-3 flex flex-col gap-1">
    {NAV_LINKS.map((l) => (
      <a
        key={l.label}
        href={l.href}
        onClick={() => setOpen(false)}
        className="
          group relative flex items-center
          py-3 px-3
          rounded-lg
          text-[15px] font-medium text-ink/80
          transition-all duration-300 ease-out
          hover:bg-dark/5
          hover:text-dark
          hover:pl-5
        "
      >
        <span className="transition-transform duration-300 group-hover:scale-[1.03]">
          {l.label}
        </span>

        <span className="
          absolute right-3
          opacity-0 -translate-x-2
          text-dark
          transition-all duration-300
          group-hover:opacity-100
          group-hover:translate-x-0
        ">
          →
        </span>
      </a>
    ))}

    <a
      href="#contact"
      onClick={() => setOpen(false)}
      className="inline-flex justify-center rounded-full bg-dark-2 text-cream border border-dark-2 text-[14px] font-semibold px-5 py-2.5 mt-2 transition-all duration-300 hover:bg-white hover:text-dark-2 hover:scale-[1.02]"
    >
      Get a Quote
    </a>
  </div>
)}
    </header>
  );
}
