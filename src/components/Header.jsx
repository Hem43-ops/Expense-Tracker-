
import { NavLink, Link } from "react-router-dom";

function Header() {
    const links = [
        { name: "Home", path: "/" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "Add Transaction", path: "/add-transaction" },
        { name: "About", path: "/about" }
    ];

    const linkStyle = ({ isActive }) =>
        `rounded-lg px-3 py-2 text-sm font-medium transition ${
            isActive
                ? "bg-blue-50 text-blue-700"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
            <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <Link to="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                        ₹
                    </div>

                    <div>
                        <h1 className="text-lg font-bold tracking-tight text-gray-900">
                            ExpenseTracker
                        </h1>
                        <p className="text-xs text-gray-500">
                            Manage your money better
                        </p>
                    </div>
                </Link>

                <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            end={link.path === "/"}
                            className={linkStyle}
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <Link
                        to="/login"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                        Login
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
