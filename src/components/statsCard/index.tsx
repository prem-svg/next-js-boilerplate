interface StatsCard {
  label: string;
  value: string;
  prefix: string;
}

export const StatsCard = ({ label, value, prefix }: StatsCard) => {
  return (
    <div className="text-center bg-secondary-foreground px-4 py-6 border-1 rounded border-content2-50">
      <p className="font-source text-h5 font-bold mb-2 text-primary-600">
        {value} <span>{prefix}</span>
      </p>
      <p className="font-source text-body4 font-semibold">{label}</p>
    </div>
  );
};
