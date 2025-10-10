import { Video as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="relative p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-300 hover:border-accent-500 rounded-lg hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-300 group overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-gray-200 group-hover:bg-accent-400 transform translate-x-8 -translate-y-8 rotate-45 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 w-2 h-0 bg-gray-400 group-hover:bg-accent-500 group-hover:h-full transition-all duration-300"></div>
      <div className="relative z-10">
        <div className="w-14 h-14 bg-accent-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent-600 transition-all duration-300 shadow-lg shadow-accent-500/30">
          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-brand-black">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
