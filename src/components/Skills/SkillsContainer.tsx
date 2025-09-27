import React from "react";

const SkillsContainer = ({
  icon,
  name,
}: {
  icon?: React.ReactNode;
  name?: string;
}) => {
  return (
    <div className="skillsDoubleBorder">
      <div className="flex justify-center smalll items-center gap-2 rounded-md px-2 text-sm py-1 shadow-none">
        <span className="flex items-center justify-center">{icon}</span>
        <span className="flex items-center justify-center pr-0.5">{name}</span>
      </div>
    </div>
  );
};

export default SkillsContainer;
