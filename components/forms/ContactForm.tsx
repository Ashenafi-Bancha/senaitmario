'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { ENQUIRY_TYPES } from '@/lib/enquiry-types';

type FieldErrors = Partial<Record<string, string>>;
type Status = 'idle' | 'sending' | 'success' | 'error' | 'rateLimited';

export function ContactForm() {
  const t = useTranslations('contact.form');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // The Zod schema loads on first submit, keeping it out of the page's
    // initial JS (the /contact route was over the 140 KB gzip budget with the
    // schema inlined). Validation behaviour is identical.
    const { contactSchema } = await import('@/lib/contact-schema');
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = String(issue.path[0] ?? '');
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus('idle');
      return;
    }

    setErrors({});
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else if (response.status === 429) {
        setStatus('rateLimited');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  // 16px text keeps iOS from zooming on focus; min-height keeps every control
  // above the 44px touch target.
  const inputClasses =
    'mt-1 min-h-11 w-full border border-line bg-ground px-3 py-2.5 text-base text-ink placeholder:text-muted';
  const labelClasses =
    'block font-utility text-xs uppercase tracking-widest text-muted';

  function fieldError(field: string) {
    const key = errors[field];
    if (!key) return null;
    return (
      <p role="alert" className="mt-1 text-sm text-accent">
        {t(`errors.${key}`)}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-xl">
      <div className="grid gap-6">
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            {t('name')}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            className={inputClasses}
          />
          {fieldError('name')}
        </div>

        <div>
          <label htmlFor="contact-organisation" className={labelClasses}>
            {t('organisation')}
          </label>
          <input
            id="contact-organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            className={inputClasses}
          />
          {fieldError('organisation')}
        </div>

        <div>
          <label htmlFor="contact-enquiry-type" className={labelClasses}>
            {t('enquiryType')}
          </label>
          <select
            id="contact-enquiry-type"
            name="enquiryType"
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              —
            </option>
            {ENQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {t(`enquiryTypes.${type}`)}
              </option>
            ))}
          </select>
          {fieldError('enquiryType')}
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClasses}>
            {t('message')}
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={7}
            className={inputClasses}
          />
          {fieldError('message')}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex min-h-11 cursor-pointer items-center border border-ink bg-ink px-6 font-utility text-xs uppercase tracking-widest text-ground transition-opacity hover:opacity-85 disabled:opacity-50"
          >
            {status === 'sending' ? t('sending') : t('submit')}
          </button>
          <p aria-live="polite" className="text-sm">
            {status === 'success' ? (
              <span>{t('success')}</span>
            ) : status === 'rateLimited' ? (
              <span className="text-accent">{t('errorRateLimited')}</span>
            ) : status === 'error' ? (
              <span className="text-accent">{t('errorGeneric')}</span>
            ) : null}
          </p>
        </div>
      </div>
    </form>
  );
}
