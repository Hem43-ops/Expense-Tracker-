
import { useState } from "react";
import Input from "../components/UI/input";
import Button from "../components/UI/button";
import { useTransactions } from "../context/TransactionContext";

function AddTransaction() {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("Expense");
    const [category, setCategory] = useState("Food");
    const { transactions, setTransactions, deleteTransaction,updateTransaction } = useTransactions();
    const [editingId, setEditingId] = useState(null);

    
function handleSubmit(e) {
    e.preventDefault();

    const transactionData = {
        id: editingId ?? Date.now(),
        description,
        amount: Number(amount),
        type,
        category
    };

    if (editingId !== null) {
        updateTransaction(transactionData);
        setEditingId(null);
    } else {
        setTransactions((prev) => [...prev, transactionData]);
    }

    setDescription("");
    setAmount("");
    setType("Expense");
    setCategory("Food");
}


function handleEdit(item) {
    setEditingId(item.id);
    setDescription(item.description);
    setAmount(String(item.amount));
    setType(item.type);
    setCategory(item.category);
}


    return (
        <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">

                {/* Page heading */}
                <div className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Manage your money
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                        Add Transaction
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Record your income and expenses in one place.
                    </p>
                </div>

                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">

                    {/* Transaction form */}
                    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8 lg:col-span-3">
                        <h2 className="mb-6 text-xl font-bold text-gray-900">
                            Transaction details
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">
                                    Transaction type
                                </label>

                                <div className="grid grid-cols-2 gap-3">
                                    {["Expense", "Income"].map((item) => (
                                        <button
                                            key={item}
                                            type="button"
                                            onClick={() => setType(item)}
                                            className={`rounded-xl border px-4 py-3 font-semibold transition ${type === item
                                                    ? item === "Income"
                                                        ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                                                        : "border-rose-500 bg-rose-50 text-rose-700"
                                                    : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                                                }`}
                                        >
                                            {item === "Income" ? "↗ " : "↘ "}
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <Input
                                label="Description"
                                name="description"
                                placeholder="e.g. Lunch, books, stipend"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />

                            <Input
                                type="number"
                                label="Amount (₹)"
                                name="amount"
                                placeholder="0.00"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                                className="text-lg font-semibold"
                            />

                            <div>
                                <label
                                    htmlFor="category"
                                    className="mb-2 block text-sm font-semibold text-gray-700"
                                >
                                    Category
                                </label>

                                <select
                                    id="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3"
                                >
                                    <option value="Food">Food</option>
                                    <option value="Travel">Travel</option>
                                    <option value="Education">Education</option>
                                    <option value="Shopping">Shopping</option>
                                    <option value="Salary / Stipend">Salary / Stipend</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                            >
                                + Save Transaction
                            </Button>
                        </form>
                    </section>

                    {/* Recent transactions */}
                    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 lg:col-span-2">
                        <div className="mb-5">
                            <h2 className="text-xl font-bold text-gray-900">
                                Recent Transactions
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Your latest entries
                            </p>
                        </div>

                        {transactions.length === 0 ? (
                            <div className="rounded-xl border border-dashed border-gray-200 px-4 py-8 text-center">
                                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-600">
                                    ₹
                                </div>

                                <p className="font-medium text-gray-800">
                                    Nothing here yet
                                </p>

                                <p className="mt-1 text-sm text-gray-500">
                                    Your saved transactions will appear here.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {transactions.slice().reverse().map((item) => (

                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between gap-3 rounded-xl border border-gray-100 p-4"
                                    >
                                        <div className="min-w-0 flex-1">
                                            <p className="break-words font-semibold text-gray-900">
                                                {item.description}
                                            </p>

                                            <p className="mt-1 text-sm text-gray-500">
                                                {item.category} · {item.type}
                                            </p>
                                        </div>

                                        <div className="flex shrink-0 flex-col items-end gap-2">
                                            <p className={`font-bold ${item.type === "Income"
                                                    ? "text-emerald-600"
                                                    : "text-rose-600"
                                                }`}>
                                                {item.type === "Income" ? "+" : "-"}
                                                ₹{Number(item.amount).toLocaleString("en-IN")}
                                            </p>

                                            <button
                                                type="button"
                                                onClick={() => deleteTransaction(item.id)}
                                                className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-100"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        )}
                    </section>

                </div>
            </div>
        </main>
    );
}

export default AddTransaction;
