import React from "react";
import { useState } from "react";

const Input = ({
  placeholder = "",
  type = "text",
  value,
  onChange,
  className = "",
  name,
  disabled,
  icon,
}) => {
  const baseClasses =
    "px-5 py-2.5 bg-white/10 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200";

  return (
    <input
      icon={icon}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${baseClasses} ${"pl-5" ? "pl-10" : ""} ${className} ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      }`}
    />
  );
};

export default Input;

export const SigninButton = ({
  children,
  type = "button",
  variant = "default",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = "left",
}) => {
  const baseStyles =
    "font-semibold font-['General Sans'] rounded-lg transition-all duration-200 flex items-center justify-center gap-2";

  const variants = {
    default: "bg-gray-500 text-white hover:bg-gray-600",
    primary: "bg-[#40e0d0]text-white hover:bg-[#40e0d0]",
    // secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    // outline: "border-2 border-white/50 text-white hover:bg-white/10",
    // ghost: "bg-transparent text-white hover:bg-white/10",
  };

  // Size styles
  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-[46px] px-5 text-base",
    lg: " px-5 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "opacity-50  cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {loading ? (
        <>
          <LoadingSpinner />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {/* {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
          {children}
          {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />} */}

          {children}
        </>
      )}
    </button>
  );
};
