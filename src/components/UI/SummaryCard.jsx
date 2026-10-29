
function SummaryCard({ title, amount, description }) {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
                {title}
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {amount}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
                {description}
            </p>
        </div>
    );
}

export default SummaryCard;
