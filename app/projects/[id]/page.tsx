import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, User, Ruler, Clock, CheckSquare, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { projectsData } from "@/components/Projects/projects-data"

interface ProjectPageProps {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const project = projectsData.find((p) => p.id === params.id)

    if (!project) {
        return {
            title: "Project Not Found | Krisha Bhumi",
        }
    }

    return {
        title: `${project.title} | Krisha Bhumi Projects`,
        description: project.description,
    }
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projectsData.find((p) => p.id === params.id)

    if (!project) {
        notFound()
    }

    const statusColor = project.status === "completed" ? "bg-green-500" : "bg-amber-500"

    return (
        <div className="container mx-auto px-4 py-12 max-w-7xl">
            <Link href="/projects">
                <Button variant="ghost" className="mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                </Button>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                        />
                        <Badge className={`absolute top-4 right-4 ${statusColor} hover:${statusColor} text-white px-3 py-1`}>
                            {project.status === "completed" ? "Completed" : "In Progress"}
                        </Badge>
                    </div>

                    <div className="mt-8">
                        <h1 className="text-3xl font-bold">{project.title}</h1>
                        <div className="flex items-center mt-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{project.location}</span>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-xl font-semibold mb-3">Project Overview</h2>
                            <p className="text-muted-foreground">{project.description}</p>

                            <div className="mt-8 space-y-6">
                                <h2 className="text-xl font-semibold">Project Gallery</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[1, 2, 3, 4, 5, 6].map((i) => (
                                        <div key={i} className="relative aspect-square rounded-md overflow-hidden">
                                            <Image
                                                src={`/placeholder.svg?height=300&width=300&text=Gallery+Image+${i}`}
                                                alt={`Gallery image ${i}`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-muted/50 rounded-lg p-6 sticky top-24">
                        <h2 className="text-xl font-semibold mb-4">Project Details</h2>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <Calendar className="h-5 w-5 mr-3 mt-0.5 text-amber-600" />
                                <div>
                                    <h3 className="font-medium">Project Date</h3>
                                    <p className="text-muted-foreground">
                                        {new Date(project.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <User className="h-5 w-5 mr-3 mt-0.5 text-amber-600" />
                                <div>
                                    <h3 className="font-medium">Client</h3>
                                    <p className="text-muted-foreground">{project.details?.client}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Ruler className="h-5 w-5 mr-3 mt-0.5 text-amber-600" />
                                <div>
                                    <h3 className="font-medium">Project Area</h3>
                                    <p className="text-muted-foreground">{project.details?.area}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Clock className="h-5 w-5 mr-3 mt-0.5 text-amber-600" />
                                <div>
                                    <h3 className="font-medium">Duration</h3>
                                    <p className="text-muted-foreground">{project.details?.duration}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <CheckSquare className="h-5 w-5 mr-3 mt-0.5 text-amber-600" />
                                <div>
                                    <h3 className="font-medium">Services Provided</h3>
                                    <ul className="text-muted-foreground mt-1 space-y-1">
                                        {project.details?.services.map((service, index) => (
                                            <li key={index} className="flex items-center">
                                                <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mr-2"></span>
                                                {service}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Button className="w-full bg-amber-600 hover:bg-amber-700">Request Similar Project</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

