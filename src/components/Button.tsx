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
    primary: 'bg-brand-black text-white hover:bg-brand-sage active:bg-brand-sageDark border-2 border-white shadow-lg',
    secondary: 'bg-white text-brand-black border-2 border-brand-black hover:bg-brand-lightGray active:bg-gray-200',
    outline: 'bg-transparent text-brand-black border-2 border-brand-black hover:bg-brand-black hover:text-white',
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
