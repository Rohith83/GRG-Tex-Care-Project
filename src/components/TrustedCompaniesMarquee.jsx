const COMPANIES = [
  'KPR Mills',
  'Avaneetha',
  'Alok',
  'Premier Mills',
  'Himansinga Lines',
  'Sanathan Textiles',
  'Solochena Cotton Mills',
  'Janarthan Textiles',
  'Sintex',
  'Welspun',
  'Shahi Exports',
  'Silvasa',
  'Admiral Group of Mills',
  'Sree Siddharth Cotex PVT LTD',
  'Sitaram Spinners',
];

const CompanyItems = () => (
  <>
    {COMPANIES.map((name, index) => (
      <span
        key={`${name}-${index}`}
        className="
          shrink-0
          whitespace-nowrap
          text-[13px]
          md:text-[14px]
          font-semibold
          text-ink/35
        "
      >
        {name}
      </span>
    ))}
  </>
);

const CompanySet = () => (
  <div className="flex shrink-0 items-center gap-9 pr-9">
    <CompanyItems />
  </div>
);

export default function TrustedCompaniesMarquee() {
  return (
    <section className="pb-10 px-5 md:px-8">
      <div className="max-w-[1360px] mx-auto text-center">

        <p className="text-[12px] font-medium text-muted mb-4">
          Trusted by Leading Textile Mills
        </p>

        <div
          className="
            relative
            w-full
            overflow-hidden
            [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
            [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]
          "
        >
          <div
            className="
              flex
              w-max
              companies-marquee
              will-change-transform
            "
          >
            {/* SET 1 */}
            <CompanySet />

            {/* SET 2 — exact duplicate */}
            <CompanySet />
          </div>
        </div>

      </div>
    </section>
  );
}