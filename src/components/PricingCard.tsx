import { Check } from 'lucide-react';
import Button from './Button';

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  onCTAClick: () => void;
}

export default function PricingCard({
  name,
  price,
  features,
  highlighted = false,
  onCTAClick,
}: PricingCardProps) {
  return (
    <div
      className={`relative p-8 rounded-lg border-2 transition-all duration-300 hover:shadow-2xl overflow-hidden group ${
        highlighted
          ? 'bg-gradient-to-br from-accent-600 to-accent-700 text-white border-accent-400 scale-105 shadow-xl shadow-accent-500/20'
          : 'bg-gradient-to-br from-white to-gray-50 text-brand-black border-gray-300 hover:border-accent-500'
      }`}
    >
      {highlighted && (
        <div className="absolute top-0 right-0 w-24 h-24 bg-accent-400 opacity-20 transform rotate-45 translate-x-12 -translate-y-12"></div>
      )}
      <div className="absolute bottom-0 left-0 w-2 h-0 bg-accent-500 group-hover:h-full transition-all duration-300"></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className={highlighted ? 'text-gray-300' : 'text-gray-600'}>/month</span>
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check
                className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                  highlighted ? 'text-accent-200' : 'text-accent-500'
                }`}
              />
              <span className={highlighted ? 'text-gray-100' : 'text-gray-700'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <Button
          variant={highlighted ? 'primary' : 'outline'}
          className="w-full"
          onClick={onCTAClick}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
