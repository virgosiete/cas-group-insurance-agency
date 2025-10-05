import Section from './Section';
import PricingCard from './PricingCard';

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: 'Starter Plan',
      price: 'Contact for Pricing',
      features: [
        '30 hours per week',
        'Focused calls and appointment setting',
        'Fresh lead contact',
        'Quality appointment booking',
        'Follow-up management',
        'Perfect for individual agents',
      ],
      highlighted: false,
    },
    {
      name: 'Premium Plan',
      price: 'Contact for Pricing',
      features: [
        '40-60 hours per week',
        'Pure calling and appointment setting',
        'Interview support for new recruits',
        'Team building assistance',
        'Ideal for agency owners',
        'Scale fast with dedicated support',
      ],
      highlighted: true,
    },
  ];

  return (
    <Section id="pricing" background="gray">
      <div className="text-center mb-16">
        <h2 className="mb-6">Our Packages</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            name={plan.name}
            price={plan.price}
            features={plan.features}
            highlighted={plan.highlighted}
            onCTAClick={scrollToContact}
          />
        ))}
      </div>

      <div className="text-center">
        <p className="text-gray-600 text-lg">
          All plans include dedicated training, ongoing support, and performance monitoring.
        </p>
      </div>
    </Section>
  );
}
