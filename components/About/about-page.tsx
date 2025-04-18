"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Award, Building, Clock, Users, CheckCircle, Target, Heart } from "lucide-react"
import { CompanyTimeline } from "./timeline-section"
import { TeamMember } from "./team-section"
import { TestimonialSection } from "./testimonial-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-black text-white dark:bg-zinc-900 py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Construction+Background"
            alt="Construction background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Building Excellence Since 2005
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-200 mb-8"
            >
              We are a team of passionate professionals dedicated to creating innovative construction solutions that
              make a difference in the world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
                >
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">Our Story</h2>
            <p className="text-muted-foreground dark:text-zinc-300 mb-4">
              Founded in 2005, Krisha Bhumi began as a small residential construction company with a vision to transform
              the industry through quality craftsmanship and innovative approaches.
            </p>
            <p className="text-muted-foreground dark:text-zinc-300 mb-4">
              Over the years, we've grown into a full-service construction firm handling projects across residential,
              commercial, and infrastructure sectors. Our journey has been defined by our commitment to excellence and
              our ability to adapt to changing market demands.
            </p>
            <p className="text-muted-foreground dark:text-zinc-300">
              Today, we're proud to be recognized as an industry leader, known for our sustainable building practices,
              cutting-edge technology implementation, and unwavering dedication to client satisfaction.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/placeholder.svg?height=800&width=600&text=Company+History"
              alt="Our company history"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-zinc-100 dark:bg-zinc-900 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
              Our Mission, Vision & Values
            </h2>
            <p className="text-muted-foreground dark:text-zinc-300 max-w-3xl mx-auto">
              The principles that guide our work and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-zinc-800 border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="bg-black dark:bg-zinc-700 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Our Mission</h3>
                  <p className="text-muted-foreground dark:text-zinc-300">
                    To deliver exceptional construction services that exceed client expectations, while maintaining the
                    highest standards of safety, quality, and environmental responsibility.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-zinc-800 border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="bg-black dark:bg-zinc-700 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Building className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Our Vision</h3>
                  <p className="text-muted-foreground dark:text-zinc-300">
                    To be the most trusted and innovative construction company, recognized for transforming communities
                    through sustainable building practices and exceptional craftsmanship.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-zinc-800 border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="bg-black dark:bg-zinc-700 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Our Values</h3>
                  <ul className="space-y-2 text-muted-foreground dark:text-zinc-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-black dark:text-white mr-2 mt-0.5 flex-shrink-0" />
                      <span>Integrity in all our dealings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-black dark:text-white mr-2 mt-0.5 flex-shrink-0" />
                      <span>Excellence in craftsmanship</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-black dark:text-white mr-2 mt-0.5 flex-shrink-0" />
                      <span>Innovation in our approach</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-black dark:text-white mr-2 mt-0.5 flex-shrink-0" />
                      <span>Sustainability in our practices</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Our Impact by Numbers</h2>
          <p className="text-muted-foreground dark:text-zinc-300 max-w-3xl mx-auto">
            A glimpse at our achievements over the years.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md text-center"
          >
            <div className="bg-zinc-100 dark:bg-zinc-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Building className="h-6 w-6 text-black dark:text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-black dark:text-white">500+</h3>
            <p className="text-muted-foreground dark:text-zinc-300">Projects Completed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md text-center"
          >
            <div className="bg-zinc-100 dark:bg-zinc-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-black dark:text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-black dark:text-white">150+</h3>
            <p className="text-muted-foreground dark:text-zinc-300">Team Members</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md text-center"
          >
            <div className="bg-zinc-100 dark:bg-zinc-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-black dark:text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-black dark:text-white">25+</h3>
            <p className="text-muted-foreground dark:text-zinc-300">Industry Awards</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md text-center"
          >
            <div className="bg-zinc-100 dark:bg-zinc-700 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-black dark:text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-black dark:text-white">18</h3>
            <p className="text-muted-foreground dark:text-zinc-300">Years of Excellence</p>
          </motion.div>
        </div>
      </section>

      {/* Company Timeline */}
      <CompanyTimeline />

      {/* Team Section */}
      <TeamMember />

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <section className="bg-black text-white dark:bg-zinc-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-8">
            Let's discuss how we can bring your construction vision to life with our expertise and dedication to
            excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
              >
                Contact Us
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 dark:border-zinc-400 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
