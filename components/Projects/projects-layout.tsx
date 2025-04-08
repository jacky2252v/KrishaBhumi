"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { projectsData } from "./projects-data"
import { ProjectFilter } from "./project-filter"
import { ProjectCard } from "./project-card"

type ProjectCategory = "all" | "residential" | "commercial" | "roadworks" | "infrastructure"
type ProjectStatus = "all" | "in-progress" | "completed"
type SortOption = "newest" | "oldest"

export default function ProjectsLayout() {
  const [category, setCategory] = useState<ProjectCategory>("all")
  const [status, setStatus] = useState<ProjectStatus>("all")
  const [sort, setSort] = useState<SortOption>("newest")
  const [visibleProjects, setVisibleProjects] = useState(6)

  const filteredProjects = projectsData
    .filter((project) => category === "all" || project.category === category)
    .filter((project) => status === "all" || project.status === status)
    .sort((a, b) => {
      if (sort === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      }
    })

  const displayedProjects = filteredProjects.slice(0, visibleProjects)
  const hasMore = filteredProjects.length > visibleProjects

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 6)
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
    
      {/* Project Filters */}
      <ProjectFilter
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
        sort={sort}
        setSort={setSort}
      />

      {/* Projects Grid */}
      {displayedProjects.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center mt-12">
              <Button onClick={loadMore} className="bg-amber-600 hover:bg-amber-700">
                Load More Projects
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16 bg-muted rounded-lg mt-8">
          <h3 className="text-xl font-medium mb-2">No projects found</h3>
          <p className="text-muted-foreground">Try adjusting your filters to find what you&apos;re looking for.</p>
        </div>
      )}
    </div>
  )
}

