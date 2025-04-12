import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { services } from "@/components/Services/service-data"

type ServicePageProps  = Promise<
{
    id: string

}>

export async function generateMetadata({ params }: {params: ServicePageProps}): Promise<Metadata> {
  const { id } = await params
  const service = services.find((s) => s.id === id)

  if (!service) {
    return {
      title: "Service Not Found | Krisha Bhumi",
    }
  }

  return {
    title: `${service.name} | Krisha Bhumi Services`,
    description: service.desc,
  }
}

export default async function ServicePage({ params }: {params: ServicePageProps}) {
  const { id } = await params;
  const service = services.find((s) => s.id === id)

  if (!service) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <Link href="/services">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
            />
            <Badge className="absolute top-4 right-4 bg-amber-600 hover:bg-amber-600 text-white px-3 py-1">
              Service
            </Badge>
          </div>

          <div className="mt-8">
            <h1 className="text-3xl font-bold">{service.name}</h1>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3">Service Overview</h2>
              <p className="text-muted-foreground">{service.desc}</p>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Key Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start bg-muted/50 p-4 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Our Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 text-center">
                    <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">
                      1
                    </div>
                    <h3 className="font-medium mb-2">Consultation</h3>
                    <p className="text-sm text-muted-foreground">We assess your needs and provide a detailed plan.</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">
                      2
                    </div>
                    <h3 className="font-medium mb-2">Implementation</h3>
                    <p className="text-sm text-muted-foreground">
                      Our experts execute the plan with precision and care.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">
                      3
                    </div>
                    <h3 className="font-medium mb-2">Quality Check</h3>
                    <p className="text-sm text-muted-foreground">We ensure everything meets our high standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-muted/50 rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Request This Service</h2>

            <form className="space-y-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input id="name" type="text" className="w-full p-2 border rounded-md" placeholder="Your name" />
              </div>

              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input id="email" type="email" className="w-full p-2 border rounded-md" placeholder="Your email" />
              </div>

              <div className="grid gap-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <input id="phone" type="tel" className="w-full p-2 border rounded-md" placeholder="Your phone number" />
              </div>

              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>

              <Button className="w-full bg-amber-600 hover:bg-amber-700">Submit Request</Button>
            </form>

            <div className="mt-6 pt-6 border-t">
              <h3 className="font-medium mb-2">Need immediate assistance?</h3>
              <Button variant="outline" className="w-full flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
