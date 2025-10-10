import { Check } from 'lucide-react';
import Section from './Section';

export default function About() {
  const features = [
    'Comprehensive Lead Outreach',
    'Quality Appointment Setting',
    'Follow-Up & Show-Up Optimization',
  ];

  return (
    <Section background="gray">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-8">Who We Are</h2>

        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
          We're a dedicated team focused on one mission: filling your calendar with qualified appointments so you can close more deals.
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-16 leading-relaxed">
          Your success is our priority. Through exceptional service, transparent communication, and meticulous attention to detail, we transform your investment into measurable results.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center text-center p-6 bg-white rounded-lg border-2 border-brand-borderGray group hover:shadow-xl hover:border-brand-mediumGray transition-all duration-300 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-mediumGray via-brand-darkGray to-brand-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="w-12 h-12 bg-brand-sage rounded-lg flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-brand-black leading-tight">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
