
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
      <div className="min-h-screen bg-gradient-to-b from-[#F6FFEE] to-[#F2F5E4] py-12 pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#C1FF84] to-[#DBF989] bg-clip-text text-transparent">
            Prototype
          </h1>
          <div className="flex justify-center items-center mb-12">
            <a 
              href="https://preview--word-snap-learn.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="default" 
                className="text-lg px-8 py-4 bg-[#C1FF84] hover:bg-[#DBF989] text-gray-800"
              >
                View Preview Site
              </Button>
            </a>
          </div>

          <div className="mt-16">
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {features.map((feature, index) => (
                  <CarouselItem key={index}>
                    <Card className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border border-[#C1FF84]/20">
                      <h3 className="text-xl font-semibold mb-3 text-[#333]">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-[#333] hover:bg-[#C1FF84]/20" />
              <CarouselNext className="text-[#333] hover:bg-[#C1FF84]/20" />
            </Carousel>
          </div>

          {/* Core Features Section */}
          <div className="mt-24 mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Core Features
            </h2>
            
            {/* A. AI-Powered Object Recognition */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-l-4 border-[#C1FF84] pl-3">
                A. AI-Powered Object Recognition
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-white/90 rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                    alt="AI Object Recognition" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-500">Side-by-side comparison – Original photo vs. AI-highlighted objects</p>
                  </div>
                </div>
                
                <div className="bg-white/90 rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="AI Pipeline" 
                    className="w-full h-48 object-cover" 
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-500">Flowchart of AI pipeline (Camera → YOLOv5 → Translation API → Display)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
                <p className="mb-4 text-gray-700">
                  "Leverages YOLOv5 (Lesson 4) for real-time object detection. Integrates Google Cloud Vision & DeepL APIs for translation."
                </p>
                <p className="text-gray-700">
                  "Users can manually correct labels, reflecting Hybrid Intelligence (Human-AI collaboration, Lesson 2)."
                </p>
              </div>
            </div>
            
            {/* B. Adaptive Learning System */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-l-4 border-[#C1FF84] pl-3">
                B. Adaptive Learning System
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-white/90 rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Spaced repetition calendar" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-500">Spaced repetition calendar with Ebbinghaus Curve graph</p>
                  </div>
                </div>
                
                <div className="bg-white/90 rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Memory Methods toggle" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-500">Mockup of "Memory Methods" toggle (谐音 vs. 词根)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
                <p className="mb-4 text-gray-700">
                  "Customizable Ebbinghaus Forgetting Curve reminders (Lesson 3) ensure long-term retention."
                </p>
                <p className="text-gray-700">
                  "Users select preferred memory methods, aligning with Learner Autonomy (Grow, 1991)."
                </p>
              </div>
            </div>
            
            {/* C. Gamified Practice */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-l-4 border-[#C1FF84] pl-3">
                C. Gamified Practice
              </h3>
              
              <div className="grid md:grid-cols-1 gap-8 mb-6">
                <div className="bg-white/90 rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Word-matching game" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-500">GIF of a word-matching game (e.g., drag "apple" to an image of an apple)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
                <p className="text-gray-700">
                  "Dynamic mini-games generated based on user's weak words, inspired by Activity Theory (Vygotsky, Lesson 4)."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prototype;
