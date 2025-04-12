import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { ServiceData } from "./service-data"

interface ServiceCardProps {
    service: ServiceData
}

export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Badge className="absolute top-3 right-3 bg-amber-600 hover:bg-amber-700">Service</Badge>
            </div>

            <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">{service.name}</h3>
            </CardHeader>

            <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{service.desc}</p>
                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>

            <CardFooter className="pt-4 border-t">
                <Link href={`/services/${service.id}`} className="w-full">
                    <Button
                        variant="outline"
                        className="w-full group hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-colors"
                    >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}