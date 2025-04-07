import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MapPin, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Project } from "./projects-data"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusColor = project.status === "completed" ? "bg-green-500" : "bg-amber-500"

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Badge className={`absolute top-3 right-3 ${statusColor} hover:${statusColor}`}>
          {project.status === "completed" ? "Completed" : "In Progress"}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>
        <div className="flex items-center text-muted-foreground text-sm">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{project.location}</span>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground line-clamp-2">{project.description}</p>
        <div className="flex items-center mt-3 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          <span>
            {new Date(project.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </span>
        </div>
      </CardContent>

      <CardFooter>
        <Link href={`/projects/${project.id}`} className="w-full">
          <Button
            variant="outline"
            className="w-full group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-colors"
          >
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

