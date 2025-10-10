import { Phone, UserCheck, ClipboardCheck, Target, TrendingUp } from 'lucide-react';
import Section from './Section';
import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      icon: Phone,
      title: 'Complete Lead Outreach',
      description: 'Professional contact with all your leads—fresh, aged, or follow-up—using proven scripts designed for life insurance and mortgage protection.',
    },
    {
      icon: UserCheck,
      title: 'Quality Appointment Setting',
      description: 'Secure appointments with qualified prospects ready to discuss their insurance needs.',
    },
    {
      icon: ClipboardCheck,
      title: 'Follow-Up Management',
      description: 'Consistent sequences that keep prospects engaged and ensure appointments are confirmed.',
    },
    {
      icon: Target,
      title: 'Show-Up Optimization',
      description: 'Strategic reminders and engagement tactics that maximize appointment attendance rates.',
    },
    {
      icon: TrendingUp,
      title: 'Goal Achievement Support',
      description: 'Dedicated assistance to help you hit your appointment and sales targets week after week.',
    },
  ];

  return (
    <Section id="services" background="white">
      <div className="text-center mb-16">
        <h2 className="mb-8">What We Do for Life Insurance Agents</h2>
        <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
          From initial outreach to confirmed appointments, we handle the entire prospecting pipeline.
        </p>
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

      <div className="max-w-3xl mx-auto mt-16 p-8 bg-brand-lightTeal border-l-8 border-brand-black rounded-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-sage opacity-20 transform rotate-45 translate-x-12 -translate-y-12"></div>
        <p className="text-brand-black text-lg font-semibold relative z-10">
          Every virtual assistant is trained on proven scripts and workflows tailored specifically for the life insurance industry.
        </p>
      </div>
    </Section>
  );
}
