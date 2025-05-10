"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { UserAccountNav } from "./user-account-nav";
import { ThemeSwitcher } from "./theme-switcher";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center font-bold text-xl">
          <Shield className="h-6 w-6 text-blue-600 gap-2" />
          <span>AssureTech</span>
        </div>
        <nav className="flex items-center space-x-6 ml-10">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Insights
          </Link>
          <Link
            href="/claims"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/claims"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Claims
          </Link>
          <div className="ml-auto flex items-center pl-6">
            <UserAccountNav
              user={{
                name: "Insurance Agent",
                image: ``,
                email: "insuranceagent@test.com",
              }}
            />
          </div>
          <div className="ml-4">
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
