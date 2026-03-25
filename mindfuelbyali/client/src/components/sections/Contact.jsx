import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import axios from 'axios';
import { LoaderCircle, Mail, MessageCircle, Clock3, Globe } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '../ui/Button';

const schema = yup.object({
  name: yup.string().min(2, 'Name must be at least 2 characters').required('Full name is required'),
  email: yup.string().email('Enter a valid email address').required('Email is required'),
  service: yup.string().required('Service interest is required'),
  message: yup.string().min(20, 'Message must be at least 20 characters').required('Message is required'),
  budget: yup.string().optional()
});

const serviceOptions = [
  'Custom ML Model',
  'Deep Learning / Neural Networks',
  'Computer Vision',
  'Predictive Analytics',
  'BI Dashboard',
  'Data Pipeline / ETL',
  'Full AI Pipeline',
  'Other'
];

const budgetOptions = ['Under $1,000', '$1,000 - $3,000', '$3,000 - $10,000', 'Above $10,000', "Let's discuss"];

/**
 * Contact section with validated form and backend submission.
 * @returns {JSX.Element}
 */
function Contact() {
  const [submitState, setSubmitState] = useState('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { name: '', email: '', service: '', budget: '', message: '' }
  });

  const fieldValues = watch();
  const apiBase = useMemo(() => {
    if (import.meta.env.VITE_API_URL) {
      return String(import.meta.env.VITE_API_URL).replace(/\/$/, '');
    }

    // Use local Express server in dev, same-origin serverless function in production.
    return import.meta.env.DEV ? 'http://localhost:5000' : '';
  }, []);

  const onSubmit = async (values) => {
    setSubmitState('idle');
    try {
      await axios.post(`${apiBase}/api/contact`, values, {
        headers: { 'Content-Type': 'application/json' }
      });
      setSubmitState('success');
      reset();
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <section id="contact" className="section-spacing bg-bg-primary">
      <div className="container-site grid gap-8 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-3xl font-bold leading-tight text-text-primary sm:text-4xl">Let's Build Something Useful</h2>
          <p className="mt-5 max-w-lg text-base leading-[1.75] text-text-secondary">
            Tell us about your data challenge or AI idea. You will work directly with both founders, and we will reply within 24 hours with a practical roadmap.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-text-secondary">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-indigo-light" />
              <a
                href="mailto:mindfuelbyali@gmail.com"
                className="underline decoration-border underline-offset-4 transition-colors hover:text-text-primary"
                aria-label="Email MindFuelByAli"
              >
                mindfuelbyali@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3"><Globe className="mt-0.5 h-4 w-4 shrink-0 text-indigo-light" /> Remote - Available Worldwide</li>
            <li className="flex items-start gap-3"><Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-light" /> We respond within 24 hours</li>
            <li className="flex items-start gap-3"><MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-indigo-light" /> Free 30-min strategy call available</li>
          </ul>

          <div className="mt-8 inline-flex rounded-full border border-success/20 bg-success/10 px-4 py-2 text-xs font-display font-semibold uppercase tracking-wide text-success">
            Founder-led delivery with transparent weekly updates
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TechPill label="Python" />
            <TechPill label="TensorFlow" />
            <TechPill label="Power BI" />
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-card border border-border bg-bg-card p-5 shadow-card sm:p-8"
          noValidate
        >
          {[
            { name: 'name', label: 'Full Name', type: 'text', required: true },
            { name: 'email', label: 'Email Address', type: 'email', required: true }
          ].map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`form-wrapper relative ${fieldValues[field.name] ? 'filled' : ''} mb-5`}
            >
              <input
                id={field.name}
                type={field.type}
                {...register(field.name)}
                className={`form-field ${errors[field.name] ? 'error' : ''}`}
                aria-label={field.label}
                required={field.required}
                placeholder={field.label}
              />
              <label htmlFor={field.name} className="floating-label">{field.label}</label>
              {errors[field.name] ? <p className="mt-1 text-xs text-red-400">{errors[field.name]?.message}</p> : null}
            </motion.div>
          ))}

          <FloatingSelect
            name="service"
            label="Service Interest"
            register={register}
            options={serviceOptions}
            error={errors.service?.message}
            value={fieldValues.service}
          />

          <FloatingSelect
            name="budget"
            label="Budget Range"
            register={register}
            options={budgetOptions}
            error={errors.budget?.message}
            value={fieldValues.budget}
          />

          <div className={`form-wrapper relative mb-5 ${fieldValues.message ? 'filled' : ''}`}>
            <textarea
              id="message"
              rows="5"
              {...register('message')}
              className={`form-field resize-none ${errors.message ? 'error' : ''}`}
              aria-label="Message"
              required
              placeholder="Message"
            />
            <label htmlFor="message" className="floating-label">Message</label>
            {errors.message ? <p className="mt-1 text-xs text-red-400">{errors.message?.message}</p> : null}
          </div>

          <Button type="submit" className="w-full py-4" loading={isSubmitting} disabled={isSubmitting} ariaLabel="Send message">
            Send Message →
          </Button>

          {isSubmitting ? (
            <p className="mt-3 flex items-center gap-2 text-sm text-text-secondary">
              <LoaderCircle className="h-4 w-4 animate-spin" /> Sending...
            </p>
          ) : null}

          {submitState === 'success' ? (
            <p className="mt-3 rounded-md border border-success/30 bg-success/10 px-3 py-2 text-sm font-medium text-success">Message Sent! We'll be in touch soon.</p>
          ) : null}
          {submitState === 'error' ? (
            <p className="mt-3 rounded-md border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400">Something went wrong. Please try again.</p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}

/**
 * Select field with floating label styles.
 * @param {{name: string, label: string, register: ReturnType<typeof useForm>['register'], options: string[], error?: string, value?: string}} props
 * @returns {JSX.Element}
 */
function FloatingSelect({ name, label, register, options, error, value }) {
  return (
    <div className={`form-wrapper relative mb-5 ${value ? 'filled' : ''}`}>
      <select
        id={name}
        {...register(name)}
        className={`form-field ${error ? 'error' : ''}`}
        aria-label={label}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor={name} className="floating-label">{label}</label>
      {error ? <p className="mt-1 text-xs text-red-400">{error}</p> : null}
    </div>
  );
}

/**
 * Small technology chip.
 * @param {{label: string}} props
 * @returns {JSX.Element}
 */
function TechPill({ label }) {
  return (
    <span className="rounded-full border border-border bg-white/6 px-3 py-1 text-xs font-display font-semibold text-text-muted">
      {label}
    </span>
  );
}

export default Contact;
