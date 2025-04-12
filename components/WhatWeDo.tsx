"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"
import Image from "next/image"

const jsonData = [
  {
    id: 1,
    name: "Hybrid Coating",
    image: "/img/services/hybridCoating.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quis quod harum maxime fugit alias corporis vero unde eaque officiis ipsum aliquid repellat, officia corrupti neque commodi maiores.",
  },
  {
    id: 2,
    name: "Building Painting",
    image: "/img/services/buildingPainting.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quis quod harum maxime fugit alias corporis vero unde eaque officiis ipsum aliquid repellat, officia corrupti neque commodi maiores.",
  },
  {
    id: 3,
    name: "Water Proofing",
    image: "/img/services/waterproofing.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quis quod harum maxime fugit alias corporis vero unde eaque officiis ipsum aliquid repellat, officia corrupti neque commodi maiores.",
  },
]

const WhatWeDo = () => {
  const [selectedService, setSelectedService] = useState<(typeof jsonData)[0] | null>(null)

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">What We Do</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            We provide the following premium services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jsonData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    width={500}
                    height={200}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {service.desc}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" variant="outline" onClick={() => setSelectedService(service)}>
                        Know More!
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[525px]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{selectedService?.name}</DialogTitle>
                        <DialogDescription>Comprehensive details about our service</DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <Image
                          src={selectedService?.image || "/placeholder.svg"}
                          alt={selectedService?.name || "Service image"}
                          className="w-full h-48 object-cover rounded-md mb-4"
                          width={500}
                          height={200}
                        />
                        <p className="text-gray-700 dark:text-gray-300">{selectedService?.desc}</p>
                        <div className="mt-6">
                          <h4 className="font-semibold mb-2">Benefits:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                            <li>Long-lasting protection</li>
                            <li>Cost-effective solution</li>
                            <li>Environmentally friendly</li>
                            <li>Quick application process</li>
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo

