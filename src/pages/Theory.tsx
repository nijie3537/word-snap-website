import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
const TheorySection = ({
  title,
  content,
  imageUrl
}: {
  title: string;
  content: string;
  imageUrl: string;
}) => <Card className="flex flex-col md:flex-row gap-6 p-6 mb-8">
    <div className="w-full md:w-1/3 flex items-center justify-center">
      <img src={imageUrl} alt={title} className="rounded-lg max-w-full max-h-64 object-contain shadow-md" />
    </div>
    <div className="w-full md:w-2/3">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </Card>;
const Theory = () => {
  const sections = [{
    title: "Technology Affordance (Lesson 1)",
    content: "Follows Norman's principles (1988) by using intuitive design (e.g., clear typography, minimalist layout) to signal core functionality. The slogan directly communicates the app's purpose, reducing cognitive load and aligning with perceived affordance.",
    imageUrl: "/lovable-uploads/59d427c7-d99f-4285-bbaf-8849c29d4ab6.png"
  }, {
    title: "Generative AI (Lesson 6)",
    content: "Uses GPT-4 to generate personalized mnemonics (e.g., etymology, word roots), adhering to GenAI's role in adaptive content creation (Trent, 2024). NLP Frameworks: leverages spaCy and Transformers for real-time translation and cross-lingual processing.",
    imageUrl: "https://preview--word-snap-learn.lovable.app/features"
  }, {
    title: "Database & Self-Regulated Learning (Lesson 3)",
    content: "User data is stored in MySQL, supporting autonomy in learning path customization (Grow, 1991).",
    imageUrl: "https://preview--word-snap-learn.lovable.app/login"
  }, {
    title: "API Integration",
    content: "Third-party authentication aligns with IoT principles (Lesson 7), ensuring seamless data flow and interoperability (e.g., RFID tracking analogy).",
    imageUrl: "https://preview--word-snap-learn.lovable.app/language-selection"
  }, {
    title: "OpenCV & Computer Vision (Lesson 4)",
    content: "Implements Haar cascades and YOLO for real-time object detection, mirroring industry applications like autonomous vehicles (OpenCV documentation).",
    imageUrl: "https://preview--word-snap-learn.lovable.app/camera"
  }, {
    title: "Generative AI Examples (Lesson 6)",
    content: "GPT-4 dynamically generates examples and integrates multimedia (audio/video), aligning with CAMIL's immersive learning framework (Makransky, 2021).",
    imageUrl: "https://preview--word-snap-learn.lovable.app/word/milk-pitcher"
  }, {
    title: "Machine Learning (Lesson 2A)",
    content: "Uses clustering algorithms (unsupervised learning) for auto-tagging scenes and CART/Logistic Regression for personalized recommendations (Jonassen, 1997).",
    imageUrl: "https://preview--word-snap-learn.lovable.app/wordbook"
  }, {
    title: "Adaptive Systems (Lesson 1)",
    content: "Tailors content based on user behavior (e.g., frequent café photos → coffee-related terms), reflecting Smith & Darvas' (2017) principles of adaptive feedback.",
    imageUrl: "https://preview--word-snap-learn.lovable.app/home"
  }, {
    title: "Hybrid Intelligence (Lesson 2A)",
    content: "Combines reinforcement learning (AI opponent) with human creativity (e.g., strategy formulation), exemplifying human-AI collaboration (IBM Watson Health case). Gamification mechanics align with Vygotsky's (1994) social constructivism.",
    imageUrl: "https://preview--word-snap-learn.lovable.app/practice"
  }];
  return <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-12 pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-[#C1FF84]">Theory & Implementation</h1>
          <div className="space-y-6">
            {sections.map((section, index) => <TheorySection key={index} {...section} />)}
          </div>
        </div>
      </div>
    </>;
};
export default Theory;