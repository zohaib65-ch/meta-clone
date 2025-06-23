import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

export function CustomButton({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-full font-medium transition-colors duration-200";
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-100/80 hover:bg-gray-500/80 text-gray-900 border border-gray-500",
    tertiary: "bg-green-600 hover:bg-green-700 text-white border border-green-500",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
