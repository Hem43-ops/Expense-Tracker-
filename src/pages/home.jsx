
import { Link, NavLink } from "react-router-dom";

function Home() {
  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Budgets", path: "/budgets" },
    { name: "Goals", path: "/goals" },
    { name: "Bills", path: "/bills" },
    { name: "Reports", path: "/reports" },
  ];

  const features = [
    {
      icon: "↗",
      title: "Track Income",
      description:
        "Keep track of your salary, stipend, and other sources of income.",
      color: "bg-[#C6FF4D] text-[#0F0B1E]",
    },
    {
      icon: "↘",
      title: "Manage Expenses",
      description:
        "Record daily spending and understand where your money goes.",
      color: "bg-[#FF7A59] text-[#0F0B1E]",
    },
    {
      icon: "◈",
      title: "Financial Insights",
      description:
        "Understand your financial activity and make smarter decisions.",
      color: "bg-[#5CE1FF] text-[#0F0B1E]",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0F0B1E] px-4 pb-16 text-[#F4F1FF] sm:px-6 lg:px-8">

      <div className="mx-auto max-w-[1280px]">

        

        {/* Hero Section */}
        <section className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">

          <div>
            <span className="inline-flex rounded-full border border-[#C6FF4D]/30 bg-[#C6FF4D]/10 px-4 py-2 text-sm font-semibold text-[#C6FF4D]">
              YOUR MONEY, YOUR CONTROL
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Take control of your money.
              <span className="block text-[#C6FF4D]">
                Build a better future.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#C9C2EE] sm:text-lg">
              Managing money doesn't have to be complicated.
              Track your income, organize your expenses, and
              understand your financial habits with one simple platform.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/dashboard"
                className="rounded-xl bg-[#A2AD68] px-7 py-4 font-bold text-[#0F0B1E] transition hover:-translate-y-1 hover:brightness-110"
              >
                Explore Dashboard →
              </Link>

              <Link
                to="/add-transaction"
                className="rounded-xl border border-[#5B527D] bg-[#241C4A] px-7 py-4 font-bold text-white transition hover:bg-[#352B65]"
              >
                + Add Transaction
              </Link>
            </div>

            <p className="mt-6 text-sm text-[#938BB5]">
              Simple tracking. Smarter decisions. Better financial habits.
            </p>
          </div>

          {/* Financial Overview Card */}
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-[#6A45FF]/20 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-[#C6FF4D]/10 blur-3xl" />

            <div className="relative rounded-[28px] border border-white/10 bg-[#1B1438] p-6 shadow-2xl sm:p-8">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#C9C2EE]">
                    Your financial overview
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">
                    Spend with clarity
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C6FF4D] text-2xl font-bold text-[#0F0B1E]">
                  ₹
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#6A45FF] to-[#4930B8] p-6">
                <p className="text-sm text-purple-100">
                  Example monthly balance
                </p>
                <p className="mt-3 text-4xl font-extrabold">
                  ₹24,500
                </p>
                <p className="mt-2 text-xs text-purple-100">
                  Illustrative figures, not your actual balance
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-[#C6FF4D] p-5 text-[#0F0B1E]">
                  <p className="text-sm font-semibold">Income</p>
                  <p className="mt-3 text-2xl font-extrabold">
                    ₹35,000
                  </p>
                </div>

                <div className="rounded-2xl bg-[#FF7A59] p-5 text-[#0F0B1E]">
                  <p className="text-sm font-semibold">Expenses</p>
                  <p className="mt-3 text-2xl font-extrabold">
                    ₹10,500
                  </p>
                </div>

              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-[#C9C2EE]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#C6FF4D]" />
                Income
                <span className="ml-4 h-2.5 w-2.5 rounded-full bg-[#FF7A59]" />
                Expenses
              </div>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t border-[#30264F] py-20">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold tracking-[3px] text-[#C6FF4D]">
              WHAT YOU CAN DO
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Everything you need to stay on track
            </h2>

            <p className="mt-4 leading-7 text-[#C9C2EE]">
              Manage your finances with simple tools designed
              to make everyday money management easier.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-[26px] border border-white/5 bg-[#1B1438] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#C6FF4D]/30 hover:shadow-xl hover:shadow-black/20"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl font-bold ${feature.color}`}
                >
                  {feature.icon}
                </div>

                <h3 className="mt-7 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-[#C9C2EE]">
                  {feature.description}
                </p>

                <div className="mt-7 h-1 w-12 rounded-full bg-[#C6FF4D] transition-all duration-300 group-hover:w-24" />
              </div>
            ))}

          </div>
        </section>

        {/* Bottom CTA */}
        <section className="rounded-[28px] bg-gradient-to-r from-[#4930B8] to-[#6A45FF] px-7 py-14 text-center sm:px-12">

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to manage your money better?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-purple-100">
            Start tracking your transactions and take the first
            step towards better financial management.
          </p>

          <Link
            to="/add-transaction"
            className="mt-8 inline-flex rounded-xl bg-[#E09943] px-8 py-4 font-bold text-[#101526] shadow-lg shadow-[#A3B545]/10 transition duration-300 hover:-translate-y-1 hover:bg-[#A2AD68]"
        //     className="rounded-xl bg-[#A8E63D] px-7 py-4 font-extrabold text-[#101526] shadow-lg shadow-[#A8E63D]/10 transition duration-300 hover:-translate-y-1 hover:bg-[#B9F05B]"
          >
            Get Started →
          </Link>

        </section>

      </div>
    </main>
  );
}

export default Home;
