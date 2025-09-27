import BentoCard from "./BentoCard";
import Image from "next/image";
import jota from "../BentoCards/images/jota.png";

const Vibe = ({ className }: { className: string }) => {
  return (
    <BentoCard className={` overflow-hidden min-h-[250px] ${className}`}>
      <div>
        <Image
          src={jota}
          alt="jota"
          fill
          className="object-cover w-full h-full"
          sizes="100vw"
          priority
        />
      </div>
    </BentoCard>
  );
};

export default Vibe;
