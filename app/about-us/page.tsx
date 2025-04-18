import AboutPage from "@/components/About/about-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Krisha Bhumi",
  description: "Learn about our company, our mission, values, and the team behind our success.",
}

export default function AboutUs() {
  return <AboutPage />
}
