import { useEffect, useState } from "react";
import { fetchData } from "./fetch";
import CurrencySelect from "./components/Select";
import Input from "./components/Input";
import Button from "./components/Button";

const App = () => {
  const [supportedCurrencies, setSupportedCurrencies] = useState<string[]>([]);
  const [amount, setAmount] = useState<number>();
  const [baseCurrency, setBaseCurrency] = useState<string>();
  const [quoteCurrency, setQuoteCurrency] = useState<string>();
  const [result, setResult] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData(setSupportedCurrencies, `get/supported-currencies`, setIsLoading);
  }, []);

  const onSubmit = () => {
    if (baseCurrency && quoteCurrency && amount && Number(amount))
      fetchData(
        setResult,
        `exchange?baseCurrency=${baseCurrency}&quoteCurrency=${quoteCurrency}&baseAmount=${amount}`,
        setIsLoading
      );
  };

  return (
    <div className="container mt-5 overflow-hidden">
      <h1 className="text-center mb-4">Currency Exchange</h1>
      <div className="row gy-3">
        <div className="col-6 d-flex justify-content-center">
          <CurrencySelect
            currencies={supportedCurrencies.filter(
              (curency) => curency !== quoteCurrency
            )}
            onChange={setBaseCurrency}
            label="BaseCurrency"
            isDisabled={isLoading}
          />
        </div>
        <div className="col-6 d-flex justify-content-center">
          <CurrencySelect
            currencies={supportedCurrencies.filter(
              (curency) => curency !== baseCurrency
            )}
            onChange={setQuoteCurrency}
            label="QuoteCurrency"
            isDisabled={isLoading}
          />
        </div>
        <div className="col-6 d-flex justify-content-center">
          <Input onChange={setAmount} isDisabled={isLoading} />
        </div>
        <div className="col-6 d-flex justify-content-center">
          <Button onSubmit={onSubmit} isDisabled={isLoading} />
        </div>
      </div>
      <h3 className="text-center mt-5">Result {result}</h3>
    </div>
  );
};

export default App;
