"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner";
import { ThemeToggle } from "./theme-toggle"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store data in localStorage
    localStorage.setItem("contactInfo", JSON.stringify(formData))

    // Show success toast
    toast.success("Information Saved", {
      description: "Your information has been saved successfully!",
      duration: 3000,
    })

    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-950 shadow-sm">
      <div className="flex justify-between items-center px-4 md:px-8 py-3">
        <div className="flex items-center">
          <img src="/img/logolight.png" alt="Krisha Bhumi Logo" className="h-20 w-auto dark:hidden" />
          {/* Add a dark mode logo or use the same one */}
          <img src="/img/logolight.png" alt="Krisha Bhumi Logo" className="h-20 w-auto hidden dark:block" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-primary hover:bg-primary/10 hover:text-primary">
                Get to know us
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Tell us about yourself</DialogTitle>
                <DialogDescription>Fill in your details and we'll get back to you soon.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-white dark:bg-gray-950 border-t dark:border-gray-800">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full mb-2 border-primary hover:bg-primary/10 hover:text-primary">
                Get to know us
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Tell us about yourself</DialogTitle>
                <DialogDescription>Fill in your details and we'll get back to you soon.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="grid gap-2">
                  <Label htmlFor="mobile-name">Name</Label>
                  <Input
                    id="mobile-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="mobile-email">Email</Label>
                  <Input
                    id="mobile-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="mobile-message">Message</Label>
                  <Textarea
                    id="mobile-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </nav>
  )
}

export default Navbar
