"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function ContactPage() {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setFormSubmitted(true)
            toast({
                title: "Message Sent",
                description: "We've received your message and will get back to you soon.",
            })
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="bg-black text-white dark:bg-zinc-900 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-200">We&apos;re here to help – get in touch today!</p>
                </div>
            </div>

            {/* Contact Section */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="flex flex-col gap-8">
                        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 md:p-8">
                            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Send Us a Message</h2>
                            {formSubmitted ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <div className="bg-zinc-100 dark:bg-zinc-700 p-3 rounded-full mb-4">
                                        <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 dark:text-white">Thank You!</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Your message has been sent successfully. We&apos;ll get back to you shortly.
                                    </p>
                                    <Button
                                        onClick={() => {
                                            setFormSubmitted(false)
                                            setFormData({ name: "", email: "", phone: "", message: "" })
                                        }}
                                        className="bg-black hover:bg-zinc-800 text-white dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                                    >
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="dark:text-zinc-200">
                                            Full Name <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="dark:bg-zinc-700 dark:border-zinc-600 dark:text-white dark:placeholder:text-zinc-400"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="dark:text-zinc-200">
                                            Email Address <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="dark:bg-zinc-700 dark:border-zinc-600 dark:text-white dark:placeholder:text-zinc-400"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="dark:text-zinc-200">
                                            Phone Number
                                        </Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            placeholder="(123) 456-7890"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="dark:bg-zinc-700 dark:border-zinc-600 dark:text-white dark:placeholder:text-zinc-400"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="dark:text-zinc-200">
                                            Message <span className="text-red-500">*</span>
                                        </Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about your project or inquiry..."
                                            rows={5}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="dark:bg-zinc-700 dark:border-zinc-600 dark:text-white dark:placeholder:text-zinc-400"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className={cn(
                                            "w-full bg-black hover:bg-zinc-800 text-white",
                                            "dark:bg-white dark:text-black dark:hover:bg-zinc-200",
                                        )}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center">
                                                <svg
                                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white dark:text-black"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center">
                                                <Send className="mr-2 h-4 w-4" /> Submit Message
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col gap-8">
                        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 md:p-8">
                            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Contact Information</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-zinc-100 dark:bg-zinc-700 p-3 rounded-full mr-4">
                                        <MapPin className="h-6 w-6 text-black dark:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg dark:text-white">Our Location</h3>
                                        <p className="text-muted-foreground dark:text-zinc-300">
                                            123 Construction Way, <br />
                                            Building Heights, Suite 400, <br />
                                            New York, NY 10001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-zinc-100 dark:bg-zinc-700 p-3 rounded-full mr-4">
                                        <Phone className="h-6 w-6 text-black dark:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg dark:text-white">Phone Number</h3>
                                        <p className="text-muted-foreground dark:text-zinc-300">(123) 456-7890</p>
                                        <p className="text-muted-foreground dark:text-zinc-300">Toll-free: (800) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-zinc-100 dark:bg-zinc-700 p-3 rounded-full mr-4">
                                        <Mail className="h-6 w-6 text-black dark:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg dark:text-white">Email Address</h3>
                                        <p className="text-muted-foreground dark:text-zinc-300">info@constructioncompany.com</p>
                                        <p className="text-muted-foreground dark:text-zinc-300">support@constructioncompany.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-zinc-100 dark:bg-zinc-700 p-3 rounded-full mr-4">
                                        <Clock className="h-6 w-6 text-black dark:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg dark:text-white">Business Hours</h3>
                                        <p className="text-muted-foreground dark:text-zinc-300">Monday - Friday: 8:00 AM - 6:00 PM</p>
                                        <p className="text-muted-foreground dark:text-zinc-300">Saturday: 9:00 AM - 2:00 PM</p>
                                        <p className="text-muted-foreground dark:text-zinc-300">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 md:p-8">
                            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Find Us</h2>
                            <div className="relative h-[300px] w-full rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700">
                                <Image
                                    src="/placeholder.svg?height=600&width=800&text=Map+Location"
                                    alt="Office Location Map"
                                    fill
                                    className="object-cover dark:invert dark:brightness-90"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/5 dark:bg-white/5">
                                    <div className="bg-white dark:bg-zinc-800 p-3 rounded-lg shadow-lg">
                                        <MapPin className="h-8 w-8 text-black dark:text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-zinc-100 dark:bg-zinc-900 py-12 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-muted-foreground dark:text-zinc-400 max-w-2xl mx-auto mb-8">
                        Our team of experts is ready to help you bring your construction vision to life. Contact us today for a free
                        consultation.
                    </p>
                    <Button
                        className={cn(
                            "bg-black hover:bg-zinc-800 text-white px-6 py-3 h-auto text-lg",
                            "dark:bg-white dark:text-black dark:hover:bg-zinc-200",
                        )}
                    >
                        Request a Free Quote
                    </Button>
                </div>
            </div>
        </div>
    )
}
