import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('Sending...');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        {
          publicKey: 'YOUR_PUBLIC_KEY',
        }
      );

      setStatus('Enquiry sent successfully!');

      setForm({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-[28px] bg-white border border-dark/10 p-6 md:p-8 shadow-[0_20px_60px_-25px_rgba(18,51,48,0.25)]"
    >

      <h3 className="text-[24px] font-extrabold text-dark">
        Send an Enquiry
      </h3>

      <p className="mt-2 text-[13.5px] text-muted">
        Tell us what you need and our team will get back to you.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full rounded-xl border border-dark/15 px-4 py-3 text-[14px] outline-none focus:border-dark"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="w-full rounded-xl border border-dark/15 px-4 py-3 text-[14px] outline-none focus:border-dark"
        />

        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full rounded-xl border border-dark/15 px-4 py-3 text-[14px] outline-none focus:border-dark"
        />

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-dark/15 px-4 py-3 text-[14px] outline-none focus:border-dark bg-white"
        >
          <option value="">Select Service</option>
          <option value="Machinery Erection">
            Machinery Erection
          </option>
          <option value="Commissioning">
            Commissioning
          </option>
          <option value="Maintenance & Support">
            Maintenance & Support
          </option>
          <option value="Spare Parts">
            Spare Parts
          </option>
        </select>

      </div>

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        rows="5"
        required
        className="mt-4 w-full rounded-xl border border-dark/15 px-4 py-3 text-[14px] outline-none focus:border-dark resize-none"
      />

      <button
        type="submit"
        disabled={status === 'Sending...'}
        className="
          mt-5
          w-full
          rounded-full
          bg-dark-2
          text-cream
          py-3
          text-[14px]
          font-semibold
          transition-all
          duration-300
          hover:bg-dark
          disabled:opacity-60
          disabled:cursor-not-allowed
        "
      >
        {status === 'Sending...' ? 'Sending...' : 'Send Enquiry'}
      </button>

      {status && (
        <p
          className="
            mt-4
            text-center
            text-[13px]
            text-dark/60
          "
        >
          {status}
        </p>
      )}

    </form>
  );
}