"use client"

import type React from "react"

import { useState, useCallback, memo } from "react"
import { Button } from "@/components/ui/button"
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
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface ContactFormData {
    name: string
    email: string
    message: string
}

interface ContactDialogProps {
    isMobile?: boolean
}

function ContactDialog({ isMobile }: ContactDialogProps) {
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        message: "",
    })

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }, [])

    const handleSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault()
            localStorage.setItem("contactInfo", JSON.stringify(formData))

            toast.success("Information Saved", {
                description: "Your information has been saved successfully!",
                duration: 3000,
            })

            setFormData({ name: "", email: "", message: "" })
            setOpen(false)
        },
        [formData],
    )

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className={cn("border-primary hover:bg-primary/10 hover:text-primary", isMobile && "w-full")}
                >
                    Get to know us
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Tell us about yourself</DialogTitle>
                    <DialogDescription>Fill in your details and we&apos;ll get back to you soon.</DialogDescription>
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
    )
}

export default memo(ContactDialog)

