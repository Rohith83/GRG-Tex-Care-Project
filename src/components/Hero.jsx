import { UsersRound } from 'lucide-react';
import heroImg from '../assets/hero-image.png';
import { scrollToSection } from '../utils/scrollToSection.js';

export default function Hero({ onExplore }) {
  return (
    <section
      id="home"
      className="
        scroll-mt-[72px]
        pt-8
        pb-10
        px-4
        sm:pt-12
        sm:pb-14
        sm:px-5
        md:pt-14
        md:pb-16
        md:px-8
      "
    >
      <div className="mx-auto flex w-full max-w-[1625px] flex-col items-center text-center">

        {/* BADGE */}
        <span
          className="
            inline-flex
            max-w-full
            items-center
            justify-center
            rounded-full
            border
            border-dark/15
            bg-white/60
            px-3
            py-1.5
            text-[10px]
            font-medium
            text-ink/70
            sm:px-4
            sm:text-[13px]
          "
        >
          Est. 2011 · Erection &amp; Service
        </span>

        {/* HEADING */}
        <h1
          className="
            mt-5
            w-full
            max-w-[720px]
            text-[28px]
            leading-[1.13]
            font-extrabold
            text-dark
            sm:mt-6
            sm:text-[38px]
            md:text-[48px]
          "
        >
          Textile Machinery,
          <br />
          Erection &amp; Service You Can Trust.
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mt-4
            w-full
            max-w-[620px]
            px-1
            text-[13.5px]
            leading-relaxed
            text-muted
            sm:mt-5
            sm:px-0
            sm:text-[15px]
            md:text-[16px]
          "
        >
          From installation to ongoing maintenance, we keep every kind of textile
          machine running at its best. Trusted by Mills and Manufacturers since 2011.
        </p>

        {/* BUTTONS */}
        <div
          className="
            mt-6
            flex
            w-full
            max-w-[360px]
            items-center
            justify-center
            gap-2
            sm:mt-7
            sm:max-w-none
            sm:gap-3
          "
        >
          {/* LEARN MORE */}
          <button
            type="button"
            onClick={() => scrollToSection('services')}
            className="
              inline-flex
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-dark-2
              bg-dark-2
              px-4
              py-2.5
              text-[12px]
              font-semibold
              text-cream
              transition-all
              duration-300
              hover:bg-white
              hover:text-dark-2
              active:scale-[0.97]
              sm:px-6
              sm:py-3
              sm:text-[14px]
            "
          >
            Learn More
          </button>

          {/* EXPLORE SERVICES */}
          <button
            type="button"
            onClick={onExplore}
            className="
              inline-flex
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-dark-2
              bg-white
              px-4
              py-2.5
              text-[12px]
              font-semibold
              text-dark
              transition-all
              duration-300
              hover:bg-dark-2
              hover:text-cream
              active:scale-[0.97]
              sm:px-6
              sm:py-3
              sm:text-[14px]
            "
          >
            Explore Services
          </button>
        </div>

        {/* HERO IMAGE */}
        <div
          className="
            relative
            mt-7
            w-full
            overflow-hidden
            rounded-[22px]
            shadow-[0_20px_60px_-20px_rgba(18,51,48,0.35)]
            sm:mt-10
            sm:rounded-[32px]
            md:rounded-[42px]
          "
        >
          <img
            src={heroImg}
            alt="Textile ring frame machinery in operation"
            className="
              block
              h-[220px]
              w-full
              object-cover
              sm:h-[330px]
              md:h-[430px]
              lg:h-[500px]
            "
          />

          {/* =================================
              TOP LEFT — EXPERIENCE
          ================================== */}
          <div
            className="
              absolute
              left-2.5
              top-2.5
              rounded-[10px]
              bg-white
              px-2
              py-1.5
              text-center
              shadow-[0_8px_20px_-8px_rgba(0,0,0,0.3)]
              sm:left-6
              sm:top-6
              sm:rounded-[18px]
              sm:px-4
              sm:py-3
              md:left-12
              md:top-6
              md:rounded-[22px]
              md:px-4
              md:py-4
            "
          >
            <p
              className="
                whitespace-nowrap
                text-[11px]
                font-medium
                leading-none
                text-dark
                sm:text-[17px]
                md:text-[20px]
              "
            >
              15+ Years
            </p>

            <p
              className="
                mt-1
                whitespace-nowrap
                text-[6.5px]
                leading-snug
                text-dark/70
                sm:mt-1.5
                sm:text-[11px]
                md:mt-2
                md:text-[13px]
              "
            >
              of Textile Industry Experience
            </p>
          </div>

          {/* =================================
              BOTTOM RIGHT — MILLS SERVICED
          ================================== */}
          <div
            className="
              absolute
              bottom-2.5
              right-2.5
              flex
              max-w-[calc(100%-20px)]
              items-center
              gap-1.5
              rounded-[10px]
              bg-white
              px-2
              py-1.5
              shadow-[0_8px_20px_-8px_rgba(0,0,0,0.3)]
              sm:bottom-6
              sm:right-6
              sm:gap-2.5
              sm:rounded-[18px]
              sm:px-4
              sm:py-3
              md:bottom-10
              md:right-12
              md:gap-3
              md:rounded-[22px]
              md:px-5
              md:py-4
            "
          >
            {/* OVERLAPPING CIRCLES */}
            <div className="flex shrink-0 items-center">
              <span
                className="
                  relative
                  z-30
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white
                  bg-dark-2
                  text-[5px]
                  font-medium
                  text-white
                  sm:h-7
                  sm:w-7
                  sm:text-[8px]
                  md:h-8
                  md:w-8
                  md:border-2
                  md:text-[9px]
                "
              >
                GR
              </span>

              <span
                className="
                  relative
                  z-20
                  -ml-1
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white
                  bg-dark-2
                  text-[5px]
                  font-medium
                  text-white
                  sm:h-7
                  sm:w-7
                  sm:text-[8px]
                  md:-ml-2
                  md:h-8
                  md:w-8
                  md:border-2
                  md:text-[9px]
                "
              >
                TX
              </span>

              <span
                className="
                  relative
                  z-10
                  -ml-1
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white
                  bg-dark-2
                  text-[5px]
                  font-medium
                  text-white
                  sm:h-7
                  sm:w-7
                  sm:text-[8px]
                  md:-ml-2
                  md:h-8
                  md:w-8
                  md:border-2
                  md:text-[9px]
                "
              >
                CR
              </span>
            </div>

            {/* TEXT */}
            <div className="min-w-0 text-left">
              <p
                className="
                  whitespace-nowrap
                  text-[6.5px]
                  font-semibold
                  leading-none
                  text-dark
                  sm:text-[11px]
                  md:text-[14px]
                "
              >
                Mills serviced &amp; supported
              </p>

              <div
                className="
                  mt-1
                  flex
                  items-center
                  gap-1
                  sm:mt-1.5
                "
              >
                <UsersRound
                  size={8}
                  className="
                    shrink-0
                    text-dark/45
                    sm:h-[11px]
                    sm:w-[11px]
                    md:h-[13px]
                    md:w-[13px]
                  "
                  strokeWidth={1.5}
                />

                <p
                  className="
                    whitespace-nowrap
                    text-[5.5px]
                    leading-none
                    text-dark/45
                    sm:text-[9px]
                    md:text-[12px]
                  "
                >
                  across the World
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}