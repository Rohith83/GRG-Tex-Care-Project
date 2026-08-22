import { CheckCircle2 } from 'lucide-react';
import aboutImg from '../assets/about-mill.png';

const POINTS = [
  {
    title: 'Experienced Technical Team',
    desc: 'Skilled professionals with practical textile machinery experience.',
  },
  {
    title: 'Reliable Service Support',
    desc: 'Focused on dependable service and long-term customer relationships.',
  },
  {
    title: 'On-Time Delivery & Flexibility',
    desc: 'Efficient execution adapted to mill schedules and operational requirements.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        scroll-mt-[64px]
        py-10
        sm:py-12
        md:py-14
        px-4
        sm:px-5
        md:px-8
      "
    >
      <div
        className="
          max-w-[1360px]
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          sm:gap-10
          md:gap-16
          items-center
        "
      >
        {/* =========================
            IMAGE
        ========================== */}

        <div
          className="
            w-full
            overflow-hidden
            rounded-[22px]
            sm:rounded-[28px]
            shadow-[0_20px_50px_-25px_rgba(18,51,48,0.4)]
          "
        >
          <img
            src={aboutImg}
            alt="Technician servicing textile mill machinery"
            className="
              w-full
              h-[250px]
              sm:h-[320px]
              md:h-auto
              object-cover
              block
              scale-[1.04]
              sm:scale-[1.06]
            "
          />
        </div>

        {/* =========================
            CONTENT
        ========================== */}

        <div className="w-full">
          <h2
            className="
              text-[26px]
              sm:text-[28px]
              md:text-[32px]
              font-extrabold
              text-dark
              leading-[1.15]
            "
          >
            Why Textile Mills
            <br />
            Trust GRG Tex Care
          </h2>

          <p
            className="
              mt-4
              text-[14px]
              sm:text-[15px]
              leading-[1.7]
              text-muted
              max-w-[520px]
            "
          >
            With years of hands-on experience in textile machinery erection and
            service, GRG Tex Care helps mills maintain reliable machinery
            performance, reduce downtime, and keep production running efficiently.
          </p>

          {/* =========================
              POINTS
          ========================== */}

          <ul
            className="
              mt-6
              sm:mt-7
              flex
              flex-col
              gap-5
            "
          >
            {POINTS.map((point) => (
              <li
                key={point.title}
                className="
                  flex
                  items-start
                  gap-3
                  min-w-0
                "
              >
                <CheckCircle2
                  className="
                    mt-0.5
                    shrink-0
                    text-accent-green
                  "
                  size={19}
                  strokeWidth={2}
                />

                <div className="min-w-0">
                  <p
                    className="
                      font-semibold
                      text-[14px]
                      sm:text-[15px]
                      text-ink
                      leading-snug
                    "
                  >
                    {point.title}
                  </p>

                  <p
                    className="
                      text-[13px]
                      sm:text-[14px]
                      text-muted
                      mt-1
                      leading-relaxed
                      max-w-[520px]
                    "
                  >
                    {point.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}