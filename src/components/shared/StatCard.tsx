interface StatCardProps {
  stat: string;
  description: string;
  linkText?: string;
}

const StatCard = ({ stat, description, linkText }: StatCardProps) => {
  return (
    <div className="rounded border border-border bg-card p-6">
      <p className="mb-2 text-4xl font-bold tracking-tight text-foreground">
        {stat}
      </p>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      {linkText && (
        <span className="text-sm font-medium text-primary hover:underline cursor-pointer">
          {linkText} →
        </span>
      )}
    </div>
  );
};

export default StatCard;
