import React from "react";

interface IProps {
  onClick?: (e: React.MouseEvent) => any;
  children?: React.ReactNode;
  className?: string;
}

export default function Button({ onClick, children, className = "" }: IProps) {
  return (
    <button
      className={`mr-2 p-2 bg-blue-500 hover:bg-blue-700 shadow text-white rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
