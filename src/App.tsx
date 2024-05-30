import { useEffect, useState } from "react";
import { fetchData } from "./fetch";
import CurrencySelect from "./components/CurrencySelect";
import "./App.css";

const App = () => {
  const [rates, setRates] = useState({});
  const [supportedCurrencies, setSupportedCurrencies] = useState<string[]>([]);
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState("");
  const [quoteCurrency, setQuoteCurrency] = useState("");

  useEffect(() => {
    fetchData((data: any) => {
      if (data) setSupportedCurrencies(data.currencies);
    }, `get/supported-currencies`);
    fetchData((data: any) => {
      if (data) setRates(data);
    }, `exchange?baseCurrency=${baseCurrency}&quoteCurrency=${quoteCurrency}&baseAmount=${amount}`);
  }, [amount, baseCurrency, quoteCurrency]);

  console.log(rates, supportedCurrencies, baseCurrency, quoteCurrency);

  return (
    <>
      <CurrencySelect
        currencies={supportedCurrencies}
        onChange={setBaseCurrency}
      />
      <CurrencySelect
        currencies={supportedCurrencies}
        onChange={setQuoteCurrency}
      />
      <>Working...</>
    </>
  );
};

export default App;
