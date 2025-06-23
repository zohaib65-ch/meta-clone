import { CustomButton } from "../components/custom-button";
import { Pause } from "lucide-react";
import glassesVideo from "../assets/video/glasses-video.mp4";

export default function HeroPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src={glassesVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full flex  items-end mc justify-center px-6">
        <div className="text-center max-w-4xl mb-28">
          <h1 className="text-6xl md:text-4xl lg:text-5xl font-medium text-white mb-3 ">
            Oakley design,
            <br />
            <div className="mt-3">Meta technology</div>
          </h1>

          <p className="text-xl md:text-sm font-medium text-white/90 mb-8 ">Fifty years of design meets the new era of tech.</p>

          <CustomButton variant="primary" className="text-xs  px-4 py-3">
            Learn more
          </CustomButton>
        </div>
      </div>
      <div className="absolute bottom-8 right-8">
        <button className="w-7 h-7 bg-gray-500/50 hover:bg-gray-200/50 rounded-full border border-gray-200 flex items-center justify-center transition-colors">
          <Pause size={12} className="text-white fill-white " />
        </button>
      </div>
    </div>
  );
}
