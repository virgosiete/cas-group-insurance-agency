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
        'Professional appointment setting',
        'Fresh lead outreach',
        'Quality prospect screening',
        'Follow-up coordination',
        'Ideal for individual agents',
      ],
      highlighted: false,
    },
    {
      name: 'Premium Plan',
      price: 'Contact for Pricing',
      features: [
        '40-60 hours per week',
        'High-volume appointment setting',
        'Recruit interview scheduling',
        'Team building support',
        'Perfect for agency owners',
        'Accelerated growth with dedicated assistance',
      ],
      highlighted: true,
    },
  ];

  return (
    <Section id="pricing" background="teal">
      <div className="text-center mb-16">
        <h2 className="mb-8">Our Packages</h2>
        <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
          Choose the plan that matches your business needs and growth objectives.
        </p>
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
        <p className="text-primary-600 text-lg">
          All plans include dedicated training, ongoing support, and performance monitoring.
        </p>
      </div>
    </Section>
  );
}
