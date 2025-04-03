import React, { useState } from "react";
import { ExpensiveComponent } from "./ExpensiveComponent.tsx";

export default function Example2() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increase Count</button>
      <ExpensiveComponent />
    </div>
  );
}

// export default function Example2({ children }) {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>Current Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>Increase Count</button>
//       {children}
//     </div>
//   );
// }
