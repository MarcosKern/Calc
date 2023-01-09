import { useEffect } from "react";
import CalculatorNumpad from "./components/CalculatorNumpad";
import Result from "./components/Result";
import './css/app.css'

function App() {

  useEffect(() => {
    document.addEventListener('keypress', event => {
      console.log(event)
    })
  })

  return (
    <div className="app">
      <section className="calculator">
        <Result />
        <CalculatorNumpad />
      </section>
    </div>
  );
}

export default App;
