"use client";

import { useState, useEffect } from "react";
import BentoCard from "./BentoCard";
import Loader from "@/components/Miscellaneous/Loader";
import { motion, AnimatePresence } from "motion/react";

interface QuoteData {
  quote: string;
  author: string;
  work?: string | null;
  categories: string[];
}

const Quotes = ({ className }: { className: string }) => {
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuote = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Check for cached quote
      const cachedData = localStorage.getItem("quote_cache");
      if (cachedData) {
        const { quote, timestamp } = JSON.parse(cachedData);
        // Check if cache is less than 1 hour old (3600000 ms)
        if (Date.now() - timestamp < 3600000) {
          setQuoteData(quote);
          setIsLoading(false);
          return;
        }
      }

      const response = await fetch("/api/quotes");

      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }

      const data = await response.json();

      if (!data || !data.quote) {
        throw new Error("Invalid quote data");
      }

      // Save to cache
      localStorage.setItem(
        "quote_cache",
        JSON.stringify({
          quote: data,
          timestamp: Date.now(),
        })
      );

      setQuoteData(data);
    } catch (err: unknown) {
      console.error("Error fetching quote:", err);
      const errorMessage =
        err instanceof Error ? err.message : "Failed to load";
      setError(errorMessage);

      // Fallback to cache even if expired if fetch fails
      const cachedData = localStorage.getItem("quote_cache");
      if (cachedData) {
        const { quote } = JSON.parse(cachedData);
        setQuoteData(quote);
        setError(null); // Clear error since we have content
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <BentoCard className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader size="sm" />
        </div>
      </BentoCard>
    );
  }

  // Error state
  if (error || !quoteData) {
    return (
      <BentoCard className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-2">
          <span className="text-xs text-black/50 dark:text-white/50 text-center">
            Unable to load quote
          </span>
        </div>
      </BentoCard>
    );
  }

  return (
    <BentoCard
      className={`relative overflow-hidden group cursor-pointer ${className}`}
      noBorder
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={quoteData.quote}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="relative h-full w-full px-4 py-3"
        >
          {/* Quote Icon - Background decorative element */}
          <div className="absolute -top-1 -left-1 opacity-10 pointer-events-none ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-black dark:text-white"
            >
              <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" />
            </svg>
          </div>

          {/* Quote Text */}
          <p className="font-[family-name:var(--font-playfair)] text-xs md:text-sm leading-relaxed text-black dark:text-white/90 italic font-normal z-10 line-clamp-3 md:line-clamp-4 pl-6 pr-2 pt-2 ">
            &quot;{quoteData.quote}&quot;
          </p>

          {/* Author & Movie/Work - Absolute Bottom Right */}
          <div className="absolute bottom-3 right-4 flex flex-col items-end gap-0">
            {/* Author */}
            <span className="text-[10px] md:text-xs font-medium text-black/70 dark:text-white/70">
              ~ {quoteData.author}
            </span>
            {/* Movie/Work Name */}
            {quoteData.work && (
              <span className="text-[8px] md:text-[10px] text-black/40 dark:text-white/40 italic">
                {quoteData.work}
              </span>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </BentoCard>
  );
};

export default Quotes;
