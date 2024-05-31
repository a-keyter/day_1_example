import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function NavBar() {
  const NavLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Create",
      href: "/create",
    },
  ];

  return (
    <nav className="flex justify-between items-center px-4 py-4 border-b-black border-b-2 sticky top-0 z-50 bg-white">
      <h1>NextJS Feed Demo</h1>
      <div className="flex gap-x-4">
        {NavLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
          >
            <Button>{link.name}</Button>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
