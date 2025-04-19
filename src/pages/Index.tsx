
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Smart Learning</h3>
              <p className="text-gray-600">AI-powered personalized vocabulary acquisition based on your needs.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Visual Recognition</h3>
              <p className="text-gray-600">Instantly identify objects and learn their names in multiple languages.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Adaptive System</h3>
              <p className="text-gray-600">Learning paths that adapt to your progress and preferences.</p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
