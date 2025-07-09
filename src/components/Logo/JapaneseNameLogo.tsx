interface JapaneseNameLogoProps {
  size?: number | string;
  className?: string;
  color?: string;
  glowOnHover?: boolean; // NEW
}

const JapaneseNameLogo: React.FC<JapaneseNameLogoProps> = ({
  size = 100,
  className = "",
  color = "white",
  glowOnHover = false, // NEW
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}${glowOnHover ? " japanese-logo-glow" : ""}`}
    >
      <text
        x="0"
        y="75"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="70"
        fill={color}
        letterSpacing="-5"
      >
        トゥシャール
      </text>
    </svg>
  );
};

export default JapaneseNameLogo;
