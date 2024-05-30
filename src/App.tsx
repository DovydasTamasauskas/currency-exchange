import { useEffect, useState } from "react";
import { fetchData } from "./fetch";
import "./App.css";

const App = () => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetchData((data: any) => {
      if (data) setRates(data);
    }, `baseCurrency=EUR&quoteCurrency=GBP&baseAmount=100`);
  }, []);

  console.log(rates);

  return <>Working...</>;
};

export default App;
