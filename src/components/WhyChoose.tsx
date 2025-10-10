import { Check, MessageCircle, Briefcase } from 'lucide-react';
import Section from './Section';
import Button from './Button';

export default function WhyChoose() {
  const reasons = [
    {
      icon: Check,
      title: 'Consistent Results',
      description: 'Daily outreach that fills your calendar with qualified appointments.',
    },
    {
      icon: MessageCircle,
      title: 'Professional Communication',
      description: 'Fluent English speakers trained in effective sales techniques.',
    },
    {
      icon: Briefcase,
      title: 'Fully Managed',
      description: 'Comprehensive training, supervision, and performance tracking included.',
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
        <h2 className="mb-8">Why Businesses Trust CAS Group</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Partner with a team that delivers results through expertise, reliability, and proven systems.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {reasons.map((reason, index) => (
          <div key={index} className="text-center relative group">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-0 bg-gradient-to-b from-brand-mediumGray to-brand-darkGray group-hover:h-12 transition-all duration-300"></div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-black to-brand-darkGray border-4 border-brand-lightGray text-white rounded-lg mb-6 shadow-lg group-hover:bg-gradient-to-br group-hover:from-brand-mediumGray group-hover:to-brand-darkGray transition-all duration-300 group-hover:scale-110">
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
