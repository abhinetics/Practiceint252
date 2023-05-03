import React, { useState, useEffect } from "react";

function WhatsApp() {
  const [expenses, setExpenses] = useState([]);
  const [cost, setCost] = useState("");
  const [expenseLabel, setExpenseLabel] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      setIsUsernameValid(username === "admin");
      setIsPasswordValid(password === "password");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExpense = {
      cost: cost,
      expenseLabel: expenseLabel
    };
    setExpenses([...expenses, newExpense]);
    setCost("");
    setExpenseLabel("");
  };

  return (
    <div>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          {!isUsernameValid && <p>Username is incorrect</p>}
          <br />
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          {!isPasswordValid && <p>Password is incorrect</p>}
          <br />
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <h2>Expense Tracker</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="cost">Cost: </label>
            <input
              id="cost"
              type="number"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
              required
            />
            <br />
            <label htmlFor="expenseLabel">Expense Label: </label>
            <input
              id="expenseLabel"
              type="text"
              value={expenseLabel}
              onChange={(event) => setExpenseLabel(event.target.value)}
              required
            />
            <br />
            <button type="submit">Add Expense</button>
          </form>
          {expenses.length > 0 && (
            <div>
              <h3>Expenses:</h3>
              <ul>
                {expenses.map((expense, index) => (
                  <li key={index}>
                    {expense.expenseLabel}: ${expense.cost}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WhatsApp;