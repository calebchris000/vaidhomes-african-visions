import {
  Building2,
  Building,
  Home,
  Map,
  Trees,
  Store,
  Cog,
  Factory,
  Wrench,
  Battery,
  Ship,
  Cpu,
  MousePointer,
  Monitor,
  Image,
  PaintBucket,
  Signpost,
  Pencil,
  LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Image imports
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { images } from "@/assets/images/image";
import { useParams } from "react-router-dom";
import salome from "@/assets/videos/salome.mp4";
import architectureVideo from "@/assets/videos/architectural-models.mp4";
import fatimaVideo from "@/assets/videos/hero-video.mp4";

// Data structure interfaces
interface Project {
  id: string;
  title: string;
  image: string;
  type?: string;
  description: string;
}

interface Subcategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  projectCount: number;
  projects: Project[];
}

interface Category {
  title: string;
  description: string;
  icon: LucideIcon;
  subcategories: Subcategory[];
}

// Data source
const categoryData: Record<string, Category> = {
  "architectural-models": {
    title: "Architectural Models",
    description:
      "Precision-crafted scale models for architectural visualization and planning.",
    icon: Building2,
    subcategories: [
      {
        id: "office-building",
        title: "Office Building Models",
        description: "Shopping mall model",
        icon: Building,
        image: images.image2, // First image for subcategory hero
        projectCount: 6,
        projects: [
          {
            id: "office1",
            title: "Tafsalone Micro City Project",
            image: fatimaVideo,
            type: "video",
            description: "5000 units tafsalone micro city project shot",
          },
          {
            id: "office2",
            title: "Business Park Masterplan",
            image: images.image3,
            description:
              "Comprehensive model showcasing the layout of a multi-building business park.",
          },
          {
            id: "office3",
            title: "High-Rise Office Tower",
            image: images.image4,
            description: "Office Tower",
          },
          {
            id: "office4",
            title: "Residential Models",
            image: images.image5,
            description: "Residential Models",
          },
          {
            id: "office5",
            title: "Interior model",
            image: images.image6,
            description: "Interior model",
          },
          {
            id: "office6",
            title: "Real Estate Synages",
            image: images.image7,
            description: "Real Estate Synages.",
          },
        ],
      },
      {
        id: "residential-building",
        title: "Commercial Models",
        description: "Commercial Models",
        icon: Home,
        image: images.image8, // Subcategory hero image
        projectCount: 10,
        projects: [
          {
            id: "res1",
            title: "Commercial Models",
            image: images.image8,
            description: "Commercial Models",
          },
          {
            id: "res2",
            title: "Urban models",
            image: images.image9,
            description: "",
          },
          {
            id: "res3",
            title: "TAF Africa Global Urban Development",
            image: images.image10,
            description:
              "An ambitious urban development project for TAF Africa Global, transforming forest areas into vibrant cities in Sierra Leone. This special design integrates the nation's majestic mountains and beautiful water bodies, showcasing our industrious team's dedication and service. Model Size: 2400 X 4200.",
          },
          {
            id: "res4",
            title: "Urban model",
            image: images.image11,
            description:
              "Client: TAF Africa Global. Model Size: 2400 X 4200. Turning forest into cities, this urban project is too special for the people of Sierra Leone as their mountains were captured and their water bodies incorporated into the designs. This project is a testament to our industrious team and dedicated service.",
          },
          {
            id: "res5",
            title: "3d designs",
            image: images.image12,
            description: "",
          },
          {
            id: "res6",
            title: "3d designs",
            image: images.image13,
            description: "",
          },
          {
            id: "res7",
            title: "Arizon Estate",
            image: images.image14,
            description:
              "Scale 1:1000. Size 1.5m by 2.4m. Arizon Estate model by Vaidhomes for Zylus Group International.",
          },
          {
            id: "res8",
            title: "Arizon Estate Model - Detailed Section",
            image: images.image15,
            description:
              "A section of the Arizon Estate model, showcasing detailed features. Scale 1:1000, Size 1.5m by 2.4m. Model by Vaidhomes for Zylus Group International.",
          },
          {
            id: "res9",
            title: "Arizon Estate Model - Broader Perspective",
            image: images.image16,
            description:
              "A broader perspective of the Arizon Estate model, highlighting its layout. Scale 1:1000, Size 1.5m by 2.4m. Model by Vaidhomes for Zylus Group International.",
          },
          {
            id: "res10",
            title: "Arizon Estate Model - Specific Feature",
            image: images.image17,
            description:
              "Showcasing a specific feature within the Arizon Estate model. Scale 1:1000, Size 1.5m by 2.4m. Model by Vaidhomes for Zylus Group International.",
          },
        ],
      },
      {
        id: "urban-planning",
        title: "Urban Planning Models",
        description:
          "Comprehensive models for city planning, regional development, and large-scale infrastructure projects.",
        icon: Map,
        image: images.image18, // Subcategory hero image
        projectCount: 8,
        projects: [
          {
            id: "urban1",
            title: "Arizon Estate Urban Masterplan",
            image: images.image18,
            description:
              "Comprehensive masterplan of the Arizon Estate, model by Vaidhomes for Zylus Group International. Scale 1:1000, Size 1.5m by 2.4m.",
          },
          {
            id: "urban2",
            title: "Arizon Estate Integrated Urban Development",
            image: images.image19,
            description:
              "Detailed model of Arizon Estate showing integration with urban infrastructure, by Vaidhomes for Zylus Group International. Scale 1:1000, Size 1.5m by 2.4m.",
          },
          {
            id: "urban3",
            title: "Arizon Estate Layout Overview",
            image: images.image20,
            description:
              "An expansive overview of the Arizon Estate layout, crafted by Vaidhomes for Zylus Group International. Scale 1:1000, Size 1.5m by 2.4m.",
          },
          {
            id: "urban4",
            title: "Arizon Estate Infrastructure Planning",
            image: images.image21,
            description:
              "Detailed planning model of Arizon Estate's infrastructure, by Vaidhomes for Zylus Group International. Scale 1:1000, Size 1.5m by 2.4m.",
          },
          {
            id: "urban5",
            title: "Marriott Hotel Ikeja Model - Exterior View",
            image: images.image22,
            description:
              "Scale 1:200. Size: 0.45m by 0.6m. Don't say you've never visited Marriott Hotels, because you just did! This is their standard and exact representation of Marriott Hotels Ikeja Lagos, proudly modeled by Vaidhomes and Models Ltd.",
          },
          {
            id: "urban6",
            title: "Marriott Hotel Ikeja Model - Detailed Perspective",
            image: images.image23,
            description:
              "Scale 1:200. Size: 0.45m by 0.6m. Don't say you've never visited Marriott Hotels, because you just did! This is their standard and exact representation of Marriott Hotels Ikeja Lagos, proudly modeled by Vaidhomes and Models Ltd.",
          },
          {
            id: "urban7",
            title: "Marriott Hotel Ikeja Model - Frontal Aspect",
            image: images.image24,
            description:
              "Scale 1:200. Size: 0.45m by 0.6m. Don't say you've never visited Marriott Hotels, because you just did! This is their standard and exact representation of Marriott Hotels Ikeja Lagos, proudly modeled by Vaidhomes and Models Ltd.",
          },
          {
            id: "urban8",
            title: "Marriott Hotel Ikeja Model - Aerial Overview",
            image: images.image25,
            description:
              "Scale 1:200. Size: 0.45m by 0.6m. Don't say you've never visited Marriott Hotels, because you just did! This is their standard and exact representation of Marriott Hotels Ikeja Lagos, proudly modeled by Vaidhomes and Models Ltd.",
          },
        ],
      },
      {
        id: "landscape",
        title: "Landscape Models",
        description:
          "Captivating models showcasing terrain, greenery, outdoor spaces, and environmental designs.",
        icon: Trees,
        image: images.image26, // Subcategory hero image
        projectCount: 10,
        projects: [
          {
            id: "land1",
            title: "Marriott Hotels Ikeja Lagos Model",
            image: images.image26,
            description:
              "Scale 1:200. Size: 0.45m by 0.6m. Don't say you've never visited Marriott Hotels, because you just did! This is their standard and exact representation of Marriott Hotels Ikeja Lagos, proudly modeled by Vaidhomes and Models Ltd.",
          },
          {
            id: "land2",
            title: "Marriott Hotels Ikeja Lagos Model",
            image: images.image27,
            description:
              "Scale 1:200. Size: 0.45m by 0.6m. Don't say you've never visited Marriott Hotels, because you just did! This is their standard and exact representation of Marriott Hotels Ikeja Lagos, proudly modeled by Vaidhomes and Models Ltd.",
          },
          {
            id: "land3",
            title: "Marriott Hotels Ikeja Lagos Model",
            image: images.image28,
            description:
              "Scale 1:200. Size: 0.45m by 0.6m. Don't say you've never visited Marriott Hotels, because you just did! This is their standard and exact representation of Marriott Hotels Ikeja Lagos, proudly modeled by Vaidhomes and Models Ltd.",
          },
          {
            id: "land4",
            title: "Marriott Hotels Ikeja Lagos Model",
            image: images.image29,
            description:
              "Scale 1:200. Size: 0.45m by 0.6m. Don't say you've never visited Marriott Hotels, because you just did! This is their standard and exact representation of Marriott Hotels Ikeja Lagos, proudly modeled by Vaidhomes and Models Ltd.",
          },
          {
            id: "land5",
            title: "Marriott Hotels Ikeja Lagos Model",
            image: images.image30,
            description:
              "Scale 1:200. Size: 0.45m by 0.6m. Don't say you've never visited Marriott Hotels, because you just did! This is their standard and exact representation of Marriott Hotels Ikeja Lagos, proudly modeled by Vaidhomes and Models Ltd.",
          },
          {
            id: "land6",
            title: "Marriott Hotels Ikeja Lagos Model",
            image: images.image31,
            description:
              "Scale 1:200. Size: 0.45m by 0.6m. Don't say you've never visited Marriott Hotels, because you just did! This is their standard and exact representation of Marriott Hotels Ikeja Lagos, proudly modeled by Vaidhomes and Models Ltd.",
          },
          {
            id: "land7",
            title: "7 Star Property Office Project - Exterior View",
            image: images.image32,
            description:
              "Scale model (1:200) showcasing the exterior of a prestigious 7-star office property.",
          },
          {
            id: "land8",
            title: "7 Star Property Office Project - Detailed Facade",
            image: images.image33,
            description:
              "Scale model (1:200) highlighting the intricate facade details of the 7-star office property.",
          },
          {
            id: "land9",
            title: "7 Star Property Office Project - Lobby Interior",
            image: images.image34,
            description:
              "Scale model (1:200) providing a glimpse into the luxurious lobby interior of the 7-star office property.",
          },
          {
            id: "land10",
            title: "7 Star Property Office Project - Aerial Overview",
            image: images.image35,
            description:
              "Scale model (1:200) offering an aerial perspective of the entire 7-star office property development.",
          },
        ],
      },
      {
        id: "commercial",
        title: "Commercial Building Models",
        description:
          "Models for retail, hospitality, and mixed-use commercial developments, emphasizing consumer experience and functionality.",
        icon: Store,
        image: images.image36, // Subcategory hero image
        projectCount: 8,
        projects: [
          {
            id: "comm1",
            title: "Bolidon Lagos 21-Storey Edifice",
            image: images.image36,
            description:
              "A meticulously crafted human-size model of a 21-storey building located in the heart of Bolidon, Lagos. Model size: 1.5m (height) x 0.45m (width), tastefully finished for your viewing pleasure.",
          },
          {
            id: "comm2",
            title: "Zenith Street Victoria Island 12-Storey Building",
            image: images.image37,
            description:
              "A human-size model of a 12-storey building plotted on Zenith Street, Victoria Island, Lagos. Model size: 1.5m (height) x 0.45m (width), exquisitely finished for your viewing pleasure.",
          },
          {
            id: "comm3",
            title: "Great piece",
            image: images.image38,
            description:
              "residential model prototypes from our stable. Scale 1:200",
          },
          {
            id: "comm4",
            title: "Great piece",
            image: images.image39,
            description:
              "residential model prototypes from our stable. Scale 1:200",
          },
          {
            id: "comm5",
            title: "Great piece",
            image: images.image40,
            description:
              "residential model prototypes from our stable. Scale 1:200",
          },
          {
            id: "comm6",
            title: "Great piece",
            image: images.image41,
            description:
              "residential model prototypes from our stable. Scale 1:200",
          },
          {
            id: "comm7",
            title: "Residential Models",
            image: images.image42,
            description:
              "residential model prototypes from our stable. Scale 1:200",
          },
          {
            id: "comm8",
            title: "Residential Models",
            image: images.image43,
            description:
              "residential model prototypes from our stable. Scale 1:200",
          },
        ],
      },
    ],
  },
  "industrial-models": {
    title: "Industrial Models",
    description:
      "Detailed scale models for industrial facilities, manufacturing plants, infrastructure, and heavy machinery.",
    icon: Cog,
    subcategories: [
      {
        id: "plant-layout",
        title: "Plant Layout Models",
        description:
          "Precision models illustrating industrial plant layouts, equipment placement, and operational flows.",
        icon: Factory,
        image: images.image44, // Subcategory hero image
        projectCount: 6,
        projects: [
          {
            id: "plant1",
            title: "Residential Models",
            image: images.image44,
            description:
              "Scale 1:200. residential model prototypes from our stable.",
          },
          {
            id: "plant2",
            title: "Residential Models",
            image: images.image45,
            description:
              "Scale 1:200. residential model prototypes from our stable.",
          },
          {
            id: "plant3",
            title: "Abuja Model - Listo Construction - 1",
            image: images.image46,
            description:
              "Abuja model by Vaidhomes and Models for Listo Construction Company. Scale 1:100. Size: 0.45m by 0.6m.",
          },
          {
            id: "plant4",
            title: "Abuja Model - Listo Construction - 2",
            image: images.image47,
            description:
              "Abuja model by Vaidhomes and Models for Listo Construction Company. Scale 1:100. Size: 0.45m by 0.6m.",
          },
          {
            id: "plant5",
            title: "Abuja Model - Listo Construction - 3",
            image: images.image48,
            description:
              "Abuja model by Vaidhomes and Models for Listo Construction Company. Scale 1:100. Size: 0.45m by 0.6m.",
          },
          {
            id: "plant6",
            title: "Abuja Model - Listo Construction - 4",
            image: images.image49,
            description:
              "Abuja model by Vaidhomes and Models for Listo Construction Company. Scale 1:100. Size: 0.45m by 0.6m.",
          },
        ],
      },
      {
        id: "machinery",
        title: "Machinery Models",
        description:
          "Accurate scale models of various industrial machines, heavy equipment, and specialized tools.",
        icon: Wrench,
        image: images.image50, // Subcategory hero image
        projectCount: 4,
        projects: [
          {
            id: "mach1",
            title: "Abuja Model - Listo Construction - 5",
            image: images.image50,
            description:
              "Abuja model by Vaidhomes and Models for Listo Construction Company. Scale 1:100. Size: 0.45m by 0.6m.",
          },
          {
            id: "tiwa-garden1",
            title: "Tiwa Garden by Vaidhomes Ltd",
            image: images.image51,
            description:
              "Scale: 1:500. Size: to fit. This detailed model showcases the master plan and amenities of Tiwa Garden, meticulously crafted by Vaidhomes Ltd.",
          },
          {
            id: "tiwa-garden2",
            title: "Tiwa Garden by Vaidhomes Ltd",
            image: images.image52,
            description:
              "Scale: 1:500. Size: to fit. This detailed model showcases the master plan and amenities of Tiwa Garden, meticulously crafted by Vaidhomes Ltd.",
          },
          {
            id: "tiwa-garden3",
            title: "Tiwa Garden by Vaidhomes Ltd",
            image: images.image53,
            description:
              "Scale: 1:500. Size: to fit. This detailed model showcases the master plan and amenities of Tiwa Garden, meticulously crafted by Vaidhomes Ltd.",
          },
        ],
      },
      {
        id: "energy-infrastructure",
        title: "Energy Infrastructure Models",
        description:
          "Models depicting energy production, transmission, and distribution infrastructure, including renewable sources.",
        icon: Battery,
        image: images.image54, // Subcategory hero image
        projectCount: 4,
        projects: [
          {
            id: "energy1",
            title: "Tiwa Garden by Vaidhomes Ltd",
            image: images.image54,
            description:
              "Scale: 1:500. Size: to fit. This detailed model showcases the master plan and amenities of Tiwa Garden, meticulously crafted by Vaidhomes Ltd.",
          },
          {
            id: "energy2",
            title: "TAF Salone Residential Model",
            image: images.image55,
            description:
              "Simple Residential models designs attentively model by vaidhomes and models to reflect the different housing units for taf Salone, taf city and greater taf city projects in Sierra Leone, The Gambia And Nigeria.",
          },
          {
            id: "energy3",
            title: "TAF City Residential Model",
            image: images.image56,
            description:
              "Simple Residential models designs attentively model by vaidhomes and models to reflect the different housing units for taf Salone, taf city and greater taf city projects in Sierra Leone, The Gambia And Nigeria.",
          },
          {
            id: "energy4",
            title: "Greater TAF City Residential Model",
            image: images.image57,
            description:
              "Simple Residential models designs attentively model by vaidhomes and models to reflect the different housing units for taf Salone, taf city and greater taf city projects in Sierra Leone, The Gambia And Nigeria.",
          },
        ],
      },
      {
        id: "transportation-models",
        title: "Transportation Models",
        description:
          "Models of various transportation systems, vehicles, and their supporting infrastructure.",
        icon: Ship,
        image: images.image58, // Subcategory hero image
        projectCount: 4,
        projects: [
          {
            id: "trans1",
            title: "TAF Residential Models",
            image: images.image58,
            description:
              "Simple Residential models designs attentively model by vaidhomes and models to reflect the different housing units for taf Salone, taf city and greater taf city projects in Sierra Leone, The Gambia And Nigeria.",
          },
          {
            id: "trans2",
            title: "TAF Residential Models",
            image: images.image59,
            description:
              "Simple Residential models designs attentively model by vaidhomes and models to reflect the different housing units for taf Salone, taf city and greater taf city projects in Sierra Leone, The Gambia And Nigeria.",
          },
          {
            id: "trans3",
            title: "TAF Residential Models",
            image: images.image60,
            description:
              "Simple Residential models designs attentively model by vaidhomes and models to reflect the different housing units for taf Salone, taf city and greater taf city projects in Sierra Leone, The Gambia And Nigeria.",
          },
          {
            id: "trans4",
            title: "TAF Residential Models",
            image: images.image61,
            description:
              "Simple Residential models designs attentively model by vaidhomes and models to reflect the different housing units for taf Salone, taf city and greater taf city projects in Sierra Leone, The Gambia And Nigeria.",
          },
        ],
      },
    ],
  },
  "interactive-technology": {
    title: "Interactive Technology",
    description:
      "Integrating digital interfaces, dynamic features, and multimedia into models for immersive and engaging experiences.",
    icon: Cpu,
    subcategories: [
      {
        id: "interactive-scale",
        title: "Interactive Scale Models",
        description:
          "Models enhanced with embedded digital elements, touchscreens, and projections for interactive presentations and data display.",
        icon: MousePointer,
        image: images.image62, // Subcategory hero image
        projectCount: 6,
        projects: [
          {
            id: "inter1",
            title: "TAF Salone Residential Model",
            image: images.image62,
            description:
              "Simple Residential models designs attentively model by vaidhomes and models to reflect the different housing units for taf Salone, taf city and greater taf city projects in Sierra Leone, The Gambia And Nigeria.",
          },
          {
            id: "inter2",
            title: "TAF City Residential Model",
            image: images.image63,
            description:
              "Simple Residential models designs attentively model by vaidhomes and models to reflect the different housing units for taf Salone, taf city and greater taf city projects in Sierra Leone, The Gambia And Nigeria.",
          },
          {
            id: "inter3",
            title: "Greater TAF City Residential Model",
            image: images.image64,
            description:
              "Simple Residential models designs attentively model by vaidhomes and models to reflect the different housing units for taf Salone, taf city and greater taf city projects in Sierra Leone, The Gambia And Nigeria.",
          },
          {
            id: "inter4",
            title: "TAF Residential Models",
            image: images.image65,
            description:
              "Simple Residential models designs attentively model by vaidhomes and models to reflect the different housing units for taf Salone, taf city and greater taf city projects in Sierra Leone, The Gambia And Nigeria.",
          },
          {
            id: "inter5",
            title: "TAF Residential Models",
            image: images.image66,
            description:
              "Simple Residential models designs attentively model by vaidhomes and models to reflect the different housing units for taf Salone, taf city and greater taf city projects in Sierra Leone, The Gambia And Nigeria.",
          },
          {
            id: "inter6",
            title: "TAF Residential Models",
            image: images.image67,
            description:
              "Simple Residential models designs attentively model by vaidhomes and models to reflect the different housing units for taf Salone, taf city and greater taf city projects in Sierra Leone, The Gambia And Nigeria.",
          },
        ],
      },
    ],
  },
  "3d-visualization": {
    title: "3D Visualization",
    description:
      "Creating photorealistic digital renderings, animations, and virtual tours for architectural, real estate, and design projects.",
    icon: Monitor,
    subcategories: [
      {
        id: "interior-rendering",
        title: "Interior Rendering",
        description:
          "Photorealistic 3D renderings of interior spaces, showcasing design, ambiance, material finishes, and furniture layouts.",
        icon: PaintBucket,
        image: images.image68, // Subcategory hero image
        projectCount: 4,
        projects: [
          {
            id: "intrend1",
            title: "Levitikal Realities Residential Model - Exterior",
            image: images.image68,
            description:
              "Scale 1:200. Size 0.500m by 0.600m. An 11-storey residential project model for Levitikal Realities, crafted by Vaidhomes.",
          },
          {
            id: "intrend2",
            title: "Levitikal Realities Residential Model - Aerial View",
            image: images.image69,
            description:
              "Scale 1:200. Size 0.500m by 0.600m. Aerial overview of the 11-storey residential project for Levitikal Realities.",
          },
          {
            id: "intrend3",
            title: "Levitikal Realities Residential Model - Front Facade",
            image: images.image70,
            description:
              "Scale 1:200. Size 0.500m by 0.600m. Frontal view of the 11-storey residential project for Levitikal Realities.",
          },
          {
            id: "intrend4",
            title: "Levitikal Realities Residential Model - Detailed Section",
            image: images.image71,
            description:
              "Scale 1:200. Size 0.500m by 0.600m. A detailed section of the 11-storey residential project for Levitikal Realities.",
          },
        ],
      },
      {
        id: "real-estate-signage",
        title: "Real Estate Signage",
        description:
          "Custom-designed and rendered signage concepts for real estate promotions, property identification, and development announcements.",
        icon: Signpost,
        image: images.image72, // Subcategory hero image
        projectCount: 4,
        projects: [
          {
            id: "sign1",
            title: "Levitikal Realities Residential Model - General View 1",
            image: images.image72,
            description:
              "Scale 1:200. Size 0.500m by 0.600m. An 11-storey residential project model for Levitikal Realities, crafted by Vaidhomes.",
          },
          {
            id: "sign2",
            title: "Levitikal Realities Residential Model - General View 2",
            image: images.image73,
            description:
              "Scale 1:200. Size 0.500m by 0.600m. An 11-storey residential project model for Levitikal Realities, crafted by Vaidhomes.",
          },
          {
            id: "sign3",
            title: "Meridian Tower Model - Front View",
            image: images.image74,
            description:
              "Scale 1:400. Size: height 1.5m width 0.300. A meticulously crafted model of the Meridian Tower by Vaidhomes Ltd, showcasing its front view.",
          },
          {
            id: "sign4",
            title: "Meridian Tower Model - Side View",
            image: images.image75,
            description:
              "Scale 1:400. Size: height 1.5m width 0.300. A detailed model of the Meridian Tower by Vaidhomes Ltd, presented from a side perspective.",
          },
        ],
      },
      {
        id: "architectural-design",
        title: "Architectural Design Visualizations",
        description:
          "Visualizations and conceptual models for new architectural designs, renovations, and urban interventions, aiding in design communication.",
        icon: Pencil,
        image: images.image76, // Subcategory hero image
        projectCount: 4,
        projects: [
          {
            id: "design1",
            title: "Meridian tower model by vaidhomes Ltd",
            image: images.image76,
            description:
              "Scale 1:400 Size : height 1.5m width 0.300 Meridian tower model by vaidhomes Ltd",
          },
          {
            id: "design2",
            title:
              "TAF Africa Global Urban Transformation - Masterplan Overview",
            image: images.image77,
            description:
              "An ambitious urban development project for TAF Africa Global, transforming forest areas into vibrant cities in Sierra Leone. This special design integrates the nation's majestic mountains and beautiful water bodies, showcasing our industrious team's dedication and service. Model Size: 2400 X 4200. Client: TAF Africa Global.",
          },
          {
            id: "design3",
            title: "TAF Africa Global Urban Vision - Integrated Landscapes",
            image: images.image78,
            description:
              "Detailing the seamless integration of Sierra Leone's natural mountains and water bodies into the TAF Africa Global urban project, highlighting the respectful and innovative design approach. Model Size: 2400 X 4200. Client: TAF Africa Global. This project is a testament to our industrious team and dedicated service.",
          },
          {
            id: "design4",
            title: "TAF Africa Global Urban Expansion - Community Planning",
            image: images.image79,
            description:
              "Showcasing the meticulous planning behind TAF Africa Global's urban expansion, turning forest land into thriving communities while honoring Sierra Leone's unique topography. Model Size: 2400 X 4200. Client: TAF Africa Global. This project is a testament to our industrious team and dedicated service.",
          },
          {
            id: "design4",
            title: "Model Prototype",
            image: architectureVideo,
            type: "video",
            description: "The model prototype progress video",
          },
        ],
      },
    ],
  },
};

const allProjects = Object.values(categoryData)
  .flatMap((category) => category.subcategories)
  .flatMap((subcategory) => subcategory.projects);

// The new unified gallery page
export default function ProductsPage() {
  const { category } = useParams();
  const title = categoryData[category]?.title || "All Projects";
  const projectsToDisplay =
    categoryData[category]?.subcategories.flatMap(
      (subcategory) => subcategory.projects,
    ) || allProjects;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-4xl font-bold text-foreground mb-4">
              {"Vaid Homes Projects"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {title === "All Projects"
                ? "Explore a selection of our finest models and visualizations across all categories."
                : categoryData[category]?.description}
            </p>
          </div>

          {allProjects?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects?.map((project) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden hover:shadow-premium transition-all duration-300 border-border hover:border-gold-rich/30"
                >
                  <a
                    href={project.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative overflow-hidden h-60">
                      {project?.type === "video" ? (
                        <video
                          src={project?.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="-translate-y-0"
                        ></video>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                        <p className="text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          Click to view larger
                        </p>
                      </div>
                    </div>
                    <CardContent className="p-4 bg-card">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold-rich transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </CardContent>
                  </a>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-muted rounded-xl p-12 text-center">
              <p className="text-muted-foreground">
                No projects to display at the moment. Please check back later.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
