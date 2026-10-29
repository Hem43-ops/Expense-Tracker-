
import { Link } from "react-router-dom";

function Home() {
    const features = [
        {
            icon: "↗",
            title: "Track Income",
            description:
                "Keep track of your salary, stipend, and other sources of income.",
            color: "bg-emerald-50 text-emerald-600"
        },
        {
            icon: "↘",
            title: "Manage Expenses",
            description:
                "Record daily spending and understand where your money goes.",
            color: "bg-rose-50 text-rose-600"
        },
        {
            icon: "◈",
            title: "View Your Dashboard",
            description:
                "Get a clear overview of your financial activity in one place.",
            color: "bg-blue-50 text-blue-600"
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero section */}
            <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                    <div>
                        <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                            Your money, organized
                        </span>

                        <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Take control of your{" "}
                            <span className="text-blue-600">
                                finances.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
                            Track your income, manage everyday expenses,
                            and understand your spending with a simple
                            personal finance tracker.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                to="/dashboard"
                                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                            >
                                View Dashboard →
                            </Link>

                            <Link
                                to="/add-transaction"
                                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
                            >
                                + Add Transaction
                            </Link>
                        </div>

                        <p className="mt-5 text-sm text-gray-400">
                            Simple tracking for everyday financial decisions.
                        </p>
                    </div>

                    {/* Decorative finance card */}
                    <div className="rounded-3xl bg-gray-900 p-6 text-white shadow-2xl sm:p-9">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">
                                    Your money overview
                                </p>
                                <h2 className="mt-2 text-2xl font-bold">
                                    Spend with clarity
                                </h2>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-2xl">
                                ₹
                            </div>
                        </div>

                        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                            <p className="text-sm text-gray-400">
                                Example monthly balance
                            </p>
                            <p className="mt-2 text-3xl font-bold sm:text-4xl">
                                ₹24,500
                            </p>
                            <p className="mt-2 text-sm text-gray-400">
                                Sample figures for illustration
                            </p>
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-4">
                            <div className="rounded-2xl bg-emerald-500/10 p-4">
                                <p className="text-sm text-emerald-300">
                                    Income
                                </p>
                                <p className="mt-2 text-xl font-bold">
                                    ₹35,000
                                </p>
                            </div>

                            <div className="rounded-2xl bg-rose-500/10 p-4">
                                <p className="text-sm text-rose-300">
                                    Expenses
                                </p>
                                <p className="mt-2 text-xl font-bold">
                                    ₹10,500
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="border-t border-gray-100 bg-white px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-10 max-w-2xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                            FEATURES
                        </p>

                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                            Everything at a glance
                        </h2>

                        <p className="mt-3 text-gray-500">
                            A simple way to build better money-management habits.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-gray-100 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${feature.color}`}>
                                    {feature.icon}
                                </div>

                                <h3 className="mt-5 text-lg font-bold text-gray-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-2 leading-7 text-gray-500">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
