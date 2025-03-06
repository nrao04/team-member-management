import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 text-white font-medium rounded-md transition hover:opacity-80 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}