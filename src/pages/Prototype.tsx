
import React from 'react';
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

const Prototype = () => {
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
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-purple-600">Prototype</h1>
          <div className="flex justify-center items-center mb-12">
            <a 
              href="https://preview--word-snap-learn.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="default" className="text-lg px-8 py-4">
                View Preview Site
              </Button>
            </a>
          </div>

          <div className="mt-16">
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
      </div>
    </>
  );
};

export default Prototype;
