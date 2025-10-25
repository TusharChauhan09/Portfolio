import Introduction from "@/components/Home/Introduction";
import BentoGrid from "@/components/Home/BentoGrid";
import { DrawCircleText } from "@/components/Miscellaneous/DrawCircleText";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <Introduction name={"Enlight"} />
      <BentoGrid />
    </div>
  );
}