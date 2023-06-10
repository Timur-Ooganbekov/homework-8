import React from "react";

export default function ParentComponent() {
  return (
    <div>
      <ChildComponent>
        <h2>Заголовок</h2>
        <p>Это дочерний текст</p>
      </ChildComponent>
    </div>
  );
}

function ChildComponent({ children }) {
  return (
    <div>
      <h1>Родительский компонент</h1>
      {children}
    </div>
  );
}
