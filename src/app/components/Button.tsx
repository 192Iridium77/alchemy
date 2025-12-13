import React from "react";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ href, children, onClick }: ButtonProps) => {
  const baseStyles =
    "bg-black text-white uppercase px-4 py-2 rounded-md font-semibold border border-transparent hover:border-white transition-all opacity-0 group-hover:opacity-100";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
};
