import BentoCard from "./BentoCard";
import Image from "next/image";
import jota from "../BentoCards/images/jota.png";

const Vibe = ({ className }: { className: string }) => {
  return (
    <BentoCard className={`relative overflow-hidden ${className}`}>
      <Image
        src={jota}
        alt="jota"
        fill
        className="object-cover w-full h-full"
        sizes="100vw"
        priority
      />
    </BentoCard>
  );
};

export default Vibe;
