"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, Home, RouteIcon as Road, Factory, Filter } from "lucide-react"

type ProjectCategory = "all" | "residential" | "commercial" | "roadworks" | "infrastructure"
type ProjectStatus = "all" | "in-progress" | "completed"
type SortOption = "newest" | "oldest"

interface ProjectFilterProps {
  category: string
  setCategory: (category: ProjectCategory) => void
  status: string
  setStatus: (status: ProjectStatus) => void
  sort: string
  setSort: (sort: SortOption) => void
}

export function ProjectFilter({ category, setCategory, status, setStatus, sort, setSort }: ProjectFilterProps) {
  return (
    <div className="bg-muted/50 p-4 rounded-lg">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <h3 className="text-sm font-medium mb-2 flex items-center">
            <Filter className="h-4 w-4 mr-1" /> Filter by Category
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={category === "all" ? "default" : "outline"}
              onClick={() => setCategory("all")}
              className={category === "all" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              All
            </Button>
            <Button
              size="sm"
              variant={category === "residential" ? "default" : "outline"}
              onClick={() => setCategory("residential")}
              className={category === "residential" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              <Home className="h-4 w-4 mr-1" /> Residential
            </Button>
            <Button
              size="sm"
              variant={category === "commercial" ? "default" : "outline"}
              onClick={() => setCategory("commercial")}
              className={category === "commercial" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              <Building2 className="h-4 w-4 mr-1" /> Commercial
            </Button>
            <Button
              size="sm"
              variant={category === "roadworks" ? "default" : "outline"}
              onClick={() => setCategory("roadworks")}
              className={category === "roadworks" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              <Road className="h-4 w-4 mr-1" /> Roadworks
            </Button>
            <Button
              size="sm"
              variant={category === "infrastructure" ? "default" : "outline"}
              onClick={() => setCategory("infrastructure")}
              className={category === "infrastructure" ? "bg-amber-600 hover:bg-amber-700" : ""}
            >
              <Factory className="h-4 w-4 mr-1" /> Infrastructure
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-40">
            <h3 className="text-sm font-medium mb-2">Status</h3>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full sm:w-40">
            <h3 className="text-sm font-medium mb-2">Sort By</h3>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

