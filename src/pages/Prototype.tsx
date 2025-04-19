
import React from 'react';
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Prototype = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-purple-600">Prototype</h1>
          <div className="flex justify-center items-center">
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
        </div>
      </div>
    </>
  );
};

export default Prototype;
