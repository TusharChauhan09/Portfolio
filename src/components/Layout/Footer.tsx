"use client";
import React from "react";

const Footer = () => {
  // Get current date in MM/DD/YY format
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const year = now.getFullYear().toString().slice(-2);
  const formattedDate = `${month}/${day}/${year}`;

  // Set default static values
  const quote = "motivation";
  const author = "name";

  return (
    <footer className="w-full mt-10">
      <hr className="border-t border-neutral-700 w-full mb-2" />
      <div className="flex justify-between items-start w-full px-2">
        <div className="jap flex flex-col items-start max-w-xs break-words">
          <span className="jap break-words text-2xl">{quote}</span>
          <span className="ml-7 text-xl jap align-right whitespace-nowrap">
            - {author}
          </span>
        </div>
        <div className="jap text-center w-1/3 text-2xl">{formattedDate}</div>
        <div className="text-right text-3xl jap">@enlight</div>
      </div>
    </footer>
  );
};

export default Footer;
