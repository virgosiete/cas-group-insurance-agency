import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-lg font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';

  const variants = {
    primary: 'bg-brand-black text-white hover:bg-accent-600 active:bg-accent-700 border-2 border-white shadow-lg hover:shadow-accent-500/20',
    secondary: 'bg-white text-brand-black border-2 border-accent-400 hover:border-accent-500 hover:bg-accent-50 active:bg-accent-100',
    outline: 'bg-transparent text-brand-black border-2 border-gray-400 hover:border-accent-500 hover:bg-accent-50 hover:text-accent-700',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
