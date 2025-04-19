
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-[#F6FFEE] to-[#F2F5E4]">
        <div className="container mx-auto px-4 py-12 pt-24">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C1FF84] to-[#DBF989] bg-clip-text text-transparent">
              Word Snap
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Learn Vocabulary through Your Lens – AI-Powered Language Mastery
            </p>
          </div>
          
          <div className="relative mt-12 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="AI Learning Illustration"
              className="rounded-lg shadow-xl max-w-3xl w-full object-cover h-[400px]"
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-[#C1FF84]/20 to-transparent rounded-lg"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
