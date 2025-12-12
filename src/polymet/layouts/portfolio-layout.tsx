"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
          isScrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-medium tracking-tight hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            David Richard
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-cyan-600 dark:hover:text-cyan-400 relative py-2",
                  location.pathname === item.path
                    ? "text-cyan-600 dark:text-cyan-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-cyan-600 dark:after:bg-cyan-400"
                    : ""
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-20">
          <nav className="flex flex-col items-center space-y-6 p-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-cyan-600 dark:hover:text-cyan-400",
                  location.pathname === item.path
                    ? "text-cyan-600 dark:text-cyan-400"
                    : ""
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <main className="flex-grow pt-20">{children}</main>

      <footer className="bg-gray-100 dark:bg-gray-900 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-lg font-medium">David Richard</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Design Leader • Builder • Educator
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <a
                href="mailto:david.richard@gmail.com"
                className="text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                david.richard@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/drichard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Austin | SF
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} David Richard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
