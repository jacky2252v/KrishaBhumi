export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: "residential" | "commercial" | "roadworks" | "infrastructure"
  status: "in-progress" | "completed"
  location: string
  date: string
  details?: {
    client: string
    area: string
    duration: string
    services: string[]
  }
}

export const projectsData: Project[] = [
  {
    id: "urban-heights-residence",
    title: "Urban Heights Residence",
    description:
      "A modern 12-story residential complex with premium amenities including a rooftop garden, fitness center, and community spaces.",
    image: "/img/projects/UrbanHeights.jpg?height=400&width=600",
    category: "residential",
    status: "completed",
    location: "Mumbai, Maharashtra",
    date: "2023-08-15",
    details: {
      client: "Urban Development Corp",
      area: "45,000 sq ft",
      duration: "24 months",
      services: ["Architectural Design", "Construction", "Interior Finishing"],
    },
  },
  {
    id: "green-valley-villas",
    title: "Green Valley Villas",
    description:
      "Eco-friendly residential community with 24 luxury villas, solar power integration, and rainwater harvesting systems.",
    image: "/img/projects/GreenVilla.jpeg?height=400&width=600",
    category: "residential",
    status: "in-progress",
    location: "Pune, Maharashtra",
    date: "2023-11-10",
    details: {
      client: "Green Homes Ltd",
      area: "32,000 sq ft",
      duration: "18 months",
      services: ["Green Building Design", "Construction", "Landscape Design"],
    },
  },
  {
    id: "tech-park-plaza",
    title: "Tech Park Plaza",
    description:
      "State-of-the-art commercial complex designed for tech companies with smart building features and collaborative spaces.",
    image: "/img/projects/TechPark.jpeg?height=400&width=600",
    category: "commercial",
    status: "completed",
    location: "Bangalore, Karnataka",
    date: "2023-05-22",
    details: {
      client: "TechSpace Developers",
      area: "75,000 sq ft",
      duration: "30 months",
      services: ["Commercial Design", "Construction", "IT Infrastructure"],
    },
  },
  {
    id: "coastal-highway-expansion",
    title: "Coastal Highway Expansion",
    description:
      "Major infrastructure project expanding the coastal highway from 4 to 8 lanes with improved drainage and safety features.",
    image: "/img/projects/CoastalHighway.jpeg?height=400&width=600",
    category: "roadworks",
    status: "in-progress",
    location: "Chennai, Tamil Nadu",
    date: "2024-01-05",
    details: {
      client: "State Highway Authority",
      area: "45 km",
      duration: "36 months",
      services: ["Road Design", "Construction", "Traffic Management"],
    },
  },
  {
    id: "sunrise-mall",
    title: "Sunrise Shopping Mall",
    description:
      "Multi-level shopping complex with entertainment zones, food courts, and underground parking for 500 vehicles.",
    image: "/img/projects/SunriseMall.jpeg?height=400&width=600",
    category: "commercial",
    status: "completed",
    location: "Delhi NCR",
    date: "2022-12-10",
    details: {
      client: "Retail Spaces Inc",
      area: "120,000 sq ft",
      duration: "36 months",
      services: ["Commercial Design", "Construction", "Interior Design"],
    },
  },
  {
    id: "river-bridge-project",
    title: "River Bridge Project",
    description:
      "Construction of a 1.2 km cable-stayed bridge across the river with pedestrian walkways and scenic viewing points.",
    image: "/img/projects/RiverBridge.jpeg?height=400&width=600",
    category: "infrastructure",
    status: "in-progress",
    location: "Ahmedabad, Gujarat",
    date: "2023-09-30",
    details: {
      client: "City Development Authority",
      area: "1.2 km",
      duration: "48 months",
      services: ["Structural Engineering", "Construction", "Environmental Assessment"],
    },
  },
  {
    id: "lakeside-apartments",
    title: "Lakeside Apartments",
    description:
      "Premium residential complex with 120 units overlooking the lake, featuring private balconies and community amenities.",
    image: "/img/projects/LakeSide.jpeg?height=400&width=600",
    category: "residential",
    status: "completed",
    location: "Hyderabad, Telangana",
    date: "2022-07-15",
    details: {
      client: "Lakefront Properties",
      area: "65,000 sq ft",
      duration: "30 months",
      services: ["Architectural Design", "Construction", "Landscape Design"],
    },
  },
  {
    id: "metro-station-complex",
    title: "Metro Station Complex",
    description:
      "Integrated metro station with commercial spaces, parking facilities, and pedestrian-friendly access points.",
    image: "/img/projects/MetroStation.jpeg?height=400&width=600",
    category: "infrastructure",
    status: "in-progress",
    location: "Kolkata, West Bengal",
    date: "2023-10-18",
    details: {
      client: "Metro Rail Corporation",
      area: "35,000 sq ft",
      duration: "42 months",
      services: ["Transit Design", "Construction", "Civil Engineering"],
    },
  },
  {
    id: "business-tower",
    title: "Business Tower",
    description:
      "25-story premium office tower with smart building technology, sustainable design, and panoramic city views.",
    image: "/img/projects/BusinessTower.jpeg?height=400&width=600",
    category: "commercial",
    status: "completed",
    location: "Gurgaon, Haryana",
    date: "2022-11-30",
    details: {
      client: "Corporate Spaces Ltd",
      area: "150,000 sq ft",
      duration: "36 months",
      services: ["Commercial Design", "Construction", "MEP Engineering"],
    },
  },
]

