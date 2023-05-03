import React, { useState, useEffect } from "react";

function ExpenseForm() {
  const [expenses, setExpenses] = useState([]);


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);


  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      setIsUsernameValid(username === "admin"); 
      setIsPasswordValid(password === "password"); 
    }
  };

  // Load expenses from local storage on component mount
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseName = event.target.elements.name.value;
    const expenseAmount = event.target.elements.amount.value;
    const newExpense = { name: expenseName, amount: expenseAmount };
    setExpenses([...expenses, newExpense]);
    event.target.reset();
  };

  // Save expenses to local storage whenever expenses state updates
  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  return(
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
      <h2>Expenses</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Amount:
          <input type="number" name="amount" required />
        </label>
        <button type="submit">Add Expense</button>
      </form>
      {expenses.length > 0 && (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.name}: ${expense.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
    
    )}
</div>
    );
}

export default ExpenseForm;
