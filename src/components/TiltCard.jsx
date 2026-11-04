import React from 'react';

export default function TiltCard({
  children,
  className = "",
  ...props
}) {
  return (
    <div
      className={`relative transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
