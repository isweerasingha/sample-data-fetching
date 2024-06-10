import Link from "next/link";
import React from "react";
import routes from "@/config/routes";

export default function ProductLayout({ children }) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex gap-2">
    
      </div>
      <div>{children}</div>
    </div>
  );
}
