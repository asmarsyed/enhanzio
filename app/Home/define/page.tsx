"use client"
import Navbar from "@/app/components/navbar"
import { ThemeContext } from "@/app/components/context/ThemeContext"
import { theme } from "@/app/components/context/theme"

export default function Define({ expanded }: { expanded: boolean }) {
  return (
    <div
      style={{
        margin: expanded ? theme.expanded.marginLeft : theme.notexpanded.marginLeft,
      }}
      className="text-gray-950"
    >
      <h1>DEFINE</h1>
    </div>
  );
}
