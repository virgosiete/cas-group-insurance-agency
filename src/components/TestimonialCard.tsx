import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  initials: string;
}

export default function TestimonialCard({ quote, name, title, initials }: TestimonialCardProps) {
  return (
    <div className="p-8 bg-white border-2 border-primary-200 rounded-lg hover:shadow-lg transition-all duration-200">
      <Quote className="w-10 h-10 text-primary-300 mb-4" />
      <p className="text-primary-700 mb-6 leading-relaxed italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-primary-200 flex items-center justify-center mr-4">
          <span className="font-semibold text-primary-700">{initials}</span>
        </div>
        <div>
          <p className="font-semibold text-primary-900">{name}</p>
          <p className="text-sm text-primary-600">{title}</p>
        </div>
      </div>
    </div>
  );
}
