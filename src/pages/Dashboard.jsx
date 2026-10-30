import { useTransactions } from "../context/TransactionContext";
import { NavLink,Link } from "react-router-dom";

/* ---------- Sample data (matches the design). Edit freely. ---------- */
const USER_NAME = "Arjun";
const SUBTITLE = "You are 12% under budget this month. Keep the streak going.";

const SAMPLE = {
  balance: 184250,
  income: 92000,
  expenses: 41380,
  balanceNote: "+8.4% vs last month",
  incomeNote: "3 sources this month",
  expenseNote: "64 transactions",
  safeToSpend: 1420,
  safeNote: "Based on bills and goals due",
};

const NAV = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Budgets", path: "/budgets" },
  { name: "Goals", path: "/goals" },
  { name: "Bills", path: "/bills" },
  { name: "Reports", path: "/reports" },
];

const CASH_FLOW = [
  { month: "May", inc: 120, exp: 90 },
  { month: "Jun", inc: 130, exp: 110 },
  { month: "Jul", inc: 110, exp: 100 },
  { month: "Aug", inc: 140, exp: 80 },
  { month: "Sep", inc: 125, exp: 115 },
  { month: "Oct", inc: 150, exp: 85 },
];

const BUDGETS = [
  { name: "Food and dining", spent: 9800, limit: 12000, pct: 82, color: "#FFC24D" },
  { name: "Transport", spent: 3200, limit: 6000, pct: 53, color: "#5CE1FF" },
  { name: "Shopping", spent: 8900, limit: 8000, pct: 100, color: "#FF7A59" },
  { name: "Entertainment", spent: 2100, limit: 5000, pct: 42, color: "#C6FF4D" },
];

const INSIGHTS = [
  { bold: "Shopping is over budget", rest: " by ₹900. Pause until the 1st?" },
  { bold: "Weekend spend is 2.3x", rest: " your weekday average." },
  { bold: "3 unused subscriptions", rest: " could save ₹1,100 a month." },
];

const GOALS = [
  { name: "Goa trip", saved: 34000, target: 50000, pct: 68, color: "#C6FF4D" },
  { name: "Emergency fund", saved: 70000, target: 200000, pct: 35, color: "#5CE1FF" },
];

const BILLS = [
  { name: "Rent", due: "Due in 2 days", amount: 18000 },
  { name: "Internet", due: "Due in 6 days", amount: 799 },
  { name: "Netflix", due: "Due in 9 days", amount: 649 },
];

const SAMPLE_TX = [
  { id: "s1", description: "Swiggy", category: "Food", when: "Today", type: "Expense", amount: 480, dot: "#FF7A59" },
  { id: "s2", description: "Salary", category: "Income", when: "Yesterday", type: "Income", amount: 85000, dot: "#C6FF4D" },
  { id: "s3", description: "Metro card", category: "Transport", when: "28 Oct", type: "Expense", amount: 500, dot: "#5CE1FF" },
];

const inr = (n) => `₹${Number(n).toLocaleString("en-IN")}`;
const NAV_BASE = "rounded-full px-[18px] py-3 text-sm no-underline";

function Dashboard() {
  const { transactions, deleteTransaction } = useTransactions();
  const live = transactions.length > 0;

  /* Totals: live from your context when transactions exist, else sample */
  const totalIncome = live
    ? transactions.filter((t) => t.type === "Income").reduce((s, t) => s + Number(t.amount), 0)
    : SAMPLE.income;
  const totalExpenses = live
    ? transactions.filter((t) => t.type === "Expense").reduce((s, t) => s + Number(t.amount), 0)
    : SAMPLE.expenses;
  const balance = live ? totalIncome - totalExpenses : SAMPLE.balance;

  const recent = live
    ? transactions
        .slice()
        .reverse()
        .slice(0, 5)
        .map((t) => ({
          ...t,
          when: t.date && !isNaN(new Date(t.date))
            ? new Date(t.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })
            : t.type,
          dot: t.type === "Income" ? "#C6FF4D" : "#FF7A59",
        }))
    : SAMPLE_TX;

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <main className="min-h-screen bg-[#0F0B1E] px-6 pb-14 pt-7 text-[#F4F1FF] [font-family:'Plus_Jakarta_Sans',system-ui,sans-serif]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');`}</style>

      <div className="mx-auto flex max-w-[1280px] flex-col gap-5">
        {/* Header */}
        {/*  */}
        {/* Secondary Navigation */}
        
              <nav className="flex flex-wrap gap-2">
  {NAV.map((item) => (
    <NavLink
      key={item.path}
      to={item.path}
      className={({ isActive }) =>
        `rounded-full px-[18px] py-3 text-sm no-underline ${
          isActive
            ? "bg-[#F4F1FF] font-bold text-[#0F0B1E]"
            : "bg-[#241C4A] font-semibold text-[#F4F1FF] hover:bg-[#2E2560]"
        }`
      }
    >
      {item.name}
    </NavLink>
  ))}
</nav>
            
         

        {/* Greeting */}
        <div>
          <h1 className="mb-1 mt-2 text-[40px] font-extrabold leading-tight">
            {greeting}, {USER_NAME}
          </h1>
          <p className="m-0 text-base text-[#C9C2EE]">{SUBTITLE}</p>
        </div>

        {/* Summary cards */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col gap-1.5 rounded-[28px] bg-[#6A45FF] p-6">
            <span className="text-sm font-semibold">Total balance</span>
            <span className="break-words text-[38px] font-extrabold leading-tight">{inr(balance)}</span>
            <span className="text-[13px]">{SAMPLE.balanceNote}</span>
          </div>
          <div className="flex flex-col gap-1.5 rounded-[28px] bg-[#C6FF4D] p-6 text-[#0F0B1E]">
            <span className="text-sm font-semibold">Income</span>
            <span className="break-words text-[38px] font-extrabold leading-tight">{inr(totalIncome)}</span>
            <span className="text-[13px]">{SAMPLE.incomeNote}</span>
          </div>
          <div className="flex flex-col gap-1.5 rounded-[28px] bg-[#FF7A59] p-6 text-[#0F0B1E]">
            <span className="text-sm font-semibold">Expenses</span>
            <span className="break-words text-[38px] font-extrabold leading-tight">{inr(totalExpenses)}</span>
            <span className="text-[13px]">
              {live ? `${transactions.filter((t) => t.type === "Expense").length} transactions` : SAMPLE.expenseNote}
            </span>
          </div>
          <div className="flex flex-col gap-1.5 rounded-[28px] bg-[#5CE1FF] p-6 text-[#0F0B1E]">
            <span className="text-sm font-bold">NEW · Safe to spend today</span>
            <span className="break-words text-[38px] font-extrabold leading-tight">{inr(SAMPLE.safeToSpend)}</span>
            <span className="text-[13px]">{SAMPLE.safeNote}</span>
          </div>
        </section>

        {/* Cash flow + Category budgets */}
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-[28px] bg-[#1B1438] p-6">
            <h2 className="mb-1 mt-0 text-xl font-bold">Cash flow</h2>
            <p className="mb-5 mt-0 text-sm text-[#C9C2EE]">Income vs expenses, last 6 months</p>
            <div className="flex h-[200px] items-end gap-3.5">
              {CASH_FLOW.map((m) => (
                <div key={m.month} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                  <div className="flex h-[170px] items-end gap-1">
                    <div className="w-3.5 rounded-md bg-[#C6FF4D]" style={{ height: m.inc }} title={`${m.month} income`} />
                    <div className="w-3.5 rounded-md bg-[#FF7A59]" style={{ height: m.exp }} title={`${m.month} expenses`} />
                  </div>
                  <span className="text-xs text-[#C9C2EE]">{m.month}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3.5 rounded-[28px] bg-[#1B1438] p-6">
            <div className="flex items-center justify-between">
              <h2 className="m-0 text-xl font-bold">Category budgets</h2>
              <span className="rounded-full bg-[#C6FF4D] px-2.5 py-1 text-[11px] font-extrabold text-[#0F0B1E]">NEW</span>
            </div>
            {BUDGETS.map((b) => (
              <div key={b.name}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span>{b.name}</span>
                  <span>{inr(b.spent)} / {inr(b.limit)}</span>
                </div>
                <div
                  className="h-3 rounded-full bg-[#2E2560]"
                  role="progressbar"
                  aria-label={`${b.name} budget used`}
                  aria-valuenow={b.pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="h-3 rounded-full" style={{ width: `${b.pct}%`, background: b.color }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Insights + Goals + Bills */}
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="flex flex-col gap-3 rounded-[28px] bg-[#FFC24D] p-6 text-[#0F0B1E]">
            <h2 className="m-0 text-xl font-bold">Smart insights</h2>
            {INSIGHTS.map((i) => (
              <div key={i.bold} className="rounded-[18px] bg-[#FFE3A8] p-3.5 text-sm">
                <b>{i.bold}</b>{i.rest}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 rounded-[28px] bg-[#1B1438] p-6">
            <h2 className="m-0 text-xl font-bold">Savings goals</h2>
            {GOALS.map((g) => (
              <div key={g.name} className="flex items-center gap-4">
                <div
                  className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full"
                  style={{ background: `conic-gradient(${g.color} 0 ${g.pct}%, #2E2560 ${g.pct}% 100%)` }}
                >
                  <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#1B1438] text-sm font-extrabold">
                    {g.pct}%
                  </div>
                </div>
                <div>
                  <div className="font-bold">{g.name}</div>
                  <div className="text-[13px] text-[#C9C2EE]">{inr(g.saved)} of {inr(g.target)}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 rounded-[28px] bg-[#1B1438] p-6">
            <h2 className="m-0 text-xl font-bold">Upcoming bills</h2>
            {BILLS.map((b) => (
              <div key={b.name} className="flex items-center justify-between rounded-2xl bg-[#2E2560] p-3.5">
                <div>
                  <div className="font-bold">{b.name}</div>
                  <div className="text-xs text-[#C9C2EE]">{b.due}</div>
                </div>
                <b>{inr(b.amount)}</b>
              </div>
            ))}
          </div>
        </section>

        {/* Recent transactions */}
        <section className="rounded-[28px] bg-[#1B1438] p-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="m-0 text-xl font-bold">Recent transactions</h2>
            <a href="/transactions" className="text-sm font-bold text-[#5CE1FF] hover:underline">
              View all
            </a>
          </div>

          <div className="flex flex-col">
            {recent.map((t, idx) => {
              const income = t.type === "Income";
              return (
                <div
                  key={t.id}
                  className={`flex items-center justify-between gap-3 py-3 ${idx < recent.length - 1 ? "border-b border-[#2E2560]" : ""}`}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span aria-hidden="true" className="h-3 w-3 shrink-0 rounded-full" style={{ background: t.dot }} />
                    <div className="min-w-0">
                      <div className="break-words font-bold">{t.description}</div>
                      <div className="text-xs text-[#C9C2EE]">{t.category} · {t.when}</div>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    <b className={income ? "text-[#C6FF4D]" : "text-[#FF9E85]"}>
                      {income ? "+" : "−"}{inr(t.amount)}
                    </b>
                    {live && (
                      <button
                        type="button"
                        onClick={() => deleteTransaction(t.id)}
                        aria-label={`Delete ${t.description}`}
                        className="min-h-11 rounded-full bg-white/10 px-4 text-xs font-bold text-[#FFC9BA] hover:bg-[#FF7A59] hover:text-[#0F0B1E] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC9BA]"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Dashboard;