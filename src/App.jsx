import { useState } from 'react';

export default function App() {
  const PositiveNegative = () => {
    const [count, setCount] = useState(0);
    return (
      <>
        <h2>Positive and Negative</h2>
        <p>Count : {count}</p>
        <p>The count is {count >= 0 ? 'Positive' : 'Negative'}.</p>
        <button onClick={() => setCount(count + 1)}>Increment </button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </>
    );
  };

  const UserLogin = () => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [showMsg, setShowMsg] = useState(false);
    const [showForm, setShowForm] = useState(true);

    const clickHandler = () => {
      if (username && pass) {
        setShowMsg(true);
        setShowForm(false);
      }
    };

    return (
      <>
        <h2>User Login</h2>
        {showForm && (
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              onChange={(event) => setUsername(event.target.value)}
            />
            <br />
            <br />
            <label htmlFor="pass">Password:</label>
            <input
              type="password"
              id="pass"
              onChange={(event) => setPass(event.target.value)}
            />
            <br />
            <br />
            <button onClick={clickHandler}>Login</button>
          </div>
        )}
        {showMsg && <h2>Welcome, {username}!</h2>}
      </>
    );
  };

  const TemperatureConverter = () => {
    const [cel, setCel] = useState(0);
    const [fahren, setFahren] = useState(32);

    const celChangeHandler = (event) => {
      console.log(event.target.value);
      setCel(event.target.value);

      setFahren((event.target.value * 9) / 5 + 32); //this updates
    };

    const farChangeHandler = (event) => {
      setFahren(event.target.value);
      setCel(((even.target.value - 32) * 5) / 9);
    };

    return (
      <>
        <h2>Temperature Converter</h2>
        <label htmlFor="">Celsius: </label>
        <input type="number" value={cel} onChange={celChangeHandler} />
        <br />
        <br />
        <label htmlFor="">Fahrenheit: </label>
        <input type="number" value={fahren} onChange={farChangeHandler} />
      </>
    );
  };

  const ShoppingCart = () => {
    const [items, setItems] = useState([]);

    const productAHandler = () => {
      setItems([...items, { name: 'Product A', price: 10 }]);
    };
    const productBHandler = () => {
      setItems([...items, { name: 'Product B', price: 20 }]);
    };

    return (
      <>
        <h2>Shopping Cart</h2>
        <ul>
          {items.map((item) => (
            <li>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <p>Total Price: ${items.reduce((acc, curr) => acc + curr.price, 0)}</p>

        <button onClick={productAHandler}>Add Product A</button>
        <button onClick={productBHandler}>Add Product B</button>
      </>
    );
  };

  const QuizApp = () => {
    const [index, setIndex] = useState(0);
    const [value, setValue] = useState('');
    const questions = [
      'What is the national bird of India?',
      'How many colors are there in Indian flag?',
      'What is the color of sky?',
    ];

    const clickHandler = (event) => {
      setIndex(index + 1);
      setValue('');
    };

    return (
      <>
        <h2>Quiz App</h2>
        {index > 2 ? (
          <p>You answered all questions!</p>
        ) : (
          <div>
            <p>{questions[index]}</p>
            <input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              type="text"
            />
            <button onClick={clickHandler}>Next</button>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <PositiveNegative />
      <br />
      <UserLogin />
      <br />
      <TemperatureConverter />
      <br />
      <ShoppingCart />
      <br />
      <QuizApp />
    </>
  );
}
