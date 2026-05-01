"use client";

const GreenButton = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex w-full items-center justify-center rounded-full bg-[#1F6F5F] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2FA084] focus:outline-none focus:ring-2 focus:ring-[#6FCF97] focus:ring-offset-2 ${className}`}
    >
      {text}
    </button>
  );
};

export default GreenButton;
