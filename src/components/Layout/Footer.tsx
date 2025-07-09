import React from "react";

const Footer = () => {
  return (
    <footer className=" md:px-30 pb-20 mx-auto border-t border-t-neutral-800 flex flex-col md:flex-row items-center justify-between bg-background text-foreground text-sm">
      <div className="flex flex-col items-center md:items-start md:w-auto">
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#1DB954" />
            <path
              d="M7.5 15.5C10.5 14 13.5 14 16.5 15.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M8.5 12.5C11 11.5 13 11.5 15.5 12.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9.5 9.5C11.5 9 13.5 9 15.5 9.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-medium">Oopsie, No Tunes to Spin!</span>
          <span className="text-neutral-400">– Spotify</span>
        </div>
        <div className="w-full h-px bg-neutral-800 my-2 md:hidden" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-auto mt-2 md:mt-0">
        <span className="text-neutral-400 mr-2">2025©Rohit Singh Rawat</span>
        <a
          href="https://github.com/Space-a2050f3"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-neutral-400 hover:text-foreground transition-colors"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.823 1.104.823 2.225 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          <span>Space#a2050f3</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

