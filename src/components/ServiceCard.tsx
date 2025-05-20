
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type ServiceCardProps = {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  tag?: string;
  cardId?: string;
};

const ServiceCard = ({ title, description, link, icon, tag, cardId }: ServiceCardProps) => {
  // Determine card style based on title
  let cardClass = "feature-card-custom"; // Default style
  if (title.includes("Connecteed Shop") || title.includes("Connecteed Shop")) {
    cardClass = "feature-card-shopify";
  } else if (title.includes("Connecteed Headless") || title.includes("Connecteed Headless")) {
    cardClass = "feature-card-react";
  }

  // Add e-commerce connection class if card is part of e-commerce solutions
  const isEcommerce = cardId === "shop" || cardId === "headless";
  if (isEcommerce) {
    cardClass += " ecommerce-card";
  }

  return (
    <Card className={`${cardClass} hover:shadow-lg relative flex flex-col`} id={cardId ? `card-${cardId}` : undefined}>
      {tag && (
        <div className="absolute top-2 right-2">
          <Badge variant="custom" className="flex items-center gap-1 text-xs bg-[#90bf4c] text-white border-none py-0.5 px-2">
            <Tag className="h-3 w-3" />
            {tag}
          </Badge>
        </div>
      )}
      <CardContent className="p-6 flex flex-col h-full">
        <div className="icon-container-custom mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-auto">{description}</p>
        <div className="mt-6 pt-2">
          <Link 
            to={link} 
            className="inline-flex items-center text-white hover:text-[#0071E1] transition-colors"
          >
            Scopri di più
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
