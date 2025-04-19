
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

const Index = () => {
  const features = [
    {
      title: "Smart Learning",
      description: "AI-powered personalized vocabulary acquisition based on your needs."
    },
    {
      title: "Visual Recognition", 
      description: "Instantly identify objects and learn their names in multiple languages."
    },
    {
      title: "Adaptive System",
      description: "Learning paths that adapt to your progress and preferences."
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 py-12 pt-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient 
              bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Word Snap Learn
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Capture. Learn. Remember.
            </p>
          </div>

          <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index}>
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Index;
