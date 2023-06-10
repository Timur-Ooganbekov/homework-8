import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Счетчик: {count}</p>
      <Button onClick={handleClick} label="Click!" />
    </div>
  );
}

function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}

