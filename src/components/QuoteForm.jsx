import { useState } from 'react';
import {
  User,
  Building2,
  Phone,
  Mail,
  Pencil,
  ArrowRight,
  Lock,
} from 'lucide-react';

import CustomSelect from './CustomSelect.jsx';

const SERVICES = [
  'Machinery Erection',
  'Breakdown Repair',
  'Plant Shifting',
  'Quality Solutions',
  'Emergency Service',
  'Technical Consultation',
];

const boxClass =
  'w-full rounded-xl bg-white/[0.04] border border-white/20 text-cream text-[14px] px-4 py-3.5 flex items-center justify-between gap-3';

const inputClass =
  'w-full min-w-0 bg-transparent outline-none placeholder:text-cream/45 text-cream';

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => {
    setForm((f) => ({
      ...f,
      [key]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.service) return;

    setSubmitted(true);
  };

  return (
    <div
      className="
        w-full
        rounded-[28px]
        bg-dark
        px-5
        sm:px-6
        md:px-9
        py-7
        md:py-10
      "
    >
      {/* =========================
          TITLE
      ========================== */}

      <h3
        className="
          text-[20px]
          md:text-[22px]
          font-extrabold
          text-cream
          text-center
        "
      >
        Request a Quote
      </h3>

      <p
        className="
          mt-1.5
          text-[13px]
          md:text-[13.5px]
          text-cream/55
          text-center
        "
      >
        Fill the details and our team will get back to you shortly.
      </p>

      {/* =========================
          FORM
      ========================== */}

      <form
        onSubmit={handleSubmit}
        className="mt-7 flex flex-col gap-4"
      >
        {/* =========================
            NAME + COMPANY
        ========================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className={boxClass}>
            <input
              required
              type="text"
              placeholder="Your Name *"
              value={form.name}
              onChange={update('name')}
              className={inputClass}
            />

            <User
              size={17}
              strokeWidth={1.8}
              className="text-cream/60 shrink-0"
            />
          </label>

          <label className={boxClass}>
            <input
              required
              type="text"
              placeholder="Company / Textile Mill *"
              value={form.company}
              onChange={update('company')}
              className={inputClass}
            />

            <Building2
              size={17}
              strokeWidth={1.8}
              className="text-cream/60 shrink-0"
            />
          </label>
        </div>

        {/* =========================
            PHONE + EMAIL
        ========================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className={boxClass}>
            <input
              required
              type="tel"
              placeholder="Phone / Whatsapp *"
              value={form.phone}
              onChange={update('phone')}
              className={inputClass}
            />

            <Phone
              size={17}
              strokeWidth={1.8}
              className="text-cream/60 shrink-0"
            />
          </label>

          <label className={boxClass}>
            <input
              required
              type="email"
              placeholder="Email *"
              value={form.email}
              onChange={update('email')}
              className={inputClass}
            />

            <Mail
              size={17}
              strokeWidth={1.8}
              className="text-cream/60 shrink-0"
            />
          </label>
        </div>

        {/* =========================
            SERVICE SELECT
        ========================== */}

        <CustomSelect
          label="Service Required *"
          placeholder="Select a service"
          value={form.service}
          onChange={(val) =>
            setForm((f) => ({
              ...f,
              service: val,
            }))
          }
          options={SERVICES}
        />

        {/* =========================
            MESSAGE
        ========================== */}

        <label
          className="
            w-full
            rounded-xl
            bg-white/[0.04]
            border
            border-white/20
            text-cream
            text-[14px]
            px-4
            py-3.5
            flex
            items-start
            justify-between
            gap-3
          "
        >
          <div className="w-full min-w-0">
            <p className="text-[12px] text-cream/55">
              Message *
            </p>

            <textarea
              required
              rows={2}
              placeholder="Tell us about your requirement..."
              value={form.message}
              onChange={update('message')}
              className="
                w-full
                bg-transparent
                outline-none
                placeholder:text-cream/45
                resize-none
                mt-0.5
              "
            />
          </div>

          <Pencil
            size={16}
            strokeWidth={1.8}
            className="text-cream/60 shrink-0 mt-0.5"
          />
        </label>

        {/* =========================
            SEND BUTTON
        ========================== */}

        <button
          type="submit"
          className="
            mt-1
            w-full
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-cream
            text-dark
            border
            border-cream
            font-semibold
            text-[14px]
            py-4
            hover:bg-dark-2
            hover:text-cream
            transition-colors
            duration-300
          "
        >
          {submitted ? 'Enquiry Sent' : 'Send Enquiry'}

          <ArrowRight
            size={16}
            strokeWidth={1.8}
          />
        </button>

        {/* =========================
            PRIVACY MESSAGE
        ========================== */}

        <div
          className="
            w-full
            flex
            flex-row
            items-center
            justify-center
            gap-1.5
            text-[10.5px]
            min-[380px]:text-[11.5px]
            sm:text-[12px]
            text-cream/45
            text-center
            whitespace-nowrap
            overflow-hidden
          "
        >
          <Lock
            size={11}
            strokeWidth={1.8}
            className="shrink-0"
          />

          <span className="whitespace-nowrap">
            We respect your privacy. Your information is safe with us.
          </span>
        </div>
      </form>
    </div>
  );
}