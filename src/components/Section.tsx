import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export default function Section({
  id,
  children,
  className = '',
  background = 'white',
}: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgColors[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
