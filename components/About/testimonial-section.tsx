"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"
import data from "./about.data.json"

export function TestimonialSection() {

  const testimonials = data.testimonials

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">What Our Clients Say</h2>
        <p className="text-muted-foreground dark:text-zinc-300 max-w-3xl mx-auto">
          Hear from the people and organizations who have experienced our work firsthand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white dark:bg-zinc-800 border-none shadow-md">
              <CardContent className="p-6">
                <Quote className="h-10 w-10 text-black/20 dark:text-white/20 mb-4" />
                <p className="text-muted-foreground dark:text-zinc-300 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black dark:text-white">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground dark:text-zinc-400">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
