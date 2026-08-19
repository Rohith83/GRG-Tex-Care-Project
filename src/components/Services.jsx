import { Wrench, Hammer, Truck, ShieldCheck, Siren, Headset } from 'lucide-react';

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
    <section id="services" className="py-10 px-5 md:px-8">
      <div className="max-w-[1360px] mx-auto rounded-[32px] bg-dark px-6 py-12 md:px-14 md:py-16">
        <div className="text-center max-w-[620px] mx-auto">
          <p className="text-[12px] font-bold tracking-[0.14em] uppercase text-[#d9a65a] mb-3">
            GRG Tex Care
          </p>
          <h2 className="text-[24px] md:text-[30px] font-extrabold text-cream leading-tight">
            Reliable Service
            <br />
            for Your Textile Machinery Needs
          </h2>
          <p className="mt-4 text-[14px] md:text-[15px] text-cream/60 leading-relaxed">
            Professional machinery erection, commissioning, maintenance, and
            technical support for textile mills.
          </p>
        </div>

        <div className="mt-11 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-white/[0.06] border border-white/10 px-6 py-7 hover:bg-white/[0.09] transition-colors"
            >
              <Icon className="text-cream/80" size={22} strokeWidth={1.75} />
              <p className="mt-4 font-semibold text-[15px] text-cream">{title}</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-cream/55">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
