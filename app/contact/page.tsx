import ContactPage from "@/components/Contact/Contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | Construction Company",
    description: "Get in touch with our team for your construction needs. We're here to help with your project.",
}

export default function Contact() {
    return <ContactPage />
}
