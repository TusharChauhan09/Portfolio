import React from "react";

const SkillsContainer = ({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) => {
  return (
    <div className="skillsDoubleBorder">
      <div className="inline-flex smalll items-center gap-2 rounded-md px-2 pb-0.25 pt-1.25 text-xs font-medium shadow-none">
        <span className="flex items-center justify-center">{icon}</span>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default SkillsContainer;
