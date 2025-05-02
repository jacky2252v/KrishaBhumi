"use client"

import { useState, useCallback, memo } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "../theme-toggle"
import NavButton from "./NavbarButton"
import { usePathname } from "next/navigation"
import data from "./Navbar.json"
import ContactDialog from "./ContactDialog"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm transition-all">
      <div className="flex justify-between items-center px-4 md:px-8 py-3">
        <div className="flex items-center">
          <Image
            src="/img/logoLight.png"
            alt="Krisha Bhumi Logo"
            className="h-16 w-auto hidden dark:block"
            width={160}
            height={80}
            priority
          />
          <Image
            src="/img/LogoDark.png"
            alt="Krisha Bhumi Logo"
            className="h-16 w-auto dark:hidden"
            width={160}
            height={80}
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {Object.values(data).map((item) => (
            <NavButton
              key={item.navName}
              navLink={item.navLink}
              navName={item.navName}
              isActive={pathname === item.navLink}
            />
          ))}
          <ThemeToggle />
          <ContactDialog />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="ml-2"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-background border-t dark:border-gray-800 animate-in slide-in-from-top duration-300">
          <div className="space-y-2">
            {Object.values(data).map((item) => (
              <NavButton
                key={item.navName}
                navLink={item.navLink}
                navName={item.navName}
                isActive={pathname === item.navLink}
                isMobile
                onClick={closeMenu}
              />
            ))}
            <ContactDialog isMobile />
          </div>
        </div>
      )}
    </nav>
  )
}

export default memo(Navbar)
