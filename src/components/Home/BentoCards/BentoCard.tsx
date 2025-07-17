interface BentoCardProps {
  children?: React.ReactNode;
  className?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className = "" }) => {
  return <div className={`rounded-xl border ${className}`}>{children}</div>;
};

export default BentoCard;
