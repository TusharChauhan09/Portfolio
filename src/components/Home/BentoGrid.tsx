import React from "react";
import { FaCode, FaPaintBrush, FaRocket, FaBook } from "react-icons/fa";

const bentoItems = [
  {
    title: "Projects",
    description: "Explore my latest work and open source contributions.",
    icon: <FaCode />,
    className: "md:col-span-2 row-span-1",
  },
  {
    title: "Blog",
    description: "Read my thoughts on tech, design, and more.",
    icon: <FaBook />,
    className: "md:col-span-1 row-span-1",
  },
  {
    title: "Design",
    description: "UI/UX explorations and creative experiments.",
    icon: <FaPaintBrush />,
    className: "md:col-span-1 row-span-2",
  },
  {
    title: "Launches",
    description: "Startups, launches, and product stories.",
    icon: <FaRocket />,
    className: "md:col-span-2 row-span-1",
  },
];

const BentoGrid: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(120px,_1fr)] gap-4 w-full">
    {bentoItems.map((item, idx) => (
      <div
        key={idx}
        className={`rounded-xl bg-neutral-900/80 p-6 flex flex-col justify-between shadow-lg transition hover:scale-[1.02] hover:shadow-xl ${
          item.className || ""
        }`}
      >
        {item.icon && <div className="mb-2 text-3xl">{item.icon}</div>}
        <div className="font-bold text-lg mb-1">{item.title}</div>
        {item.description && (
          <div className="text-sm text-neutral-400">{item.description}</div>
        )}
      </div>
    ))}
  </div>
);

export default BentoGrid;
