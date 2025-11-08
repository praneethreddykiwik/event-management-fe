import { useState } from "react";

const GetStarted = () => {
  const [count, setCount] = useState(0);

  const onClickGetStarted = () => {
    console.log("Abdul");
  };

  const onClickIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div onClick={onClickGetStarted} className="GetStarted">
      <h1>GetStarted</h1>

      <p>Count {count}</p>
      <button onClick={onClickIncrement}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default GetStarted;

// add counter
// count shall start from 0 to 10
// count can't go below 0
// count cant go above 10
// solution: use if condition

// assignment 2
// useNavigate hook
// refer how to use this hook
// try to implement in the app
// navigate through different pages
