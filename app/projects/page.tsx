import ProjectsLayout from "@/components/Projects/projects-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Projects | Krisha Bhumi",
    description: "Explore our portfolio of residential, commercial, and infrastructure projects.",
}

export default function ProjectsPage() {
    return <ProjectsLayout />
}

