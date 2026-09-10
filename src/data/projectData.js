/**
 * ARRJAVA FARMS - PROJECT DATA (SINGLE SOURCE OF TRUTH)
 * STRICTLY VERIFIED FROM OFFICIAL BROCHURE, DETAILS.TXT & LOCATION FILES.
 * NO FABRICATED OR INVENTED METRICS.
 */

export const PROJECT_INFO = {
  name: "ARRJAVA FARMS",
  tagline: "Premium Residential Conversion Open Plots",
  locationShort: "Begumpet Village, Near Patancheru, Mumbai Highway",
  locationFull: "Begumpet Village, Near Patancheru, Mumbai Highway, Hyderabad Growth Corridor",
  status: "Open for Immediate House Construction",
  category: "Residential Conversion Open Plots",
  googleMapsUrl: "https://maps.app.goo.gl/NSEq9WatTgAuHTis5?g_st=awb",
  brochurePdfUrl: "/assets/brochure/Arrjava_Farms_Brochure.pdf",
  walkthroughVideoUrl: "/assets/videos/walkthrough-3d.mp4",
  disclaimer: "NOTE: This website and brochure are conceptual representations and not a legal offering. The promoters reserve the right to make changes in the layout and specifications as deemed fit in compliance with regulatory authorities."
};

export const NAVIGATION_SECTIONS = [
  { id: "hero", label: "Overview", index: "01" },
  { id: "intro", label: "Introduction", index: "02" },
  { id: "vision", label: "The Vision", index: "03" },
  { id: "glance", label: "At a Glance", index: "04" },
  { id: "location", label: "Location", index: "05" },
  { id: "connectivity", label: "Connectivity", index: "06" },
  { id: "masterplan", label: "Master Plan", index: "07" },
  { id: "layouts", label: "CAD Layouts", index: "08" },
  { id: "features", label: "Features", index: "09" },
  { id: "amenities", label: "Amenities", index: "10" },
  { id: "lifestyle", label: "Lifestyle", index: "11" },
  { id: "slideshow", label: "Photo Slideshow", index: "12" },
  { id: "experience", label: "Site Photos", index: "13" },
  { id: "walkthrough", label: "3D Walkthrough", index: "14" },
  { id: "gallery", label: "Gallery", index: "15" },
  { id: "status", label: "Development", index: "16" },
  { id: "why-arrjava", label: "Why Arrjava", index: "17" },
  { id: "developer", label: "About Abhista", index: "18" },
  { id: "faq", label: "FAQ", index: "19" },
  { id: "visit", label: "Site Visit", index: "20" }
];

export const HIGHLIGHTS_LIST = [
  {
    id: "hmda-rrr",
    title: "Inside HMDA & Upcoming RRR",
    desc: "Positioned within HMDA limits and strategically located inside the upcoming Regional Ring Road growth belt.",
    icon: "ShieldCheck",
    tag: "Regulatory Advantage"
  },
  {
    id: "immediate-construction",
    title: "Immediate House Construction",
    desc: "Residential conversion open plots ready for you to build your custom weekend home, farm retreat, or residential house.",
    icon: "Hammer",
    tag: "Ready to Build"
  },
  {
    id: "water-security",
    title: "Bore & Manjeera Water Facility",
    desc: "Reliable dual water infrastructure with complete internal waterline distribution provisions.",
    icon: "Droplets",
    tag: "Essential Utility"
  },
  {
    id: "wet-mix-roads",
    title: "Wet Mix Roads & Curbing Stones",
    desc: "Engineered wide internal wet-mix road network with yellow-black painted curbing demarcation stones.",
    icon: "Compass",
    tag: "Infrastructure"
  },
  {
    id: "avenue-plantation",
    title: "Mature Mango & Avenue Plantations",
    desc: "Lush green environment featuring preserved mango groves, landscaped avenues, and tree-lined walkways.",
    icon: "Trees",
    tag: "Nature First"
  },
  {
    id: "lifestyle-club",
    title: "Club House, Pool & Cottages",
    desc: "Community retreat featuring swimming pool, guest cottages, children's park, and consecrated temple.",
    icon: "Home",
    tag: "Lifestyle Amenities"
  }
];

export const CONNECTIVITY_DATA = [
  {
    distance: "1 KM",
    time: "2 Mins",
    destination: "Narasapur State Highway",
    type: "Highway Arterial",
    description: "Immediate arterial connection linking seamlessly to regional commercial and residential corridors."
  },
  {
    distance: "4 KM",
    time: "5 Mins",
    destination: "Aurobindo Sansa County Integrated Township",
    type: "Integrated Township",
    description: "Major high-density master-planned township driving rapid socioeconomic value and infrastructure development."
  },
  {
    distance: "5 Mins",
    time: "5 Mins",
    destination: "TRR Medical College & Vignan International School",
    type: "Education & Healthcare",
    description: "Premium healthcare infrastructure and renowned educational institutions right within neighborhood reach."
  },
  {
    distance: "10 KM",
    time: "12 Mins",
    destination: "Outer Ring Road (ORR) Junction",
    type: "Expressway",
    description: "Uninterrupted expressway access connecting directly to Financial District, Gachibowli, and Airport."
  },
  {
    distance: "14 KM",
    time: "15 Mins",
    destination: "Patancheru Junction / Mumbai Highway (NH 65)",
    type: "Commercial Hub",
    description: "Established growth nexus blending booming commerce, industrial corridors, and transit interchanges."
  },
  {
    distance: "Direct",
    time: "Inside Corridor",
    destination: "Regional Ring Road (RRR) Corridor",
    type: "Future Expressway",
    description: "Located within the upcoming mega ring expressway unlocking high long-term land value appreciation."
  }
];

export const AMENITIES_CATALOG = [
  {
    title: "Club House & Community Hub",
    category: "Community & Recreation",
    desc: "A thoughtfully planned clubhouse designed for social gatherings, community events, and weekend relaxation.",
    image: "/assets/cropped/entrance-arch-render.png"
  },
  {
    title: "Swimming Pool",
    category: "Wellness & Leisure",
    desc: "Crystal-blue recreational swimming pool nestled amidst natural greenery for refreshing weekend escapes.",
    image: "/assets/cropped/amenity-swimming-pool.jpg"
  },
  {
    title: "Guest Cottages",
    category: "Hospitality & Stays",
    desc: "Charming stay cottages for property owners and guests to experience tranquil overnight weekend living.",
    image: "/assets/photos/cottage-sunset.jpeg"
  },
  {
    title: "Consecrated Ganesha Temple",
    category: "Spiritual Sanctum",
    desc: "Graceful stone-carved temple dedicated to Lord Ganesha set within a circular landscaped paved amphitheater.",
    image: "/assets/photos/ganesha-temple-grand.jpeg"
  },
  {
    title: "Park & Children's Play Area",
    category: "Family & Play",
    desc: "Open green park with modern play structures and safe outdoor recreation spaces for kids and families.",
    image: "/assets/cropped/amenity-playground.jpg"
  },
  {
    title: "Avenue Plantation & Greenery",
    category: "Eco-Landscape",
    desc: "Lush mature mango trees and landscaped avenues bringing fresh unpolluted breeze across every plot.",
    image: "/assets/photos/mango-orchard-curbing.jpg"
  },
  {
    title: "Electricity & Street Lights",
    category: "Infrastructure",
    desc: "Comprehensive electrical network with modern illuminated lamp posts throughout the internal road network.",
    image: "/assets/cropped/amenity-lighting.jpg"
  },
  {
    title: "Bore & Manjeera Water Facility",
    category: "Essential Infrastructure",
    desc: "Dual water source network with dedicated piped waterlines ensuring uninterrupted water supply.",
    image: "/assets/extracted/pdf-image-3.jpg"
  },
  {
    title: "Wet Mix Roads & Curbing",
    category: "Road Infrastructure",
    desc: "Wide wet mix road corridors framed with yellow-black painted boundary curbing stones for clear demarcation.",
    image: "/assets/cropped/amenity-curbing.jpg"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "site-temple-1",
    title: "Consecrated Ganesha Temple & Paved Plaza",
    category: "Temple & Culture",
    type: "image",
    src: "/assets/photos/ganesha-temple-grand.jpeg",
    caption: "Actual on-ground photograph of the consecrated Lord Ganesha stone canopy with surrounding circular paved walkway and bamboo garden."
  },
  {
    id: "site-temple-2",
    title: "Temple Pooja Ritual & Consecration Ceremony",
    category: "Temple & Culture",
    type: "image",
    src: "/assets/photos/ganesha-temple-pooja.jpg",
    caption: "Traditional Vedic pooja and floral consecration ritual at the Arrjava Farms temple shrine."
  },
  {
    id: "site-orchard-1",
    title: "Mango Orchard & Boundary Demarcation",
    category: "Site & Land",
    type: "image",
    src: "/assets/photos/mango-orchard-curbing.jpg",
    caption: "Mature fruit-bearing mango trees with demarcated boundary markers and painted curb stones across the property."
  },
  {
    id: "site-plots-2",
    title: "Levelled Open Residential Plots",
    category: "Site & Land",
    type: "image",
    src: "/assets/photos/open-plots-boundary.jpg",
    caption: "Wide open, clearly demarcated residential conversion open plots ready for immediate house construction."
  },
  {
    id: "site-cottage-1",
    title: "Weekend Cottages Under Development",
    category: "Development",
    type: "image",
    src: "/assets/photos/cottage-sunset.jpeg",
    caption: "Actual on-site construction progress of the guest cottages and community retreat structures captured at sunset."
  },
  {
    id: "site-gazebo-1",
    title: "Outdoor Canopy Lounge & Gazebo",
    category: "Lifestyle & Orchards",
    type: "image",
    src: "/assets/photos/gazebo-lounge.jpeg",
    caption: "Shaded tensile canopy seating pavilion set amidst natural mango trees for peaceful outdoor moments."
  },
  {
    id: "layout-master-plan",
    title: "Comprehensive Master Layout & Sector Plan",
    category: "Architecture & Layout",
    type: "image",
    src: "/assets/layouts/layout-master-comprehensive-1.png",
    pdfSrc: "/assets/layouts/arrjava-master-layout-comprehensive.pdf",
    caption: "Official comprehensive master development layout plan featuring the 40'/30'/28' road grid, 6,631.07 Sq.Yd central open space, standard 151.5 & 181.5 sq.yd plots, estate farm parcels, and sold-out phase demarcations."
  },
  {
    id: "layout-location-plots",
    title: "Location & Plot Subdivision Map (Gunthas & Sq Yds)",
    category: "Architecture & Layout",
    type: "image",
    src: "/assets/layouts/layout-location-plots-1.png",
    pdfSrc: "/assets/layouts/arrjava-location-plots-map.pdf",
    caption: "Detailed plot subdivision and location map showing standard 107 & 151.5 Sq.Yd plots alongside large 3G, 4G, 5G, 7G, 10G & 11G estate farm plots with 40' and 30' wide roads."
  },
  {
    id: "render-entrance",
    title: "Grand Entrance Arch Gate Architecture",
    category: "Architecture & Layout",
    type: "image",
    src: "/assets/cropped/entrance-arch-render.png",
    caption: "Architectural elevation of the grand curved timber arch gate with stone cladding, security cabin, and paved entrance."
  },
  {
    id: "doc-highlights",
    title: "Project Highlights & Amenities Layout",
    category: "Architecture & Layout",
    type: "image",
    src: "/assets/extracted/pdf-image-3.jpg",
    caption: "Official brochure master highlights scan outlining the 12 key project deliverables and amenities."
  },
  {
    id: "doc-route-map",
    title: "Official Route & Connectivity Map",
    category: "Location & Maps",
    type: "image",
    src: "/assets/cropped/route-map-full.png",
    caption: "Official connectivity map detailing the ORR, RRR, Mumbai Highway (NH 65), and major landmarks."
  },
  {
    id: "video-walkthrough",
    title: "Official 2-Minute 3D Walkthrough Tour",
    category: "Videos",
    type: "video",
    src: "/assets/videos/walkthrough-3d.mp4",
    poster: "/assets/cropped/entrance-arch-render.png",
    caption: "Complete 3D cinematic walkthrough showcasing the master development, landscaping, clubhouse, and lifestyle amenities."
  }
];

export const DEVELOPMENT_TIMELINE = [
  {
    stage: "Completed & Consecrated",
    title: "Ganesha Temple & Plaza",
    status: "Active",
    desc: "The consecrated Lord Ganesha stone canopy and circular paved amphitheater plaza are fully built on site.",
    date: "Established",
    image: "/assets/photos/ganesha-temple-grand.jpeg"
  },
  {
    stage: "In Progress / Active",
    title: "Plot Demarcation & Curbing Stones",
    status: "In Progress",
    desc: "Boundary stones installed, internal road alignments laid out with painted curbing stones and boundary fencing.",
    date: "Current Status",
    image: "/assets/photos/mango-orchard-curbing.jpg"
  },
  {
    stage: "Under Construction",
    title: "Weekend Cottages & Retreat",
    status: "Under Construction",
    desc: "Structural masonry and plastering of guest cottages and retreat infrastructure actively progressing.",
    date: "Active Development",
    image: "/assets/photos/cottage-sunset.jpeg"
  },
  {
    stage: "Completed & Maintained",
    title: "Avenue & Mango Plantation",
    status: "Maintained",
    desc: "Mature mango grove nurtured with avenue tree plantation along internal road corridors.",
    date: "Established",
    image: "/assets/photos/gazebo-lounge.jpeg"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Where exactly is Arrjava Farms located?",
    answer: "Arrjava Farms is located at Begumpet Village, near Patancheru and the Mumbai Highway (NH 65), in the rapidly developing growth corridor of Sangareddy/Hyderabad. It is just 1 KM from the Narasapur State Highway, 4 KM from Aurobindo Sansa County, 10 KM from the Outer Ring Road (ORR), and 14 KM from Patancheru Junction."
  },
  {
    question: "What type of development is Arrjava Farms?",
    answer: "Arrjava Farms offers Premium Residential Conversion Open Plots. These open plots give you full freedom and flexibility to build your own custom farm house, private family retreat, or weekend home in a well-planned, gated green community."
  },
  {
    question: "Can I start house construction immediately?",
    answer: "Yes. Arrjava Farms is planned with immediate house construction readiness, complete with boundary curbing, internal wet mix road corridors, waterline network, and electricity provisions."
  },
  {
    question: "What are the water facilities provided at Arrjava Farms?",
    answer: "Arrjava Farms features a reliable dual water system including both Bore water and Manjeera water facilities, accompanied by complete internal waterline distribution to the plots."
  },
  {
    question: "What amenities are included in the project?",
    answer: "The project includes a Club House, Swimming Pool, Guest Cottages, Consecrated Ganesha Temple, Avenue Plantation, Parks & Children's Play Area, Wet Mix Roads, Curbing Stones, Electricity with Street Lights, and Waterline Infrastructure."
  },
  {
    question: "Is the project inside HMDA limits and the RRR corridor?",
    answer: "Yes, Arrjava Farms is situated inside HMDA limits and is positioned directly within the upcoming Regional Ring Road (RRR) corridor, ensuring excellent long-term capital appreciation and infrastructure growth."
  },
  {
    question: "How can I schedule a personal site visit?",
    answer: "You can schedule a site visit through our presentation portal, contact our sales coordinators directly via Call or WhatsApp, or navigate directly to the property using our verified Google Maps location link."
  }
];

export const ABHISTA_INFO = {
  name: "ABHISTA",
  tagline: "Shaping Spaces, Enriching Lives",
  description: "Abhista is a forward-thinking real estate development company known for creating value-driven residential layouts, farm communities, and thoughtfully planned living environments. With an unwavering commitment to legal transparency, quality infrastructure, and strategic location selection, Abhista develops projects that offer both exceptional lifestyle quality and enduring asset appreciation.",
  address: "Plot No: 109, Street No-3, Kakatiya Hills, Madhapur, Hyderabad - 500081",
  website: "www.abhista.in",
  pillars: [
    {
      title: "Strategic Corridor Selection",
      desc: "Carefully choosing high-growth corridors within HMDA and RRR boundaries for maximum long-term value."
    },
    {
      title: "Nature-Centric Planning",
      desc: "Preserving mature greenery and orchards to offer balanced, tranquil lifestyle living."
    },
    {
      title: "Infrastructure Quality",
      desc: "Delivering engineered wet-mix roads, dual water sources (Bore & Manjeera), curbing, and power."
    },
    {
      title: "Customer Trust & Transparency",
      desc: "Clear legal approvals, residential conversion titles, and customer-first project execution."
    }
  ]
};
