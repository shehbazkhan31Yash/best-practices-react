import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example2 from "./pages/Example2.tsx";
import { ExpensiveComponent } from "./pages/ExpensiveComponent.tsx";
import Example3 from "./pages/Example3.tsx";

function renderChildComponent() {
  return <Example2><ExpensiveComponent/></Example2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          {/* <Route path="example2" element={renderChildComponent()} /> */}
          <Route path="example2" element={<Example2/>} />



          <Route path="example3" element={<Example3/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);