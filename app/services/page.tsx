import ServicesLayout from "@/components/Services/service-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Krisha Bhumi",
  description: "Explore our comprehensive range of construction and building services.",
}

export default function ServicesPage() {
  return <ServicesLayout />
}
