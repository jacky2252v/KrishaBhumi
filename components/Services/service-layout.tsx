"use client"

import { useState, useEffect } from "react"
import { services, type ServiceData } from "./service-data"
import ServiceSearch from "./service-search"
import { motion } from "framer-motion"
import ServiceCard from "./service-card"

export default function ServicesLayout() {
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredServices, setFilteredServices] = useState<ServiceData[]>(services)
    const [isSearching, setIsSearching] = useState(false)

    // Handle search term changes
    useEffect(() => {
        if (searchTerm) {
            setIsSearching(true)
            const term = searchTerm.toLowerCase()
            const filtered = services.filter(
                (service) =>
                    service.name.toLowerCase().includes(term) ||
                    service.desc.toLowerCase().includes(term) ||
                    service.benefits.some((benefit) => benefit.toLowerCase().includes(term)),
            )

            // Small delay to show loading state
            const timer = setTimeout(() => {
                setFilteredServices(filtered)
                setIsSearching(false)
            }, 300)

            return () => clearTimeout(timer)
        } else {
            setFilteredServices(services)
            setIsSearching(false)
        }
    }, [searchTerm])

    // Clear search
    const handleClearSearch = () => {
        setSearchTerm("")
        setFilteredServices(services)
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-7xl">
            {/* Search Section */}
            <div className="bg-muted/50 p-6 rounded-lg mb-10">
                <ServiceSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} onClearSearch={handleClearSearch} />
            </div>

            {/* Results Count */}
            {searchTerm && (
                <div className="mb-6">
                    <p className="text-muted-foreground">
                        {isSearching
                            ? "Searching..."
                            : `Found ${filteredServices.length} service${filteredServices.length !== 1 ? "s" : ""} matching "${searchTerm}"`}
                    </p>
                </div>
            )}

            {/* Services Grid */}
            {filteredServices.length > 0 ? (
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {filteredServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-16 bg-muted rounded-lg"
                >
                    <h3 className="text-xl font-medium mb-2">No services found</h3>
                    <p className="text-muted-foreground">
                        Try adjusting your search term or{" "}
                        <button
                            onClick={handleClearSearch}
                            className="text-primary underline hover:text-primary/80 focus:outline-none"
                        >
                            view all services
                        </button>
                    </p>
                </motion.div>
            )}
        </div>
    )
}
