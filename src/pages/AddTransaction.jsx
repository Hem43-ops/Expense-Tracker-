
import { useState } from "react";

function AddTransaction() {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("Expense");
    const [category, setCategory] = useState("Food");
    const [transactions, setTransactions] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        const newTransaction = {
            id: Date.now(),
            description: description,
            amount: Number(amount),
            type: type,
            category: category
        };

        setTransactions([...transactions, newTransaction]);

        setDescription("");
        setAmount("");
        setType("Expense");
        setCategory("Food");
    }

    return (
        <div style={{ padding: "30px", maxWidth: "600px" }}>
            <h1>Add Transaction</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Type: </label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="Expense">Expense</option>
                        <option value="Income">Income</option>
                    </select>
                </div>

                <br />

                <div>
                    <label>Description: </label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Amount: </label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>

                <br />

                <div>
                    <label>Category: </label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Food">Food</option>
                        <option value="Travel">Travel</option>
                        <option value="Education">Education</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Salary / Stipend">Salary / Stipend</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <br />

                <button type="submit">Add Transaction</button>
            </form>

            <hr />

            <h2>Recent Transactions</h2>

            {transactions.length === 0 ? (
                <p>No transactions yet.</p>
            ) : (
                transactions.map((item) => (
                    <div key={item.id}>
                        <p>
                            {item.description} — {item.category}
                        </p>

                        <p>
                            {item.type === "Income" ? "+" : "-"}
                            ₹{item.amount.toLocaleString("en-IN")}
                        </p>
                    </div>
                ))
            )}
        </div>
    );
}

export default AddTransaction;
