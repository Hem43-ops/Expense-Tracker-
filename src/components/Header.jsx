
function Header() {
    return (
        <header className="header">
            <h2 className="logo">Expense Tracker</h2>

            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/transactions">Transactions</a>
                <a href="/reports">Reports</a>
            </nav>
        </header>
    );
}

export default Header;
