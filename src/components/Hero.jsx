import { UsersRound } from 'lucide-react';
import heroImg from '../assets/hero-image.png';

export default function Hero({ onExplore }) {
  return (
    <section id="home" className="pt-14 pb-16 px-5 md:px-8">
      <div className="max-w-[1625px] mx-auto flex flex-col items-center text-center">

        <span className="inline-block rounded-full border border-dark/15 bg-white/60 text-[13px] font-medium text-ink/70 px-4 py-1.5 mb-6">
          Est. 2011 · Erection &amp; Service
        </span>

        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] leading-[1.15] font-extrabold text-dark max-w-[720px]">
          Textile Machinery,
          <br />
          Erection &amp; Service You Can Trust.
        </h1>

        <p className="mt-5 max-w-[620px] text-[15px] md:text-[16px] leading-relaxed text-muted">
          From installation to ongoing maintenance, we keep every kind of textile
          machine running at its best. Trusted by Mills and Manufacturers since 2011.
        </p>

        <div className="mt-7 flex items-center gap-3">
          <a
            href="#services"
            className="
              rounded-full
              bg-dark-2
              text-cream
              border border-dark-2
              text-[14px]
              font-semibold
              px-6 py-3
              cursor-pointer
            "
          >
            Learn More
          </a>

          <button
            onClick={onExplore}
            className="
              rounded-full
              border border-dark-2
              bg-white
              text-dark
              text-[14px]
              font-semibold
              px-6 py-3
              cursor-pointer
            "
          >
            Explore Services
          </button>
        </div>

        {/* HERO IMAGE */}
        <div
          className="
            relative
            mt-10
            w-full
            overflow-hidden
            rounded-[42px]
            shadow-[0_20px_60px_-20px_rgba(18,51,48,0.35)]
          "
        >
          <img
  src={heroImg}
  alt="Textile ring frame machinery in operation"
  className="
    w-full
    h-[250px]
    sm:h-[350px]
    md:h-[430px]
    lg:h-[500px]
    object-cover
    block
  "
/>

          {/* TOP LEFT — EXPERIENCE */}
          <div
  className="
    absolute
    top-3
    left-3
    sm:top-8
    sm:left-8
    md:top-6
    md:left-12

    w-[145px]
    sm:w-[250px]

    rounded-[14px]
    sm:rounded-[22px]

    bg-white

    px-2
    py-2
    sm:px-4
    sm:py-4

    shadow-[0_8px_20px_-8px_rgba(0,0,0,0.3)]
    text-center
  "
>
  <p
    className="
      text-dark
      font-medium
      text-[13px]
      sm:text-[20px]
      leading-none
    "
  >
    15+ Years
  </p>

  <p
    className="
      text-dark/70
      text-[8px]
      sm:text-[13px]
      mt-1
      sm:mt-2
      leading-snug
      whitespace-nowrap
    "
  >
    of Textile Industry Experience
  </p>
</div>

          {/* BOTTOM RIGHT — MILLS SERVICED */}
         {/* BOTTOM RIGHT — MILLS SERVICED */}
<div
  className="
    absolute
    bottom-3
    right-3
    sm:bottom-8
    sm:right-8
    md:bottom-10
    md:right-12

    flex
    items-center

    gap-2
    sm:gap-3

    rounded-[14px]
    sm:rounded-[22px]

    bg-white

    px-2.5
    py-2
    sm:px-5
    sm:py-4

    shadow-[0_8px_20px_-8px_rgba(0,0,0,0.3)]
  "
>
  {/* Overlapping circles */}
  <div className="flex items-center shrink-0">
    <span
      className="
        relative z-30
        w-6 h-6
        sm:w-8 sm:h-8
        rounded-full
        bg-dark-2
        border-[1.5px] sm:border-2 border-white
        flex items-center justify-center
        text-white
        text-[6px]
        sm:text-[9px]
        font-medium
      "
    >
      GR
    </span>

    <span
      className="
        relative z-20
        -ml-1.5
        sm:-ml-2
        w-6 h-6
        sm:w-8 sm:h-8
        rounded-full
        bg-dark-2
        border-[1.5px] sm:border-2 border-white
        flex items-center justify-center
        text-white
        text-[6px]
        sm:text-[9px]
        font-medium
      "
    >
      TX
    </span>

    <span
      className="
        relative z-10
        -ml-1.5
        sm:-ml-2
        w-6 h-6
        sm:w-8 sm:h-8
        rounded-full
        bg-dark-2
        border-[1.5px] sm:border-2 border-white
        flex items-center justify-center
        text-white
        text-[6px]
        sm:text-[9px]
        font-medium
      "
    >
      CR
    </span>
  </div>

  <div className="text-left">
    <p
      className="
        text-dark
        text-[8px]
        sm:text-[14px]
        font-semibold
        leading-none
        whitespace-nowrap
      "
    >
      Mills serviced &amp; supported
    </p>

    <div className="flex items-center gap-1 mt-1 sm:mt-1.5">
      <UsersRound
        size={9}
        className="text-dark/45 shrink-0 sm:w-[13px] sm:h-[13px]"
        strokeWidth={1.5}
      />

      <p className="text-dark/45 text-[7px] sm:text-[12px] leading-none">
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