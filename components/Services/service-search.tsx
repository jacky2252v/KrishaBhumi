"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

interface ServiceSearchProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  onClearSearch: () => void
}

export default function ServiceSearch({ searchTerm, setSearchTerm, onClearSearch }: ServiceSearchProps) {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Find a Service</h2>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search by service name, description, or benefits..."
          className="pl-10 pr-10"
          onChange={handleSearch}
          value={searchTerm}
          aria-label="Search services"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
            onClick={onClearSearch}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
