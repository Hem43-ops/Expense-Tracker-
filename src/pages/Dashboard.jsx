import SummaryCard from "../components/UI/SummaryCard";

function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="mb-2 text-3xl font-bold">
                Dashboard
            </h1>

            <p className="mb-8 text-gray-500">
                Here's your financial overview.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <SummaryCard
                    title="Total Balance"
                    amount="₹24,500"
                    description="Your available balance"
                />

                <SummaryCard
                    title="Total Income"
                    amount="₹35,000"
                    description="Money received"
                />

                <SummaryCard
                    title="Total Expenses"
                    amount="₹10,500"
                    description="Money spent"
                />
            </div>
        </div>
    );
}

export default Dashboard;
