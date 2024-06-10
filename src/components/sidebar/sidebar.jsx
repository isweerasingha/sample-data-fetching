"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const initialLinks = [
  { label: "Dashboard", link: "/dashboard", active: true },
  { label: "Products", link: "/dashboard/products", active: false },
  { label: "Orders", link: "/dashboard/orders", active: false },
  { label: "Users", link: "/dashboard/users", active: false },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [links, setLinks] = useState(initialLinks);

  useEffect(() => {
    console.log(pathname);

    setLinks((prevLinks) =>
      prevLinks.map((link) =>
        link.link === pathname
          ? { ...link, active: true }
          : { ...link, active: false }
      )
    );
  }, [pathname]);

  return (
    <>
      <div className="flex flex-col gap-4">
        {links.map(({ label, link, active }, index) => (
          <Link
            key={index}
            href={link}
            className={`py-5 px-4 ${
              active === true ? "bg-red-500" : ""
            } hover:bg-red-300`}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
