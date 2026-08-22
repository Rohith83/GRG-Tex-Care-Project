import {
  Wrench,
  Hammer,
  Truck,
  ShieldCheck,
  Siren,
  Headset,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Wrench,
    title: 'Machinery Erection',
    desc: "We install your textile machines properly from day one, so they're set up right and ready to perform.",
  },
  {
    icon: Hammer,
    title: 'Breakdown Repair',
    desc: "Machine stopped working? We fix it fast so your production doesn't stay stuck for long.",
  },
  {
    icon: Truck,
    title: 'Plant Shifting',
    desc: 'Moving your plant to a new location? We handle the entire shifting process safely, start to finish.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Solutions',
    desc: 'We find the real problem behind machine issues and fix it properly — not just a temporary patch.',
  },
  {
    icon: Siren,
    title: 'Emergency Service',
    desc: "Something urgent? We're just a call away, ready to help anytime you need us most.",
  },
  {
    icon: Headset,
    title: 'Technical Consultation',
    desc: 'Not sure what machine or setup is right for you? We guide you with honest, expert advice.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        scroll-mt-[80px]
        py-8
        sm:py-10
        px-4
        sm:px-5
        md:px-8
      "
    >
      <div
        className="
          max-w-[1360px]
          mx-auto
          rounded-[24px]
          sm:rounded-[28px]
          md:rounded-[32px]
          bg-dark
          px-4
          sm:px-6
          md:px-14
          py-9
          sm:py-11
          md:py-16
        "
      >
        {/* =========================
            HEADING
        ========================== */}

        <div
          className="
            text-center
            max-w-[620px]
            mx-auto
          "
        >
          <p
            className="
              text-[10px]
              sm:text-[12px]
              font-bold
              tracking-[0.14em]
              uppercase
              text-[#d9a65a]
              mb-2.5
              sm:mb-3
            "
          >
            GRG Tex Care
          </p>

          <h2
            className="
              text-[23px]
              xs:text-[25px]
              sm:text-[27px]
              md:text-[30px]
              font-extrabold
              text-cream
              leading-[1.2]
            "
          >
            Reliable Service
            <br />
            for Your Textile Machinery Needs
          </h2>

          <p
            className="
              mt-3
              sm:mt-4
              text-[13px]
              sm:text-[14px]
              md:text-[15px]
              text-cream/60
              leading-relaxed
              max-w-[540px]
              mx-auto
            "
          >
            Professional machinery erection, commissioning, maintenance, and
            technical support for textile mills.
          </p>
        </div>

        {/* =========================
            SERVICE CARDS
        ========================== */}

        <div
          className="
            mt-8
            sm:mt-10
            md:mt-11
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-3
            sm:gap-4
            md:gap-5
          "
        >
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="
                w-full
                min-w-0
                rounded-xl
                sm:rounded-2xl
                bg-white/[0.06]
                border
                border-white/10
                px-4
                sm:px-5
                md:px-6
                py-5
                sm:py-6
                md:py-7
                transition-colors
                duration-300
                hover:bg-white/[0.09]
              "
            >
              {/* ICON */}

              <div className="flex items-center">
                <Icon
                  className="text-cream/80 shrink-0"
                  size={20}
                  strokeWidth={1.75}
                />
              </div>

              {/* TITLE */}

              <p
                className="
                  mt-3
                  sm:mt-4
                  font-semibold
                  text-[14px]
                  sm:text-[15px]
                  text-cream
                  leading-snug
                "
              >
                {title}
              </p>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-1.5
                  sm:mt-2
                  text-[12.5px]
                  sm:text-[13px]
                  md:text-[13.5px]
                  leading-relaxed
                  text-cream/55
                "
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}