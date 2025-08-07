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

// Data structure interfaces
interface Project {
  id: string;
  title: string;
  image: string;
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
      "Precision-crafted scale models for architectural visualization",
    icon: Building2,
    subcategories: [
      {
        id: "office-building",
        title: "Office Building Models",
        description:
          "Scaled-down representations of office buildings, showcasing design and layout",
        icon: Building,
        image: images.image3,
        projectCount: 9,
        projects: [
          {
            id: "office1",
            title: "Shopping Mall Model",
            image: images.image2,
            description: "",
          },
          {
            id: "office2",
            title: "Residential Models",
            image: images.image5,
            description: "",
          },
          {
            id: "office3",
            title: "Office Building Models",
            image: images.image32,
            description:
              "A detailed 1:200 scale model of a 7-star property office project.",
          },
        ],
      },
      {
        id: "residential-building",
        title: "Residential Building Models",
        description: "",
        icon: Home,
        image: images.image45,
        projectCount: 14,
        projects: [
          {
            id: "res1",
            title: "Residential Model Prototype",
            image: images.image45,
            description:
              "Scale 1: 200 Great piece, residential model prototypes from our stable",
          },
          {
            id: "res2",
            title: "Abuja Models (Vaidhomes & Listo)",
            image: images.image46,
            description:
              "Scale 1:100. Size 0.45 by 0.6 each. Abuja models by Vaidhomes and models for Listo Construction Company.",
          },
          {
            id: "res3",
            title: "TAF City Residential Models",
            image: images.image55,
            description:
              "Simple Residential models designs attentively model by vaidhomes and models to reflect the different housing units for taf Salone, taf city and greater taf city projects in sierra leon, The Gambia And Nigeria",
          },
        ],
      },
      {
        id: "urban-planning",
        title: "Urban Planning Models",
        description: "",
        icon: Map,
        image: images.image3,
        projectCount: 21,
        projects: [
          {
            id: "urban1",
            title: "Residential Projects",
            description:
              "Size 0.500 by 0.600. 11 storey residential projects for Levitikal Realities models by us.",
            image: images.image68,
          },
          {
            id: "urban2",
            title: "",
            image: images.image21,
            description: "",
          },
          {
            id: "urban3",
            title: "",
            image: images.image22,
            description: "",
          },
          {
            id: "urban4",
            title: "",
            image: images.image23,
            description: "",
          },
        ],
      },

      {
        id: "landscape",
        title: "",
        description: "",
        icon: Trees,
        image: images.image8,
        projectCount: 30,
        projects: [
          {
            id: "land1",
            title: "",
            image: images.image9,
            description: "",
          },
          {
            id: "land2",
            title: "",
            image: images.image10,
            description: "",
          },
          {
            id: "land3",
            title: "",
            image: images.image69,
            description: "",
          },
          {
            id: "land4",
            title: "",
            image: images.image70,
            description: "",
          },
          {
            id: "land5",
            title: "",
            image: images.image71,
            description: "",
          },
          {
            id: "land6",
            title: "",
            image: images.image72,
            description: "",
          },
          {
            id: "land7",
            title: "",
            image: images.image73,
            description: "",
          },
          {
            id: "land8",
            title: "",
            image: images.image74,
            description: "",
          },
          {
            id: "land9",
            title: "",
            image: images.image75,
            description: "",
          },
          {
            id: "land10",
            title: "",
            image: images.image76,
            description: "",
          },
          {
            id: "land11",
            title: "",
            image: images.image77,
            description: "",
          },
          {
            id: "land12",
            title: "",
            image: images.image78,
            description: "",
          },
          {
            id: "land13",
            title: "",
            image: images.image79,
            description: "",
          },
          {
            id: "land14",
            title: "",
            image: images.image25,
            description: "",
          },
          {
            id: "land15",
            title: "",
            image: images.image26,
            description: "",
          },
          {
            id: "land16",
            title: "",
            image: images.image27,
            description: "",
          },
          {
            id: "land17",
            title: "",
            image: images.image28,
            description: "",
          },
          {
            id: "land18",
            title: "",
            image: images.image29,
            description: "",
          },
          {
            id: "land19",
            title: "",
            image: images.image30,
            description: "",
          },
          {
            id: "land20",
            title: "",
            image: images.image31,
            description: "",
          },
          {
            id: "land21",
            title: "",
            image: images.image33,
            description: "",
          },
          {
            id: "land22",
            title: "",
            image: images.image34,
            description: "",
          },
          {
            id: "land23",
            title: "",
            image: images.image35,
            description: "",
          },
          {
            id: "land24",
            title: "",
            image: images.image36,
            description: "",
          },
          {
            id: "land25",
            title: "",
            image: images.image37,
            description: "",
          },
          {
            id: "land26",
            title: "",
            image: images.image38,
            description: "",
          },
          {
            id: "land27",
            title: "",
            image: images.image39,
            description: "",
          },
          {
            id: "land28",
            title: "",
            image: images.image40,
            description: "",
          },
          {
            id: "land29",
            title: "",
            image: images.image41,
            description: "",
          },
          {
            id: "land30",
            title: "",
            image: images.image42,
            description: "",
          },
        ],
      },
      {
        id: "commercial",
        title: "",
        description: "",
        icon: Store,
        image: images.image9,
        projectCount: 9,
        projects: [
          {
            id: "comm1",
            title: "",
            image: images.image11,
            description: "",
          },
          {
            id: "comm2",
            title: "",
            image: images.image12,
            description: "",
          },
        ],
      },
    ],
  },
  "industrial-models": {
    title: "",
    description: "",
    icon: Cog,
    subcategories: [
      {
        id: "plant-layout",
        title: "",
        description: "",
        icon: Factory,
        image: images.image11,
        projectCount: 8,
        projects: [
          {
            id: "plant1",
            title: "",
            image: images.image15,
            description: "",
          },
          {
            id: "plant2",
            title: "",
            image: images.image16,
            description: "",
          },
        ],
      },
    ],
  },
  "interactive-technology": {
    title: "",
    description: "",
    icon: Cpu,
    subcategories: [
      {
        id: "interactive-scale",
        title: "",
        description: "",
        icon: MousePointer,
        image: images.image15,
        projectCount: 12,
        projects: [
          {
            id: "inter1",
            title: "",
            image: images.image23,
            description: "",
          },
          {
            id: "inter2",
            title: "",
            image: images.image24,
            description: "",
          },
        ],
      },
    ],
  },
  "3d-visualization": {
    title: "",
    description: "",
    icon: Monitor,
    subcategories: [
      {
        id: "exterior-rendering",
        title: "",
        description: "",
        icon: Image,
        image: images.image16,
        projectCount: 35,
        projects: [
          {
            id: "extrend1",
            title: "",
            image: images.image2,
            description: "",
          },
          {
            id: "extrend2",
            title: "",
            image: images.image2,
            description: "",
          },
        ],
      },
      {
        id: "interior-rendering",
        title: "",
        description: "",
        icon: PaintBucket,
        image: images.image17,
        projectCount: 40,
        projects: [
          {
            id: "intrend1",
            title: "",
            image: images.image3,
            description: "",
          },
          {
            id: "intrend2",
            title: "",
            image: images.image4,
            description: "",
          },
        ],
      },
      {
        id: "real-estate-signage",
        title: "",
        description: "",
        icon: Signpost,
        image: images.image18,
        projectCount: 25,
        projects: [
          {
            id: "sign1",
            title: "",
            image: images.image5,
            description: "",
          },
          {
            id: "sign2",
            title: "",
            image: images.image6,
            description: "",
          },
        ],
      },
      {
        id: "architectural-design",
        title: "",
        description: "",
        icon: Pencil,
        image: images.image19,
        projectCount: 30,
        projects: [
          {
            id: "design1",
            title: "",
            image: images.image7,
            description: "",
          },
          {
            id: "design2",
            title: "",
            image: images.image8,
            description: "",
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
  const projects =
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
              Vaid Homes Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore a selection of our finest models and visualizations
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
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                        <p className="text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          Click to view larger image
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
