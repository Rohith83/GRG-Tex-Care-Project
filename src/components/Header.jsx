import { useState } from 'react';
import Logo from './Logo.jsx';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact us', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const toggleMenu = () => {
    setOpen((value) => !value);
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        bg-cream/95
        backdrop-blur-md
        border-b
        border-black/5
      "
    >
      <div
        className="
          max-w-[1360px]
          mx-auto
          px-5
          md:px-8
          h-[64px]
          flex
          items-center
          justify-between
        "
      >
        {/* =====================================
            LOGO
        ====================================== */}
        <a
          href="#home"
          onClick={closeMenu}
          className="
            flex
            items-center
            gap-2.5
            shrink-0
          "
        >
          <Logo />

          <span className="flex flex-col leading-none">
            <span
              className="
                font-extrabold
                text-[15px]
                tracking-tight
                text-dark
              "
            >
              GRG Tex Care
            </span>

            <span
              className="
                text-[10px]
                font-medium
                tracking-[0.08em]
                text-muted
                mt-1
              "
            >
              Think best, Do best
            </span>
          </span>
        </a>

        {/* =====================================
            DESKTOP NAVIGATION
        ====================================== */}
        <nav
          className="
            hidden
            md:flex
            items-center
            gap-8
            text-[14px]
            font-medium
            text-ink/80
          "
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                group
                relative
                py-1
                hover:text-dark
                transition-colors
                duration-300
              "
            >
              {link.label}

              {/* Animated underline */}
              <span
                className="
                  absolute
                  left-1/2
                  bottom-0
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-dark
                  transition-all
                  duration-300
                  ease-out
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </nav>

        {/* =====================================
            DESKTOP QUOTE BUTTON
        ====================================== */}
        <a
          href="#contact"
          className="
            hidden
            md:inline-flex
            items-center
            justify-center
            rounded-full
            bg-dark-2
            text-cream
            border
            border-dark-2
            text-[14px]
            font-semibold
            px-5
            py-2.5
            transition-all
            duration-300
            ease-out
            hover:bg-white
            hover:text-dark-2
            hover:-translate-y-0.5
            active:translate-y-0
          "
        >
          Get a Quote
        </a>

        {/* =====================================
            MOBILE MENU BUTTON
        ====================================== */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="
            md:hidden
            relative
            w-10
            h-10
            shrink-0
            rounded-full
            flex
            flex-col
            items-center
            justify-center
            gap-[5px]
            text-dark
            transition-all
            duration-300
            ease-out
            hover:bg-dark/10
            hover:scale-105
            active:scale-90
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-dark/30
          "
        >
          {/* Top line */}
          <span
            className={`
              absolute
              w-5
              h-[2px]
              rounded-full
              bg-dark
              transition-all
              duration-300
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                open
                  ? 'rotate-45'
                  : '-translate-y-[5px]'
              }
            `}
          />

          {/* Middle line */}
          <span
            className={`
              absolute
              w-5
              h-[2px]
              rounded-full
              bg-dark
              transition-all
              duration-200
              ease-out
              ${
                open
                  ? 'opacity-0 scale-0'
                  : 'opacity-100 scale-100'
              }
            `}
          />

          {/* Bottom line */}
          <span
            className={`
              absolute
              w-5
              h-[2px]
              rounded-full
              bg-dark
              transition-all
              duration-300
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                open
                  ? '-rotate-45'
                  : 'translate-y-[5px]'
              }
            `}
          />
        </button>
      </div>

      {/* =====================================
          MOBILE NAVIGATION
      ====================================== */}
      <div
        id="mobile-navigation"
        className={`
          md:hidden
          overflow-hidden
          border-t
          border-black/5
          bg-cream
          transition-all
          duration-400
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            open
              ? 'max-h-[500px] opacity-100'
              : 'max-h-0 opacity-0'
          }
        `}
      >
        <nav className="px-5 pt-3 pb-5">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                style={{
                  transitionDelay: open
                    ? `${index * 40}ms`
                    : '0ms',
                }}
                className={`
                  group
                  relative
                  flex
                  items-center
                  justify-between
                  py-3
                  px-3
                  rounded-lg
                  text-[15px]
                  font-medium
                  text-ink/80
                  transition-all
                  duration-300
                  ease-out
                  hover:bg-dark/5
                  hover:text-dark
                  hover:pl-5
                  ${
                    open
                      ? 'translate-y-0 opacity-100'
                      : '-translate-y-2 opacity-0'
                  }
                `}
              >
                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-[1.02]
                  "
                >
                  {link.label}
                </span>

                <span
                  className="
                    text-dark
                    opacity-0
                    -translate-x-2
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    group-hover:translate-x-0
                  "
                >
                  →
                </span>
              </a>
            ))}

            {/* Mobile Quote Button */}
            <a
              href="#contact"
              onClick={closeMenu}
              style={{
                transitionDelay: open
                  ? `${NAV_LINKS.length * 40}ms`
                  : '0ms',
              }}
              className={`
                flex
                items-center
                justify-center
                rounded-full
                bg-dark-2
                text-cream
                border
                border-dark-2
                text-[14px]
                font-semibold
                px-5
                py-2.5
                mt-2
                transition-all
                duration-300
                ease-out
                hover:bg-white
                hover:text-dark-2
                hover:scale-[1.02]
                active:scale-[0.98]
                ${
                  open
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-2 opacity-0'
                }
              `}
            >
              Get a Quote
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}