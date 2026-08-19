import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  MessageCircle,
} from 'lucide-react';

import Logo from './Logo.jsx';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact us', href: '#contact' },
];

const OUR_SERVICES = [
  'Machinery Erection',
  'Commissioning',
  'Maintenance & Support',
  'Spare Parts',
];

const OUR_MACHINES = [
  'Ring Frame',
  'Opened Spinning',
  'Auto Coner',
  'Blowroom',
];

export default function Footer() {
  return (
    <footer className="bg-dark px-5 md:px-8 pt-14 pb-6">
      <div className="max-w-[1360px] mx-auto">

        {/* =====================================
            MAIN FOOTER CONTENT
        ====================================== */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]
            gap-x-10
            gap-y-10
          "
        >

          {/* =====================================
              BRAND
          ====================================== */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2.5"
            >
              <Logo light size={26} />

              <span className="flex flex-col leading-none">
                <span className="font-extrabold text-[18px] text-cream">
                  GRG Tex Care
                </span>

                <span
                  className="
                    text-[11px]
                    font-medium
                    tracking-[0.08em]
                    text-cream/50
                    mt-1
                  "
                >
                  Think best, Do best
                </span>
              </span>
            </a>

            <p
              className="
                mt-4
                max-w-[270px]
                text-[12px]
                leading-relaxed
                text-cream/55
              "
            >
              Textile machinery erection and service you can trust.
              Supporting mills and manufacturers since 2011.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex items-center gap-2.5">

              {/* LINKEDIN */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-cream/70
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-dark
                "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.5 8.5A1.75 1.75 0 1 0 6.5 5a1.75 1.75 0 0 0 0 3.5ZM5 10h3v9H5v-9Zm5 0h2.9v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19h-3v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.23V19h-3v-9Z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-cream/70
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-dark
                "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/917305474673"
                target="_blank"
                aria-label="WhatsApp"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-cream/70
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-dark
                "
              >
                <MessageCircle size={15} />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:grgtexcare@gmail.com"
                aria-label="Email"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-cream/70
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-dark
                "
              >
                <Mail size={15} />
              </a>

            </div>
          </div>


          {/* =====================================
              QUICK LINKS
          ====================================== */}
          <div>
            <p
              className="
                mb-5
                text-[14px]
                font-semibold
                text-cream
              "
            >
              Quick Links
            </p>

            <ul className="flex flex-col gap-3.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
                      text-[13px]
                      text-cream/50
                      transition-colors
                      hover:text-cream
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* =====================================
              OUR SERVICES
          ====================================== */}
          <div>
            <p
              className="
                mb-5
                text-[14px]
                font-semibold
                text-cream
              "
            >
              Our Services
            </p>

            <ul className="flex flex-col gap-3.5">
              {OUR_SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="
                      text-[13px]
                      text-cream/50
                      transition-colors
                      hover:text-cream
                    "
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* =====================================
              OUR MACHINES
          ====================================== */}
          <div>
            <p
              className="
                mb-5
                text-[14px]
                font-semibold
                text-cream
              "
            >
              Our Machines
            </p>

            <ul className="flex flex-col gap-3.5">
              {OUR_MACHINES.map((machine) => (
                <li key={machine}>
                  <a
                    href="#machinery"
                    className="
                      text-[13px]
                      text-cream/50
                      transition-colors
                      hover:text-cream
                    "
                  >
                    {machine}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* =====================================
              CONTACT
          ====================================== */}
          <div>
            <p
              className="
                mb-5
                text-[14px]
                font-semibold
                text-cream
              "
            >
              Contact
            </p>

            <ul className="flex flex-col gap-4">

              {/* PHONE */}
              <li className="flex items-start gap-2.5">
                <Phone
                  size={14}
                  className="mt-0.5 shrink-0 text-cream/60"
                />

                <a
                  href="tel:+917305474673"
                  className="
                    text-[13px]
                    text-cream/50
                    transition-colors
                    hover:text-cream
                  "
                >
                  +91 73054 74673
                </a>
              </li>


              {/* EMAIL */}
              <li className="flex items-start gap-2.5">
                <Mail
                  size={14}
                  className="mt-0.5 shrink-0 text-cream/60"
                />

                <a
                  href="mailto:grgtexcare@gmail.com"
                  className="
                    break-all
                    text-[13px]
                    text-cream/50
                    transition-colors
                    hover:text-cream
                  "
                >
                  grgtexcare@gmail.com
                </a>
              </li>


              {/* LOCATION */}
              <li className="flex items-start gap-2.5">
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0 text-cream/60"
                />

                <span
                  className="
                    text-[13px]
                    leading-relaxed
                    text-cream/50
                  "
                >
                  Coimbatore,
                  <br />
                  Tamil Nadu, India
                </span>
              </li>

            </ul>
          </div>

        </div>


        {/* =====================================
            DIVIDER
        ====================================== */}
        <div className="mt-12 border-t border-white/10" />


        {/* =====================================
            BOTTOM BAR
        ====================================== */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-3
            pt-5
            sm:flex-row
          "
        >
          <p
            className="
              text-center
              text-[11.5px]
              text-cream/40
              sm:text-left
            "
          >
            © 2026 GRG Tex Care. All Rights reserved.
          </p>

          <a
            href="#home"
            className="
              flex
              items-center
              gap-1.5
              text-[11.5px]
              text-cream/40
              transition-colors
              hover:text-cream
            "
          >
            Back to top
            <ArrowUp size={13} />
          </a>
        </div>

      </div>
    </footer>
  );
}