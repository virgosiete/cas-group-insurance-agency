import { useState, FormEvent } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import Section from './Section';
import Button from './Button';

interface ContactProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    businessType: string;
    message: string;
  }) => Promise<void>;
}

export default function Contact({ onSubmit }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await onSubmit(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', businessType: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" background="gray">
      <div className="text-center mb-16">
        <h2 className="mb-4">Let's Build Your Appointment Pipeline</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Book a call with our team and start scaling with a trained VA.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <div className="bg-white p-8 rounded-lg border-2 border-brand-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-sage opacity-10 transform rotate-45 translate-x-16 -translate-y-16"></div>
            <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-sage focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-sage focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Type
                </label>
                <select
                  id="businessType"
                  required
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-sage focus:outline-none transition-colors"
                >
                  <option value="">Select your business type</option>
                  <option value="life_insurance_agent">Life Insurance Agent</option>
                  <option value="insurance_agency_owner">Insurance Agency Owner</option>
                  <option value="mortgage_protection">Mortgage Protection Specialist</option>
                  <option value="insurance_broker">Insurance Broker</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your business and goals..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Sending...' : 'Book My Call'}
              </Button>

              {submitStatus === 'success' && (
                <p className="text-green-600 font-medium text-center">
                  Thank you! We'll be in touch soon.
                </p>
              )}

              {submitStatus === 'error' && (
                <p className="text-red-600 font-medium text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>

            </div>
            <div className="mt-8 pt-8 border-t-2 border-brand-lightGray space-y-4 relative z-10">
              <div className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 mr-3" />
                <a href="tel:+16789121094" className="hover:text-brand-sage font-semibold transition-colors">
                  +1 (678) 912-1094
                </a>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:info@casgrpupph.com" className="hover:text-brand-sage font-semibold transition-colors">
                  info@casgrpupph.com
                </a>
              </div>
              <div className="flex items-center text-gray-700">
                <MessageCircle className="w-5 h-5 mr-3" />
                <a href="https://wa.me/16789121094" target="_blank" rel="noopener noreferrer" className="hover:text-brand-sage font-semibold transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-8 rounded-lg border-2 border-brand-black h-full relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-2 bg-brand-sage"></div>
            <h3 className="text-2xl font-bold mb-6">Schedule a call</h3>
            <div className="relative overflow-hidden rounded-lg" style={{ minHeight: '600px' }}>
              <iframe
                src="https://calendly.com/cas-group/appointmentsettingservices"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a consultation with CAS Group"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
