
function SummaryCard({
    title,
    amount,
    description,
    type = "default"
}) {
    const styles = {
        default: {
            accent: "bg-blue-500",
            icon: "◈",
            amount: "text-gray-900"
        },
        income: {
            accent: "bg-emerald-500",
            icon: "↗",
            amount: "text-emerald-600"
        },
        expense: {
            accent: "bg-rose-500",
            icon: "↘",
            amount: "text-rose-600"
        }
    };

    const currentStyle = styles[type] || styles.default;

    return (
        <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-6">
            <div className={`absolute left-0 top-0 h-full w-1 ${currentStyle.accent}`} />

            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="text-sm font-medium text-gray-500">
                        {title}
                    </p>

                    <h2 className={`mt-3 break-words text-2xl font-bold tracking-tight sm:text-3xl ${currentStyle.amount}`}>
                        {amount}
                    </h2>
                </div>

                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-xl ${currentStyle.amount}`}>
                    {currentStyle.icon}
                </div>
            </div>

            {description && (
                <p className="mt-4 text-sm text-gray-500">
                    {description}
                </p>
            )}
        </div>
    );
}

export default SummaryCard;
