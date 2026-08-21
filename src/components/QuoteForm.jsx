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
import emailjs from '@emailjs/browser';

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
  const [sending, setSending] = useState(false);
  const [serviceError, setServiceError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const update = (key) => (e) => {
    setForm((f) => ({
      ...f,
      [key]: e.target.value,
    }));
  };

  const handlePhoneChange = (e) => {
    // Allow numbers only and maximum 10 digits
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);

    setForm((f) => ({
      ...f,
      phone: value,
    }));

    // Clear phone error while typing
    if (phoneError) {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (sending) return;

    // Validate service
    if (!form.service) {
      setServiceError('Please select a requirement.');
      return;
    }

    // Validate phone number
    if (form.phone.length !== 10) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      return;
    }

    setServiceError('');
    setPhoneError('');
    setSending(true);
    setSubmitted(false);

    try {
      await emailjs.send(
        'service_gs3mc1a',
        'template_lsp1z6p',
        {
          name: form.name,
          company: form.company,
          phone: form.phone,
          email: form.email,
          service: form.service,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        'xuIxKbSAIHCmNcCkA'
      );

      setSubmitted(true);

      setForm({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 2500);
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Unable to send enquiry. Please try again.');
    } finally {
      setSending(false);
    }
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
      {/* TITLE */}

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

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="mt-7 flex flex-col gap-4"
      >
        {/* NAME + COMPANY */}

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

        {/* PHONE + EMAIL */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="w-full">
            <label className={boxClass}>
              <input
                required
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Phone / Whatsapp *"
                value={form.phone}
                onChange={handlePhoneChange}
                className={inputClass}
              />

              <Phone
                size={17}
                strokeWidth={1.8}
                className="text-cream/60 shrink-0"
              />
            </label>

            {phoneError && (
              <p className="mt-1.5 px-1 text-[12px] text-red-300">
                {phoneError}
              </p>
            )}
          </div>

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

        {/* SERVICE */}

        <div>
          <CustomSelect
            label="Service Required *"
            placeholder="Select a service"
            value={form.service}
            onChange={(val) => {
              setForm((f) => ({
                ...f,
                service: val,
              }));

              setServiceError('');
            }}
            options={SERVICES}
          />

          {serviceError && (
            <p className="mt-1.5 px-1 text-[12px] text-red-300">
              {serviceError}
            </p>
          )}
        </div>

        {/* MESSAGE - OPTIONAL */}

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
              Message{' '}
              <span className="text-cream/40">
                (Optional)
              </span>
            </p>

            <textarea
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

        {/* SEND BUTTON */}

        <button
          type="submit"
          disabled={sending}
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
            transition-all
            duration-300
            ease-out

            hover:bg-dark-2
            hover:text-cream
            hover:shadow-[0_8px_25px_-10px_rgba(247,246,242,0.5)]

            active:scale-[0.98]

            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          {sending
            ? 'Sending...'
            : submitted
              ? 'Enquiry Sent ✓'
              : 'Send Enquiry'}

          {!sending && (
            <ArrowRight
              size={16}
              strokeWidth={1.8}
            />
          )}
        </button>

        {/* PRIVACY MESSAGE */}

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