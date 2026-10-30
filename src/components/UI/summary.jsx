// components/UI/SummaryCard.jsx
const styles = {
  default: {
    card: "bg-violet-600 text-white",
    tile: "bg-white/20 text-white",
    note: "text-violet-100",
    icon: "◈",
  },
  income: {
    card: "bg-lime-300 text-indigo-950",
    tile: "bg-indigo-950/10 text-indigo-950",
    note: "text-indigo-950/80",
    icon: "↗",
  },
  expense: {
    card: "bg-orange-400 text-indigo-950",
    tile: "bg-indigo-950/10 text-indigo-950",
    note: "text-indigo-950/80",
    icon: "↘",
  },
};

function SummaryCard({ title, amount, description, type = "default" }) {
  const s = styles[type] || styles.default;

  return (
    <div
      className={`rounded-3xl p-5 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 sm:p-6 ${s.card}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold">{title}</p>
          <h2 className="mt-3 break-words text-3xl font-extrabold tracking-tight sm:text-4xl">
            {amount}
          </h2>
        </div>

        <div
          aria-hidden="true"
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-xl font-bold ${s.tile}`}
        >
          {s.icon}
        </div>
      </div>

      {description && <p className={`mt-4 text-sm ${s.note}`}>{description}</p>}
    </div>
  );
}

export default SummaryCard;