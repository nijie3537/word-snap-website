
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, Square } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-[#F6FFEE] shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-[#C1FF84]">
            Word Snap
          </Link>
          <div className="flex gap-4">
            <Link to="/">
              <Button variant="ghost" className="text-[#333] hover:text-[#C1FF84] hover:bg-[#F2F5E4]">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link to="/prototype">
              <Button variant="ghost" className="text-[#333] hover:text-[#C1FF84] hover:bg-[#F2F5E4]">
                <Square className="mr-2 h-4 w-4" />
                Prototype
              </Button>
            </Link>
            <Link to="/theory">
              <Button variant="ghost" className="text-[#333] hover:text-[#C1FF84] hover:bg-[#F2F5E4]">Theory</Button>
            </Link>
            <Link to="/summary">
              <Button variant="ghost" className="text-[#333] hover:text-[#C1FF84] hover:bg-[#F2F5E4]">Summary</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
