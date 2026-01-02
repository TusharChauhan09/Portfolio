"use client";

import { useState, useEffect } from "react";
import BentoCard from "./BentoCard";

interface APODData {
  title: string;
  explanation: string;
  url: string;
  hdurl?: string;
  media_type: string;
  date: string;
  copyright?: string;
  thumbnail_url?: string;
}

// Pre-defined star positions to avoid hydration mismatch
const STAR_POSITIONS = [
  { w: 2, h: 2, l: 10, t: 15, delay: 0.1, duration: 1.5 },
  { w: 1, h: 1, l: 25, t: 8, delay: 0.3, duration: 2.1 },
  { w: 2, h: 2, l: 45, t: 22, delay: 0.7, duration: 1.8 },
  { w: 1, h: 1, l: 60, t: 5, delay: 1.2, duration: 2.3 },
  { w: 2, h: 2, l: 75, t: 18, delay: 0.5, duration: 1.6 },
  { w: 1, h: 1, l: 85, t: 30, delay: 0.9, duration: 2.0 },
  { w: 2, h: 2, l: 15, t: 45, delay: 1.5, duration: 1.7 },
  { w: 1, h: 1, l: 35, t: 55, delay: 0.2, duration: 2.2 },
  { w: 2, h: 2, l: 55, t: 40, delay: 0.8, duration: 1.9 },
  { w: 1, h: 1, l: 70, t: 60, delay: 1.1, duration: 2.4 },
];

const Nasa = ({ className }: { className: string }) => {
  const [apodData, setApodData] = useState<APODData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/api/nasa");

        if (!response.ok) {
          throw new Error("Failed to fetch APOD");
        }

        const data = await response.json();

        // count=1 returns an array with one item
        const apod = Array.isArray(data) ? data[0] : data;

        // Validate the response has required fields
        if (!apod || !apod.url) {
          throw new Error("Invalid APOD data");
        }

        setApodData(apod);
      } catch (err: any) {
        console.error("Error fetching APOD:", err);
        setError(err.message || "Failed to load");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAPOD();
  }, []);

  // Loading state with space-themed loader
  if (isLoading) {
    return (
      <BentoCard className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-[#0a0a0a]">
          {/* Stars background */}
          <div className="absolute inset-0 overflow-hidden">
            {STAR_POSITIONS.map((star, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white animate-pulse"
                style={{
                  width: star.w + "px",
                  height: star.h + "px",
                  left: star.l + "%",
                  top: star.t + "%",
                  animationDelay: star.delay + "s",
                  animationDuration: star.duration + "s",
                }}
              />
            ))}
          </div>
          {/* Loader */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <div className="w-6 h-6 rounded-full border-2 border-purple-500/30 border-t-purple-400 animate-spin" />
          </div>
        </div>
      </BentoCard>
    );
  }

  // Error state
  if (error || !apodData) {
    return (
      <BentoCard className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center gap-2 p-4">
          <span className="text-xs text-white/50 text-center">
            Unable to load
          </span>
        </div>
      </BentoCard>
    );
  }

  const isVideo = apodData.media_type === "video";
  const imageUrl = isVideo ? apodData.thumbnail_url : apodData.url;

  return (
    <BentoCard
      noBorder
      className={`relative overflow-hidden rounded-xl ${className}`}
    >
      {/* Image fills entire card */}
      <div className="absolute inset-0">
        {imageUrl && !imageError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={apodData.title || "NASA APOD"}
            className="w-full h-full object-cover rounded-xl"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0c0c1d] via-[#1a1a2e] to-[#0f0f23] rounded-xl" />
        )}
      </div>

      {/* Bottom gradient for text readability */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl" />

      {/* Date label at bottom */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        <span className="text-white/90 text-xs tracking-wide font-mono">
          from NASA: <span className="text-purple-400">{apodData.date}</span>
        </span>
      </div>
    </BentoCard>
  );
};

export default Nasa;
