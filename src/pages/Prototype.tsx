
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Prototype = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-purple-600">Prototype</h1>
          <div className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Prototype Overview</h2>
              <p className="text-gray-700">
                This page showcases the technical and theoretical innovations 
                integrated into the Word Snap Learn application.
              </p>
            </Card>
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Key Technologies</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• AI-Powered Learning</li>
                <li>• Computer Vision</li>
                <li>• Generative AI</li>
                <li>• Machine Learning</li>
                <li>• Adaptive Systems</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prototype;
