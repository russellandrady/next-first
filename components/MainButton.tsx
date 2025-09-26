import React from "react";

interface MainButtonProps {
  icon: React.ReactNode; // Icon component to render inside the button
  onClick: () => void;   // Function to handle button click
  className?: string;    // Optional additional classes for customization
}

export const MainButton: React.FC<MainButtonProps> = ({ icon, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 border-none rounded-lg hover:bg-primary/80 transition-colors bg-primary text-primary-foreground ${className}`}
    >
      {icon}
    </button>
  );
};