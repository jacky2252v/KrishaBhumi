"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"
import data from "./about.data.json"

export function TeamMember() {

  const teamMembers = data.teamMembers

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Meet Our Leadership Team</h2>
        <p className="text-muted-foreground dark:text-zinc-300 max-w-3xl mx-auto">
          The experienced professionals guiding our company's vision and operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white dark:bg-zinc-800 border-none shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-black dark:text-white">{member.name}</h3>
                  <p className="text-sm text-muted-foreground dark:text-zinc-400 mb-3">{member.role}</p>
                  <p className="text-muted-foreground dark:text-zinc-300 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-black dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-black dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-black dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
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
