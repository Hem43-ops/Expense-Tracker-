
import SummaryCard from "../components/UI/SummaryCard";
import { useTransactions } from "../context/TransactionContext";

function Dashboard() {
    
const { transactions,deleteTransaction } = useTransactions();

const totalIncome = transactions
  .filter((t) => t.type === "Income")
  .reduce((sum, t) => sum + Number(t.amount), 0);

const totalExpenses = transactions
  .filter((t) => t.type === "Expense")
  .reduce((sum, t) => sum + Number(t.amount), 0);

const balance = totalIncome - totalExpenses;

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Page heading */}
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-medium text-blue-600">
                            OVERVIEW
                        </p>

                        <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
                            Dashboard
                        </h1>

                        <p className="mt-2 text-gray-500">
                            Here's an overview of your finances.
                        </p>
                    </div>

                    <a
                        href="/add-transaction"
                        className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                        + Add Transaction
                    </a>
                </div>

                {/* Summary cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    <SummaryCard
                        title="Total Balance"
                        amount={`₹${balance.toLocaleString("en-IN")}`}
                        description="Income minus expenses"
                        type="default"
                    />

                    <SummaryCard
                        title="Total Income"
                        amount={`₹${totalIncome.toLocaleString("en-IN")}`}
                        description="Money received"
                        type="income"
                    />

                    <SummaryCard
                        title="Total Expenses"
                        amount={`₹${totalExpenses.toLocaleString("en-IN")}`}
                        description="Money spent"
                        type="expense"
                    />
                </div>

                
{/* Recent activity */}
<section className="mt-8 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
            <h2 className="text-xl font-bold text-gray-900">
                Recent Activity
            </h2>
            <p className="mt-1 text-sm text-gray-500">
                Keep track of your latest transactions.
            </p>
        </div>

        <a
            href="/add-transaction"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
            Add a transaction →
        </a>
    </div>

    {transactions.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-gray-200 px-4 py-10 text-center">
            <h3 className="font-semibold text-gray-900">
                No transactions yet
            </h3>
            <p className="mt-2 text-sm text-gray-500">
                Add your first transaction to start tracking your money.
            </p>
        </div>
    ) : (
        <div className="mt-6 space-y-3">
            {transactions.slice().reverse().slice(0, 5).map((item) => (
                <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 p-4"
                >
                    <div className="min-w-0 flex-1">
                        <p className="break-words font-semibold text-gray-900">
                            {item.description}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            {item.category} · {item.type}
                        </p>
                    </div>

                    <p className={`flex shrink-0 flex-col items-end gap-2 ${
                        item.type === "Income"
                            ? "text-emerald-600"
                            : "text-rose-600"
                    }`}>
                        {item.type === "Income" ? "+" : "-"}
                        ₹{Number(item.amount).toLocaleString("en-IN")}
                    </p>

                    <button
                        type="button"
                        onClick={()=> deleteTransaction(DataTransferItemList.id)}
                        className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-100">
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )}
</section>


            </div>
        </main>
    );
}

export default Dashboard;
