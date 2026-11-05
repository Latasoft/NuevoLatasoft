'use client';

// Formulario de contacto. Solo se muestra en la versión en inglés (lo pidió Nicolás).
import { useState } from 'react';

// Dirección a la que se envían los datos del formulario.
// PENDIENTE: definir con Latasoft el correo de destino y el servicio de envío.
const FORM_ENDPOINT = '';

const countries = [
  'Chile',
  'Mexico',
  'Spain',
  'United States (Utah)',
  'United States (Arizona)',
  'United States (Nevada)',
  'United States (California)',
];

const services = [
  'Web Care Lite',
  'Integrations',
  'Web Care Pro',
  'Smart Sales System',
  'Smart Sales Assessment',
  'Digital Lead Generation System',
  'Corporate Website Pro',
  'Self-Managed Website',
  'Starter Online Store',
  'Ecommerce Growth',
  'App MVP',
  'Android/iOS Mobile App',
];

const budgets = ['$100 - $500', '$500 - $1K', '$1K - $2K', '$2K - $3K', '$3K - $5K', '+$5K', '+$10K'];

const inputClass =
  'w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#5F3ED9]';
const labelClass = 'block text-left text-base font-semibold text-gray-800 mb-2';

const ContactFormEN = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.getAll('service').length === 0) {
      setStatus('noService');
      return;
    }

    if (!FORM_ENDPOINT) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      setStatus('sent');
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="bg-white bg-opacity-90 rounded-md p-8 text-gray-800 text-center">
        <h4 className="text-2xl font-bold font-RobotoCondensed mb-2">Thank you!</h4>
        <p className="text-lg">We received your message and will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white bg-opacity-90 rounded-md p-6 md:p-10 text-left grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div>
        <label htmlFor="cf-name" className={labelClass}>Name *</label>
        <input id="cf-name" name="name" type="text" required autoComplete="name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="cf-company" className={labelClass}>Company</label>
        <input id="cf-company" name="company" type="text" autoComplete="organization" className={inputClass} />
      </div>
      <div>
        <label htmlFor="cf-email" className={labelClass}>Email *</label>
        <input id="cf-email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>
      <div>
        <label htmlFor="cf-phone" className={labelClass}>Phone number</label>
        <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
      </div>
      <div>
        <label htmlFor="cf-country" className={labelClass}>Country *</label>
        <select id="cf-country" name="country" required defaultValue="" className={inputClass}>
          <option value="" disabled>Select a country</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="cf-budget" className={labelClass}>Budget (USD) *</label>
        <select id="cf-budget" name="budget" required defaultValue="" className={inputClass}>
          <option value="" disabled>Select a range</option>
          {budgets.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <fieldset className="md:col-span-2">
        <legend className={labelClass}>Service you need *</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 mt-1">
          {services.map((s, i) => (
            <label key={s} htmlFor={`cf-service-${i}`} className="flex items-center gap-3 text-gray-800 cursor-pointer">
              <input id={`cf-service-${i}`} type="checkbox" name="service" value={s} className="h-5 w-5 accent-[#5F3ED9]" />
              <span>{s}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="md:col-span-2">
        {status === 'noService' && (
          <p className="mb-4 text-red-700 font-medium">Please select at least one service.</p>
        )}
        {status === 'error' && (
          <p className="mb-4 text-red-700 font-medium">
            We couldn&apos;t send your message. Please try again or write to contacto@latasoft.cl.
          </p>
        )}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full md:w-auto bg-[#5F3ED9] hover:bg-[#4C34B3] disabled:opacity-60 text-white font-semibold py-3 px-12 rounded-full text-lg transition-all duration-300"
        >
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  );
};

export default ContactFormEN;
