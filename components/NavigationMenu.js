import React from "react";
import Link from "next/link";
import HomeNavItem from "./HomeNavItem";
import AboutNavItem from "./AboutNavItem";
import ProjectsNavItem from "./ProjectsNavItem";
import ContactNavItem from "./ContactNavItem";

export default function NavigationMenu() {
  return (
  <nav className="space-x-8 px-4 py-2 flex">
      <Link href="/home"><HomeNavItem /></Link>
      <Link href="/projects"><ProjectsNavItem /></Link>
      <Link href="/about"><AboutNavItem /></Link>
      <Link href="/contact"><ContactNavItem /></Link>
    </nav>
  );
}