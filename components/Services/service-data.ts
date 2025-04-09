export interface ServiceData {
    id: string
    name: string
    image: string
    desc: string
    benefits: string[]
}

export const services: ServiceData[] = [
    {
      id: "hybrid-coating",
      name: "Hybrid Coating",
      image: "/img/services/hybrid-coating.jpg",
      desc: "A cutting-edge protective coating that combines durability with environmental resistance for long-term performance.",
      benefits: [
        "Enhanced surface durability",
        "UV and chemical resistance",
        "Eco-friendly formula",
        "Easy application and maintenance"
      ]
    },
    {
      id: "building-painting",
      name: "Building Painting",
      image: "/img/services/building-painting.jpg",
      desc: "Professional painting services for both residential and commercial properties, ensuring a smooth, lasting finish.",
      benefits: [
        "High-quality paints and finishes",
        "Interior and exterior expertise",
        "Weather-resistant coatings",
        "Quick turnaround with clean-up"
      ]
    },
    {
      id: "water-proofing",
      name: "Water Proofing",
      image: "/img/services/water-proofing.jpg",
      desc: "Comprehensive waterproofing solutions to protect your building from moisture, leaks, and long-term water damage.",
      benefits: [
        "Leak prevention and control",
        "Increases building lifespan",
        "Suitable for basements and roofs",
        "Resists mold and mildew growth"
      ]
    },
    {
      id: "construction",
      name: "Construction",
      image: "/img/services/construction.jpg",
      desc: "From foundation to finish, our construction services cover every aspect of building with precision and quality.",
      benefits: [
        "End-to-end project management",
        "Quality materials and workmanship",
        "Compliance with safety standards",
        "Timely delivery and execution"
      ]
    },
    {
      id: "renovation",
      name: "Renovation",
      image: "/img/services/renovation.jpg",
      desc: "Transform existing spaces with our modern renovation solutions tailored to your aesthetic and functional needs.",
      benefits: [
        "Customized redesign and remodeling",
        "Structural and cosmetic upgrades",
        "Cost-effective planning",
        "Minimal disruption to daily life"
      ]
    }
  ]
  