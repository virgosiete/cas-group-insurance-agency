import { Video as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="relative p-8 bg-white border-2 border-brand-black rounded-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-brand-sage transform translate-x-8 -translate-y-8 rotate-45 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 w-2 h-0 bg-brand-black group-hover:h-full transition-all duration-300"></div>
      <div className="relative z-10">
        <div className="w-14 h-14 bg-brand-sage rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-brand-black">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
