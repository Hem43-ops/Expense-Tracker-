
import React from "react";
import { Link } from "react-router-dom";

function About() {
  const features = [
    {
      icon: "💸",
      title: "Track Expenses",
      description:
        "Record your daily spending and keep every transaction organized in one place.",
      color: "bg-green-100",
    },
    {
      icon: "📊",
      title: "Understand Spending",
      description:
        "Get a clearer picture of where your money goes and understand your habits.",
      color: "bg-blue-100",
    },
    {
      icon: "🎯",
      title: "Plan Better",
      description:
        "Make smarter financial decisions and develop healthy budgeting habits.",
      color: "bg-purple-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-green-950 px-6 py-24 text-white">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl text-center">
          <span className="inline-block rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300">
            ABOUT OUR EXPENSE TRACKER
          </span>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Take Control of Your Money.
            <span className="block text-green-400">
              Build a Better Future.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Managing money shouldn't be complicated. Track your expenses,
            monitor your income, and understand your financial habits
            with one simple platform.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/add-transaction"
              className="rounded-xl bg-green-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-1 hover:bg-green-600"
            >
              Start Tracking →
            </Link>

            <Link
              to="/dashboard"
              className="rounded-xl border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-widest text-green-600">
              Why Expense Tracker?
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Your finances deserve
              <span className="text-green-600"> better organization.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Expense Tracker is designed to make personal finance
              management easier. From recording everyday purchases to
              monitoring your overall balance, everything stays organized
              in one place.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Whether it's food, travel, shopping, or education,
              understand your spending patterns and take a step
              towards better financial decisions.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/60">
            <div className="rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700 p-7 text-white">
              <p className="text-sm font-medium text-green-100">
                YOUR FINANCIAL JOURNEY
              </p>
              <h3 className="mt-3 text-3xl font-bold">
                Spend wisely.
                <br />
                Save consistently.
              </h3>
              <p className="mt-4 text-sm leading-6 text-green-50">
                Small financial habits today can create a better tomorrow.
              </p>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-4xl">💰</span>
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
                  Make every rupee count
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-green-600">
              What We Offer
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything you need to stay on track
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Simple tools to help you understand, organize, and manage
              your money.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:bg-white hover:shadow-xl"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${feature.color}`}>
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {feature.description}
                </p>

                <div className="mt-6 h-1 w-12 rounded-full bg-green-500 transition-all group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gray-900 px-8 py-14 text-center text-white shadow-xl sm:px-14">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to take charge of your finances?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-300">
            Start recording your transactions today and take the first
            step towards smarter money management.
          </p>

          <Link
            to="/add-transaction"
            className="mt-8 inline-block rounded-xl bg-green-500 px-8 py-3.5 font-semibold text-white transition hover:bg-green-600"
          >
            Add Your First Transaction →
          </Link>
        </div>
      </section>

    </div>
  );
}

export default About;
