import { useState } from 'react';
import { Cog } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection.js';

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About us', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Contact us', id: 'contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id) => {
    /*
     * Desktop:
     * scroll immediately.
     *
     * Mobile:
     * close the menu first, wait until the layout updates,
     * then calculate the section position.
     */
    if (open) {
      setOpen(false);

      setTimeout(() => {
        scrollToSection(id);
      }, 320);

      return;
    }

    scrollToSection(id);
  };

  const toggleMenu = () => {
    setOpen((current) => !current);
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
      {/* =====================================
          HEADER BAR
      ====================================== */}

      <div
        className="
          max-w-[1360px]
          mx-auto
          px-4
          sm:px-5
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

        <button
          type="button"
          onClick={() => handleNavClick('home')}
          aria-label="Go to home"
          className="
            flex
            items-center
            gap-2.5
            shrink-0
            text-left
            cursor-pointer
          "
        >
          <div
            className="
              w-9
              h-9
              rounded-xl
              bg-dark
              text-cream
              flex
              items-center
              justify-center
              shrink-0
            "
          >
            <Cog
              size={21}
              strokeWidth={2}
              className="animate-[spin_8s_linear_infinite]"
            />
          </div>

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
        </button>

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
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className="
                group
                relative
                py-1
                cursor-pointer
                hover:text-dark
                transition-colors
                duration-300
              "
            >
              {link.label}

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
            </button>
          ))}
        </nav>

        {/* =====================================
            DESKTOP QUOTE BUTTON
        ====================================== */}

        <button
          type="button"
          onClick={() => handleNavClick('contact')}
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
            cursor-pointer
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
        </button>

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
            items-center
            justify-center
            text-dark
            cursor-pointer
            transition-all
            duration-300
            hover:bg-dark/10
            active:scale-90
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-dark/30
          "
        >
          {/* TOP */}

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

          {/* MIDDLE */}

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

          {/* BOTTOM */}

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
          duration-300
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            open
              ? 'max-h-[500px] opacity-100'
              : 'max-h-0 opacity-0'
          }
        `}
      >
        <nav
          className="
            px-4
            sm:px-5
            pt-3
            pb-5
          "
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">

            {NAV_LINKS.map((link, index) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
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
                  w-full
                  min-h-[46px]
                  py-3
                  px-3
                  rounded-lg
                  text-left
                  text-[15px]
                  font-medium
                  text-ink/80
                  cursor-pointer
                  transition-all
                  duration-300
                  ease-out
                  hover:bg-dark/5
                  hover:text-dark
                  ${
                    open
                      ? 'translate-y-0 opacity-100'
                      : '-translate-y-2 opacity-0'
                  }
                `}
              >
                <span>{link.label}</span>

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
              </button>
            ))}

            {/* MOBILE QUOTE */}

            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className={`
                flex
                items-center
                justify-center
                w-full
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
                cursor-pointer
                transition-all
                duration-300
                ease-out
                hover:bg-white
                hover:text-dark-2
                active:scale-[0.98]
                ${
                  open
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-2 opacity-0'
                }
              `}
            >
              Get a Quote
            </button>

          </div>
        </nav>
      </div>
    </header>
  );
}