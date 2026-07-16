import Link from "next/link";

export default function Button({ 
  children, 
  href, 
  variant = "primary", 
  className = "",
  ...props 
}:{
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "light";
  className?: string;
  [key: string]: unknown;
}) {
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-800",
    ghost: "bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white",
    light: "bg-white text-red-600 hover:bg-gray-900 hover:text-white",
  };

  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide no-underline rounded transition-all duration-150 hover:-translate-y-0.5 focus:outline-none focus:ring-3 focus:ring-gray-900 focus:ring-offset-2";

  if (href) {
    return (
      <Link 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}