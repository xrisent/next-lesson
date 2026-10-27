"use client";

import { useState } from "react";

export default function ProfileContent() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      {counter}
      <h1>Страница профиля</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </>
  );
}
