import { Check, MessageCircle, Briefcase } from 'lucide-react';
import Section from './Section';
import Button from './Button';

export default function WhyChoose() {
  const reasons = [
    {
      icon: Check,
      title: 'Consistent Appointments',
      description: 'Daily outreach and booked calls.',
    },
    {
      icon: MessageCircle,
      title: 'Expert Communicators',
      description: 'Fluent English, trained in sales tone.',
    },
    {
      icon: Briefcase,
      title: 'Fully Managed Service',
      description: 'We handle training, supervision, and performance.',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section background="gray">
      <div className="text-center mb-16">
        <h2 className="mb-6">Why Businesses Trust CAS Group</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {reasons.map((reason, index) => (
          <div key={index} className="text-center relative group">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-0 bg-brand-sage group-hover:h-12 transition-all duration-300"></div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-black border-4 border-white text-white rounded-lg mb-6 shadow-lg group-hover:bg-brand-sage transition-all duration-300 group-hover:scale-110">
              <reason.icon className="w-10 h-10" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-black">{reason.title}</h3>
            <p className="text-gray-600 leading-relaxed">{reason.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="primary" onClick={scrollToContact} className="text-lg">
          Hire Your VA Today
        </Button>
      </div>
    </Section>
  );
}
