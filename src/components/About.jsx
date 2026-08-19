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
    <section id="about" className="py-10 px-5 md:px-8">
  <div className="max-w-[1360px] mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
   <div className="rounded-[28px] overflow-hidden shadow-[0_20px_50px_-25px_rgba(18,51,48,0.4)]">
  <img
    src={aboutImg}
    alt="Technician servicing textile mill machinery"
    className="w-full h-auto block scale-[1.06]"
  />
</div>

        <div>
          <h2 className="text-[26px] md:text-[32px] font-extrabold text-dark leading-tight">
            Why Textile Mills
            <br />
            Trust GRG Tex Care
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted max-w-[520px]">
            With years of hands-on experience in textile machinery erection and
            service, GRG Tex Care helps mills maintain reliable machinery
            performance, reduce downtime, and keep production running efficiently.
          </p>

          <ul className="mt-7 flex flex-col gap-5">
            {POINTS.map((p) => (
              <li key={p.title} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-accent-green" size={20} />
                <div>
                  <p className="font-semibold text-[15px] text-ink">{p.title}</p>
                  <p className="text-[14px] text-muted mt-0.5">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
