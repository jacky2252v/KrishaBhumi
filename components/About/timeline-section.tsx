"use client"

import { motion } from "framer-motion"
import data from "./about.data.json"

export function CompanyTimeline() {

  const timelineEvents = data.timelineEvents
  return (
    <section className="bg-zinc-100 dark:bg-zinc-900 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Our Journey</h2>
          <p className="text-muted-foreground dark:text-zinc-300 max-w-3xl mx-auto">
            Key milestones that have shaped our company's growth and evolution.
          </p>
        </div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-zinc-300 dark:bg-zinc-700 hidden md:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 pb-8 md:pb-0">
                  <div
                    className={`bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md max-w-md ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                  >
                    <div className="inline-block bg-black dark:bg-zinc-700 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{event.title}</h3>
                    <p className="text-muted-foreground dark:text-zinc-300">{event.description}</p>
                  </div>
                </div>

                {/* Timeline dot - visible only on md and up */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-black dark:bg-white"></div>
                </div>

                <div className="md:w-1/2 md:pl-8"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
