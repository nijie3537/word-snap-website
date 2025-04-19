
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Summary = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-purple-600">Summary</h1>
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">The prototype integrates:</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Affordance-Driven Design (Lesson 1) for intuitive usability.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Generative AI (Lesson 6) for dynamic content creation.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Machine Learning (Lessons 2A, 4) for personalization and object detection.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Hybrid Intelligence (Lesson 2A) in gamified learning.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Database/IoT (Lessons 3, 7) for user data management.</span>
              </li>
            </ul>
            
            <p className="mt-6 text-gray-600">
              This application demonstrates application of AI-in-Education principles, bridging theory 
              (e.g., Piaget's assimilation-accommodation) with technical tools (OpenCV, GPT-4, MySQL).
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Summary;
