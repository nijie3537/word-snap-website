
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Index = () => {
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
        </div>
      </div>
    </>
  );
};

export default Index;
