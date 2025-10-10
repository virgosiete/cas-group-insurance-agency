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
    primary: 'bg-brand-black text-white hover:bg-gray-800 active:bg-gray-900 border-2 border-white shadow-lg',
    secondary: 'bg-white text-brand-black border-2 border-gray-300 hover:border-brand-black hover:bg-gray-50 active:bg-gray-100',
    outline: 'bg-transparent text-brand-black border-2 border-gray-400 hover:border-brand-black hover:bg-gray-100 hover:text-brand-black',
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
