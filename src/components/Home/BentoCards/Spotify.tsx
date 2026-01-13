"use client";

import BentoCard from "./BentoCard";
import { useMobileView } from "@/hooks/useMobileView";

interface SpotifyProps {
  className?: string;
}

const Spotify: React.FC<SpotifyProps> = ({ className }) => {
  const isMobile = useMobileView();

  return (
    <BentoCard noBorder className={`${className} !p-0  overflow-hidden`}>
      <div
        className={`w-full h-full flex ${
          isMobile ? "item-center" : "relative bottom-14.5 "
        } justify-center`}
        style={{
          transform: !isMobile ? "scale(0.55)" : "none",
        }}
      >
        <iframe
          className={` ${
            !isMobile ? "w-[352px] h-[360px]" : "w-full h-full min-h-[162px]"
          }`}
          style={{
            border: "none",
            borderRadius: "20px",
            boxShadow: "none",
            backgroundColor: "transparent",
          }}
          src="https://open.spotify.com/embed/playlist/2Cq0YYP5Ou6ZPqWTwXDvzM?utm_source=generator"
          height="100%"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </BentoCard>
  );
};

export default Spotify;
