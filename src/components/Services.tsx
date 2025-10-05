import { Phone, UserCheck, ClipboardCheck, Target, TrendingUp } from 'lucide-react';
import Section from './Section';
import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      icon: Phone,
      title: 'Contacting Fresh Leads',
      description: 'Our VAs reach out to your fresh leads with professional, proven scripts designed for life insurance and mortgage protection.',
    },
    {
      icon: UserCheck,
      title: 'Booking Quality Appointments',
      description: 'We secure high-quality appointments with qualified prospects ready to discuss their insurance needs.',
    },
    {
      icon: ClipboardCheck,
      title: 'Follow-Up Management',
      description: 'Consistent follow-up sequences ensure prospects stay engaged and appointments are confirmed.',
    },
    {
      icon: Target,
      title: 'Ensuring Client Show-Up',
      description: 'Strategic reminders and engagement tactics to maximize appointment attendance rates.',
    },
    {
      icon: TrendingUp,
      title: 'Weekly Goal Achievement',
      description: 'Our team is dedicated to helping you hit your appointment and sales goals every single week.',
    },
  ];

  return (
    <Section id="services" background="white">
      <div className="text-center mb-16">
        <h2 className="mb-6">What We Do for Life Insurance Agents</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto p-6 bg-brand-lightGray border-l-8 border-brand-black rounded-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-sage opacity-20 transform rotate-45 translate-x-12 -translate-y-12"></div>
        <p className="text-brand-black font-semibold relative z-10">
          Each VA is trained on proven appointment setting scripts and workflows specifically designed for the life insurance industry.
        </p>
      </div>
    </Section>
  );
}
