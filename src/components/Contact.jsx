import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Award,
} from 'lucide-react';

import QuoteForm from './QuoteForm.jsx';

const DETAILS = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 73054 74673',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'grgtexcare@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Coimbatore, Tamil Nadu, India',
  },
  {
    icon: MessageCircle,
    label: 'Whatsapp',
    value: '+91 73054 74673',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        w-full
        py-12
        sm:py-14
        px-4
        sm:px-5
        md:px-8
      "
    >
      <div
        className="
          max-w-[1200px]
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[0.9fr_1.1fr]
          gap-10
          lg:gap-12
          items-start
        "
      >
        {/* =========================
            LEFT SIDE
        ========================== */}

        <div
          className="
            w-full
            max-w-[440px]
            mx-auto
          "
        >
          {/* Heading area */}

          <div className="text-center lg:text-left">
            <span
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-dark/20
                text-[11px]
                sm:text-[12px]
                font-semibold
                tracking-wide
                text-dark
                px-3.5
                sm:px-4
                py-1.5
              "
            >
              GET IN TOUCH
            </span>

            <h2
              className="
                mt-4
                sm:mt-5
                text-[26px]
                sm:text-[28px]
                md:text-[34px]
                font-extrabold
                text-dark
                leading-[1.15]
              "
            >
              Let&apos;s Keep Your
              <br />
              Machinery Running.
            </h2>

            <p
              className="
                mt-4
                text-[14px]
                sm:text-[14.5px]
                text-muted
                leading-relaxed
                max-w-[420px]
                mx-auto
                lg:mx-0
              "
            >
              Talk to GRG Tex Care for reliable erection,
              commissioning, maintenance and technical support.
            </p>

            <div
              className="
                mt-5
                sm:mt-6
                w-10
                h-[2px]
                bg-dark/30
                mx-auto
                lg:mx-0
              "
            />
          </div>

          {/* =========================
              CONTACT DETAILS
          ========================== */}

          <div className="mt-6 sm:mt-7 w-full">
            {DETAILS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="
                  flex
                  items-center
                  gap-3
                  sm:gap-4
                  w-full
                  py-2.5
                "
              >
                {/* Icon */}

                <span
                  className="
                    w-10
                    h-10
                    sm:w-11
                    sm:h-11
                    shrink-0
                    rounded-xl
                    border
                    border-dark/20
                    flex
                    items-center
                    justify-center
                    text-dark
                  "
                >
                  <Icon
                    size={17}
                    className="sm:w-[18px] sm:h-[18px]"
                    strokeWidth={1.8}
                  />
                </span>

                {/* Text */}

                <div className="min-w-0 flex-1 text-left">
                  <p
                    className="
                      text-[12px]
                      sm:text-[13px]
                      font-medium
                      text-dark/70
                      leading-none
                    "
                  >
                    {label}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[14px]
                      sm:text-[15px]
                      font-semibold
                      text-ink
                      leading-snug
                      break-words
                    "
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* =========================
              15+ YEARS CARD
          ========================== */}

          <div
            className="
              mt-5
              sm:mt-6
              w-full
              rounded-2xl
              bg-dark
              px-4
              sm:px-6
              py-4
              sm:py-5
              flex
              items-center
              gap-3
              sm:gap-4
            "
          >
            {/* Award */}

            <span
              className="
                w-10
                h-10
                sm:w-11
                sm:h-11
                shrink-0
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                text-cream
              "
            >
              <Award
                size={18}
                className="sm:w-5 sm:h-5"
                strokeWidth={1.8}
              />
            </span>

            {/* Text */}

            <div className="min-w-0 flex-1 text-left">
              <p
                className="
                  text-[16px]
                  sm:text-[17px]
                  font-extrabold
                  text-cream
                  leading-none
                "
              >
                15+ Years
              </p>

              <p
                className="
                  mt-1
                  text-[11.5px]
                  sm:text-[12.5px]
                  text-cream/55
                  leading-relaxed
                "
              >
                of Trusted Service in Textile Machinery
                Erection &amp; Service
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT — QUOTE FORM
        ========================== */}

        <div className="w-full min-w-0">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}