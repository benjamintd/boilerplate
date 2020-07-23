import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="w-screen h-screen bg-gray-100 p-2">{children}</div>;
}
